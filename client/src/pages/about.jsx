/* eslint-disable react/no-unescaped-entities */
export default function About() {
  return (
    <main className="px-4 pt-14 text-center">
      <h2 className="pb-5 font-audiowide text-3xl">Welcome to Rally</h2>
      <p className="">
        Rally is a group-oriented goal tracking platform. It is designed to help
        you and your group members stay on top of your shared goals with
        leaderboards for each of your groups and profile badges that change
        based on your personal streaks.
      </p>
      <h3 className="pt-6 font-audiowide text-xl">Badges</h3>
      <div className="flex justify-evenly pt-1">
        <div className="middle">
          <img src="../src/icons/workout.png" alt="workout" className="w-10" />
          <p className="text-xs text-light-grey">Base</p>
        </div>
        <div className="middle">
          <img
            src="../src/icons/workout3rd.png"
            alt="bronze workout"
            className="w-10"
          />
          <p className="text-xs text-light-grey">5 days</p>
        </div>
        <div className="middle">
          <img
            src="../src/icons/workout2nd.png"
            alt="silver workout"
            className="w-10"
          />
          <p className="text-xs text-light-grey">10 days</p>
        </div>
        <div className="middle">
          <img
            src="../src/icons/workout1st.png"
            alt="gold workout"
            className="w-10"
          />
          <p className="text-xs text-light-grey">15+ days</p>
        </div>
      </div>
      <h3 className="pt-6 font-audiowide text-xl">How to use Rally</h3>
      <p className="text-middle pt-1">
        Once you have created an account, you can check out the Groups page to
        either join one of our existing groups, or make your own! Once you've
        joined your groups, check out your profile to see your Badgers, Daily
        Goals, and access your group's Leaderboards.
      </p>
    </main>
  );
}
