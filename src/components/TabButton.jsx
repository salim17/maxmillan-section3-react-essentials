export default function TabButton({ isActive, children, ...props }) {
  console.log("Tab button component executing");
  return (
    <li>
      <button className={isActive ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}
