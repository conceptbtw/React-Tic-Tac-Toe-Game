interface SquareProps {
  value: string | null;
  onSquareClick: () => void;
}

const Square: React.FC<SquareProps> = ({ value, onSquareClick }) => {
  return (
    <button className="w-16 h-16 border" onClick={onSquareClick}>
      {value}
    </button>
  );
};

export default Square;
