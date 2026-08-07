function Button({
  children,
  variant = "primary",
  onClick,
  type = "button",
}) {
  const base =
    "px-6 py-3 rounded-xl font-semibold transition duration-200";

  const styles = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200",
    secondary:
      "border border-blue-600 text-blue-600 hover:bg-blue-50",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${styles[variant]}`}
    >
      {children}
    </button>
  );
}

export default Button;