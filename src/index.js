import apolloServer from 'apollo-server'
import { typeDefs } from './typeDefs.js'
import { resolvers } from './resolvers.js'

const { ApolloServer } = apolloServer
const PORT = 5050

const server = new ApolloServer({typeDefs, resolvers})
server.listen(PORT).then(({url}) => console.log(`Apollo Server running at ${url}`))