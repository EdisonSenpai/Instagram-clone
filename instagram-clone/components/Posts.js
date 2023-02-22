import Post from './Post';
import Profile from '../public/profile.jpeg';

const posts = [
    {
        id: '123',
        username: 'edy_donea',
        userImg: Profile.src,
        img: Profile.src,
        caption: "Me and my beautiful love 💕",
    },
    {
        id: '123',
        username: 'edy_donea',
        userImg: Profile.src,
        img: Profile.src,
        caption: "Me and my beautiful love 💕",
    },
];

function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post 
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />  
      ))}
    </div>
  );
}

export default Posts;