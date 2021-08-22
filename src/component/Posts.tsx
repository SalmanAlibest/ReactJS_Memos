import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { firstBy } from "thenby";
import Header from "./Header";
import Post from "./Post";

const Posts = () => {
  const classes = useStyles();
  const posts = useSelector((state: any) => state.fetchPost);
  if (Object.keys(posts).length !== 0) {
    posts?.message.sort(firstBy((s: any) => s.sort_order, "asc"));
  }
  console.log("Post", posts);
  return (
    <>
      <Header />
      <Grid className={classes.root} container spacing={3}>
        {Object.keys(posts).length !== 0
          ? Object.keys(posts?.message).map((item: any) => (
              <Grid
                item
                lg={6}
                md={6}
                sm={12}
                xs={12}
                key={posts?.message[item]?.id}
              >
                <Post data={posts?.message[item]} />
              </Grid>
            ))
          : ""}
      </Grid>
    </>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    padding: 50,
  },
}));
export default Posts;
