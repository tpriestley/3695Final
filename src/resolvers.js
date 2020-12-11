import { users } from './data/users.js'
import { posts } from './data/posts.js'
import { comments } from './data/comments.js'

export const resolvers = {
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