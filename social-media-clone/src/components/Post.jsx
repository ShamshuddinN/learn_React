import { useContext, useEffect, useState } from "react";
import PostTags from "./PostTags";
import {PostContext} from '../store/PostStore'
import LoadingScreen from "./LoadingScreen";

const Post = () => {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)

    const controller = new AbortController();
    const signal = controller.signal;

    fetch('https://dummyjson.com/posts', {signal})
    .then(res => res.json())
    .then((data) => {addPosts(data.posts)
    setLoading(false)
    })

    return () => {
      controller.abort();
    }

  } ,[])

  const {postList, addPosts, deletePost} = useContext(PostContext)

  


    return <> 

    {loading && <LoadingScreen/>}
    {!loading && postList.length === 0 && <h3 className="p-3 text-center" >No Posts Yet!</h3>}
    
    {postList.map((post) => (<div key={post.id} className="row p-2 mt-2 me-3 justify-content-center">
    <div className="col">
    <div className="card" style={{width: '18rem'}}>
    <div className="card-body">
      <h5 className="card-title">{post.title}</h5>
      <p className="card-text"> {post.body} </p>
      <PostTags postTags = {post.tags}></PostTags>
      <p> Reactions: {post.reactions} </p>
      <p>userID: {post.userId} </p>
      <button onClick={() => {deletePost(post.id)}} className='btn btn-danger'>Delete</button>
    </div>
  </div>
    </div>

  </div>))}
  </>
}

export default Post;