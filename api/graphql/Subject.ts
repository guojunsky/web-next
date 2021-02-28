import { createSchema } from "./utils/object";
/**
 * 科目
 */

const { Subject, SubjectQuery, SubjectMutation } = createSchema("Subject", {
  id: "int",
  name: "string",
  level: "int",
  levelName: 'string',
  itemOrder: 'int',
  deleted: 'boolean',
});


export { Subject, SubjectQuery, SubjectMutation };
