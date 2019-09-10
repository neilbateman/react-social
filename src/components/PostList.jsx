import React, {useState, useContext} from 'react';
import PostProps from './PostProps';
import { posts } from './CardList';
import PostCard from './Card';
import {PostContext} from './CardList';

const PostList = () => {
  const [posts, setPosts] = useContext(PostContext);
  const postStyle = {
    margin: "10px",
  }
    return(
        <div>
         {posts.map((post, index) => (
           <div style={postStyle}>
            <PostCard
            title={post.title}
            image={post.imageUrl}
            id={post.id}
            key={index}/>
          </div>
        ))}
        </div>
    );
};

export default PostList;
