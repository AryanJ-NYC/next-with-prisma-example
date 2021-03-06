/**
 * This file was automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 */





declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  MovieCreateInput: { // input type
    director: string; // String!
    movieName: string; // String!
    yearReleased: number; // Int!
  }
  MovieWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
}

export interface NexusGenEnums {
}

export interface NexusGenRootTypes {
  Movie: { // root type
    director: string; // String!
    id: string; // ID!
    movieName: string; // String!
    yearReleased: number; // Int!
  }
  Mutation: {};
  Query: {};
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  MovieCreateInput: NexusGenInputs['MovieCreateInput'];
  MovieWhereUniqueInput: NexusGenInputs['MovieWhereUniqueInput'];
}

export interface NexusGenFieldTypes {
  Movie: { // field return type
    director: string; // String!
    id: string; // ID!
    movieName: string; // String!
    yearReleased: number; // Int!
  }
  Mutation: { // field return type
    createOneMovie: NexusGenRootTypes['Movie']; // Movie!
    deleteOneMovie: NexusGenRootTypes['Movie'] | null; // Movie
  }
  Query: { // field return type
    movie: NexusGenRootTypes['Movie'] | null; // Movie
    movies: NexusGenRootTypes['Movie'][]; // [Movie!]!
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createOneMovie: { // args
      data: NexusGenInputs['MovieCreateInput']; // MovieCreateInput!
    }
    deleteOneMovie: { // args
      where: NexusGenInputs['MovieWhereUniqueInput']; // MovieWhereUniqueInput!
    }
  }
  Query: {
    movie: { // args
      where: NexusGenInputs['MovieWhereUniqueInput']; // MovieWhereUniqueInput!
    }
    movies: { // args
      after?: NexusGenInputs['MovieWhereUniqueInput'] | null; // MovieWhereUniqueInput
      before?: NexusGenInputs['MovieWhereUniqueInput'] | null; // MovieWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
      skip?: number | null; // Int
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Movie" | "Mutation" | "Query";

export type NexusGenInputNames = "MovieCreateInput" | "MovieWhereUniqueInput";

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
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
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
}