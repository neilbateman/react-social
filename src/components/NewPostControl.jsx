
import React from 'react';
import CreatePost from './CreatePost';
import PostList from './PostList';

class NewPostControl extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    formVisibleOnPage: false
  };
   this.displayPostForm = this.handleClick.bind(this);
}

displayPostForm(){
  this.setState({formVisibleOnPage: true});

}

render(){
  let currentlyVisibleContent = null;
  if (this.state.formVisibleOnPage){
    currentlyVisibleContent = <CreatePost />;
  } else {
    currentlyVisibleContent = <PostList />;
  }
  return (
    <div>
      {currentlyVisibleContent}
    </div>
  );
}
}

export default NewPostControl;
