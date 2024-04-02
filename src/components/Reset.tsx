interface ResetProps {
  onClick: () => void;
}

const Reset: React.FC<ResetProps> = ({ onClick }) => {
  return <button onClick={onClick}>Reset</button>;
};

export default Reset;
