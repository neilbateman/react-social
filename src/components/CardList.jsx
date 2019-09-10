import React, {useState, createContext} from 'react';

export const PostContext = createContext();


export const PostProvider = props => {
     const [posts, setPosts] = useState([
  {
    title: "My character poster for Terminator: Dark Fate",
    imageUrl: "https://preview.redd.it/xgyjohukyrl31.jpg?width=640&crop=smart&auto=webp&s=3ee414e40d93856a2f599c100835f4078d2322f8",
    id: 0
  },
  {
    title: "The contents of a Dutch police car",
    imageUrl: "https://preview.redd.it/5ryj3qzgiql31.jpg?width=960&crop=smart&auto=webp&s=989e4410b7b774762b0573b47ec6514507e96083",
    id: 1
  },
  {
    title: "Families have been ruined.",
    imageUrl: "https://preview.redd.it/d6xziydwarl31.jpg?width=960&crop=smart&auto=webp&s=75e790443a6c9b20724ac6cc6264bbc8a12270ef",
    id: 2
  }
])


return (
  <PostContext.Provider value={[posts, setPosts]}>
  {props.children}
  </PostContext.Provider>

)
};

export const comments = [
  {
    user: "Sam",
    text: "First: This is only on the first one",
    postId: 1,
    id: 0
  },
  {
    user: "Sam",
    text: "Second",
    postId: 1,
    id: 1
  },
  {
    user: "Sam",
    text: "Third",
    postId: 1,
    id: 2
  },
  {
    user: "Sam",
    text: "First",
    postId: 2,
    id: 8
  },
  {
    user: "Sam",
    text: "Second",
    postId: 2,
    id: 3
  },
  {
    user: "Sam",
    text: "Third",
    postId: 2,
    id: 4
  },
  {
    user: "Sam",
    text: "First - I am on top",
    postId: 0,
    id: 5
  },
  {
    user: "Sam",
    text: "Second",
    postId: 0,
    id: 6
  },
  {
    user: "Sam",
    text: "Third",
    postId: 0,
    id: 7
  }
]
