function BaseButton({
  children: label,
  onClick,
  classes = "bg-gray-900 text-white hover:bg-gray-800",
}) {
  return (
    <button
      className={`w-72 font-medium flex items-center justify-center rounded-full p-4 text-lg hover:shadow-2xl focus:outline-none transition duration-200 ease-in-out ${classes}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default BaseButton;
