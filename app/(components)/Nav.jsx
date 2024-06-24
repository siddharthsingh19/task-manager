import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-4">
        <Link href="/" className="flex gap-2">
          <FontAwesomeIcon icon={faHome} className="icon" />
          <p className="text-white">Home</p>
        </Link>
        <Link href="/TicketPage/new" className="flex gap-2">
          <FontAwesomeIcon icon={faTicket} className="icon" />
          <p className="text-white">Create Task</p>
        </Link>
      </div>
      <div>
        <p className=" text-default-text">siddharth.singh19@outlook.com</p>
      </div>
    </nav>
  );
};

export default Nav;
