import { useQuery } from "react-query";

function UserDataQuery() {
    const { data, isLoading, error } = useQuery('data', async () => {
    const response = await fetch('/api/jokes');
    console.log(response.json());
    console.log("UserDataQuery ")
    return response.json();
  });
  console.log("userdatayqyery")
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
console.log(data)
  return <div>{data}</div>
}

export default UserDataQuery