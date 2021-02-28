/**
 * 根据配置生成EntityCURD
 * 
 */

import {
    extendType,
    objectType,
    nonNull,
    intArg,
    booleanArg,
    stringArg,
} from "nexus";
import { arg, ArgsRecord, floatArg, list, ObjectDefinitionBlock } from "nexus/dist/core";
import { Context } from "../../context";

export type TypeDef = "id" | "int" | "float" | "string" | "boolean" | string;

export interface Property {
    [pName: string]: TypeDef
}

export interface PropertyDef {
    /**
     * 字段类型
     */
    type: TypeDef
    /**
     * 字段名称
     */
    name: string
    /**
     * 是否可以为空
     */
    isNull?: boolean
    /**
     * 是否是外键
     */
    list?: boolean
    /**
     * 是否作为查询条件
     */
    asCondition?: boolean
    /**
     * 是否是系统字段
     */
    system?: boolean
    /**
     * 系统字段创建默认值
     */
    systemCreator?: () => any
}

export interface PropertyEntity {
    [pName: string]: PropertyDef
}


/**
 * 创建Schema的定义
 * @param t 
 * @param properties 
 */
export function createDefinitionSchemaDef(t: ObjectDefinitionBlock<string>, properties: PropertyDef[]) {
    properties.forEach(def => {
        let creator = []
        if (!def.isNull) {
            creator.push(nonNull)
        }
        if (def.list) {
            creator.push(list)
        }
        t.field(def.name, {
            //@ts-ignore
            type: creator.length > 0 ? creator.reduceRight((p, n) => {
                //@ts-ignore
                p = n(p)
                return p
            }, def.type) : def.type
        })
    })
}



/**
 * 创建通用查询方案
 * @param t 
 * @param properties 
 */
export function createDefinitionSchemaQuery(definitionName: string, properties: PropertyDef[]) {
    return extendType({
        type: 'Query',
        definition(t) {
            t.list.field(definitionName, {
                //@ts-ignore
                type: `${definitionName}`,
                args: properties.filter(t => t.asCondition).reduce((p, n) => {
                    switch (n.type) {
                        case "Int":
                            p[n.name] = intArg()
                            break;
                        case "Float":
                            p[n.name] = floatArg()
                            break;
                        case "String":
                            p[n.name] = stringArg()
                            break;
                        case "Boolean":
                            p[n.name] = booleanArg()
                            break;
                    }

                    return p
                }, {
                    criteriaStr: stringArg()
                } as ArgsRecord),
                resolve(root, args, ctx: Context) {
                    if (args.criteriaStr) {
                        return ctx.db.$queryRaw(`SELECT * from ${definitionName} WHERE ${args.criteriaStr}`)
                    }
                    //@ts-ignore
                    return ctx.db[definitionName.toLocaleLowerCase()].findMany({
                        where: {...args, delete: false}
                    });
                }
            })
        }
    })
}

/**
 * 创建操作
 * @param definitionName 
 * @param properties 
 */
