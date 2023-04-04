import { useQuery } from "@apollo/client";
import CreateGroup from "../components/create-group";
import GroupList from "../components/group-list";
import { CURRENT_USER } from "../schema/queries";

export default function Groups() {
  const { loading, error, data } = useQuery(CURRENT_USER);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center">Error :(</p>;
  else
    return (
      <>
        <section className="middle lg:flex-row">
          <CreateGroup />
          <GroupList currentUser={data.currentUser} />
        </section>
      </>
    );
}
