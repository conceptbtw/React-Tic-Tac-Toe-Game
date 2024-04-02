interface SquareProps {
  value: string | null;
  onSquareClick: () => void;
}

const Square: React.FC<SquareProps> = ({ value, onSquareClick }) => {
  const icon =
    value === "x"
      ? `fa-solid fa-${value} text-transparent bg-gradient-to-tr from-darkaccent to-accent bg-clip-text`
      : `fa-solid fa-${value} text-transparent bg-gradient-to-tr from-darksecondary to-secondary bg-clip-text`;

  return (
    <button
      className="w-20 h-20 border border-text border-opacity-10 rounded-xl sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 hover:scale-105 active:scale-95 transition-all ease-in-out duration-250"
      onClick={onSquareClick}
    >
      <div className="w-full h-full flex justify-center items-center rounded-xl bg-background">
        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          <i className={icon}></i>
        </span>
      </div>
    </button>
  );
};

export default Square;
