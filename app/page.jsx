'use client'
import React, { useState, useEffect } from "react";
import LoadingStart from "@/components/LoadingStart";
import Main from "@/components/Main";

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.addEventListener('load', () => {
        setTimeout(() => {
            setLoading(false);
        }, 4000);
    });
  } , []);
  return (
    <>
        {loading ? <LoadingStart /> : <Main />}
    </>
  );
}