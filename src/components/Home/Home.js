import React, {useState, useEffect} from 'react';
import Post from '../Post/Post';

const Home = () => {
     const [posts, setPosts] = useState([]);
     useEffect(() => {
          const url = `https://jsonplaceholder.typicode.com/posts`;
          fetch(url)
          .then(res => res.json())
          .then(data => setPosts(data))
     }, []);
     return (
          <div>
               <h1>I am home page</h1>
               <h2>I have {posts.length} posts</h2>
               {
                    posts.slice(0,10).map(post => <Post post={post}></Post>)
               }
          </div>
     );
};

export default Home;