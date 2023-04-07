import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import {
  learningIcons,
  meditatingIcons,
  readingIcons,
  sleepingIcons,
  walkingIcons,
  waterIcons,
  workoutIcons,
} from "../icons/icons";
import { GET_ONE_GROUP } from "../schema/queries";

export default function Leaderboard() {
  // Get the groupId from the URL params
  const { groupId } = useParams();

  // Query the server for the group data
  const { loading, error, data } = useQuery(GET_ONE_GROUP, {
    variables: { groupId },
  });

  if (loading) {
    // Render a loading indicator if the data is still being fetched
    return <p className="text-center">Loading...</p>;
  }

  if (error) {
    // Render an error message if there was an issue fetching the data
    return <p className="text-center">Error :(</p>;
  }

  // If the data has been fetched successfully, proceed with rendering the leaderboard
  const group = data.getOneGroup;
  const members = group.members;
  const habitName = group.description;
  const iconFamily = group.iconFamily;
  // check the iconFamily and return the appropriate icon family
  const iconFamilyIcons = (iconFamily) => {
    if (iconFamily === "workout") return workoutIcons;
    if (iconFamily === "reading") return readingIcons;
    if (iconFamily === "sleeping") return sleepingIcons;
    if (iconFamily === "learning") return learningIcons;
    if (iconFamily === "walking") return walkingIcons;
    if (iconFamily === "water") return waterIcons;
    if (iconFamily === "meditating") return meditatingIcons;
  };

  // console.log(iconFamilyIcons(iconFamily)[0]);

  // Map over each member and render a list item with their username and streak
  const memberListItems = members.map((member) => {
    // Find the habit object in the member's list of habits that matches the habit name
    const habit = member.habits.find((habit) => habit.name === habitName);

    return {
      username: member.username,
      streak: habit.streak,
    };
  });

  // Sort the memberListItems array in descending order of streak
  memberListItems.sort((a, b) => b.streak - a.streak);

  // Map over the sorted memberListItems and render a list item with their username and streak
  const sortedMemberListItems = memberListItems.map((member) => {
    return (
      <tr
        key={member.username}
        className="border-collapse border-b border-black"
      >
        <td className="border-collapse border-r border-black">
          {member.username}
        </td>
        <td className="font-semibold">{member.streak}</td>
      </tr>
    );
  });

  return (
    <div className="middle">
      <h2
        id="groups"
        className="mb-6 mt-10 text-center text-4xl font-bold md:mb-10 md:mt-20 md:text-5xl lg:mb-16"
      >
        {group.name}
      </h2>
      <div className="h-15 w-100 flex">
        <img
          src={iconFamilyIcons(iconFamily)[0]}
          alt="group icon"
          className=" mr-2 w-8 animate-pulse drop-shadow-md md:mr-6 md:w-12 lg:w-16"
        />
        <img
          src={iconFamilyIcons(iconFamily)[1]}
          alt="group icon"
          className="mr-2 w-8 animate-pulse drop-shadow-md md:mr-6 md:w-12 lg:w-16"
        />
        <img
          src={iconFamilyIcons(iconFamily)[2]}
          alt="group icon"
          className="mr-2 w-8 animate-pulse drop-shadow-md md:mr-6 md:w-12 lg:w-16"
        />
        <img
          src={iconFamilyIcons(iconFamily)[3]}
          alt="group icon"
          className="mr-2 w-8 animate-pulse drop-shadow-md md:mr-6 md:w-12 lg:w-16"
        />
      </div>
      <p className=" mb-5 text-sm text-light-grey md:text-lg lg:mb-8">
        Group Badges
      </p>
      <table className=" w-4/5 table-auto border-collapse border-2 border-black bg-white bg-opacity-50 text-center drop-shadow-md md:w-2/3">
        <tr className="h-10">
          <th
            colSpan="2"
            className="border-collapse border-b border-black font-audiowide text-2xl font-bold"
          >
            LeaderBoard
          </th>
        </tr>
        <tr className="h-8 border-collapse border-b border-black">
          <th className="border-collapse border-r border-black">Username</th>
          <th>Streak</th>
        </tr>
        {sortedMemberListItems}
      </table>
    </div>
  );
}
