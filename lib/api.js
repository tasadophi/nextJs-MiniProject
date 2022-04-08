import axios from "axios";

export const getDataList = async (dataType) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/${dataType}`
  );
  return data;
};

export const getData = async (dataType, id) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/${dataType}/${id}`
  );
  return data;
};

export const getPaths = async (dataType) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/${dataType}`
  );
  return data.map((dataType) => {
    return {
      params: {
        id: String(dataType.id),
      },
    };
  });
};
