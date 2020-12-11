import { gql } from "apollo-server"
export const typeDefs = gql`
    type User {
        id: ID!
        name: String!
    }

    type Post {
        id: ID!
        topic: String!
        category: String!
        body: String!
        comments: [String]
        createdBy: String!
    }

    type Comment {
        id: ID!
        parentId: String!
        body: String!
        responses: [String]
        createdBy: String!
    }
    
    type Query {
        users: [User]
        posts: [Post]
        comments: [Comment]
        postById(id: ID): [Post]
        postByCategory(category: String): [Post]
    }

    type Mutation {
        createPost(id: ID!, topic: String!, category: String!, body: String!, createdBy: String!): Post!
        createComment(id: ID!, parentId: String!, body: String!, createdBy: String!): Comment!
        createResponse(id: ID!, responses: [String]): Comment!
    }
`