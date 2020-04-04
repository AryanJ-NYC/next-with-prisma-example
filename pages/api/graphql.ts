import { graphql } from 'graphql';
import { objectType, makeSchema } from 'nexus';
import { nexusPrismaPlugin } from 'nexus-prisma';
import path from 'path';
import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

const Movie = objectType({
  name: 'Movie',
  definition(t) {
    t.id('id');
    t.string('director');
    t.string('movieName');
    t.int('yearReleased');
  },
});

const Query = objectType({
  name: 'Query',
  definition(t) {
    t.crud.movie();
    t.crud.movies();
  },
});

const Mutation = objectType({
  name: 'Mutation',
  definition(t) {
    t.crud.createOneMovie();
    t.crud.deleteOneMovie();
  },
});

const schema = makeSchema({
  types: [Movie, Mutation, Query],
  plugins: [nexusPrismaPlugin()],
  outputs: {
    typegen: path.join(__dirname, 'nexus-typegen.ts'),
    schema: path.join(__dirname, 'schema.graphql'),
  },
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const query = req.body.query;
  const variables = req.body.variables;
  const response = await graphql(schema, query, {}, { prisma }, variables);
  return res.end(JSON.stringify(response));
};
