import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-micro';
import { buildSchema } from 'type-graphql';
import { resolvers } from 'prisma/generated/type-graphql';
import Cors from 'micro-cors';
import { PrismaClient } from '@prisma/client';

declare global {
  var prismaContext: PrismaClient;
}
export let prisma: PrismaClient;

if (!global.prismaContext) {
  global.prismaContext = new PrismaClient();
}
prisma = global.prismaContext;

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
  const startServer = apolloServer.start();
  await startServer;
  return apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res);
};

export default cors((req, res) => {
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }

  return functionHandler(req, res);
});
