import { Note } from './Notes.js'

export const resolvers = {
    Query: {
        notes: () => Note.find(),
    },

    Mutation: {
        addNote: async ( _, {title, content, tags, dateCreated } ) => {
            const note = new Note({title, content, tags, dateCreated})
            await note.save()
            return note
        },

        async updateNote(parent, args) {
            return Note.findOneAndUpdate({_id: args._id}, {content: args.content}, {new: true})
        }
    }
}