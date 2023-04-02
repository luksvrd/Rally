import CreateGroup from "../components/create-group";
import GroupsCard from "../components/group-card";
export default function Groups() {
  return (
    <>
      <CreateGroup />
      <div className="flex flex-col items-center">
        <GroupsCard />
        <GroupsCard />
      </div>
    </>
