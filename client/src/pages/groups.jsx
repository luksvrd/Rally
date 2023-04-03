import { useQuery } from "@apollo/client";
import CreateGroup from "../components/create-group";
import GroupList from "../components/group-list";
import { CURRENT_USER } from "../schema/queries";

export default function Groups() {
  const { loading, error, data } = useQuery(CURRENT_USER);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  else
    return (
      <>
        <CreateGroup />
        <GroupList currentUser={data.currentUser.id} />
      </>
    );
}
