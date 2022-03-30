import React, { useState, useEffect } from "react";
// import Layout from "../../components/layouts/Layout";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import {
  createCategory,
  updateCategories,
  deleteCategories as deleteCategoriesAction,
  getCategory,
} from "../../actions";
import ReusableModel from "../../components/layouts/ReusableModel";
import CheckboxTree from "react-checkbox-tree";
import "react-checkbox-tree/lib/react-checkbox-tree.css";
import UpdateCategoryModel from "./UpdateCategoryModel";
import AddCategoryModel from "./AddCategoryModel";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Category = (props) => {
  const [categoryName, setCategoryName] = useState("");
  const [categoryImage, setCategoryImage] = useState("");
  const [parentCategoryId, setParentCategoryId] = useState("");
  const category = useSelector((state) => state.category);
  const [show, setShow] = useState(false);
  const [checked, setChecked] = useState([]);
  const [expanded, setExpanded] = useState([]);
  const [checkedArray, setCheckedArray] = useState([]);
  const [expandedArray, setExpandedArray] = useState([]);
  const [updateCategoryModal, setUpdateCategoryModal] = useState(false);
  const [deleteCategoryModal, setDeleteCategoryModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!category.loading) {
      setShow(false);
    }
  }, [category.loading]);

  const handleClose = () => {
    const form = new FormData();

    if (categoryName === "") {
      alert("Category name is required");
      setShow(false);
      return;
    }

    form.append("name", categoryName);
    form.append("parentId", parentCategoryId);
    form.append("categoryImage", categoryImage);
    dispatch(createCategory(form));
    setCategoryName("");
    setParentCategoryId("");
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const displayCategories = (categories) => {
    let Categories = [];
    for (let category of categories) {
      Categories.push({
        label: category.name,
        value: category._id,
        children:
          category.children.length > 0 && displayCategories(category.children),
      });
    }
    return Categories;
  };

  const createCategoryList = (categories, options = []) => {
    for (let category of categories) {
      options.push({
        value: category._id,
        name: category.name,
        parentId: category.parentId,
        type: category.type,
      });
      if (category.children.length > 0) {
        createCategoryList(category.children, options);
      }
    }
    return options;
  };

  const handleCategoryImage = (e) => {
    setCategoryImage(e.target.files[0]);
  };

  const updateCategory = () => {
    updateCheckedAndExpandedCategories();
    setUpdateCategoryModal(true);
  };

  const updateCheckedAndExpandedCategories = () => {
    const categories = createCategoryList(category.categories);
    const checkedArray = [];
    const expandedArray = [];
    checked.length > 0 &&
      checked.forEach((categoryId, index) => {
        const category = categories.find(
          (category, _index) => categoryId === category.value
        );
        category && checkedArray.push(category);
      });
    expanded.length > 0 &&
      expanded.forEach((categoryId, index) => {
        const category = categories.find(
          (category, _index) => categoryId === category.value
        );
        category && expandedArray.push(category);
      });
    setCheckedArray(checkedArray);
    setExpandedArray(expandedArray);
    console.log({ checked, expanded, categories, checkedArray, expandedArray });
  };

  const handleCategoryInput = (key, value, index, type) => {
    if (type === "checked") {
      const updatedCheckedArray = checkedArray.map((item, _index) =>
        index === _index ? { ...item, [key]: value } : item
      );
      setCheckedArray(updatedCheckedArray);
    } else if (type === "expanded") {
      const updatedExpandedArray = expandedArray.map((item, _index) =>
        index === _index ? { ...item, [key]: value } : item
      );
      setExpandedArray(updatedExpandedArray);
    }
  };

  const updateCategoryForm = () => {
    const form = new FormData();
    expandedArray.forEach((item, index) => {
      form.append("_id", item.value);
      form.append("name", item.name);
      form.append("parentId", item.parentId ? item.parentId : "");
      form.append("type", item.type);
    });
    checkedArray.forEach((item, index) => {
      form.append("_id", item.value);
      form.append("name", item.name);
      form.append("parentId", item.parentId ? item.parentId : "");
      form.append("type", item.type);
    });
    dispatch(updateCategories(form));
    setUpdateCategoryModal(false);
  };

  const deleteCategory = () => {
    updateCheckedAndExpandedCategories();
    setDeleteCategoryModal(true);
  };
  const deleteCategories = () => {
    const checkedIdsArray = checkedArray.map((item, index) => ({
      _id: item.value,
    }));
    const expandedIdsArray = expandedArray.map((item, index) => ({
      _id: item.value,
    }));

    const idsArray = expandedIdsArray.concat(checkedIdsArray);

    if (checkedIdsArray.length > 0) {
      dispatch(deleteCategoriesAction(checkedIdsArray)).then((result) => {
        if (result) {
          dispatch(getCategory());
          setDeleteCategoryModal(false);
        }
      });
    }
    setDeleteCategoryModal(false);
  };

  const displayDeleteCategoryModal = () => {
    return (      
      <ReusableModel
        modalTitle={"Confirm"}
        show={deleteCategoryModal}
        handleClose={() => setDeleteCategoryModal(false)}
        buttons={[
          {
            label: "No",
            color: "primary",
            onClick: () => {
              alert("no");
            },
          },
          {
            label: "Yes",
            color: "danger",
            onClick: deleteCategories,
          },
        ]}
      >
        <h5>Expanded Category</h5>
        {expandedArray.map((item, index) => (
          <span key={index}>{item.name}</span>
        ))}
        <h5>Checked Category</h5>
        {checkedArray.map((item, index) => (
          <span key={index}>{item.name}</span>
        ))}
      </ReusableModel>
    );
  };

  const categoryList = createCategoryList(category.categories);

  return (
    <main className="content">
    <div>
        <Grid container>
          <Grid item xs={12}>
            <Box style={{ display: "flex" }}>
              <Typography variant="h4" component="h1">
                Category
              </Typography>
              <Button
                style={{
                  marginLeft: "auto",
                  backgroundColor: "#323232",
                  color: "white",
                  fontSize: "small",
                }}
                onClick={handleShow}
              >
                Add category
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Grid>
          <Grid item xs={12}>
            {/* <Box>
              <ul>{displayCategories(category.categories)}</ul>
            </Box> */}
            <CheckboxTree
              nodes={displayCategories(category.categories)}
              checked={checked}
              expanded={expanded}
              onCheck={(checked) => setChecked(checked)}
              onExpand={(expanded) => setExpanded(expanded)}
              icons={{
                check: <CheckBoxIcon />,
                uncheck: <CheckBoxOutlineBlankIcon />,
                halfCheck: <IndeterminateCheckBoxIcon />,
                expandClose: <ArrowRightIcon />,
                expandOpen: <ArrowDropDownIcon />,
              }}
            />
          </Grid>
        </Grid>
        <Grid>
          <Grid item xs={12}>
            <button onClick={deleteCategory}>Delete</button>
            <button onClick={updateCategory}>Edit</button>
          </Grid>
        </Grid>

        {/* ----MODAL----- */}
        <AddCategoryModel
          show={show}
          handleClose={() => setShow(false)}
          onSubmit={handleClose}
          modalTitle={"Add New Category"}
          categoryName={categoryName}
          setCategoryName={setCategoryName}
          parentCategoryId={parentCategoryId}
          setParentCategoryId={setParentCategoryId}
          handleCategortImage={handleCategoryImage}
          categoryList={categoryList}
        />

        <UpdateCategoryModel
          show={updateCategoryModal}
          handleClose={()=> setUpdateCategoryModal(false)}
          onSubmit={updateCategoryForm}
          size="lg"
          modalTitle={"Update Categories"}
          expandedArray={expandedArray}
          checkedArray={checkedArray}
          handleCategoryInput={handleCategoryInput}
          categoryList={categoryList}
        />

        {displayDeleteCategoryModal()}
    </div>
    </main>
  );
};

export default Category;
