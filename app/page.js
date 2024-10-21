"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [showMessage, setShowMessage] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 2000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div>
      <h1>HOME PAGE GUIVENS</h1>
      {showMessage && <p>hello home</p>}
    </div>
  );
}
