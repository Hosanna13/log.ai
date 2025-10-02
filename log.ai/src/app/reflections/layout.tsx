import Link from "next/link";
import './ReflectionsNav.css';

export default function ReflectionsLayout( { children, }: { children: React.ReactNode } ) {

    return (
        <>
            <nav className="reflection-nav">
                <Link href="/reflections/new" className="nav-nav-icon-button">
                    <div className="nav-icon">+</div>
                </Link>
                <Link href="/reflections" className="nav-title">
                    <span> Dashboard </span>
                </Link>
            </nav>
            <main> {children} </main>
        </>
    );
}