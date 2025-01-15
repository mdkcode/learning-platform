import { ButtonType } from "@/app/ui/components/Button/utils";
import Courses from "@/app/ui/main-page/Courses/Courses";
import MainPage from "@/app/ui/main-page/MainPage";
import Navigation from "@/app/ui/main-page/Navigation/Navigation";

export default function Home() {
  return (
    <>
      <div className="px-[2rem] md:px-[120px] bg-gradient-to-b from-white via-[#f7f9fc] to-[#e0e8f0]">
        <Navigation
          className="text-[#00004B]"
          buttonType={ButtonType.PRIMARY}
        />
        <MainPage />
        <Courses />
      </div>
      <Navigation
        className="bg-[#00004B] px-[2rem] md:px-[120px] text-white py-8"
        buttonClassName="bg-gradient-to-r from-orange-400 to-pink-500 hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-600"
      />
    </>
  );
}
