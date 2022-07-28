import { FaBeer } from "react-icons/fa";

const Header = () => {
  return (
    <div className="text-xl bg-met-red text-yellow-50 px-4 flex justify-between py-4">
      <div>
        <h3 className="text-2xl font-bold">Guacamole</h3>
      </div>

      <div className="flex justify-around gap-6">
        <div>Collections</div>
        <div>Sign Up</div>
        <input
          type="text"
          placeholder="Search..."
          className="rounded-xl py-1 px-2 pl-4"
        ></input>
      </div>
    </div>
  );
};

export default Header;
