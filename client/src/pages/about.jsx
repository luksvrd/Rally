import { workoutIcons } from "../icons/icons";
/* eslint-disable react/no-unescaped-entities */
export default function About() {
  const workoutBase = workoutIcons[0];
  const workoutBronze = workoutIcons[1];
  const workoutSilver = workoutIcons[2];
  const workoutGold = workoutIcons[3];

  return (
    <main className="px-4 pt-14 text-center md:px-16 md:pt-24 lg:px-20 lg:pt-14">
      <h2 className="pb-5 font-audiowide text-3xl">Welcome to Rally</h2>
      <p className="md:text-xl">
        Rally is a group-oriented goal tracking platform. It is designed to help
        you and your group members stay on top of your shared goals with
        leaderboards for each of your groups and profile badges that change
        based on your personal streaks.
      </p>
      <h3 className="pt-6 font-audiowide md:pt-11 md:text-2xl">Badges</h3>
      <div className="flex flex-col">
        <div className="flex justify-evenly pt-1">
          <div className="middle">
            <img src={workoutBase} alt="workout" className="w-10" />
            <p className="text-xs text-light-grey">Base</p>
          </div>
          <div className="middle">
            <img src={workoutBronze} alt="bronze workout" className="w-10" />
            <p className="text-xs text-light-grey">5 days</p>
          </div>
          <div className="middle">
            <img src={workoutSilver} alt="silver workout" className="w-10" />
            <p className="text-xs text-light-grey">10 days</p>
          </div>
          <div className="middle">
            <img src={workoutGold} alt="gold workout" className="w-10" />
            <p className="text-xs text-light-grey">15+ days</p>
          </div>
        </div>
        <p className="py-1 text-sm md:pt-5">
          As your streak grows, your badges will change!
        </p>
      </div>
      <h3 className="pt-6 font-audiowide md:pt-11 md:text-2xl">
        How to use Rally
      </h3>
      <p className="text-middle pt-1 md:text-xl lg:pt-5">
        Once you have created an account, you can check out the Groups page to
        either join one of our existing groups, or make your own! Once you've
        joined your groups, check out your profile to see your Badgers, Daily
        Goals, and access your group's Leaderboards.
      </p>
    </main>
  );
}
