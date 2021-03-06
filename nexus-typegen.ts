/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */







declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  Mutation: {};
  Post: { // root type
    body?: string | null; // String
    id?: number | null; // Int
    published?: boolean | null; // Boolean
    title?: string | null; // String
  }
  Query: {};
  Subject: { // root type
    createUserName: string; // String!
    createdAt: string; // String!
    deleted: boolean; // Boolean!
    deletedAt?: string | null; // String
    id: number; // Int!
    itemOrder?: number | null; // Int
    level?: number | null; // Int
    levelName?: string | null; // String
    name: string; // String!
    updatedAt: string; // String!
  }
  User: { // root type
    age?: number | null; // Int
    birthDay?: string | null; // String
    createUserName: string; // String!
    createdAt: string; // String!
    deleted: boolean; // Boolean!
    deletedAt?: string | null; // String
    id: number; // Int!
    mobile: string; // String!
    name: string; // String!
    password: string; // String!
    realName: string; // String!
    role?: number | null; // Int
    sex: number; // Int!
    status?: number | null; // Int
    uninqueId?: string | null; // String
    updatedAt: string; // String!
    userLevel?: number | null; // Int
    uuid: string; // String!
    wxOpenId?: string | null; // String
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Mutation: { // field return type
    createDraft: NexusGenRootTypes['Post'] | null; // Post
    createSubject: NexusGenRootTypes['Subject'] | null; // Subject
    createUser: NexusGenRootTypes['User'] | null; // User
    deleteSubject: NexusGenRootTypes['Subject'] | null; // Subject
    deleteUser: NexusGenRootTypes['User'] | null; // User
    publish: NexusGenRootTypes['Post'] | null; // Post
    updateSubject: NexusGenRootTypes['Subject'] | null; // Subject
    updateUser: NexusGenRootTypes['User'] | null; // User
  }
  Post: { // field return type
    body: string | null; // String
    id: number | null; // Int
    published: boolean | null; // Boolean
    title: string | null; // String
  }
  Query: { // field return type
    Subject: Array<NexusGenRootTypes['Subject'] | null> | null; // [Subject]
    User: Array<NexusGenRootTypes['User'] | null> | null; // [User]
    drafts: Array<NexusGenRootTypes['Post'] | null> | null; // [Post]
    posts: Array<NexusGenRootTypes['Post'] | null> | null; // [Post]
  }
  Subject: { // field return type
    createUserName: string; // String!
    createdAt: string; // String!
    deleted: boolean; // Boolean!
    deletedAt: string | null; // String
    id: number; // Int!
    itemOrder: number | null; // Int
    level: number | null; // Int
    levelName: string | null; // String
    name: string; // String!
    updatedAt: string; // String!
  }
  User: { // field return type
    age: number | null; // Int
    birthDay: string | null; // String
    createUserName: string; // String!
    createdAt: string; // String!
    deleted: boolean; // Boolean!
    deletedAt: string | null; // String
    id: number; // Int!
    mobile: string; // String!
    name: string; // String!
    password: string; // String!
    realName: string; // String!
    role: number | null; // Int
    sex: number; // Int!
    status: number | null; // Int
    uninqueId: string | null; // String
    updatedAt: string; // String!
    userLevel: number | null; // Int
    uuid: string; // String!
    wxOpenId: string | null; // String
  }
}

export interface NexusGenFieldTypeNames {
  Mutation: { // field return type name
    createDraft: 'Post'
    createSubject: 'Subject'
    createUser: 'User'
    deleteSubject: 'Subject'
    deleteUser: 'User'
    publish: 'Post'
    updateSubject: 'Subject'
    updateUser: 'User'
  }
  Post: { // field return type name
    body: 'String'
    id: 'Int'
    published: 'Boolean'
    title: 'String'
  }
  Query: { // field return type name
    Subject: 'Subject'
    User: 'User'
    drafts: 'Post'
    posts: 'Post'
  }
  Subject: { // field return type name
    createUserName: 'String'
    createdAt: 'String'
    deleted: 'Boolean'
    deletedAt: 'String'
    id: 'Int'
    itemOrder: 'Int'
    level: 'Int'
    levelName: 'String'
    name: 'String'
    updatedAt: 'String'
  }
  User: { // field return type name
    age: 'Int'
    birthDay: 'String'
    createUserName: 'String'
    createdAt: 'String'
    deleted: 'Boolean'
    deletedAt: 'String'
    id: 'Int'
    mobile: 'String'
    name: 'String'
    password: 'String'
    realName: 'String'
    role: 'Int'
    sex: 'Int'
    status: 'Int'
    uninqueId: 'String'
    updatedAt: 'String'
    userLevel: 'Int'
    uuid: 'String'
    wxOpenId: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createDraft: { // args
      body: string; // String!
      title: string; // String!
    }
    createSubject: { // args
      itemOrder: number; // Int!
      level: number; // Int!
      levelName: string; // String!
      name?: string | null; // String
    }
    createUser: { // args
      age: number; // Int!
      birthDay: string; // String!
      mobile?: string | null; // String
      name?: string | null; // String
      password?: string | null; // String
      realName?: string | null; // String
      role: number; // Int!
      sex?: number | null; // Int
      status: number; // Int!
      uninqueId: string; // String!
      userLevel: number; // Int!
      wxOpenId: string; // String!
    }
    deleteSubject: { // args
      id: number; // Int!
    }
    deleteUser: { // args
      id: number; // Int!
    }
    publish: { // args
      draftId: number; // Int!
    }
    updateSubject: { // args
      id: number; // Int!
      itemOrder: number; // Int!
      level: number; // Int!
      levelName: string; // String!
      name?: string | null; // String
    }
    updateUser: { // args
      age: number; // Int!
      birthDay: string; // String!
      id: number; // Int!
      mobile?: string | null; // String
      name?: string | null; // String
      password?: string | null; // String
      realName?: string | null; // String
      role: number; // Int!
      sex?: number | null; // Int
      status: number; // Int!
      uninqueId: string; // String!
      userLevel: number; // Int!
      wxOpenId: string; // String!
    }
  }
  Query: {
    Subject: { // args
      createUserName?: string | null; // String
      createdAt?: string | null; // String
      criteriaStr?: string | null; // String
      deleted?: boolean | null; // Boolean
      deletedAt?: string | null; // String
      id?: number | null; // Int
      itemOrder?: number | null; // Int
      level?: number | null; // Int
      levelName?: string | null; // String
      name?: string | null; // String
      updatedAt?: string | null; // String
    }
    User: { // args
      age?: number | null; // Int
      birthDay?: string | null; // String
      createUserName?: string | null; // String
      createdAt?: string | null; // String
      criteriaStr?: string | null; // String
      deleted?: boolean | null; // Boolean
      deletedAt?: string | null; // String
      id?: number | null; // Int
      realName?: string | null; // String
      role?: number | null; // Int
      status?: number | null; // Int
      uninqueId?: string | null; // String
      updatedAt?: string | null; // String
      userLevel?: number | null; // Int
      wxOpenId?: string | null; // String
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}