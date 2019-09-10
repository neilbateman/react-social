import React, {useState, useContext} from 'react';
import PostProps from './PostProps';
import Paper from '@material-ui/core/Paper';




const Comment = (props) => {
  const commentStyle = {
    backgroundColor: "#F9F9F9",
    width: "90%",
  }
  return(
    <Paper style={commentStyle}>
      <h4 style={{  width: "auto  ", borderBottom: "1px dashed lightgrey", textAlign: "left", margin: "3px", }}>{props.user}</h4>
      {props.text}
    </Paper>
  );
};

export default Comment;
