import React from "react";
import { auth, currentUser } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";
const page = async () => {
  const { userId, getToken } = await auth();
  const user = await currentUser();
  const token = await getToken();
  return (
    <div>
      <UserButton />
      <p>User ID: {userId}</p>

      <p>{user?.emailAddresses[0]?.emailAddress}</p>
      <p>{token}</p>
    </div>
  );
};

export default page;
