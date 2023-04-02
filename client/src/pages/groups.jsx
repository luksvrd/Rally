import { useQuery } from "@apollo/client";
import CreateGroup from "../components/create-group";
import GroupsCard from "../components/group-card";
import { GET_GROUPS } from "../schema/queries";
export default function Groups() {
  const groups = useQuery(GET_GROUPS);
  const groupData = groups.data.getAllGroups;

  console.log(groups);
  return (
    <>
      <CreateGroup />
      <div className="flex flex-col items-center">
        {groupData.map((group) => {
          return <GroupsCard group={group} key={group.id} />;
        })}
      </div>
    </>
  );
}
