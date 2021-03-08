import React from 'react';
import './Post.css';
import {useHistory} from 'react-router-dom';

const Post = (props) => {
     const {id, title, body} = props.post;
     const history = useHistory();
     const postDetails = (id) => {
          const path = `/post/${id}`;
          history.push(path);
     }
     return (
          <div className="post">
               <h1>{title} {id}</h1>
               <p>{body}</p>
               <button onClick={() => postDetails(id)}>View More</button>
          </div>
     );
};

export default Post;