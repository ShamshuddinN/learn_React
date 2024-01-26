import { createContext, useReducer } from "react";

export const PostContext = createContext({
    postList: [], 
    addPost: () => {},
    deletePost: () => {},
})


const reducerFun = (currentList, action) => {
    let newList = currentList

    if (action.type === 'delete_post') {
        newList = currentList.filter(post => post.id !== action.postId)
    } else if (action.type === 'add_post') {
        newList = [{
                    id: action.newPostObj.id,
                    postTitle: action.newPostObj.postTitle,
                    postBody: action.newPostObj.postBody,
                    reactions: action.newPostObj.reactions,
                    tags: action.newPostObj.tags,
        }, ...currentList]
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

    const [postList, dispatchPostList] = useReducer(reducerFun, DefaultList);

    // const [state, dispatch] = useReducer(reducer, { age: 42 });


    return <PostContext.Provider value={{addPost, deletePost, postList}} >{children}</PostContext.Provider>
}

const DefaultList = [{
                    id: 32,
                    postTitle: 'Asus Computers',
                    postBody: 'Using it from 2 years and found good product!',
                    reactions: 25,
                    tags: ['#ASUS', '#Computer', '#Laptop']                        
},
]


export default ContextProvider;