import axios from "axios";

export const getUsers = async (dataType) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/${dataType}`
  );
  return data;
};

export const getUser = async (id) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
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
