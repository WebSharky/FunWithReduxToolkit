import { useSelector} from 'react-redux'
import {selectAllPosts} from '../features/posts/postsSlice'
import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo'
import ReactionButtons from './ReactionButtons'
import { StyledPostsContainer } from '../styles/PostsContainer.styled'
import { StyledSinglePost } from '../styles/SinglePost.styled'
import {useDispatch} from 'react-redux';


const PostsList = () => {
    const posts = useSelector(selectAllPosts)

    const orderedPosts = posts.slice().sort((a,b) => b.date.localeCompare(a.date))
    const dispatch = useDispatch() 




    const renderedPosts = orderedPosts.map(post => (
        <StyledSinglePost key={post.id} bg={"#f2f7f7"}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0,100)}</p>
            <p>
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </p>
            <ReactionButtons post={post} />
        </StyledSinglePost>
    ))


  return (
    <StyledPostsContainer>
    <section>
        <h2>Available Posts</h2>
        {renderedPosts}
    </section>
    </StyledPostsContainer>
  )
}

export default PostsList

