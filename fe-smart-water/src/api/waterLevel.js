import request from "./request";
export const getLevelData = (current = 1, pageSize = 10) => {
  return request.get("/waterLevel/data", {
    params: {
      limit: pageSize,
      page: current,
    },
    headers: {
      "Content-Type": "application/json",
    },
  });
};
