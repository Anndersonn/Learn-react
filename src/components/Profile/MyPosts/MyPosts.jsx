import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/state';




const MyPosts = (props) => {
    let postsElements =
        props.profilePage.posts.map( p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>);
    let newPostText = props.profilePage.newPostText;

    let newPost = React.createRef();

  

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => { 
        let text = newPost.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
        
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPost} onChange={onPostChange} value={newPostText}></textarea>
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;