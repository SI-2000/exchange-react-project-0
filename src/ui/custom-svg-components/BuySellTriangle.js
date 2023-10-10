import classes from "./BuySellTriangle.module.css";

export default function BuySellTriangle({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="none"
      className={`${classes["buy-sell-triangle"]} ${classes[className]}`}
    >
      <path d="M0 0L13.8431 0C14.904 0 15.9214 0.421427 16.6716 1.17157L28.6716 13.1716C30.2337 14.7337 30.2337 17.2663 28.6716 18.8284L16.6716 30.8284C15.9214 31.5786 14.904 32 13.8431 32H0V0Z"></path>
    </svg>
  );
}
