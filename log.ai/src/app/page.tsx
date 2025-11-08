"use client";
import "./page.css"
import React from "react";
import Link from "next/link"; 
import { useRouter } from "next/navigation";
export default function Home() {
  return (
    <div className="pageContainer">
      <div className="hero">
      <h1 className="decode-text" data-title="Welcome to Log.ai" data-subtitle="AI-powered tool">
        Welcome to Log.ai
      </h1>
      <Link href="/reflections/new">
        <button className="start-button">Add New Log</button>
        {/* TODO - add welecome screen */}
      </Link>
      </div>
    </div>
  );
}
