require("dotenv").config();
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const cors = require("cors");
const connectDB = require("./config/db");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const app = express();
app.use(cors()); // Enable CORS

// Connect to MongoDB
connectDB();

// Create Apollo Server
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

// Apply Apollo Middleware to Express
async function startServer() {
    await server.start();
    server.applyMiddleware({ app });

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log("🚀 GraphQL Server running at http://localhost:${PORT}/graphql");
    });
}

startServer();