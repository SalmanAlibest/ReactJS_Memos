import React, { useState } from "react";
import * as Mui from "@material-ui/core";
import * as MuiIcon from "@material-ui/icons";
import { makeStyles } from "@material-ui/core";
import EditPost from "./EditPost";
import { deletePost, getPosts } from "../data/actions";
import { useDispatch } from "react-redux";
import DeletePost from "./DeletePost";
const Post = ({ data }: any) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [modalState, setModalState] = useState<any>(false);
  const [deleteModal, setDeleteModal] = useState<any>(false);
  const handleClick = (event: {
    currentTarget: React.SetStateAction<null>;
  }) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event: any) => {
    console.log("State", event.target.getAttribute("value"));
    setAnchorEl(null);
    if (event.target.getAttribute("value") === "delete") {
      setDeleteModal(true);
    } else if (event.target.getAttribute("value") === "edit") {
      setModalState(true);
    }
  };
  const _deletePost = () => {
    dispatch(deletePost(data?.id));
    setTimeout(() => {
      dispatch(getPosts());
      setDeleteModal(false);
    }, 2000);
  };
  return (
    <>
      <Mui.Card className={classes.root}>
        <div>
          <Mui.Typography variant="h4" color="textPrimary">
            {data?.title}
          </Mui.Typography>
          <Mui.Typography variant="body2" color="textSecondary">
            {data?.category}
          </Mui.Typography>
          <Mui.Typography>{data?.description}.</Mui.Typography>
        </div>
        <div>
          <Mui.IconButton
            color="primary"
            aria-label="Action"
            component="span"
            onClick={(e: any) => {
              handleClick(e);
            }}
          >
            <Mui.Tooltip title="Action">
              <MuiIcon.MoreHoriz />
            </Mui.Tooltip>
          </Mui.IconButton>
          <Mui.Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <Mui.MenuItem
              value={"edit"}
              onClick={(e) => {
                handleClose(e);
              }}
            >
              Edit
            </Mui.MenuItem>
            <Mui.MenuItem
              value={"delete"}
              onClick={(e) => {
                handleClose(e);
              }}
            >
              Delete
            </Mui.MenuItem>
          </Mui.Menu>
        </div>
      </Mui.Card>

      {modalState === true ? (
        <EditPost
          modalState={modalState}
          modalData={data}
          _onClose={() => {
            setModalState(false);
          }}
        />
      ) : (
        ""
      )}
      {deleteModal === true ? (
        <DeletePost
          onAccept={() => {
            _deletePost();
          }}
          onReject={() => {
            setDeleteModal(false);
          }}
          open={deleteModal}
        />
      ) : (
        ""
      )}
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 10,
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#F8F8F8",
  },
  title: {},
}));
export default Post;
