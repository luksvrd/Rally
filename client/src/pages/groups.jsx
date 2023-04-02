import { useMutation, useQuery } from "@apollo/client";
import { Input } from "../components/form";
import { CREATEGROUP } from "../schema/mutations";
import { CURRENT_USER, GET_GROUPS } from "../schema/queries";

export default function Groups() {
  const [createGroup] = useMutation(CREATEGROUP);
  const currentUser = useQuery(CURRENT_USER);
  const groups = useQuery(GET_GROUPS);
  console.log(groups);

  const handleSubmit = (event) => {
    event.preventDefault();
    const fd = new FormData(event.target);
    const submission = Object.fromEntries(fd);
    const id = currentUser.data.currentUser.id;
    createGroup({ variables: { userId: id, groupData: submission } });
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-y-2 px-4"
      >
        <Input
          type="text"
          label="Group"
          id="name"
          placeholder="Enter your group name"
          required
        />
        <button
          type="submit"
          className="button mt-4 bg-green-500 hover:bg-green-300"
        >
          Create Group
        </button>
      </form>

      <div className="flex flex-col items-center gap-y-2 px-4">
        {groups.data &&
          groups.data.groups.map((group) => (
            <div
              key={group.id}
              className="flex flex-col items-center gap-y-2 px-4"
            >
              <h2>{group.name}</h2>
              <p>{group.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
