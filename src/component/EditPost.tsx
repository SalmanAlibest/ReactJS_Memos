import React, { useEffect, useState } from "react";
import * as Mui from "@material-ui/core";
import { useDispatch } from "react-redux";
import { getCategory } from "../utils/category";
import { makeStyles } from "@material-ui/core";
import { getPosts, updatePost } from "../data/actions";
const EditPost = ({ modalState, modalData, _onClose }: any) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [title, setTitle] = useState<string>(
    modalData?.title ? modalData?.title : ""
  );
  const [description, setDescription] = useState<string>(
    modalData?.description ? modalData?.description : ""
  );
  const [category, setCategory] = useState<string>(
    modalData?.category ? modalData?.category : ""
  );
  const [categories, setCategories] = useState<any>([]);
  const [sortOrder, setSortOrder] = useState<string>(
    modalData?.sort_order ? modalData?.sort_order.toString() : ""
  );
  useEffect(() => {
    const fetchCat = async () => {
      const { categories } = await getCategory();
      setCategories(categories);
    };
    fetchCat();
  }, []);
  const _editPost = async () => {
    dispatch(
      updatePost(modalData?.id, {
        title: title,
        description: description,
        category: category,
        sort_order: parseInt(sortOrder),
      })
    );
    setTimeout(() => {
      dispatch(getPosts());
      _onClose();
    }, 2000);
  };

  return (
    <Mui.Modal
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={modalState}
      onClose={() => _onClose()}
    >
      <Mui.Box
        margin="0 auto"
        bgcolor="white"
        width={460}
        height={560}
        py={3}
        px={5.2}
      >
        <Mui.Grid item lg={6} md={6} sm={12} xs={12}>
          <Mui.Typography variant={"h5"}>Create Post</Mui.Typography>
        </Mui.Grid>
        <Mui.Grid item lg={12} md={12} sm={12} xs={12}>
          <Mui.Typography variant={"caption"}>{"Title"}</Mui.Typography>
          <Mui.TextField
            autoComplete="off"
            fullWidth={true}
            size="small"
            value={title}
            variant="outlined"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <Mui.Typography variant={"caption"} color="textSecondary">
            {"(Maximum 50 character)"}
          </Mui.Typography>
        </Mui.Grid>
        <Mui.Grid item lg={12} md={12} sm={12} xs={12}>
          <Mui.Typography variant={"caption"}>{"Description"}</Mui.Typography>
          <Mui.TextField
            rowsMax={4}
            autoComplete="off"
            fullWidth={true}
            size="small"
            value={description}
            variant="outlined"
            InputProps={{ classes: { input: classes.textAreaInput } }}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <Mui.Typography variant={"caption"} color="textSecondary">
            {"(Maximum 150 character)"}
          </Mui.Typography>
        </Mui.Grid>
        <Mui.Grid item lg={12} md={12} sm={12} xs={12}>
          <div>
            <Mui.Typography variant={"caption"}>{"Category"}</Mui.Typography>
            <Mui.TextField
              style={{ marginBottom: 10 }}
              id="outlined-select-currency-native"
              select
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              SelectProps={{
                native: true,
              }}
              variant="outlined"
              size="small"
              fullWidth={true}
            >
              <option value="">Select</option>
              {categories.map((item: any) => (
                <option key={item.id} value={item.id}>
                  {item.value}
                </option>
              ))}
            </Mui.TextField>
            <Mui.Typography variant={"caption"} color="textSecondary">
              {"(Select at least one post category)"}
            </Mui.Typography>
          </div>
        </Mui.Grid>
        <Mui.Grid item lg={12} md={12} sm={12} xs={12}>
          <Mui.Typography variant={"caption"}>{"Sort Order"}</Mui.Typography>
          <Mui.TextField
            autoComplete="off"
            fullWidth={true}
            size="small"
            value={sortOrder}
            variant="outlined"
            onChange={(e: any) => {
              setSortOrder(e.target.value);
            }}
          />
          <Mui.Typography variant={"caption"} color="textSecondary">
            {"(Select the sorting order)"}
          </Mui.Typography>
        </Mui.Grid>
        <Mui.Grid item lg={6} md={6} sm={12} xs={12}>
          <Mui.Button
            className={classes.btnStyle}
            variant="contained"
            color="primary"
            onClick={_editPost}
          >
            Edit
          </Mui.Button>
        </Mui.Grid>
      </Mui.Box>
    </Mui.Modal>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    padding: 50,
    // marginTop: 10,
  },
  btnStyle: {
    marginTop: 10,
    textTransform: "none",
    paddingLeft: 30,
    paddingRight: 30,
  },
  textAreaInput: {
    height: 100,
  },
}));
export default EditPost;
