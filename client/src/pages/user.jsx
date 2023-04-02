/* eslint-disable react/no-unescaped-entities */
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import Habit from "../components/habit";
import { CURRENT_USER } from "../schema/queries";

export default function User(props) {
  const { loading, error, data } = useQuery(CURRENT_USER);
  //   console.log(data);

  const groups = data?.currentUser.groups;

  const groupListItems = groups?.map((group) => (
    <li key={group._id} className="semi-t-card my-2 px-12 py-2 text-xl">
      <Link to="/leaderboard">{group.name}</Link>
    </li>
  ));

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
              className="icon-small"
            />
            <img
              src="../src/icons/walking.png"
              alt="running"
              className="icon-small"
            />
            <img
              src="../src/icons/meditating3rd.png"
              alt="meditation"
              className="icon-small"
            />
            <img
              src="../src/icons/water2nd.png"
              alt="water"
              className="icon-small"
            />
          </div>
        </div>

        <div className="middle my-2 w-4/5">
          <h2 id="habits" className=" profile-headers mb-1 mt-3">
            Today's Goals
          </h2>
          <Habit />
        </div>

        <div className="middle">
          <h2 id="groups" className="profile-headers my-3">
            Groups
          </h2>
          <ul>{groupListItems}</ul>
        </div>
      </div>
    );
}
