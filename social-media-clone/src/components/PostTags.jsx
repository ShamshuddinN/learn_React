const PostTags = ({postTags}) => {
    
    return <>
        {postTags.map((tgs) => (<p key={tgs} className="bg-success bg-opacity-25 d-inline-block p-1 ms-2 me-2 rounded"> {tgs} </p>))}
    </>
}

export default PostTags;