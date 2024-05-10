const buttonClass = [
  "relative",
  "group",
  "px-8",
  "h-12",
  "w-full",
  "rounded-md",
  "bg-[#56F09F]",
  "hover:text-white",
  "before:absolute",
  "before:inset-0",
  "before:bg-[#45c380]",
  "before:scale-x-0 ",
  "before:origin-right",
  "before:transition",
  "before:duration-300",
  "hover:before:scale-x-100",
  "hover:before:origin-left",
  "hover:before:rounded-md",
];

const buttonSetting = () => {
  const button = buttonClass.toString().split(",").join(" ");
  return button;
};

export default buttonSetting;
