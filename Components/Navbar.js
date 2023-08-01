"use client"
import Link from "next/link";
import { useState } from "react";
import {FaHamburger} from "react-icons/fa"

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <>
            <nav className="w-full flex flex-wrap items-center justify-between px-2 py-4 bg-slate-900 fixed top-0 z-10 min-h-65">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <a
                            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                            href="#pablo"
                        >
                            MysterioBlogs
                        </a>
                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <FaHamburger />
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    href="/blogs"
                                    onClick={() => setNavbarOpen(!navbarOpen)}
                                >
                                    Blogs
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    href="/about"
                                    onClick={() => setNavbarOpen(!navbarOpen)}
                                >
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}