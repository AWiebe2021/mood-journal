const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    entrys: [Entry]
    friends: [User]
  }

  type Entry {
    _id: ID
    entryText: String
    createdAt: String
    username: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    entrys(username: String): [Entry]
    entry(_id: ID!): Entry
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addEntry(entryText: String!): Entry
  }
`;

module.exports = typeDefs;
