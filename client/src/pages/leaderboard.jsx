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

    return (
      <li key={member.username} className="semi-t-card my-2 px-12 py-2 text-xl">
        <h3>{member.username}</h3>
        <h3>{habit.streak}</h3>
      </li>
    );
  });

  return (
    <div className="middle">
      <h2 id="groups" className="profile-headers my-3">
        {group.name}
      </h2>
      <ul>{memberListItems}</ul>
    </div>
  );
}
