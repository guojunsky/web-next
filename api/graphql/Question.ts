import { createDefinitionSchema } from './utils/schema';
import { SystemDefinitionProps } from './utils/definition';

/**
 * 问题Schema
 */
const { Question, QuestionQuery, QuestionMutation } = createDefinitionSchema('Question', [
    ...SystemDefinitionProps,
    {
        name: 'questionType',
        system: false,
        type: 'Int',
        isNull: false,
        asCondition: true,
    },
    {
        name: 'subjectId',
        system: false,
        isNull: false,
        asCondition: true,
        type: 'Int',
    },
    {
        name: 'subject',
        system: false,
        isNull: false,
        asCondition: false,
        type: 'Subject',
    },
    {
        name: 'score',
        asCondition: true,
        type: 'Int',
    },
    {
        name: 'gradeLevel',
        asCondition: true,
        type: 'Int',
    },
    {
        name: 'gradeLevel',
        asCondition: true,
        type: 'Int',
    },
    {
        name: 'difficult',
        asCondition: true,
        type: 'Int'
    },
    {
        name: 'correct',
        asCondition: true,
        type: 'String'
    },
])

export { Question, QuestionQuery, QuestionMutation }