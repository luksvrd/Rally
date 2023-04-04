/* eslint-disable react/no-unescaped-entities */
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import Habit from "../components/habit";
import { CURRENT_USER } from "../schema/queries";

export default function User(props) {
  const { loading, error, data } = useQuery(CURRENT_USER);

  const groups = data?.currentUser.groups;

  const groupListItems = groups?.map((group) => (
    <li
      key={group._id}
      className="semi-t-card mb-2 border-2 border-rally-purple py-2 text-center text-xl hover:animate-pulse hover:border-rally-blue"
    >
      <Link to={`/leaderboard/${group.id}`}>{group.name}</Link>
    </li>
  ));

  // get an array of user's habit names and streaks
  const habits = data?.currentUser.habits;
  // get an array of user's streaks
  const streaks = habits?.map((habit) => habit.streak);
  // get an array of user's badge names
  const icons = groups?.map((group) => group.iconFamily);

  console.log("icons: ", icons);

  // map over the array of streaks and return a badge based on the streak
  const badgeIcons = streaks?.map((streak) => {
    const basicIcon = "";
    const bronzeIcon = "3rd";
    const silverIcon = "2nd";
    const goldIcon = "1st";
    if (streak < 5) return basicIcon;
    if (streak >= 5 && streak < 10) return bronzeIcon;
    if (streak >= 10 && streak < 15) return silverIcon;
    if (streak >= 15) return goldIcon;
  });
  console.log("badgeIcons: ", badgeIcons);
  // make an array of badge icons by combining the badgeIcons array with the icons array
  const badgeArray = badgeIcons?.map((badge, i) => {
    return `${icons[i]}${badge}`;
  });
  console.log("badgeArray: ", badgeArray);

  // map over the groups array and use the badgeArray matching index to return a badge
  const badges = groups?.map((group, i) => {
    return (
      <div key={group._id} className="middle">
        <img
          className="mx-3 w-14 animate-pulse md:w-16"
          src={`../src/icons/${badgeArray[i]}.png`}
          alt="badge"
        />
      </div>
    );
  });

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center">Error :(</p>;
  else
    return (
      <div className="middle">
        <p className="text-md mt-10 font-semibold md:text-lg">Welcome,</p>
        <h1
          id="username"
          className="mb-10 text-4xl font-bold drop-shadow md:text-6xl"
        >
          {data.currentUser.username}
        </h1>

        <div className="middle">
          <h2 className="profile-headers mb-1 md:text-2xl">Your Badges</h2>
          <div
            id="icons"
            className="m-1 grid grid-cols-3 place-content-center place-items-center md:grid-cols-5"
          >
            {badges}
          </div>
        </div>
        <div className="middle md:flex-row">
          <div className="middle mx-4 mb-2 mt-3">
            <h2 id="habits" className=" profile-headers mb-1 mt-4 md:text-2xl">
              Today's Goals
            </h2>
            <div>
              <Habit />
            </div>
          </div>

          <div className="middle">
            <h2
              id="groups"
              className="profile-headers mb-1 mt-4 md:mt-0 md:text-2xl"
            >
              Groups
            </h2>
            <ul className="">{groupListItems}</ul>
          </div>
        </div>
      </div>
    );
}
