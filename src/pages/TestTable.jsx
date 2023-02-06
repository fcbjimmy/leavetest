import React from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { allUsers } from "../api/userManagement";

export const TestTable = () => {
  const {
    isLoading,
    data: users,
    isError,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: allUsers,
  });

  if (isLoading) return <div>Loading...</div>;
  else if (isError) return <div>{error.message}</div>;

  return <div>{JSON.stringify(users)}</div>;
};
