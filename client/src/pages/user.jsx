/* eslint-disable react/no-unescaped-entities */
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import Habit from "../components/habit";
import {
  learningIcons,
  meditatingIcons,
  readingIcons,
  sleepingIcons,
  walkingIcons,
  waterIcons,
  workoutIcons,
} from "../icons/icons";
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
  console.log("streaks: ", streaks);
  // get an array of user's badge names
  const icons = groups?.map((group) => group.iconFamily);
  const Workout = workoutIcons;
  const Reading = readingIcons;
  const Sleeping = sleepingIcons;
  const Learning = learningIcons;
  const Walking = walkingIcons;
  const Water = waterIcons;
  const Meditating = meditatingIcons;
  console.log("icons: ", icons);

  // create an array of badge components
  const badgeArray = icons?.map((iconFamily) => {
    if (iconFamily === "workout") return Workout;
    if (iconFamily === "reading") return Reading;
    if (iconFamily === "sleeping") return Sleeping;
    if (iconFamily === "learning") return Learning;
    if (iconFamily === "walking") return Walking;
    if (iconFamily === "water") return Water;
    if (iconFamily === "meditating") return Meditating;
  });
  console.log("badgeArray: ", badgeArray);

  // map through the user's streaks and assign an index 0-3 depending on the streak
  const badgeIndex = streaks?.map((streak) => {
    // if streak is bellow 5 days, return index 0
    if (streak < 5) return 0;
    // if streak is between 5 and 10 days, return index 1
    if (streak >= 5 && streak < 10) return 1;
    // if streak is between 10 and 15 days, return index 2
    if (streak >= 10 && streak < 15) return 2;
    // if streak is 15 days or more, return index 3
    if (streak >= 15) return 3;
  });

  // map through the badgeArray and badgeIndex and return the badge component at the index
  const badges = badgeArray?.map((badge, index) => {
    return badge[badgeIndex[index]];
  });

  // map through the badges array and return the badge component
  const badgeComponents = badges?.map((badge) => {
    return (
      <div key={badge} className="mx-4 mb-3 flex items-center">
        <img className="w-14 md:w-16 lg:w-20" src={badge} alt="badge"></img>
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
            {badgeComponents}
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
