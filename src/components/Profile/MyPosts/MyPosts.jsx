import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsElements =
        props.profilePage.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPost = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => { 
        let text = newPost.current.value;
        props.updateNewPostText(text);
        
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPost} onChange={onPostChange} value={props.newPostText}></textarea>
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