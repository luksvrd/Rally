import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
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
    return <p>Loading...</p>;
  }

  if (error) {
    // Render an error message if there was an issue fetching the data
    return <p>Error :(</p>;
  }

  // If the data has been fetched successfully, proceed with rendering the leaderboard
  const group = data.getOneGroup;
  const members = group.members;
  const habitName = group.description;

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
      <tr key={member.username}>
        <td>{member.username}</td>
        <td>{member.streak}</td>
      </tr>
    );
  });

  return (
    <div className="middle">
      <h2 id="groups" className="mb-4 mt-10 text-center text-4xl font-bold">
        {group.name}
      </h2>
      <img
        src={`../src/icons/${group.iconFamily}.png`}
        alt="group icon"
        className="mb-2 w-16 drop-shadow-md"
      />
      <table className="table-auto border-collapse border-2 border-rally-purple bg-white bg-opacity-50 text-center">
        <tr>
          <th
            colSpan="2"
            className="my-3 border-b-2 border-inherit font-audiowide text-2xl font-bold"
          >
            LeaderBoard
          </th>
        </tr>
        <tr>
          <th>Username</th>
          <th>Streak</th>
        </tr>
        {sortedMemberListItems}
      </table>
    </div>
  );
}
