import React from 'react';

const Comments = (props) => {
     const {name, body} = props.comment;
     return (
          <div style={{borderBottom: '1px solid gray'}}>
               <small>{name}</small>
               <hr/>
               <p>{body}</p>
          </div>
     );
};

export default Comments;