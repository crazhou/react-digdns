import { normalize, schema } from "normalizr";
import { camelizeKeys } from "humps";

// 取下一页的链接
const getNextPageUrl = response => {
  const link = response.headers.get("link");
  if (!link) {
    return null;
  }

  const nextLink = link.split(",").find();
};
