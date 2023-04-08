"use client";

import { User } from "@prisma/client";

import { Container } from "@/app/components";

import Logo from "./logo";
import Search from "./search";
import UserMenu from "./user-menu";

type NavbarProps = {
  currentUser?: User | null;
};

const Navbar = ({ currentUser }: NavbarProps) => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-grow items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
