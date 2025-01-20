"use client";
{
  /**"use client";
import React from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import DropDown from "./DropDown";

const Navbar = () => {
  const { data: session, status } = useSession();
  {
    /**if (status === "loading") {
    return <div>Loading...</div>; // You can replace this with a proper loading state or spinner
  } 
  }

  return (
    <div className="flex flex-col md:flex-row md:justify-between mx-20 py-5">
      <div className="text-[#2F4AE3] text-4xl font-bold">
        <Link href={"/"}>CodeFox</Link>
      </div>

      <div>
        <ul className="flex flex-col md:flex-row text-[#616B6F] text-lg">
          <li className="mx-5 py-2">
            <Link href={"/upcomingCompany"}>Upcoming Visits</Link>
          </li>
          <li className="mx-5 py-2">
            <Link href={"/pastVisit"}>Past Visits</Link>
          </li>
          <li className="mx-5 py-2">
            <DropDown />
          </li>
          <li className="mx-5 py-2">
            <Link href={"/leaderBoard"}>Leaderboard</Link>
          </li>
          <li className="mx-5 py-2">
            <Link href={"/about"}>About Us</Link>
          </li>
          {session && (
            <li className="mx-5 py-2">
              <Link href={"/company"}>Company</Link>
            </li>
          )}
        </ul>
      </div>

      <div className="flex flex-row">
        {session ? (
          <>
            <div
              className="text-[#00068E] py-2 px-4 rounded-lg text-md font-semibold mx-3 border-[1px] border-[#E4EAEB]"
              onClick={() => signOut()}
            >
              Sign Out
            </div>
          </>
        ) : (
          <>
            <div className="mx-3 py-2 px-4 rounded-lg text-md font-semibold bg-[#3670FF] text-white">
              Join CodeFox
            </div>
            <div
              className="text-[#00068E] py-2 px-4 rounded-lg text-md font-semibold mx-3 border-[1px] border-[#E4EAEB]"
              onClick={() => signIn()}
            >
              Sign In
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar; */
}

{
  /**import React, { useState } from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import DropDown from "./DropDown";

const Navbar = () => {
  const { data: session, status } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo }
          <div className="text-[#2F4AE3] text-4xl font-bold">
            <Link href="/">CodeFox</Link>
          </div>

          {/* Hamburger Menu (Mobile) }
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-gray-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Menu }
          <div className="hidden md:flex md:items-center md:space-x-6">
            <ul className="flex space-x-6">
              <li>
                <Link
                  href="/upcomingCompany"
                  className="text-[#616B6F] hover:text-[#2F4AE3] transition-colors"
                >
                  Upcoming Visits
                </Link>
              </li>
              <li>
                <Link
                  href="/pastVisit"
                  className="text-[#616B6F] hover:text-[#2F4AE3] transition-colors"
                >
                  Past Visits
                </Link>
              </li>
              <li>
                <DropDown />
              </li>
              <li>
                <Link
                  href="/leaderBoard"
                  className="text-[#616B6F] hover:text-[#2F4AE3] transition-colors"
                >
                  Leaderboard
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-[#616B6F] hover:text-[#2F4AE3] transition-colors"
                >
                  About Us
                </Link>
              </li>
              {session && (
                <li>
                  <Link
                    href="/company"
                    className="text-[#616B6F] hover:text-[#2F4AE3] transition-colors"
                  >
                    Company
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Auth Buttons (Desktop) }
          <div className="hidden md:flex items-center space-x-4">
            {session ? (
              <button
                onClick={() => signOut()}
                className="text-[#00068E] hover:bg-[#00068E] hover:text-white px-4 py-2 rounded-lg border border-[#E4EAEB] transition-colors"
              >
                Sign Out
              </button>
            ) : (
              <>
                <Link
                  href="/join"
                  className="bg-[#3670FF] text-white px-4 py-2 rounded-lg hover:bg-[#2F4AE3] transition-colors"
                >
                  Join CodeFox
                </Link>
                <button
                  onClick={() => signIn()}
                  className="text-[#00068E] hover:bg-[#00068E] hover:text-white px-4 py-2 rounded-lg border border-[#E4EAEB] transition-colors"
                >
                  Sign In
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu }
      {isMenuOpen && (
        <div className="md:hidden">
          <ul className="px-2 pt-2 pb-3 space-y-2">
            <li>
              <Link
                href="/upcomingCompany"
                className="block text-[#616B6F] hover:text-[#2F4AE3] transition-colors"
              >
                Upcoming Visits
              </Link>
            </li>
            <li>
              <Link
                href="/pastVisit"
                className="block text-[#616B6F] hover:text-[#2F4AE3] transition-colors"
              >
                Past Visits
              </Link>
            </li>
            <li>
              <DropDown />
            </li>
            <li>
              <Link
                href="/leaderBoard"
                className="block text-[#616B6F] hover:text-[#2F4AE3] transition-colors"
              >
                Leaderboard
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block text-[#616B6F] hover:text-[#2F4AE3] transition-colors"
              >
                About Us
              </Link>
            </li>
            {session && (
              <li>
                <Link
                  href="/company"
                  className="block text-[#616B6F] hover:text-[#2F4AE3] transition-colors"
                >
                  Company
                </Link>
              </li>
            )}
          </ul>
          <div className="px-2 pb-4">
            {session ? (
              <button
                onClick={() => signOut()}
                className="w-full text-[#00068E] hover:bg-[#00068E] hover:text-white px-4 py-2 rounded-lg border border-[#E4EAEB] transition-colors"
              >
                Sign Out
              </button>
            ) : (
              <>
                <Link
                  href="/join"
                  className="block w-full bg-[#3670FF] text-white px-4 py-2 rounded-lg hover:bg-[#2F4AE3] transition-colors text-center mb-2"
                >
                  Join CodeFox
                </Link>
                <button
                  onClick={() => signIn()}
                  className="w-full text-[#00068E] hover:bg-[#00068E] hover:text-white px-4 py-2 rounded-lg border border-[#E4EAEB] transition-colors"
                >
                  Sign In
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; */
}

