import { FiLogIn } from "react-icons/fi";
import { MdDarkMode } from "react-icons/md";
const Navbar = () => {
  return (
    <>
      <div className="">
        <div>
          <div>Logo</div>
        </div>
        <div>
          <ul>
            <li>Home</li>
            <li>Mentorship</li>
            <li>Signals</li>
            <li>Minor AI</li>
            <li>About us</li>
          </ul>
        </div>
        <div>
          <button>Log in </button>
          <button>
            <FiLogIn />
          </button>
          <button>
            <MdDarkMode />
          </button>
        </div>
      </div>
    </>
  );
};
export default Navbar;
