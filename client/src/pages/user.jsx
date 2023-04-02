/* eslint-disable react/no-unescaped-entities */
import { useMutation, useQuery } from "@apollo/client";
import { ADD_DATE } from "../schema/mutations";
import { CURRENT_USER } from "../schema/queries";

export default function User() {
  const { loading, error, data } = useQuery(CURRENT_USER);
  const [addDateCompleted] = useMutation(ADD_DATE);
  console.log(data);

  const habits = data?.currentUser.habits;
  const groups = data?.currentUser.groups;

  const habitListItems = habits?.map((habit) => (
    <li
      key={habit._id}
      className="w-100 items middle my-2 rounded-md bg-white bg-opacity-25 px-4 py-2"
    >
      <div className="flex">
        <h3 className="text mx-2 font-semibold">{habit.name}</h3>
        <input
          type="checkbox"
          className="border-2 border-rally-blue"
          onClick={() =>
            addDateCompleted({
              variables: { userId: data.currentUser.id, habitId: habit.id },
            })
          }
        />
      </div>
      <div className="just flex">
        <p className="mr-1 text-xs">Current streak:</p>
        <p className="ml-1 text-xs">{habit.streak} days</p>
      </div>
    </li>
  ));

  const groupListItems = groups?.map((group) => (
    <li key={group._id} className="rounded-md bg-white bg-opacity-25 px-4">
      <h3>{group.name}</h3>
    </li>
  ));

  // add a function to update a habit when the checkbox is clicked

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  else
    return (
      <div className="middle">
        <h1 id="username" className="my-4 text-3xl font-bold drop-shadow">
          {data.currentUser.username}
        </h1>

        <div className="middle">
          <h2 className="profile-headers mb-1">Your Badges</h2>
          <div id="icons" className="grid grid-cols-3 place-items-center">
            <img
              src="../src/icons/reading1st.png"
              alt="reading"
              className="icon"
            />
            <img
              src="../src/icons/walking.png"
              alt="running"
              className="icon"
            />
            <img
              src="../src/icons/meditating3rd.png"
              alt="meditation"
              className="icon"
            />
            <img src="../src/icons/water2nd.png" alt="water" className="icon" />
          </div>
        </div>

        <div className="middle my-2 w-4/5">
          <h2 id="habits" className=" profile-headers mb-1 mt-3">
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
