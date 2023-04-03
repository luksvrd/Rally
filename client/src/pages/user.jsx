/* eslint-disable react/no-unescaped-entities */
import { useQuery } from "@apollo/client";
import Habit from "../components/habit";
import { CURRENT_USER } from "../schema/queries";

export default function User(props) {
  const { loading, error, data } = useQuery(CURRENT_USER);

  const groups = data?.currentUser.groups;

  const groupListItems = groups?.map((group) => (
    <li key={group._id} className="semi-t-card my-2 px-12 py-2 text-xl">
      <h3>{group.name}</h3>
    </li>
  ));

  const badges = groups?.map((group) => (
    <div key={group._id} className="middle">
      {/* template literal src string using group.iconFamily */}
      <img
        key={group._id}
        src={`../src/icons/${group.iconFamily}.png`}
        alt="badge"
        className="icon-small"
      />
    </div>
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
            {badges}
          </div>
        </div>

        <div className="middle my-2 w-4/5">
          <h2 id="habits" className=" profile-headers mb-1 mt-3">
            Today's Goals
          </h2>
          <div>
            <Habit />
          </div>
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
