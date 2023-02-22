import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './Post';
import POST1 from './img/1.jpeg';
import POST2 from './img/2.jpg';
import POST3 from './img/3.jpeg';
//import { db } from './firebase';

function App() {
  const [posts, setPosts] = useState([
    {
      username: "edy_donea",
      caption: "With my darling on a date❣️",
      imageUrl: POST1,
    },
    {
      username: "suki_xd",
      caption: "My darling and me ❤️",
      imageUrl: POST2,
    },
    {
      username: "andrada.blindu",
      caption: "Sweet love 💕^^",
      imageUrl: POST3,
    },
  ]);

  // 'useEffect' runs a piece of code based on a specific condition 

  useEffect(() => {
    // this is where the code runs
  }, [])

  return (
    <div className="App">
      <div className="app__header">
        <img 
          className="app__headerImage"
          src="http://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="instagram_logo"
        />
      </div>

      <h1>Hello World! 😇 [an Instagram clone] </h1>

      {
        posts.map(post => (
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
        ))
      }
      
    </div>
  );
}

export default App;
