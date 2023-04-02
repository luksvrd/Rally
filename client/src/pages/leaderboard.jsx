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
  else
    return (
      <div className="middle">
        <h2 id="groups" className="profile-headers my-3">
          {data.getOneGroup.name}
        </h2>
      </div>
    );
}
