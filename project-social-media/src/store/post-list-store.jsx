import { createContext, useReducer } from "react";

export const PostList = createContext({
    postList: [],
    addPost: () => {},
    addPosts: () => {},
    deletePost: () => {},
    
});


// Below is the Reducer function 
const postListReducer = (currentPostList, action) => {
    let newPostList = currentPostList;

    if (action.type === 'Delete_Post') {
        newPostList = currentPostList.filter(ele => ele.id !== action.payload.postID);
    } else if (action.type === 'Add_Post') {

        // postId, postTitle, postBody, postReactions, postUserid, postTags

        newPostList = [{
        id: action.payload.postId,
        title: action.payload.postTitle,
        body: action.payload.postBody,
        reactions: action.payload.postReactions,
        userId: action.payload.postReactions,
        tags: action.payload.postTags.split(' '),
    }, ...currentPostList]

    }

    else if (action.type === 'Add_initial_Posts') {
        newPostList = action.payload.posts;
    }


    return newPostList;
}


const PostListProvider = ({children}) => {

    const addPost = (postId, postTitle, postBody, postReactions, postUserid, postTags) => {

        dispatchPostList({
            type: 'Add_Post',
            payload: {postId, postTitle, postBody, postReactions, postUserid, postTags},
        })
    }

    const addPosts = (posts) => {
      dispatchPostList({
        type: 'Add_initial_Posts',
        payload: {posts},
      })
      
    }


    const deletePost = (postID) => {
        dispatchPostList({
            type: 'Delete_Post',
            payload: {postID},
        });

    };


    // use reducer takes two arguments 1: Reducer function, 2: Default Value 
    const [postList, dispatchPostList] = useReducer(postListReducer, Default_Post_list);


    // create context has a .provider method. using it here  
    // using that as a react component 
    return <PostList.Provider value={{postList, addPosts, addPost, deletePost}}> 
    {children} 
    </PostList.Provider>;

}

const Default_Post_list = [];

export default PostListProvider;
// using this PostListProvider inside App.jsx 