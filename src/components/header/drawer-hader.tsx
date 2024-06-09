import Link from "next/link";
import { IoMdClose } from "react-icons/io";

interface DrawerProps {
  isOpen: boolean;
  toggleDrawer: () => void;
}

export const DrawerHeader = ({ isOpen, toggleDrawer }: DrawerProps) => {
  return (
 
      <div
        className={`fixed inset-y-0 right-0 z-40 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out bg-white dark:bg-gray-950 shadow-lg w-64 overflow-y-auto`}
      >
        <div className="flex items-center justify-between p-4 dark:border-gray-800">
          <h2 className="text-lg font-medium text-gray-900 dark:text-gray-50">
            Menu
          </h2>
          <button
            className="rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-950 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:ring-gray-300"
            type="button"
            onClick={toggleDrawer}
          >
            <IoMdClose className="h-6 w-6" />

            <span className="sr-only">Close menu</span>
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-4 ">
          <Link
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="/about"
          >
            Sobre
          </Link>
          <Link
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="/contact"
          >
            Contato
          </Link>
          <div className="flex justify-between items-center pr-4"></div>
        </nav>
      </div>
  
  );
};
