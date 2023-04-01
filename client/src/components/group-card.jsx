import PropTypes from "prop-types";

export default function GroupsCard({ group }) {
  return (
    <div className="m-4 w-40 rounded-lg bg-indigo-300 text-center">
      <h2 className="">{group.name}</h2>
    </div>
  );
}

GroupsCard.propTypes = {
  group: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
