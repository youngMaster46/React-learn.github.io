import React from 'react';
import classes from './Post.module.css';;

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src='https://pbs.twimg.com/profile_images/427365001469235200/6AtFP82E.jpeg'alt='test'/>
            <span>{props.message}</span>
            <span>--Count likes:{props.likesCount}</span>
         </div>
    );
}

export default Post;