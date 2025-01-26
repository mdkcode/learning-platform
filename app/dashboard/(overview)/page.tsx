import { VideoList } from "./VideoList";

export default function Page() {
  return (
    <main>
      <h1 className="my-5 text-3xl font-bold">Welcome</h1>
      <h1 className="text-2xl mb-5">Take a look at the available courses</h1>
      <VideoList />
    </main>
  );
}
