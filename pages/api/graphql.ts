import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-micro';
import { buildSchema } from 'type-graphql';
import { resolvers } from 'prisma/generated/type-graphql';
import { PrismaClient } from '@prisma/client';
import Cors from 'micro-cors';

export const prisma = new PrismaClient();

const cors = Cors({
  allowMethods: ['POST', 'OPTIONS', 'GET', 'HEAD'],
});

interface Context {
  prisma: PrismaClient;
}

export const config = {
  api: {
    bodyParser: false,
  },
};

const functionHandler = async (req, res) => {
  const schema = await buildSchema({
    resolvers,
    validate: false,
  });

  const apolloServer = new ApolloServer({
    context: (): Context => ({ prisma }),
    schema,
    introspection: true,
  });

  module.exports = apolloServer.start().then(() => {
    return apolloServer.createHandler({
      path: '/api/graphql',
    })(req, res);
  });
};

export default cors((req, res) => {
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }
  return functionHandler(req, res);
});
