import { Link } from "react-router-dom";
import { navigationLinks } from "../../data/content";
import "../../App.css";
import { useLocation } from "react-router-dom";

export default function NavLinks({ variant = "desktop" }) {
  const location = useLocation();
  const classContainer =
    variant === "desktop"
      ? "hidden xl:flex flex-row gap-10 items-center justify-center w-[70%] px-5"
      : "flex flex-col gap-10 items-center justify-center h-full w-full";
  return (
    <div className={classContainer}>
      {navigationLinks.map((v, i) => (
        <Link
          key={v.name + i}
          to={v.href}
          className={`text-md font-semibold navigation-link-header ${
            v.href === location.pathname
              ? `text-shadow-2xs text-shadow-amber-200`
              : `text-shadow-none`
          } text-white`}
        >
          {v.name}
        </Link>
      ))}
      {variant !== "desktop" && <hr className="border w-75" />}
    </div>
  );
}
