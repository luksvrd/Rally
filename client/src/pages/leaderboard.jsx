import { useQuery } from "@apollo/client";
import { GET_ONE_GROUP } from "../schema/queries";

export default function Leaderboard() {
  //   const params = useParams();
  const groupId = window.location.href.split("/")[4];
  console.log(groupId, "window");
  const { data } = useQuery(GET_ONE_GROUP, {
    variables: { groupId },
  });
  console.log(data, "data");

  return (
    <div className="middle">
      <h2 id="groups" className="profile-headers my-3">
        Hello
      </h2>
    </div>
  );
}
