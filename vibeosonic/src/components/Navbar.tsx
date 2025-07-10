"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
                <Link href="/">
                    <MenuItem setActive={setActive} active={active} item="Home"/>
                </Link>
                <Link href="/courses">
                    <MenuItem setActive={setActive} active={active} item="Courses"/>
                </Link>
                <Link href="/contact">
                    <MenuItem setActive={setActive} active={active} item="Contact Us"/>
                </Link>
                <Link href="/about">
                    <MenuItem setActive={setActive} active={active} item="About Us"/>
                </Link>
            </Menu>
        </div>
    );
}
export default Navbar