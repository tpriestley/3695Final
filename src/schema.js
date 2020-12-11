import { makeExecutableSchema } from 'graphql-tools';
import { users } from './data/users.js'
import { posts } from './data/posts.js'
import { comments } from './data/comments.js'

const typeDefs = gql`
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

const resolvers = {
    Query: {
        users: () => users,
        posts: () => posts,
        comments: () => comments,

        postById: (_, { id }) => {
            const results = posts.filter(posts => posts.id == id)
            return results
        },
            
        postByCategory: (_, { category }) => {
            const results = posts.filter(posts => posts.category == category)
            return results
        }
    },
    Mutation: {
        createPost: (_, {id, topic, category, body, createdBy}) => {
            const newPost = ({id, topic, category, body, createdBy})
            posts.push(newPost)
            return newPost
        },

        createComment: (_, {id, parentId, body, createdBy}) => {
            const newComment = ({id, parentId, body, createdBy})
            comments.push(newComment)
            return newComment
        },
        createResponse: (_, {id, responses}) => {
            const newResponse = ({id, responses})
            comments.push(newResponse)
            return newResponse
        }
    }
}

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });
  
  export default schema;