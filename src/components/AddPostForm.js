import { useState } from "react";
import { useDispatch, useSelector} from 'react-redux'
import {postAdded, oldestPostDeleted, allPostsDeleted, singlePostDeleted} from '../features/posts/postsSlice'
// import { selectAllPosts } from "../features/posts/postsSlice"; 
import { selectAllUsers } from "../features/users/usersSlice";

import { StyledAddNewPost } from "../styles/AddNewPost.styled";
import { StyledForm } from "../styles/Form.styled";

const AddPostForm = () => {
    // const posts = useSelector(selectAllPosts)
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')

    const users = useSelector(selectAllUsers)



    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const onAuthorChanged = e => setUserId(e.target.value)

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(
                postAdded(
                    title,
                    content,
                    userId
                )
            )
                setTitle('')
                setContent('')
        }
    }
    const onDeleteOldestPostsClicked = () => {
        dispatch(
            oldestPostDeleted({})

        )
    }

    const onDeleteAllPostsClicked = () => {
        dispatch(
            allPostsDeleted()

        )
    }

    const onDeleteSinglePostClicked = () => {
        dispatch(
            singlePostDeleted()

        )
    }



    

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

    const usersOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))


  return (


    <StyledAddNewPost>


    

    <section>
        <h2>Add a new post</h2>
        <StyledForm>
        <form>
            <div>
            <label htmlFor="postTitle">Post Title: </label>
            <input 
                type="text"
                id="postTitle"
                name="postTitle"
                value={title}
                onChange={onTitleChanged}
            />
            </div>

            <div>
            <label htmlFor="postContent">Content: </label>

            <textarea 
                id="postContent"
                name="postContent"
                value={content}
                onChange={onContentChanged}
            />
            </div>

            <div>
            <label htmlFor="postAuthor">Author: </label>
            <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
                {/* <options value=""> */}

                {usersOptions}
                {/* </options> */}
            </select>
            </div>
        </form>
        </StyledForm>


            <button 
                type="button"
                onClick={onSavePostClicked}
                disabled={!canSave}
            >
                Save Post 
            </button>


            <button 
                type="button"
                onClick={onDeleteOldestPostsClicked}
            
            >
                Delete the oldest post
            </button>

            <button 
                type="button"
                onClick={onDeleteAllPostsClicked}
            
            >
                Delete all posts
            </button>
    </section>

    </StyledAddNewPost>

  )
}

export default AddPostForm