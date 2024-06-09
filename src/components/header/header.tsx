"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { DrawerHeader } from "./drawer-hader";
import { IoMenuOutline } from "react-icons/io5";

export const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <>
      <header className="container mx-auto p-4 md:px-6 md:py-12 flex items-center justify-between ">
        <div className="flex justify-between w-full px-2">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <Image
              src="/svg/quadria.svg"
              alt="logo"
              width={100}
              height={100}
              className="w-24 h-auto  md:w-44 md:h-12"
              priority
            />
          </Link>
          <nav className="hidden md:flex md:items-center gap-16 text-muted-foreground text-sm font-medium">
            <Link
              href="#"
              className="hover:underline underline-offset-4"
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="#"
              className="hover:underline underline-offset-4"
              prefetch={false}
            >
              Quem Somos
            </Link>
            <Link
              href="#"
              className="hover:underline underline-offset-4"
              prefetch={false}
            >
              Produtos
            </Link>
            <Link
              href="#"
              className="hover:underline underline-offset-4"
              prefetch={false}
            >
              Contato
            </Link>
          </nav>
        </div>
        <button
          className="rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-950 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:ring-gray-300 md:hidden"
          type="button"
          onClick={toggleDrawer}
        >
          <IoMenuOutline className="size-7" />

          <span className="sr-only">Open menu</span>
        </button>
      </header>

      <DrawerHeader isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
    </>
  );
};
