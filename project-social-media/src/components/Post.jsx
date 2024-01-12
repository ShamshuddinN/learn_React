import { MdOutlineDelete } from "react-icons/md";
import { BiSolidLike } from "react-icons/bi";
import { useContext } from "react";
import { PostList } from "../store/post-list-store";

const Post = ( {post} ) => {

  const {deletePost} = useContext(PostList)
    return <div className="card p-2 ms-3 mt-3 border border-2 border-primary" style= {{width: "25rem"}}>
    
    <div className="card-body">
      <h5 className="card-title">{post.title}
      <span onClick={() => deletePost(post.id)} className="position-absolute top-0 start-100 deleteHover translate-middle badge rounded-pill bg-danger"> 
      <MdOutlineDelete/> </span>
      </h5>
      <p className="card-text">{post.body}</p>
      <span className="badge text-bg-primary ms-1 "> <BiSolidLike/> {post.reactions} </span>
      {post.tags.map((tags) => (<span key={tags} className="badge text-bg-secondary ms-1 ">{tags}</span>))}
    </div>
  </div>
}

export default Post;