"use client";
import { ThemeProvider } from "../themeContext";
import ReflectionsLayout from "./layout";

export default function LayoutWrapper(  { children, }: { children: React.ReactNode } ) {
    return (
        <ThemeProvider>
            <ReflectionsLayout>
                {children}
            </ReflectionsLayout>
        </ThemeProvider>
    );

}