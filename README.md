### SDL
基于模型的开发

- 自定生成表

```bash
npx prisma migrate dev --preview-feature
npx prisma generate
```

- 定义DefinitionSchema
```typescipt
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
```

```typescript
const { User, UserQuery, UserMutation } = createDefinitionSchema('User', [{
    name: 'id',
    isNull: false,
    list: false,
    asCondition: false,
    type: 'Int',
    system: true,

}, {
    name: 'name',
    type: 'String'
}, {
    name: 'sex',
    type: 'Int',
}, {
    name: 'mobile',
    type: 'String',
}, {
    type: 'Int',
    name: 'createTime',
    system: true,
    systemCreator: () => Date.now()
}, {
    type: 'Boolean',
    name: 'deleted',
    system: true,
    systemCreator: () => false

}])

export { User, UserQuery, UserMutation }
```