export function createDefinitionSchemaMutation(definitionName: string, properties: PropertyDef[]) {
    return extendType({
        type: 'Mutation',
        definition(t) {
            const args = properties.reduce((p, n) => {
                //系统字段不能作为新增参数
                if (!n.system) {
                    let creator = []
                    if (n.isNull) {
                        creator.push(nonNull)
                    }
                    switch (n.type) {
                        case "Int":
                            creator.push(intArg);
                            break;
                        case "Float":
                            creator.push(floatArg);
                            break;
                        case "String":
                            creator.push(stringArg);
                            break;
                        case "Boolean":
                            creator.push(booleanArg);
                            break;
                    }

                    const args = creator.reduceRight((p, n) => {
                        if (!p) {
                            //@ts-ignore
                            p = n()
                        } else {
                            //@ts-ignore
                            p = n(p)
                        }
                        return p
                    }, null)
                    //@ts-ignore
                    p[n.name] = args
                }
                return p
            }, {} as ArgsRecord)
            t.field(`create${definitionName}`, {
                //@ts-ignore
                type: `${definitionName}`,
                args,
                resolve(root, args, ctx: Context) {
                    //@ts-ignore
                    const dbEngine = ctx.db[definitionName.toLocaleLowerCase()];
                    const param = { ...args, deleted: false }
                    properties.forEach(def => {
                        if (def.system && def.systemCreator) {
                            param[def.name] = def.systemCreator()
                        }
                    })
                    return dbEngine.create({
                        data: param
                    });
                }
            })

            t.field(`update${definitionName}`, {
                //@ts-ignore
                type: `${definitionName}`,
                args: { ...args, id: nonNull(intArg()) },
                resolve(root, args, ctx: Context) {
                    //@ts-ignore
                    const dbEngine = ctx.db[definitionName.toLocaleLowerCase()];
                    // const param = Object.keys(args).reduce((p,n)=>{
                    //       if(args[n])
                    // }, {})
                    const param = properties.reduce((p, n) => {
                        if (!n.system && args[n.name] !== undefined) {
                            //@ts-ignore
                            p[n.name] = args[n.name]
                        }
                        return p
                    }, {})
                    return dbEngine.update({
                        data: param,
                        where: { id: args.id }
                    });
                }
            })

            t.field(`delete${definitionName}`, {
                //@ts-ignore
                type: `${definitionName}`,
                args: { id: nonNull(intArg()) },
                resolve(root, args, ctx: Context) {
                    //@ts-ignore
                    const dbEngine = ctx.db[definitionName.toLocaleLowerCase()];
                    return dbEngine.update({
                        data: { deleted: true },
                        where: { id: args.id }
                    });
                }

            })
        }
    })
}

/**
 * 创建Schema
 * @param definitionMName 
 * @param properties 
 */
export function createDefinitionSchema(definitionName: string, properties: PropertyDef[]) {
    const entity = objectType({
        name: definitionName,
        definition(t) {
            // 定义Schema
            createDefinitionSchemaDef(t, properties)
        }
    })

    return {
        [definitionName]: entity,
        [`${definitionName}Query`]: createDefinitionSchemaQuery(definitionName, properties),
        [`${definitionName}Mutation`]: createDefinitionSchemaMutation(definitionName, properties)
    }
}


/**
 * 创建新的实体
 * @param objectName
 * @param property
 */
export function createSchema(objectName: string, property: Property) {
    const entity = objectType({
        name: objectName,
        definition: (t) => {
            Object.keys(property).forEach((key) => {
                const value = property[key];
                switch (value) {
                    case "int":
                        t.int(key);
                        break;
                    case "float":
                        t.float(key);
                        break;
                    case "string":
                        t.string(key);
                        break;
                    case "boolean":
                        t.boolean(key);
                        break;
                    default:
                        t.field(key, {
                            //@ts-ignore
                            type: property[key]
                        })
                        break;
                }

            });
        },
    });

    const noMutation = ["id", "deleted"];
    const mutations = Object.keys(property).filter(
        (t) => !noMutation.includes(t)
    );
    const margs = mutations.reduce((p, n) => {
        const value = property[n];
        switch (value) {
            case "int":
                p[n] = nonNull(intArg());
                break;
            case "string":
                p[n] = nonNull(stringArg());
                break;

            case "boolean":
                p[n] = nonNull(booleanArg());
                break;
        }
        return p;
    }, {} as ArgsRecord);

    return {
        [objectName]: entity,
        [`${objectName}Query`]: extendType({
            type: "Query",
            definition(t) {
                t.list.field(objectName, {
                    //@ts-ignore
                    type: `${objectName}`,
                    resolve(root, args, ctx: Context) {
                        //@ts-ignore
                        return ctx.db[objectName.toLocaleLowerCase()].findMany();
                    },
                });
            },
        }),
        [`${objectName}Mutation`]: extendType({
            type: "Mutation",
            definition(t) {
                t.field(`create${objectName}`, {
                    //@ts-ignore
                    type: `${objectName}`,
                    args: margs,
                    resolve(root, args, ctx: Context) {
                        //@ts-ignore
                        const dbEngine = ctx.db[objectName.toLocaleLowerCase()];
                        return dbEngine.create({
                            data: { ...args, deleted: false },
                        });
                    },
                });
            },
        }),
    };
}
