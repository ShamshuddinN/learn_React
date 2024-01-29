import { useContext, useEffect, useState } from "react";
import Post from "./Post"
import { PostList as postListData } from "../store/post-list-store";
import LoadingSpinner from "./LoadingSpinner";
const PostList = () => {

    const {postList, fetching} = useContext(postListData);
    

    // Use effect takes 2 args, one fuunction and another dependencies
    // If you dont pass second arg, it will run in a loop. It should be avoided.
   /* useEffect(() => {
        setFetching(true)

        const controller = new AbortController();
        const signal = controller.signal;
        
        fetch('https://dummyjson.com/posts', {signal})
        .then((data) => data.json())
        .then((data) => {addPosts( data.posts );
            setFetching(false);
        });

        return () => {
            
            controller.abort();
        }
        
        
    }, [] ) */

    
    
        

    return <>

    {fetching === true && <LoadingSpinner/>}

    {!fetching && postList.length === 0 && <center className="p-3"><h3>No posts Here Yet!</h3>
    
    </center>}


    {postList.map((post) => (<Post key={post.id} post = {post} ></Post>) )}
    </>
};

export default PostList;