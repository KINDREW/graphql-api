require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const rateLimit = require('express-rate-limit');
const i18next = require('./config/i18n');  
const i18nextMiddleware = require('i18next-http-middleware');
const typeDefs = require('./schema/typeDefs');
const resolvers = require('./resolvers/userResolvers');

const app = express();

// Rate Limiting Middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
});
app.use(limiter);

// i18n Middleware
app.use(i18nextMiddleware.handle(i18next));

// MongoDB connection
const mongoUri = process.env.MONGODB_URI; // Use environment variable for MongoDB URI
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Initialize Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const lng = req.language;
    return { lng };
  },
});

async function startServer() {
  await server.start();
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
}

startServer();
