"use client";
import Image from "next/image";
import BarLoader from "react-spinners/BarLoader";
import { PulseBeams } from "../ui/Pulsebeam";
import { useEffect, useState } from "react";

const InitialLoading = () => {
  const [isLoading, setIsLoading] = useState(true); // Assume true on initial load

  useEffect(() => {
    // Hide the loading screen after 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer); // Clean up the timer
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className={`${isLoading ? "initialLoading w-full" : "hidden"}`}>
      <div className="w-24 zoom-animation">
        {/* <Image src={k3Logo1} height={200} width={200} /> */}
      </div>
      <PulseBeams />
      {/* <div className='text-2xl font-bold text-white mt-4 tracking-wider'>
                <Typewriter
                    onInit={(typewritter) => {
                        typewritter.typeString('KHAYAL HAMESHA').start()
                    }}
                    options={{
                        delay: 130,
                    }}
                />
            </div> */}
    </div>
  );
};

export default InitialLoading;
