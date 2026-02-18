export default function ButtonComponent({
  color = "bg-color-btn1",
  rounded = "rounded-xl",
  text,
  onClick,
  paddingX = "px-5",
  paddingY = "px-3",
  margin,
  width,
  hoverColor = "hover:bg-color-btn1/90",
}) {
  return (
    <button
      onClick={onClick}
      className={`${color}  ${rounded} ${paddingX} ${paddingY} ${width} ${hoverColor}  ${margin} text-white text-sm cursor-pointer  `}
    >
      {text}
    </button>
  );
}
