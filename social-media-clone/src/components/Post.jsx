import { useContext } from "react";
import PostTags from "./PostTags";
import {PostContext} from '../store/PostStore'

const Post = () => {

  const {postList, deletePost} = useContext(PostContext)

  


    return postList.map((post) => (<div key={post.id} className="row p-2 mt-2 me-3 justify-content-center">
    <div className="col">
    <div className="card" style={{width: '18rem'}}>
    <div className="card-body">
      <h5 className="card-title">{post.postTitle}</h5>
      <p className="card-text"> {post.postBody} </p>
      <PostTags postTags = {post.tags}></PostTags>
      <p> Reactions: {post.reactions} </p>
      <button onClick={() => {deletePost(post.id)}} className='btn btn-danger'>Delete</button>
    </div>
  </div>
    </div>

  </div>))
}

export default Post;