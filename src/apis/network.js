import axios from "axios";

// axios.defaults.baseURL = "http://localhost:8002";

export const addClassification = (data) => axios.post("commodity", { ...data });

export const findCategroy = () =>
  axios.get("http://web.woniulab.com:8002/categroy/findCategroy", {
    params: { parentId: 0 },
  });
