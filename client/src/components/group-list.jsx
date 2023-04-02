import { useMutation, useQuery } from "@apollo/client";
import PropTypes from "prop-types";
import { JOIN_GROUP } from "../schema/mutations";
import { GET_GROUPS } from "../schema/queries";

export default function GroupList({ currentUser }) {
  const { data } = useQuery(GET_GROUPS);
  const [addMember] = useMutation(JOIN_GROUP);

  const groups = data?.getAllGroups;

  console.log(currentUser, "from groupList");

  const groupListItems = groups?.map((group) => (
    <li key={group._id} className="semi-t-card my-2 px-12 py-2 text-xl">
      <h3>{group.name}</h3>
      <button
        type="button"
        onClick={() =>
          addMember({
            variables: { groupId: group.id, userId: currentUser },
          })
        }
      >
        Join group
      </button>
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

GroupList.propTypes = {
  currentUser: PropTypes.string.isRequired,
};
