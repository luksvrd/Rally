import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_ONE_GROUP } from "../schema/queries";

export default function Leaderboard() {
  const params = useParams();
  const groupId = params.groupId;

  const { loading, error, data } = useQuery(GET_ONE_GROUP, {
    variables: { groupId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  else {
    const members = data?.getOneGroup.members;

    const description = data.getOneGroup.description;

    const memberListItems = members?.map((member) => {
      const habit = member.habits.find((h) => h.name === description);
      const streak = habit?.streak || 0;
      return (
        <li
          key={member.username}
          className="semi-t-card my-2 px-12 py-2 text-xl"
        >
          <h3>{member.username}</h3>
          <h3>{streak} days</h3>
        </li>
      );
    });

    return (
      <div className="middle">
        <h2 id="groups" className="profile-headers my-3">
          {data.getOneGroup.name}
        </h2>
        <ul>{memberListItems}</ul>
      </div>
    );
  }
}
