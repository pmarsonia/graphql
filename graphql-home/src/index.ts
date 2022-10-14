import { ApolloServer } from 'apollo-server-express';
import express from 'express';
//import helmet from "helmet";
//import { buildSchema } from 'type-graphql';
import cors from 'cors';

import {typeDefs, resolvers} from './schema'

const port = process.env.PORT || '8080';

const main = async() => {
  const app = express();

  //app.use(helmet());

  //when client not talking via proxy
  app.set('trust proxy', 1);

  app.use(
    cors({
      origin: 'https://studio.apollographql.com',
      credentials: true,
    }),
  );

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers ,
    context: (ctx) => ctx,
    introspection: true,
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({
    app,
    cors: false,

  });

  app.listen(Number(port), () => {
    console.log('Server is started on port: ' + port);
  });
}

main().catch((err) => {
  console.log(err);
})
