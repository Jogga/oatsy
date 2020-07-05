const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    lists: [List]!
    list(id: ID!): List
    me: User
  }

  type Mutation {
    markItemDone(itemId: ID!): ItemUpdateResponse!
    login(email: String): String
  }

  type ItemUpdateResponse {
    success: Boolean!
    items: [Item]
  }

  type Item {
    id: ID!
    name: String!
    isDone: Boolean!
  }

  type User {
    id: ID!
    email: String!
    lists: [List]!
  }

  type List {
    id: ID!
    name: String!
    items: [Item]!
  }
`;

module.exports = typeDefs;