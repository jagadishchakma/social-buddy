import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import './PostDetails.css';
import Comments from '../Comments/Comments';

const PostDetails = () => {
     const [post, setPost] = useState({});
     const [comments, setComments] = useState([]);
     const {id} = useParams();
     useEffect(() => {
          const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
          fetch(url)
          .then(res => res.json())
          .then(data => setPost(data))
     }, [id]);
     useEffect(() => {
          const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
          fetch(url)
          .then(res => res.json())
          .then(data => setComments(data))
     }, [id])
     const {id: postId, title, body} = post;
     return (
          <div>
              <div className="post-details">
                    <h1>{title}</h1>
                    <p>{body}</p>
              </div>
              <div className="post-comments">
                    {
                         comments.map(comment => <Comments comment={comment} key={comment.id}></Comments>)
                    }
              </div>
          </div>
     );
};

export default PostDetails;