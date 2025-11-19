"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import "./ReflectionsNav.css";
import { ThemeProvider, useTheme } from "../themeContext";

function ReflectionsLayoutInner({ children }: { children: React.ReactNode }) {
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <>
            <button onClick={toggleTheme}>
                Switch to {theme === "light" ? "Dark" : "Light"} Mode
            </button>

            <nav className="reflection-nav">
                <Link href="/" className="home-link">
                    <div className="home-icon"> ⛺︎ </div>
                </Link>
                <Link href="/reflections/new" className="nav-nav-icon-button">
                    <div className="nav-icon">+</div>
                </Link>
                <Link href="/reflections" className="nav-title">
                    <span>Dashboard</span>
                </Link>
            </nav>

            <main>{children}</main>
        </>
    );
}

export default function ReflectionsLayout({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider>
            <ReflectionsLayoutInner>{children}</ReflectionsLayoutInner>
        </ThemeProvider>
    );
}