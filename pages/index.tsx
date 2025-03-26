// pages/index.tsx
import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
const Home = () => {
  const router = useRouter();

  useEffect(() => {
    const fetchId = async () => {
      const storedId = localStorage.getItem("queueToken");

      if (storedId) {
        router.push(`/count/${storedId}`);
      } else {
        const response = await axios.get("https://script.google.com/macros/s/AKfycbzu6GHddzRizEMQSYeY6ZVCbfEG6hKCBfXU6hfRZKvHi2vqYWrq9O2ZJwx185tk6Id3EQ/exec");
        const data = await response.data;

        if (data.token) {
          localStorage.setItem("queueToken", data.token);
          router.push(`/count/${data.token}`);
        }
      }
    };

    fetchId();
  }, []);

  return (
    <div className="h-screen w-full flex items-center justify-center bg-black">
      <div className="loader">
        <div className="cell d-0"></div>
        <div className="cell d-1"></div>
        <div className="cell d-2"></div>

        <div className="cell d-1"></div>
        <div className="cell d-2"></div>

        <div className="cell d-2"></div>
        <div className="cell d-3"></div>

        <div className="cell d-3"></div>
        <div className="cell d-4"></div>
      </div>
    </div>
  );
};

export default Home;
