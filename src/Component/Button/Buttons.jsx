const Buttons = ({ name, children, background, colorText }) => {
  return (
    <div className="pt-2">
      <button
        className={`flex items-center justify-center space-x-1 border  rounded-full w-48 h-10
       text-${colorText} bg-${background} hover:h-11 `}
      >
        <span> {children}</span> <span> {name}</span>
      </button>
    </div>
  );
};

export default Buttons;
