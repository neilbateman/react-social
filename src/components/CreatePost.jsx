import React, {useState, useContext} from 'react';
import {PostContext} from './CardList';
import Paper from '@material-ui/core/Paper';


const CreatePost = (props) => {
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [posts, setPosts] = useContext(PostContext);



  const updateTitle = (e) => {
        setTitle(e.target.value);
    };
    const updateImageUrl = (e) => {
        setImageUrl(e.target.value);
    };

    const addPost = e => {
        e.preventDefault();
        setPosts(prevPosts => [...prevPosts, {title: title, imageUrl: imageUrl}])
        props.onSubmitPostForm();
    };


    const newPostStyle = {
      maxWidth: "40%",
      margin: "0 auto 0 auto",
      padding: "20px",
    }

    return(
        <Paper style={newPostStyle}>
        <h1>New Post</h1>
          <form onSubmit={addPost}>
              <label value="Post Title">Post Title</label>
              <input type="text" name="title" value={title} onChange={updateTitle}/><br/>
              <label value="Image URL">Image URL</label>
              <input type="text" name="image" vaule={imageUrl} onChange={updateImageUrl}/><br/>
              <button>Submit</button>
              <button>Cancel</button>
          </form>
        </Paper>
      );

};

export default CreatePost;
