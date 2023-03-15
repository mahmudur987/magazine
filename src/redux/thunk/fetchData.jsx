import { loadData } from "../action/action";

const fetchBlogData = () => {
  return async (dispatch, getState) => {
    let url = "https://moon-tech-server-five.vercel.app/blogs";

    const res = await fetch(url);
    const data = await res.json();
    if (data.length > 0) {
      dispatch(loadData(data));
    }
  };
};
export default fetchBlogData;
