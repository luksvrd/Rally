import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { ADD_DATE } from "../schema/mutations";
import { CURRENT_USER } from "../schema/queries";

export default function Habit() {
  const { data } = useQuery(CURRENT_USER);
  const [addDateCompleted] = useMutation(ADD_DATE, {
    refetchQueries: [{ query: CURRENT_USER }],
  });
  const [isChecked, setIsChecked] = useState(false);

  console.log(data);

  const habits = data?.currentUser.habits;

  function handleCheckboxClick(habitId) {
    addDateCompleted({
      variables: { userId: data.currentUser.id, habitId },
    });
    setIsChecked((prevState) => ({
      ...prevState,
      [habitId]: !prevState[habitId],
    }));
  }

  //   page has to reload in order to get the current user query?

  return habits?.map((habit) => (
    <li
      key={habit._id}
      className="w-100 items middle semi-t-card my-2 px-4 py-2"
    >
      <div className="flex">
        <h3 className="text mx-2 font-semibold">{habit.name}</h3>
        <input
          type="checkbox"
          className="border-2 border-rally-purple checked:border-rally-blue checked:bg-rally-purple"
          onClick={() => handleCheckboxClick(habit.id)}
          checked={isChecked[habit.id]}
        />
      </div>
      <div className="flex">
        <p className="habit-streak">Current streak:</p>
        <p className="habit-streak">{habit.streak} days</p>
      </div>
    </li>
  ));
}
