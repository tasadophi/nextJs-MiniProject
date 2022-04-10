import axios from "axios";

export const getDataList = async (dataType) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/${dataType}`
  );
  return data.slice(0, 10);
};

export const getData = async (dataType, id) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/${dataType}/${id}`
  );
  return data;
};

export const getMainPaths = () => {
  return ["users", "comments", "posts", "photos"].map((path) => {
    return {
      params: {
        contents: path,
      },
    };
  });
};

export const getPaths = async () => {
  function range(start, end) {
    return Array(end - start + 1)
      .fill()
      .map((_, idx) => start + idx);
  }
  const allPaths = [];
  ["users", "comments", "posts", "photos"].forEach((path) => {
    const ids = range(0, 10);
    ids.forEach((id) => {
      allPaths.push({ params: { id: String(id), contents: path } });
    });
  });
  return allPaths;
};

export const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const makeSingle = (str) => {
  const newStr = capitalize(str);
  return newStr.slice(0, -1);
};
