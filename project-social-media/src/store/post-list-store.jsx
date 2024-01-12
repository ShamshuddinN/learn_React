// This is to create a storage 
import { createContext, useReducer } from "react";

export const PostList = createContext({
    postList: [],
    addPost: () => {},
    deletePost: () => {},
    
});


// Below is the Reducer function 
const postListReducer = (currentPostList, action) => {
    let newPostList = currentPostList;

    if (action.type === 'Delete_Post') {
        newPostList = currentPostList.filter(ele => ele.id !== action.payload.postID);

    }

    return newPostList;
}


// Making another component 
const PostListProvider = ({children}) => {

    const addPost = () => {}
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
    return <PostList.Provider value={{postList, addPost, deletePost}}> 
    {children} 
    </PostList.Provider>;

}

const Default_Post_list = [{
    id: '1',
    title: 'Having Fun',
    body: 'Hi! We are having fun in Russia',
    reactions: 4,
    userId: 'user-521',
    tags: ['Russia', 'Fun'],

},
{
    id: '2',
    title: 'Going to Tamil Nadu',
    body: 'Going to chennai for Job',
    reactions: 5,
    userId: 'user-823',
    tags: ['Job', 'Passion'],

}

];

export default PostListProvider;
// using this PostListProvider inside App.jsx 