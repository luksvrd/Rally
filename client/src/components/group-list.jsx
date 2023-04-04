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
    <li
      key={group._id}
      className="semi-t-card mx-5 mb-2 flex justify-between px-2"
    >
      <div>
        <h3 className="text-lg font-semibold">{group.name}</h3>
        <h4 className="text-xs text-gray-600">{group.description}</h4>
      </div>
      <button
        type="button"
        className="my-2 rounded-lg border-2 border-black bg-white px-5 font-semibold drop-shadow-md hover:border-rally-blue"
        onClick={() =>
          addMember({
            variables: { groupId: group.id, userId: currentUser },
          })
        }
      >
        Join
      </button>
    </li>
  ));

  return (
    <div className="middle">
      <h2 id="groups" className="profile-headers mb-2 mt-5">
        All Groups
      </h2>
      <ul>{groupListItems}</ul>
    </div>
  );
}

GroupList.propTypes = {
  currentUser: PropTypes.string.isRequired,
};
