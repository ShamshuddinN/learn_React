import { useContext, useRef, useState } from "react";
import {PostList} from '../store/post-list-store'
import LoadingSpinner from "./LoadingSpinner";

const CreatePost = () => {

  const {addPost} = useContext(PostList)
  const [fstate, setFstate] = useState(false);
  const [postDone, setPostDone] = useState(false);

  const idEle = useRef();
  const titleEle = useRef();
  const bodyEle = useRef();
  const reactionsEle = useRef();
  const userIdEle = useRef();
  const tagsEle = useRef();

  const handleForm = (event) => {
    event.preventDefault();
    const postId = idEle.current.value;
    const postTitle = titleEle.current.value;
    const postBody = bodyEle.current.value;
    const postReactions = reactionsEle.current.value;
    const postUserid = userIdEle.current.value;
    const postTags = tagsEle.current.value;

    setFstate(true)
    console.log('Set loading true')

    fetch('https://dummyjson.com/posts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: postTitle,
          body: postBody,
          userId: postUserid,
          tags: postTags.split(' '),
          reactions: postReactions,
        })
      })
      .then(res => res.json())
      .then(post => {addPost(post);
        setFstate(false)
        console.log('Set loading false');
        setPostDone(true);
      
      });

    
  }


    return <form className="p-3 ms-3 me-3" onSubmit={handleForm}>
      {fstate && <LoadingSpinner></LoadingSpinner>}
      
    <div className="mb-3">
      <label  className="form-label">Post ID</label>
      <input ref={idEle} type="text" className="form-control" />  
    </div>
    
    <div className="mb-3">
      <label  className="form-label">User ID</label>
      <input ref={userIdEle} type="text" className="form-control" />  
    </div>


    <div className="mb-3">
      <label className="form-label">Post Title</label>
      <input ref={titleEle} type="text" className="form-control" />  
    </div>
    
    <div className="mb-3">
      <label className="form-label">Post Description</label>
      <textarea ref={bodyEle} type="text" className="form-control" />  
    </div>

    <div className="mb-3">
      <label className="form-label">Post Reactions</label>
      <input ref={reactionsEle} type="text" className="form-control" />  
    </div>
    
    <div className="mb-3">
      <label className="form-label">Enter Hashtags</label>
      <input ref={tagsEle} type="text" className="form-control" />  
    </div>
    
    <button type="submit" className="btn btn-primary">Post</button>
  </form>
}

export default CreatePost;