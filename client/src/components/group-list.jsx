import { useMutation, useQuery } from "@apollo/client";
import PropTypes from "prop-types";
import { JOIN_GROUP } from "../schema/mutations";
import { GET_GROUPS } from "../schema/queries";

export default function GroupList({ currentUser }) {
  const { data } = useQuery(GET_GROUPS);
  const [addMember] = useMutation(JOIN_GROUP);
  const userGroups = currentUser.groups;

  // TODO: Rename 'getAllGroups' to sound more like a PROPERTY  and not a METHOD (e.g. allGroups)
  const allGroupsThatUserIsNotIn = data?.getAllGroups
    .filter(
      (group) => !userGroups.find((userGroup) => userGroup.id === group.id)
    )
    .map((group) => (
      <li
        key={group.id}
        className="semi-t-card mx-5 mb-2 flex justify-between px-2"
      >
        <div>
          <h3 className="text-lg font-semibold">{group.name}</h3>
          <h4 className="text-xs text-light-grey">{group.description}</h4>
        </div>
        <button
          type="button"
          className="my-2 rounded-lg border-2 border-black bg-white px-5 font-semibold drop-shadow-md hover:animate-pulse"
          onClick={() =>
            addMember({
              variables: { groupId: group.id, userId: currentUser.id },
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
      <ul>{allGroupsThatUserIsNotIn}</ul>
    </div>
  );
}

GroupList.propTypes = {
  currentUser: PropTypes.string.isRequired,
};
