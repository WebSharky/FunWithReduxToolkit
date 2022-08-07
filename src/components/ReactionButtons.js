import { useDispatch} from 'react-redux'
import {reactionAdded} from '../features/posts/postsSlice' 
import { StyledReactionButton } from '../styles/ReactionButton.styled'



const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😮',
    heart: '❤️',
    rocket: '🚀'
}

const ReactionButtons = ({ post }) => {
    const dispatch = useDispatch()

    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <StyledReactionButton>
            <button
                key={name}
                type="button"
                className="reactionButton"
                onClick={() =>
                    dispatch(reactionAdded({ postId: post.id, reaction: name }))
                }
            >
                {emoji} {post.reactions[name]}
            </button>
            </StyledReactionButton>

        )
    })

    return <div>{reactionButtons}</div>
}
export default ReactionButtons