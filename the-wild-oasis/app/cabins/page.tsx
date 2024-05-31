import Counter from "../components/Counter";
import Navigation from "../components/Navigation";
import { User } from "../types/UserType";

export default async function Cabins() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data: User[] = await res.json();

  console.log(data);

  return (
    <>
      <h1>Cabins page</h1>;
      <ul>
        {data.map((e) => (
          <li key={e.id}>{e.name}</li>
        ))}
      </ul>
      <Counter users={data} />
    </>
  );
}
