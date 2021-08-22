import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../actionsTypes";

const fetchPost = (posts = {}, action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...posts?.message, action.payload];
        case UPDATE:
            console.log("Edit Reducer", action.payload, {
                message: posts?.message.map((post) =>
                    post.id === action.payload.id ? action.payload : post
                )
            })
            return {
                message: posts?.message.map((post) =>
                    post.id === action.payload.id ? action.payload : post
                )
            }
        case DELETE:
            return { message: posts?.message.filter((post) => post.id !== action.payload) };
        default:
            return posts;
    }
};

export default fetchPost;
