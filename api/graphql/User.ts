//@ts-ignore
import { v4 as uuidV4 } from 'uuid'
import { SystemDefinitionProps } from './utils/definition';
import { createDefinitionSchema } from './utils/schema';

const { User, UserQuery, UserMutation } = createDefinitionSchema('User', [
    ...SystemDefinitionProps,
    {
        name: 'name',
        type: 'String'
    }, {
        name: 'sex',
        type: 'Int',
    }, {
        name: 'mobile',
        type: 'String',
    },
    {
        name: 'uuid',
        type: 'String',
        isNull: false,
        asCondition: false,
        system: true,
        systemCreator: () => {
            return uuidV4()
        }
    },
    {
        name: 'password',
        isNull: false,
        asCondition: false,
        system: false,
        type: 'String',
    },
    {
        name: 'realName',
        isNull: false,
        asCondition: true,
        type: 'String',
    },
    {
        name: 'age',
        type: 'Int',
        isNull: true,
        system: false,
        asCondition: true
    },
    {
        name: 'birthDay',
        type: 'String',
        isNull: true,
        asCondition: true,
    },
    {
        name: 'role',
        type: 'Int',
        isNull: true,
        asCondition: true,
    },
    {
        name: 'userLevel',
        type: 'Int',
        isNull: true,
        asCondition: true,
    },
    {
        name: 'status',
        type: 'Int',
        isNull: true,
        asCondition: true,
    },
    {
        name: 'wxOpenId',
        type: 'String',
        isNull: true,
        asCondition: true,
    },
    {
        name: 'uninqueId',
        type: 'String',
        isNull: true,
        asCondition: true,
    },
])

export { User, UserQuery, UserMutation }