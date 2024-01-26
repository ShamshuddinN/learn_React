import { useContext, useRef } from "react";

import {PostContext} from '../store/PostStore'

const PostForm = () => {

  const {addPost} = useContext(PostContext)

  const pTitle = useRef()
  const pId = useRef()
  const pBody = useRef()
  const pTags = useRef()
  const pReactions = useRef()

  const handleForm = (event) => {
    event.preventDefault();

    let newPostObj = {id: pId.current.value,
      postTitle: pTitle.current.value,
      postBody: pBody.current.value,
      reactions: pReactions.current.value,
      tags: pTags.current.value.split(' '),
    }

    addPost(newPostObj);

    pId.current.value = ''
    pTitle.current.value = ''
    pBody.current.value = ''
    pReactions.current.value = ''
    pTags.current.value = ''

  }


    return <form className='p-4'>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Post Title</label>
      <input ref={pTitle} type="text" className="form-control"/>
    </div>
    
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Post ID</label>
      <input ref={pId} type="text" className="form-control"/>
    </div>
    
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Post Body</label>
      <input ref={pBody} type="text" className="form-control"/>
    </div>
    
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Enter Tags</label>
      <input ref={pTags} type="text" className="form-control"/>
    </div>

    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Enter Reactions</label>
      <input ref={pReactions} type="text" className="form-control"/>
    </div>

    <button onClick={handleForm} type="submit" className="btn btn-primary">Submit</button>
  </form>
}

export default PostForm;