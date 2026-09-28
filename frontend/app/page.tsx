"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:5000")
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch(() => setMessage("Backend not connected"));
  }, []);

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">
        ReachInbox Assignment
      </h1>

      <p className="mt-4 text-lg">
        {message}
      </p>
    </main>
  );
}