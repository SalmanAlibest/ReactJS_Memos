import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,

} from "./actionsTypes";

import * as api from "./api";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    console.log("Action", post)
    const { data } = await api.createPost(post);
    console.log("Res", data)

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    console.log("Action", id, post)
    const { data } = await api.updatePost(id, post);
    console.log("Edit Res", data)
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

