export default function Header() {
  return (
    <header className="my-4 flex items-center justify-center">
      <img
        src="/src/icons/rally-logo.png"
        alt="rally-logo"
        className="mx-1 w-8 rounded border md:w-10"
      />
      <h1 className="text-center font-audiowide text-4xl font-bold md:text-5xl">
        RALLY
      </h1>
    </header>
  );
}
