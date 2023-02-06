import axios from "axios";

const hrApi = axios.create({ baseURL: "/api/v1/hr" });

const allUsers = async () => {
  const { data } = await axios.get("/api/v1/user/allusers", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return data;
};

// const allUsers = async () => {
//   const response = await axios.get(
//     "https://jsonplaceholder.typicode.com/posts"
//   );
//   return response.data;
// };

const addUser = async (user) => {
  const { data } = await hrApi.post("/adduser", user);
  return data;
};

const editUser = async (user) => {
  const { data } = await hrApi.get(`/edituser/${user.id}`, user);
  return data;
};

export { allUsers, addUser, editUser };
