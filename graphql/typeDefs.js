const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type FAQ {
        id: ID!
        question: String!
        answer: String!
    }

    type Blog {
        id: ID!
        title: String!
        slug: String!
        content: String!
        author: String!
        image: String!
        createdAt: String!
    }

    type Query {
        faqs: [FAQ!]!
        blogs(limit: Int, sort: String): [Blog!]!  # Accept limit and sort arguments
        blog(slug: String!): Blog
    }

    type Mutation {
        addFAQ(question: String!, answer: String!): FAQ!
        deleteFAQ(id: ID!): String!
    }
`;

module.exports = typeDefs;
