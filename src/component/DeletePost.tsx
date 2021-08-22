import React from "react";
import * as Mui from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
const DeletePost = ({ onAccept, onReject, open }: any) => {
  const classes = useStyles();
  return (
    <Mui.Dialog
      fullWidth={true}
      onClose={onReject}
      aria-labelledby="simple-dialog-title"
      open={open}
      scroll="body"
    >
      <Mui.Box
        margin="0 auto"
        bgcolor="white"
        // width={350}
        // height={150}
        display="flex"
        alignItems="left"
        flexDirection="column"
        py={1}
        px={2}
      >
        <Mui.Typography variant="h6">{"Delete Post"}</Mui.Typography>
        <Mui.Typography variant="body2">
          {"Are you sure you want to delete this post ? "}
        </Mui.Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: 50,
          }}
        >
          <Mui.Button
            className={classes.btnCancel}
            variant="contained"
            fullWidth
            color="primary"
            style={{ marginRight: 10 }}
            onClick={() => {
              onReject();
            }}
          >
            Cancel
          </Mui.Button>
          <Mui.Button
            className={classes.btnDelete}
            fullWidth
            variant="contained"
            onClick={() => {
              onAccept();
            }}
          >
            Delete
          </Mui.Button>
        </div>
      </Mui.Box>
    </Mui.Dialog>
  );
};

const useStyles = makeStyles((theme) => ({
  btnCancel: {
    textTransform: "none",
  },
  btnDelete: {
    textTransform: "none",
    color: "white",
    backgroundColor: "red",
  },
}));
export default DeletePost;
