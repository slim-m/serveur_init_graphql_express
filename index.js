const express = require ('express');
const {ApolloServer , gql} = require ('apollo-server-express');
const typeDefs = gql`
type Query{
welcome:String
}
`
const resolvers = {
Query: {
welcome: () => {
return "Welcome to ckmobile"
}
}
}
async function initServer() {
const app = express();
const apolloServer = new ApolloServer({
typeDefs, resolvers
})
await apolloServer.start();
apolloServer.applyMiddleware({ app });
app.use((req, res) => {
res.send("Server started")
})
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Express server is running on port ${PORT}`))
}
initServer()


/* const { ApolloServer } = require("apollo-server-express");

const express = require("express");
require("dotenv").config();

//graphql server

//types query/mutation/subscription
const typeDefs = `
    type Query {
        totalPosts: Int!
    }
`;

//resolvers
const resolvers = {
  Query: {
    totalPosts: () => 42,
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

//express server
const app = express();

apolloServer.applyMiddleware({ app });

app.get("/rest", (req, res) => {
  res.json({
    data: "API is working...",
  });
});

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${process.env.PORT}`);
});
 */
/* 
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
//const { typeDefs, resolvers } = require('./schema');

async function startApolloServer() {
  const app = express();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await server.start();

  server.applyMiddleware({ app });

  app.use((req, res) => {
    res.status(200);
    res.send('Hello!');
    res.end();
  });

  await new Promise(resolve => app.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  return { server, app };
} */


/* const { ApolloServer } = require ('apollo-server-express');
const { ApolloServerPluginDrainHttpServer } = require ('apollo-server-core');
const express= require ('express');
const http = require ('http');

async function startApolloServer(typeDefs, resolvers) {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();
  server.applyMiddleware({ app });
  await new Promise(resolve => httpServer.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

 */


/* const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express')

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

const books = [
    {
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
    },
  ];

const resolvers = {
    Query: {
      books: () => books,
    },
  };
const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);

https://support.atlassian.com/bitbucket-cloud/docs/change-the-remote-url-to-your-repository/
*/