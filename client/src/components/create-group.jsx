import { useMutation, useQuery } from "@apollo/client";
import { CREATEGROUP } from "../schema/mutations";
import { CURRENT_USER } from "../schema/queries";
import { Input } from "./form";

export default function CreateGroup() {
  const [createGroup] = useMutation(CREATEGROUP);
  const currentUser = useQuery(CURRENT_USER);

  const handleSubmit = (event) => {
    event.preventDefault();
    const fd = new FormData(event.target);
    const submissionData = {
      name: fd.get("name"),
      description: fd.get("description"),
      iconFamily: fd.get("iconFamily"),
    };
    const submission = submissionData;
    // variable to find which radio button is checked
    const radio = document.querySelector('input[type="checkbox"]:checked');
    // variable to find the id of the checked radio button
    const radioId = radio.id;
    submission.iconFamily = radioId;
    const id = currentUser.data.currentUser.id;
    createGroup({ variables: { userId: id, groupData: submission } });
  };
  return (
    <div className="middle semi-t-card mx-5 py-5">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-y-2 px-4"
      >
        <Input
          type="text"
          label="Group"
          id="name"
          placeholder="Group Name"
          required
        />
        <Input
          type="text"
          label="Description"
          id="description"
          placeholder="Daily Goal"
          required
        />
        <h2 className="font-bold">Select a Badge</h2>
        <div className="grid grid-cols-4 gap-2">
          <div className="middle">
            <img
              src="../src/icons/walking.png"
              alt="walking"
              className="w-10 drop-shadow"
            />
            <label className="flex">
              <input
                type="checkbox"
                name="walking"
                id="walking"
                className="checkbox"
              />
            </label>
          </div>
          <div className="middle">
            <img
              src="../src/icons/reading.png"
              alt="reading"
              className="w-10 drop-shadow"
            />
            <label className="flex">
              <input
                type="checkbox"
                name="reading"
                id="reading"
                className="checkbox"
              />
            </label>
          </div>
          <div className="middle">
            <img
              src="../src/icons/meditating.png"
              alt="meditating"
              className="w-10 drop-shadow"
            />
            <label className="flex">
              <input
                type="checkbox"
                name="meditating"
                id="meditating"
                className="checkbox"
              />
            </label>
          </div>
          <div className="middle">
            <img
              src="../src/icons/water.png"
              alt="water"
              className="w-10 drop-shadow"
            />
            <label className="flex">
              <input
                type="checkbox"
                name="water"
                id="water"
                className="checkbox"
              />
            </label>
          </div>
          <div className="middle">
            <img
              src="../src/icons/workout.png"
              alt="workout"
              className="w-10 drop-shadow"
            />
            <label className="flex">
              <input
                type="checkbox"
                name="workout"
                id="workout"
                className="checkbox"
              />
            </label>
          </div>
          <div className="middle">
            <img
              src="../src/icons/sleeping.png"
              alt="sleeping"
              className="w-10 drop-shadow"
            />
            <label className="flex">
              <input
                type="checkbox"
                name="sleeping"
                id="sleeping"
                className="checkbox"
              />
            </label>
          </div>
          <div className="middle">
            <img
              src="../src/icons/learning.png"
              alt="learning"
              className="w-10 drop-shadow"
            />
            <label className="flex">
              <input
                type="checkbox"
                name="learning"
                id="learning"
                className="checkbox"
              />
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="my-2 rounded-lg border-2 border-black bg-white px-6 font-semibold drop-shadow-md"
        >
          Create Group
        </button>
      </form>
    </div>
  );
}
