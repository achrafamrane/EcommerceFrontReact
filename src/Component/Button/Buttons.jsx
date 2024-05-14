const Buttons = ({ name, children, background, colorText, handleFunction }) => {
  return (
    <div className="pt-2">
      <button
        className={`flex items-center justify-center space-x-2 border m-2  rounded-full w-full h-10
       text-${colorText} text-sm ${background} hover:h-9 `}
        onClick={handleFunction}
      >
        <span> {children}</span> <span> {name}</span>
      </button>
    </div>
  );
};

export default Buttons;
