import { createSlice, nanoid} from "@reduxjs/toolkit";
import { sub } from 'date-fns'

const initialState = [
    {id: '1', title: 'It is over...', content: 'I will be abdicating next month.', date: sub(new Date(), {minutes: 10}).toISOString(),reactions: {
        thumbsUp: 0,
        wow: 0,
        heart: 0,
        rocket: 0
    } },
    {id: '2', title: 'What would you say?', content:  'Anyone want me to organize a tournament?', date: sub(new Date(), {minutes: 5}).toISOString(), reactions: {
        thumbsUp: 0,
        wow: 0,
        heart: 0,
        rocket: 0
    }},
    {id: '3', title: 'An unexpected twist', content:  'We discovered a new continent!', date: sub(new Date(), {minutes: 1}).toISOString(), reactions: {
        thumbsUp: 0,
        wow: 0,
        heart: 0,
        rocket: 0
    }}
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        allPostsDeleted: {
            reducer(state, action) {
                state.length = 0
            }
        },
        oldestPostDeleted: {
            reducer(state, action) {
                state.shift()
            }
        },
        postAdded: {
            reducer(state, action) {
                state.push(action.payload)
                },
            prepare(title, content, userId) {
                return {
                    payload: {
                    id: nanoid(),
                    title,
                    content,
                    date: new Date().toISOString(),
                    userId,
                    reactions: {
                        thumbsUp: 0,
                        wow: 0,
                        heart: 0,
                        rocket: 0,
                        coffee: 0
                    }

                }
                }
            }
        },
        
        reactionAdded(state, action) {
            const {postId, reaction} = action.payload
            const existingPost = state.find(post => post.id === postId)
            if (existingPost) {
                existingPost.reactions[reaction]++
            }
        },

        
        


    }
})

export const selectAllPosts = (state) => state.posts

export const {postAdded, singlePostDeleted, oldestPostDeleted, allPostsDeleted, reactionAdded} = postsSlice.actions

export default postsSlice.reducer
