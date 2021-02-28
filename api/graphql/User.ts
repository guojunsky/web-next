import { createDefinitionSchema } from './utils/object';

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