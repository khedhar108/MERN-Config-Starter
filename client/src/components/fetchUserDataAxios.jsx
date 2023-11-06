import axios from "axios";

async function fetchUserDataAxios() {
  const response = await axios.get("/api/jokes");
////  const data = await response.json(); //! not required in axios
  const data = await response.data;
//   console.log(data.users);// array of objects
  return data.users;
}

export {fetchUserDataAxios};
