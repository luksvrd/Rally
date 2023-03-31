/* eslint-disable react/no-unescaped-entities */
export default function User() {
  return (
    <div className="middle">
      <h1 id="username" className="my-4 text-3xl">
        User
      </h1>

      <div>
        <h2 id="habits" className=" profile-headers my-3">
          Today's Goals
        </h2>
        <ul id="habit-list"></ul>
      </div>

      <div>
        <h2 id="groups" className="profile-headers my-3">
          Groups
        </h2>
        <ul id="group-list"></ul>
      </div>

      <div>
        <h2 id="friends" className="profile-headers my-3">
          Friends
        </h2>
        <ul id="friend-list"></ul>
      </div>
    </div>
  );
}
