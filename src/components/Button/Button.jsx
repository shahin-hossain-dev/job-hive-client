const buttonClass = [
  "relative",
  "btn",
  "group",
  "px-8",
  "h-12",
  "w-full",
  "text-neutral",
  "rounded-md",
  "hover:bg-[#56F09F]",
  "bg-[#56F09F]",
  "hover:text-white",
  "before:absolute",
  "before:inset-0",
  "before:bg-[#33CC77]",
  "before:scale-x-0 ",
  "before:origin-right",
  "before:transition",
  "before:duration-500",
  "hover:before:scale-x-100",
  "hover:before:origin-left",
  "hover:before:rounded-md",
];

const buttonSetting = () => {
  const button = buttonClass.toString().split(",").join(" ");
  return button;
};

export default buttonSetting;
