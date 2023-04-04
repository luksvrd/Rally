import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { ADD_DATE } from "../schema/mutations";
import { CURRENT_USER } from "../schema/queries";

export default function Habit() {
  const { data } = useQuery(CURRENT_USER); // A hook that queries the Apollo GraphQL server and returns data
  const [addDateCompleted] = useMutation(ADD_DATE, {
    // A hook that runs a GraphQL mutation and returns the result
    refetchQueries: [{ query: CURRENT_USER }], // An array of queries to refetch after the mutation is complete
  });
  const [isChecked, setIsChecked] = useState(false); // A state variable and setter function for the checked state of the checkbox

  const habits = data?.currentUser.habits; // Destructures the "currentUser" and "habits" properties from the query data

  function handleCheckboxClick(habitId) {
    // Event handler function for when the checkbox is clicked
    addDateCompleted({
      // Calls the mutation function to update the habit data
      variables: { userId: data.currentUser.id, habitId }, // Passes in the user ID and habit ID as variables for the mutation
    });
    setIsChecked((prevState) => ({
      // Updates the checked state of the checkbox based on previous state
      ...prevState,
      [habitId]: !prevState[habitId],
    }));
  }

  //   page has to reload in order to get the current user query?

  return habits?.map(
    (
      habit // Renders a list of habit items
    ) => (
      <li
        key={habit._id}
        className="w-100 items middle semi-t-card my-2 px-4 py-2"
      >
        <div className="flex">
          {/* Displays the name of the habit */}
          <h3 className="text mx-2 font-semibold">{habit.name}</h3>
          <input
            type="checkbox"
            className="cursor-pointer border-2 border-rally-purple checked:border-rally-blue checked:bg-rally-purple"
            // Calls the event handler function when the checkbox is clicked
            onClick={() => handleCheckboxClick(habit.id)}
            // Sets the checked state of the checkbox based on the isChecked state variable
            checked={isChecked[habit.id]}
          />
        </div>
        <div className="flex">
          {/* Displays the current streak for the habit */}
          <p className="habit-streak">Current streak:</p>
          <p className="habit-streak">{habit.streak} days</p>
        </div>
      </li>
    )
  );
}
