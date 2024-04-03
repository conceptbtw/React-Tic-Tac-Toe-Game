export default function Header() {
  return (
    <header className="w-full pb-px flex justify-center items-center text-text bg-gradient-to-r from-primary via-secondary to-accent">
      <div className="w-full p-4 flex justify-center items-center bg-background bg-opacity-90">
        <h1 className="text-center text-3xl text-transparent bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text font-bold">
          Tic Tac Toe
        </h1>
      </div>
    </header>
  );
}
