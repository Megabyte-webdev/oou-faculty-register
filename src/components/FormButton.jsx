import Spinner from "./Spinner";

function FormBotton({ children, loading=false, onClick, height = 'h-[45px]', width = 'w-full', disabled = false }) {
  const baseClass = `relative ${width} ${height} 
    font-semibold text-white bg-blue-700 
    rounded-md focus:outline-none 
    disabled:opacity-50 disabled:cursor-not-allowed
    transition-all duration-200 ease-in-out
  `;

  const hoverClass = !loading && !disabled ? "hover:bg-blue-900 hover:shadow-lg" : "";

  return onClick ? (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${baseClass} ${hoverClass}`}
    >
      {children}
      {loading && <Spinner />}
    </button>
  ) : (
    <button
      type="submit"
      disabled={disabled}
      className={`${baseClass} ${hoverClass}`}
    >
      {children}
      {loading && <Spinner />}
    </button>
  );
}

export default FormBotton;
