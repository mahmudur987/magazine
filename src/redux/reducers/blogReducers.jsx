import UpdateBlog from "../../pages/Dashboard/updateBlog";
import {
  ADD_BLOGS,
  ADD_READLIST,
  DELETE_BLOGS,
  LOAD_DATA,
  UPDATE_BLOGS,
} from "../actionTypes/actionTypes";

const initialState = {
  blogs: [],
  readList: [],
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA:
      return {
        ...state,
        blogs: action.payload,
      };
    case ADD_READLIST:
      const alreadyRead = state.readList.find(
        (blog) => blog._id === action.payload._id
      );

      if (alreadyRead) {
        return state;
      }

      return {
        ...state,
        readList: [...state.readList, action.payload],
      };
    case ADD_BLOGS:
      return {
        ...state,
        blogs: [...state.blogs, action.payload],
      };
    case DELETE_BLOGS:
      return {
        ...state,
        blogs: state.blogs.filter((blog) => blog._id !== action.payload),
      };
    case UPDATE_BLOGS:
      const updateBlogs = state.blogs.filter(
        (blog) => blog._id !== action.payload._id
      );
      updateBlogs.push(action.payload);
      return {
        ...state,
        blogs: updateBlogs,
      };
    default:
      return state;
  }
};

export default blogReducer;
