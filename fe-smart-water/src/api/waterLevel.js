import request from "./request";
export const getLevelData = () => {
  return request.get("/waterLevel/data", {
    "Content-Type": "application/json",
  });
};
