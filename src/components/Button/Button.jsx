const Button = () => {
  return (
    <button
      className="relative group px-8 h-14 bg-[#56F09F] hover:text-white
                      before:absolute 
                      before:inset-0 
                      before:bg-[#45c380]
                      before:scale-x-0 
                      before:origin-right
                      before:transition
                      before:duration-300
                      hover:before:scale-x-100
                      hover:before:origin-left
                      "
    >
      <span className="relative uppercase text-base font-semibold">
        Apply now
      </span>
    </button>
  );
};

export default Button;
