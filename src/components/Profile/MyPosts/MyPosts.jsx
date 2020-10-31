import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsElements =
        props.profilePage.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPost = React.createRef();

    let hello = () => {
        let text = newPost.current.value;
        props.addPost(text);
        newPost.current.value = '';
    }

    let onPostChange = () => { 
        let text = newPost.current.value;
        console.log(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPost} onChange={onPostChange} value={props.newPostText}></textarea>
                </div>
                <div>
                    <button onClick={ hello }>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;