const Button = ({ color }) => {
  return (
    <div>
      <button
        className={`bg-transparent hover:bg-${color}-500 text-${color}-700
       font-semibold hover:text-${color} py-2 px-4 border border-${color}-500 
       hover:border-transparent rounded`}
      >
        Button
      </button>
    </div>
  );
};

export default Button;
