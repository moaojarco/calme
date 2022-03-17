export const ExtraControls = ({ onClick }) => {
  return (
    <button className="flex" onClick={onClick}>
      <p className="text-sm w-20">More Songs</p>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="12" r="10"></circle>{" "}
        <circle cx="12" cy="12" r="3"></circle>
      </svg>
    </button>
  );
};
