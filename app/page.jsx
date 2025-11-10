'use client'
import React, { useState, useEffect } from "react";
import LoadingStart from "@/components/LoadingStart";
import Main from "@/components/Main";

export default function Home() {
  const [loading, setLoading] = useState(true);
  
  return (
    <>
      {/* {loading ? <LoadingStart /> : <Main />} */}
      <Main />
    </>
  );
}