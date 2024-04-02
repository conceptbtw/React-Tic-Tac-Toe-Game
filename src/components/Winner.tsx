import useWinner from "../hooks/useWinner";

interface WinnerProps {
  squares: (string | null)[];
}

const Winner: React.FC<WinnerProps> = ({ squares }) => {
  const winner = useWinner(squares);

  const result = winner
    ? `Winner: ${winner}`
    : squares.every((square) => square !== null)
    ? "It's a draw!"
    : "";

  return <div className="">{result}</div>;
};

export default Winner;
