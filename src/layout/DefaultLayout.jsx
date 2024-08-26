import AppContent from "./AppContent";
import NavBar from "../Components/navBar";

const DefaultLayout = ({ active, setActive }) => {
  return (
    <>
      <div
        className={`flex flex-row w-[100vw] relative h-[100vh] ${
          active === "home" ? "bg-grey-dark" : "bg-grey"
        }`}
      >
        <div
          className={`shadow overflow-y-auto w-full ${
            active !== "admin" && "mt - 2"
          } `}
        >
          {active !== "admin" && (
            <NavBar active={active} setActive={setActive} />
          )}
          <div className="flex flex-grow justify-center">
            <AppContent setActive={setActive} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;
