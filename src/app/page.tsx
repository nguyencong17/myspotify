import { Center } from "@/app/components/Center";
import Sidebar from "@/app/components/Sidebar";

export default function Home() {
  return (
    <main className="bg-black h-screen overflow-hidden flex">
      <Sidebar />
      <Center />
    </main>
  );
}
