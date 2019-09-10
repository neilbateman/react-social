import React from 'react';
import Nav from './components/Nav';
import Card from './components/Card';
import PostList from './components/PostList';
import './App.css';
import PostProps from './components/PostProps';
import {PostProvider} from './components/CardList';
import CreatePost from './components/CreatePost'


export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayForm: false
    };
    this.handlePostClick = this.handlePostClick.bind(this);
    this.hideCreatePost = this.hideCreatePost.bind(this);
  }

  handlePostClick(){
    this.setState({displayForm: true});
   console.log(this.state.displayForm);
  }

  hideCreatePost() {
    console.log("in app");
    this.setState({displayForm: false});
  }

  render() {
  return (

    <div className="App">

      <PostProvider>

      <Nav onMakePostClick={this.handlePostClick}/>
      {this.state.displayForm && <CreatePost onSubmitPostForm={this.hideCreatePost}/>}
      <PostList/>
      </PostProvider>

    </div>
  );
}
}

export default App;
