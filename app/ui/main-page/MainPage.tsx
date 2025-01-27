"use client";
import Stats from "@/app/ui/main-page/Stats/Stats";
import ReadingImg from "assets/img/reading.svg";
import Button from "@/app/ui/components/Button/Button";
import { ButtonType } from "../components/Button/utils";
import { handleSignIn } from "@/app/api/auth/[...nextauth]/auth";

const MainPage = () => {
  return (
    <div className="lg:h-screen flex flex-col lg:flex-row items-center justify-between">
      <div className="max-w-[500px] xl:max-w-[650px]">
        <h1 className="text-[#00004B] text-5xl xl:text-7xl font-extrabold leading-[4rem]">
          Maximize skill, minimize budget
        </h1>
        <p className="text-lg text-gray-500 my-7">
          Our modern courses across a range of in-demand skills will give you
          the knowledge you need the life you want.
        </p>
        <Button
          label="Get started"
          buttonType={ButtonType.NAVIGATION}
          className="bg-gradient-to-r from-orange-400 to-pink-500 hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-600"
          onClick={() => handleSignIn()}
        />
      </div>
      <div className="relative">
        <Stats
          label="Members"
          value="29k"
          className="absolute right-10  top-0"
        />
        <div className="h-auto w-full max-w-[400px] lg:max-w-[700px]">
          <ReadingImg className="w-full h-auto" />
        </div>
        <Stats
          label="Courses"
          value="1,041"
          className="absolute left-10 top-12"
        />
      </div>
    </div>
  );
};

export default MainPage;
