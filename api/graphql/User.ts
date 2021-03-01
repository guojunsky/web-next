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
    }
])

export { User, UserQuery, UserMutation }