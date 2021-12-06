import request from "./request";
export const getLevelData = (current = 1, pageSize = 10, arg) => {
  console.log(arg);
  return request.get("/waterLevel/data", {
    params: {
      limit: pageSize,
      page: current,
      ...arg,
    },
    headers: {
      "Content-Type": "application/json",
    },
  });
};
