import React from 'react';
import './App.css';
import Post from './Post';
import POST1 from './img/1.jpeg'
import POST2 from './img/2.jpg'
import POST3 from './img/3.jpeg'

function App() {
  //const [posts, setPosts] = useState([]);

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

      <Post username="edy_donea" caption="With my darling on a date❣️" imageUrl={POST1}/>
      <Post username="suki_xd" caption="My darling and me ❤️" imageUrl={POST2}/>
      <Post username="andrada.blindu" caption="Sweet love 💕^^" imageUrl={POST3}/>
      
    </div>
  );
}

export default App;
