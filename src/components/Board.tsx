import Square from "./Square";

interface BoardProps {
  squares: (string | null)[];
  handleClick: (i: number) => void;
}

const Board: React.FC<BoardProps> = ({ squares, handleClick }) => {
  return (
    <div className="p-px bg-gradient-to-r rounded-xl from-primary via-secondary to-accent">
      <div className="p-3 flex flex-col justify-center items-center gap-3 rounded-xl sm:p-2 sm:gap-4 md:p-3 md:gap-5 lg:p-4 lg:gap-6 bg-background bg-opacity-90">
        <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
    </div>
  );
};

export default Board;
