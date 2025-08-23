"use client";
import React from "react";
import { BackgroundRippleEffects } from "./background-ripple-effect";

export function BackgroundRippleEffect() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-start overflow-hidden px-4 sm:px-6 lg:px-8">
      <BackgroundRippleEffects />
      <div className="[@media(min-width:200px)_and_(max-width:399px)]:mt-50 mt-32 min-[400px]:mt-40 md:mt-60 w-full max-w-6xl mx-auto flex flex-col gap-4 min-[400px]:gap-6 md:gap-12">
        <div className="flex flex-col text-center md:text-left">
          <h2 className="relative z-10 text-2xl min-[400px]:text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Frances Khem Andre Donaire
          </h2>
          <h4 className="relative z-10 mt-3 min-[400px]:mt-4 text-lg min-[400px]:text-xl sm:text-2xl md:text-3xl text-blue-300">
            Full-Stack Software Engineer
          </h4>          
          <p className="relative z-10 mt-3 min-[400px]:mt-4 text-base min-[400px]:text-lg text-white opacity-90">
            Building Websites,
            through Engineering.
          </p>
        </div>
        <div className="self-end w-full md:w-4/5 lg:w-3/4">
          <p className="relative z-10 text-sm min-[400px]:text-lg md:text-xl text-white text-justify opacity-90 leading-relaxed">
           An experienced software engineer specializing in building impactful, user-centric full-stack applications. I leverage a deep understanding of modern technologies and a creative problem-solving approach to develop robust, scalable solutions that connect users and drive engagement.
          </p>
        </div>
      </div>     
    </div>
  );
}