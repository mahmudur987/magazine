import {
  ADD_BLOGS,
  ADD_READLIST,
  DELETE_BLOGS,
  LOAD_DATA,
  TOGGLE_SORT,
  UPDATE_BLOGS,
} from "../actionTypes/actionTypes";

export const toggleSort = (data) => {
  return {
    type: TOGGLE_SORT,
    payload: data,
  };
};
export const loadData = (data) => {
  return {
    type: LOAD_DATA,
    payload: data,
  };
};
export const addToReadList = (data) => {
  return {
    type: ADD_READLIST,
    payload: data,
  };
};
export const addToBlogs = (data) => {
  return {
    type: ADD_BLOGS,
    payload: data,
  };
};
export const removeFromBlogs = (id) => {
  return {
    type: DELETE_BLOGS,
    payload: id,
  };
};
export const updateBlogs = (blog) => {
  return {
    type: UPDATE_BLOGS,
    payload: blog,
  };
};
