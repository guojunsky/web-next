import { SystemDefinitionProps } from './utils/definition';
import { createSchema, createDefinitionSchema } from './utils/schema';
/**
 * 科目
 */

const { Subject, SubjectQuery, SubjectMutation } = createDefinitionSchema("Subject",
//  {
//   id: "int",
//   name: "string",
//   level: "int",
//   levelName: 'string',
//   itemOrder: 'int',
//   deleted: 'boolean',
// }
 [
   ...SystemDefinitionProps,
   {
     name: 'name',
     type: 'String',
     asCondition: true,
   },
   {
    name: 'level',
    type: 'Int',
    isNull: true,
    asCondition: true,
  },
  {
    name: 'levelName',
    type: 'String',
    asCondition: true,
    isNull: true,
  },
  {
    name: 'itemOrder',
    type: 'Int',
    asCondition: true,
    isNull: true,
  }
 ]
);


export { Subject, SubjectQuery, SubjectMutation };
