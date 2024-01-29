import { createContext, useCallback, useEffect, useState, useReducer } from "react";



export const PostList = createContext({
    fetching: false,
    postList: [],
    addPost: () => {},
    deletePost: () => {},
    
});




// Below is the Reducer function 
const postListReducer = (currentPostList, action) => {
    let newPostList = currentPostList;

    if (action.type === 'Delete_Post') {
        newPostList = currentPostList.filter(ele => ele.id !== action.payload.postID);
    } else if (action.type === 'Add_Post') {

        // postId, postTitle, postBody, postReactions, postUserid, postTags

        newPostList = [{id: action.payload.post.id,
            title: action.payload.post.title,
            body: action.payload.post.body,
            userId: action.payload.post.userId,
            tags: action.payload.post.tags,
            reactions: action.payload.post.reactions,
    }, ...currentPostList]

    }

    else if (action.type === 'Add_initial_Posts') {
        newPostList = action.payload.posts.posts;
        console.log(action.payload.posts.posts)
        console.log('Fresh Fetch request called');
    }


    return newPostList;
}


const PostListProvider = ({children}) => {

    // use reducer takes two arguments 1: Reducer function, 2: Default Value 
    const [postList, dispatchPostList] = useReducer(postListReducer, Default_Post_list);

    const [fetching, setFetching] = useState(false)

    useEffect(() => {
        setFetching(true);
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then(posts => {addPosts(posts);
                setFetching(false);
            });
    }, [])

    const addPosts = (posts) => {
        setFetching(true)
        dispatchPostList({
          type: 'Add_initial_Posts',
          payload: {posts},
        })
        
    }

    const addPost = (post) => {

        dispatchPostList({
            type: 'Add_Post',
            payload: {post},
        })
    }

// Use CallBack Function to avoid frequent paint cycles
// Workes same as useEffect function which takes a method and array of dependencies as arguments
// useCallback(fn, dependencies)

    const deletePost = useCallback((postID) => {
        dispatchPostList({
            type: 'Delete_Post',
            payload: {postID},
        });

    }, [dispatchPostList]);


    


    // create context has a .provider method. using it here  
    // using that as a react component 
    return <PostList.Provider value={{postList, fetching, addPost, deletePost}}> 
    {children} 
    </PostList.Provider>;

}

const Default_Post_list = [];


// An example of useMemo:
// const myArray = [1, 5, 6, 8];
// const sortedArray = useMemo( ()=> {myArray.sort()}, [myArray] );
// const sortedArray = useMemo( ()=> myArray.sort(), [myArray] ); Sir written like this..



export default PostListProvider;
// using this PostListProvider inside App.jsx 