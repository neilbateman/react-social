import React, {useState, useContext} from 'react';
import PostProps from './PostProps';
import Comment from './Comment'
import { comments } from './CardList';


function CommentList(props) {
  console.log('here',comments);
  const commentStyle = {
    margin: "10px",
  }
  return(
    <div>
    {comments.map((comment, index) => (
      <div style={commentStyle}>
      {comment.postId === props.postId && <Comment
        user={comment.user}
        text={comment.text}
        key={comment.id}
      />}
      </div>
    ))}
    </div>
  );
};

export default CommentList;
