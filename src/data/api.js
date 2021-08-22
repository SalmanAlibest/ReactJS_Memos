import axios from "axios";
const url = "https://us-central1-react-test-dd08f.cloudfunctions.net";
const Header = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST",
  "Access-Control-Max-Age": "0",
  "Access-Control-Allow-Credentials": "true",
  "Access-Control-Allow-Headers": "Authorization",
  "test-id": "1234"
}
export const fetchPosts = () => axios.get(`${url}/posts`,
  {
    headers: Header
  });
export const createPost = (newPost) => axios.post(`${url}/posts`, newPost, {
  headers: Header
});
export const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/posts/${id}`, updatedPost, {
    headers: Header
  });
export const deletePost = (id) => axios.delete(`${url}/posts/${id}`, {
  headers: Header
});
