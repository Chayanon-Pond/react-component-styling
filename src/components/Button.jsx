// Start coding here

function Button({ variant = 'primary', children }) {
  const VARIANTS = {
    primary: "#074EE8",
    secondary: "#07A4E8",
  };
  return (
    <button
      style={{
        color: "#fff",
        fontWeight: 400,
        padding: "16px",
        minWidth: "170px",
        backgroundColor: VARIANTS[variant],
      }}
    >
      {children}
    </button>
  );
}

export default Button;
