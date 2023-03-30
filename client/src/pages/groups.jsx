import { Input } from "../components/form";
import { CREATEGROUP } from "../schema/mutations";

export default function Groups() {
  const createGroup = (event) => {
    event.preventDefault();
  };
  return (
    <form
      onSubmit={createGroup}
      className="flex flex-col items-center gap-y-2 px-4"
    >
      <Input
        type="text"
        label="Group"
        id="group"
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
  );
}
