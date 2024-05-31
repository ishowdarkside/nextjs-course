"use client";

import { useState } from "react";
import { User } from "../types/UserType";

export default function Counter({ users }: { users: User[] }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p> There are {users.length} users </p>
      <button onClick={() => setCount((curr) => curr + 1)}>{count}</button>;
    </div>
  );
}
