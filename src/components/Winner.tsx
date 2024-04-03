import useWinner from "../hooks/useWinner";

interface WinnerProps {
  squares: (string | null)[];
}

const Winner: React.FC<WinnerProps> = ({ squares }) => {
  const winner = useWinner(squares);

  const result = winner
    ? `Winner: ${winner.toUpperCase()}!`
    : squares.every((square) => square !== null)
    ? "It's a draw!"
    : "";

  return (
    <div className="w-full p-px h-16 rounded-xl sm:h-20 md:h-24 lg:h-28 bg-gradient-to-r from-primary via-secondary to-accent">
      <div className="w-full h-full flex justify-center items-center rounded-xl bg-background bg-opacity-90">
        <span className="text-center text-xl text-transparent bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text sm:text-2xl md:text-3xl lg:text-4xl">
          {result}
        </span>
      </div>
    </div>
  );
};

export default Winner;
