import { Link } from "react-router-dom";
export const navLinks = [
  {
    id: "home",
    title: "HOME",
  },
  {
    id: "about",
    title: "ABOUT",
  },
  {
    id: "skills",
    title: "SKILLS",
  },
  {
    id: "projects",
    title: "PROJECTS",
  },
  {
    id: "work",
    title: "Service",
  },
  {
    id: "blog",
    title: "BLOG",
  },
  {
    id: "contact",
    title: "CONTACT",
  },
  {
    id: "admin",
    title: "IS ADMIN ?",
  },
];

const NavBar = ({ active, setActive }) => {
  return (
    <div className="w-[100%]">
      <nav className=" flex flex-row items-center justify-between">
        <span className="justify-stretch text-[18px] font-extrabold uppercase text-blue mx-10">
          Fayaz Ahamed D
        </span>
        <ul className="flex justify-between flex-wrap">
          {navLinks.map((item, index) => (
            <li
              className={` font-semibold text-[17px] p-2 mr-10 ${
                active === item.id ? "text-blue" : "text-true-black"
              }`}
              key={index}
              onClick={() => setActive(item.id)}
            >
              <Link to={`/${item.id}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
