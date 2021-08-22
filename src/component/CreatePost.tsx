import React, { useEffect, useState } from "react";
import * as Mui from "@material-ui/core";
import Header from "./Header";
import { makeStyles } from "@material-ui/core";
import { getCategory } from "../utils/category";
import { createPost, getPosts } from "../data/actions";
import { useDispatch } from "react-redux";
const CreatePost = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [categories, setCategories] = useState<any>([]);
  const [sortOrder, setSortOrder] = useState<string>("");
  const [checkEmpty, setCheckEmpty] = useState<boolean>(false);
  useEffect(() => {
    const fetchCat = async () => {
      const { categories } = await getCategory();
      console.log("Cat", categories);
      setCategories(categories);
    };
    fetchCat();
  }, []);

  const _createPost = async () => {
    dispatch(
      createPost({
        title: title,
        description: description,
        category: category,
        sort_order: parseInt(sortOrder),
      })
    );
    setTimeout(() => {
      dispatch(getPosts());
    }, 2000);
  };
  return (
    <>
      <Header />
      <div className={classes.root}>
        <Mui.Grid item lg={6} md={6} sm={12} xs={12}>
          <Mui.Typography variant={"h5"}>Create Post</Mui.Typography>
        </Mui.Grid>
        <Mui.Grid item lg={6} md={6} sm={12} xs={12}>
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
            helperText={
              title === "" && checkEmpty === true ? "Please Input title!" : ""
            }
          />
          <Mui.Typography variant={"caption"} color="textSecondary">
            {"(Maximum 50 character)"}
          </Mui.Typography>
        </Mui.Grid>
        <Mui.Grid item lg={6} md={6} sm={12} xs={12}>
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
            helperText={
              description === "" && checkEmpty === true
                ? "Please Input description!"
                : ""
            }
          />
          <Mui.Typography variant={"caption"} color="textSecondary">
            {"(Maximum 150 character)"}
          </Mui.Typography>
        </Mui.Grid>
        <Mui.Grid item lg={6} md={6} sm={12} xs={12}>
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
              helperText={
                category === "" && checkEmpty === true
                  ? "Please Select category!"
                  : ""
              }
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
        <Mui.Grid item lg={6} md={6} sm={12} xs={12}>
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
            helperText={
              sortOrder === "" && checkEmpty === true
                ? "Please input sorting order!"
                : ""
            }
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
            onClick={() => {
              if (
                title === "" ||
                description === "" ||
                category === "" ||
                sortOrder === ""
              ) {
                setCheckEmpty(true);
              } else {
                _createPost();
              }
            }}
          >
            Create
          </Mui.Button>
        </Mui.Grid>
      </div>
    </>
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
export default CreatePost;
