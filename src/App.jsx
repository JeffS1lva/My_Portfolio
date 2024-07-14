import { SectionContact } from "./components/SectionContact";
import { About } from "./pages/About";

export function App() {
  return (
    <div className=" text-white flex gap-7">
      <SectionContact />
      <About />
    </div>
  );
}
