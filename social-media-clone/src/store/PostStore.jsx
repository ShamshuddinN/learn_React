import { createContext, useReducer } from "react";

export const PostContext = createContext({
    postList: [], 
    addPost: () => {},
    addPosts: () => {},
    deletePost: () => {},
})


const reducerFun = (currentList, action) => {
    let newList = currentList

    if (action.type === 'delete_post') {
        newList = currentList.filter(post => post.id !== action.postId)
    } else if (action.type === 'add_post') {
        newList = [{
                    id: action.newPostObj.id,
                    title: action.newPostObj.title,
                    body: action.newPostObj.body,
                    reactions: action.newPostObj.reactions,
                    tags: action.newPostObj.tags,
        }, ...currentList]
    }
    else if (action.type === 'Add_Initial_Posts') {
        newList = action.payload.posts
    }

    return newList
}

const ContextProvider = ({children}) => {

    const addPost = (newPostObj) => {
        dispatchPostList({type: 'add_post', newPostObj})
    };

    const deletePost = (id) => {
        dispatchPostList({postId: id, type: 'delete_post'})
    };

    const addPosts = (posts) => {
        dispatchPostList({
            type: 'Add_Initial_Posts',
            payload: {posts}
        })
    }

    const [postList, dispatchPostList] = useReducer(reducerFun, DefaultList);

    // const [state, dispatch] = useReducer(reducer, { age: 42 });


    return <PostContext.Provider value={{addPost, addPosts, deletePost, postList}} >{children}</PostContext.Provider>
}

const DefaultList = []


export default ContextProvider;