import React, { useState } from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for hamburger menu

const Navbar = () => {
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-[#2F4AE3]">
          CodeFox
        </Link>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-[#616B6F] focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex space-x-6">
          <Link
            href="/dsa-sheets"
            className="text-[#616B6F] hover:text-[#2F4AE3] transition-colors"
          >
            DSA Sheets
          </Link>
          <Link
            href="/languages"
            className="text-[#616B6F] hover:text-[#2F4AE3] transition-colors"
          >
            Learning Paths
          </Link>
          <Link
            href="/customCourse"
            className="text-[#616B6F] hover:text-[#2F4AE3] transition-colors"
          >
            Custom Course
          </Link>
          <Link
            href="/leaderBoard"
            className="text-[#616B6F] hover:text-[#2F4AE3] transition-colors"
          >
            Leaderboard
          </Link>
          {session && (
            <Link
              href="/profile"
              className="text-[#616B6F] hover:text-[#2F4AE3] transition-colors"
            >
              Profile
            </Link>
          )}
        </div>

        {/* Authentication Buttons (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          {session ? (
            <button
              onClick={() => signOut()}
              className="text-[#00068E] hover:bg-[#00068E] hover:text-white px-4 py-2 rounded-lg border border-[#E4EAEB] transition-colors"
            >
              Sign Out
            </button>
          ) : (
            <>
              <button
                onClick={() => signIn()}
                className="text-[#00068E] hover:bg-[#00068E] hover:text-white px-4 py-2 rounded-lg border border-[#E4EAEB] transition-colors"
              >
                Sign In
              </button>
              <Link
                href="/register"
                className="bg-[#3670FF] text-white px-4 py-2 rounded-lg hover:bg-[#2F4AE3] transition-colors"
              >
                Join CodeFox
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <div className="flex flex-col space-y-4 bg-white p-4 rounded-lg shadow-md">
            <Link
              href="/dsa-sheets"
              className="text-[#616B6F] hover:text-[#2F4AE3]"
            >
              DSA Sheets
            </Link>
            <Link
              href="/languages"
              className="text-[#616B6F] hover:text-[#2F4AE3]"
            >
              Learning Paths
            </Link>
            <Link
              href="/customCourse"
              className="text-[#616B6F] hover:text-[#2F4AE3]"
            >
              Custom Course
            </Link>
            <Link
              href="/leaderBoard"
              className="text-[#616B6F] hover:text-[#2F4AE3]"
            >
              Leaderboard
            </Link>
            {session && (
              <Link
                href="/profile"
                className="text-[#616B6F] hover:text-[#2F4AE3]"
              >
                Profile
              </Link>
            )}
            <div className="flex flex-col space-y-4">
              {session ? (
                <button
                  onClick={() => signOut()}
                  className="text-[#00068E] hover:bg-[#00068E] hover:text-white px-4 py-2 rounded-lg border border-[#E4EAEB] transition-colors"
                >
                  Sign Out
                </button>
              ) : (
                <>
                  <button
                    onClick={() => signIn()}
                    className="text-[#00068E] hover:bg-[#00068E] hover:text-white px-4 py-2 rounded-lg border border-[#E4EAEB] transition-colors"
                  >
                    Sign In
                  </button>
                  <Link
                    href="/register"
                    className="bg-[#3670FF] text-white px-4 py-2 rounded-lg hover:bg-[#2F4AE3] transition-colors text-center"
                  >
                    Join CodeFox
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
