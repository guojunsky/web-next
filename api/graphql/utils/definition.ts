import { PropertyDef } from './schema';
/**
 * Definition
 */
export const SystemDefinitionProps: PropertyDef[] = [
    {
        name: 'id',
        type: 'Int',
        system: true,
        isNull: false,
        asCondition: true,
    },
    {
        name: 'createdAt',
        type: 'String',
        system: true,
        isNull: false,
        asCondition: true,
    },
    {
        name: 'updatedAt',
        type: 'String',
        system: true,
        isNull: false,
        asCondition: true,
    },
    {
        name: 'deletedAt',
        type: 'String',
        system: true,
        isNull: true,
        asCondition: true,
    },
    {
        name: 'deleted',
        type: 'Boolean',
        system: true,
        isNull: false,
        asCondition: true,
    },
    {
        name: 'createUserName',
        type: 'String',
        system: true,
        isNull: false,
        asCondition: true,
    }
]