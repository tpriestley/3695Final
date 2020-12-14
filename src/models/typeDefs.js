import apolloServer from 'apollo-server'
const { gql } = apolloServer

export const typeDefs = gql`
    type Note {
        _id: ID!
        title: String!
        content: String!
        tags: String!
        dateCreated: String!
    }

    type Query {
        notes: [Note]
    }

    type Mutation {
        addNote(title: String!, content: String!, tags: String!, dateCreated: String!): Note!
        updateNote(_id: ID!, content: String!): Note!
    }
    
`