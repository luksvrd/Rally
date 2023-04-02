/* eslint-disable react/no-unescaped-entities */
import { useQuery } from "@apollo/client";
import { CURRENT_USER } from "../schema/queries";

export default function User() {
  const { loading, error, data } = useQuery(CURRENT_USER);
  console.log(data);

  const habits = data?.currentUser.habits;
  const groups = data?.currentUser.groups;

  const habitListItems = habits?.map((habit) => (
    <li key={habit._id} className="flex rounded-md bg-white bg-opacity-25 px-4">
      <h3>{habit.name}</h3>
      <p>{habit.streak}</p>
      <input type="checkbox" />
    </li>
  ));

  const groupListItems = groups?.map((group) => (
    <li key={group._id}>
      <h3>{group.name}</h3>
    </li>
  ));

  // add a function to update a habit when the checkbox is clicked

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  else
    return (
      <div className="middle">
        <h1 id="username" className="my-4 text-3xl">
          Welcome, {data.currentUser.username}
        </h1>

        <div id="icons" className="grid grid-cols-3 place-items-center">
          <img
            src="../src/icons/reading1st.png"
            alt="reading"
            className="w-2/3"
          />
          <img src="../src/icons/walking.png" alt="running" className="w-2/3" />
          <img
            src="../src/icons/meditating3rd.png"
            alt="meditation"
            className="w-2/3"
          />
          <img src="../src/icons/water2nd.png" alt="water" className="w-2/3" />
        </div>

        <div className="middle my-2 w-4/5">
          <h2 id="habits" className=" profile-headers my-3">
            Today's Goals
          </h2>
          <ul>{habitListItems}</ul>
        </div>

        <div>
          <h2 id="groups" className="profile-headers my-3">
            Groups
          </h2>
          <ul>{groupListItems}</ul>
        </div>
      </div>
    );
}
