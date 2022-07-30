import { FaBeer } from "react-icons/fa";
import Link from "next/link";
import { menuItems } from "./menuItems";

const Header = () => {
  return (
    <div className="text-xl bg-met-red text-yellow-50 px-4 flex justify-between py-4">
      <div>
        <h3 className="text-2xl font-bold">
          <Link href="/#">
            <a>Guacamole</a>
          </Link>
        </h3>
      </div>

      <nav className="flex justify-around gap-6">
        <ul className="flex justify-around gap-6">
          {menuItems.map((menu, index) => {
            return (
              <li key={index}>
                <Link href="/#">
                  <a>{menu.title}</a>
                </Link>
              </li>
            );
          })}
        </ul>
        <input
          type="text"
          placeholder="Search..."
          className="rounded-xl py-1 px-2 pl-4"
        ></input>
      </nav>
    </div>
  );
};

export default Header;
