interface ResetProps {
  onClick: () => void;
}

const Reset: React.FC<ResetProps> = ({ onClick }) => {
  return (
    <button
      className="w-full p-px h-16 rounded-xl sm:h-20 md:h-24 lg:h-28 bg-gradient-to-r from-primary via-secondary to-accent hover:scale-105 active:scale-95 transition-all ease-in-out duration-250"
      aria-label="reset"
      onClick={onClick}
    >
      <div className="w-full h-full flex justify-center items-center rounded-xl bg-background bg-opacity-90">
        <span className="text-xl text-transparent bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text sm:text-2xl md:text-3xl lg:text-4xl">
          Reset
        </span>
      </div>
    </button>
  );
};

export default Reset;
