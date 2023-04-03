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
    console.log(data, "data");

    const members = data?.getOneGroup.members;
    console.log(members, "members");

    const habitArray = members.map((member) => {
      return member.habits;
    });
    console.log(habitArray, "habitArray");

    const description = data.getOneGroup.description;

    // const found = habitArray[0].find((habit) => habit.name === description);
    // console.log(found, "found");
    const streakArray = [];

    for (let i = 0; i < habitArray.length; i++) {
      const found = habitArray[i].find((habit) => habit.name === description);
      console.log(found.streak, "found");
      streakArray.push(found.streak);
    }

    console.log(streakArray);

    // const memberListItems = members?.map((member) => (
    //   <li key={member.username} className="semi-t-card my-2 px-12 py-2 text-xl">
    //     <h3>{member.username}</h3>
    //   </li>
    // ));

    const memberListItems = members?.map((member) => {
      const habit = member.habits.find((h) => h.name === description);
      const streak = habit?.streak || 0;
      return (
        <li
          key={member.username}
          className="semi-t-card my-2 px-12 py-2 text-xl"
        >
          <h3>{member.username}</h3>
          <h3>{streak}</h3>
        </li>
      );
    });

    // const streakListItems = streakArray?.map((streak) => )

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
