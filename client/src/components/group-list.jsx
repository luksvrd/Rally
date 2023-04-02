import { useQuery } from "@apollo/client";
import { GET_GROUPS } from "../schema/queries";

export default function GroupList() {
  const { data } = useQuery(GET_GROUPS);
  console.log(data, "data");

  const groups = data?.getAllGroups;
  console.log(groups, "groups");

  const groupListItems = groups?.map((group) => (
    <li key={group._id} className="semi-t-card my-2 px-12 py-2 text-xl">
      <h3>{group.name}</h3>
    </li>
  ));

  return (
    <div className="middle">
      <h2 id="groups" className="profile-headers my-3">
        All Groups
      </h2>
      <ul>{groupListItems}</ul>
    </div>
  );
}
