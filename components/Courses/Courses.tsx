import { IconName } from "../Icon/icons";
import Card from "./Card";

interface CourseProps {
  title: string;
  content: string;
  iconName: IconName;
}

const courses: CourseProps[] = [
  {
    title: "Math",
    content:
      "Learn math to excel at school and university and be able to solve every problem you encounter.",
    iconName: "math",
  },
  {
    title: "Programming",
    content:
      "Learn programming to excel at school and university and be able to solve every problem you encounter.",
    iconName: "code",
  },
  {
    title: "Biology",
    content:
      "Learn biology to excel at school and university and be able to solve every problem you encounter.",
    iconName: "biology",
  },
  {
    title: "Chemistry",
    content:
      "Learn chemistry to excel at school and university and be able to solve every problem you encounter.",
    iconName: "chemistry",
  },
  {
    title: "Languages",
    content:
      "Learn languages to excel at school and university and be able to solve every problem you encounter.",
    iconName: "languages",
  },
];

const Courses = () => {
  return (
    <div className="flex flex-row flex-wrap gap-8 justify-center pb-[100px] pt-[50px] sm:pt-0">
      <div className="w-[400px] h-[400px] rounded-lg bg-gradient-to-b from-orange-400 to-pink-500 p-[2rem] pt-[4rem]">
        <h4 className="text-4xl font-bold text-white leading-[3rem] max-w-[70%]">
          Check our most popular courses!
        </h4>
      </div>
      {courses.map((item) => (
        <Card key={item.title} {...item} />
      ))}
    </div>
  );
};

export default Courses;
