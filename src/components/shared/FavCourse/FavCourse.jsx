export default function FavCourse({
  svg,
  title,
  desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
  colorBox,
}) {
  return (
    <>
      <div className="flex flex-col justify-center items-center px-5">
        <div className={`${colorBox} rounded-md size-20 flex justify-center items-center`}>{svg}</div>
        <h3 className="text-text-primary text-xl my-4 font-semibold">{title}</h3>
        <p className="text-gray-400 text-center">{desc}</p>
      </div>
    </>
  );
}
