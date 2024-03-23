import { Button } from "./components/ui/button";
import { FaWordpress, FaShopify, FaSquarespace } from "react-icons/fa";
import { SiWebflow, SiElementor, SiGodaddy } from "react-icons/si";

function App() {
  return (
    <>
      <section className="w-full">
        <nav className="max-w-6xl mx-auto p-4 flex justify-between items-center">
          {/* logo */}
          <div className="flex items-center gap-16">
            <h1 className="font-bold text-xl text-blue-600">BUZZAMATION</h1>

            {/* links */}
            <div className="flex gap-8">
              <p>Internal Store</p>
              <p>FAQs</p>
            </div>
          </div>

          {/* cta */}
          <div>
            <Button variant={"outline"}>Website</Button>
          </div>
        </nav>
      </section>

      <section className="w-full">
        <div className="max-w-6xl mx-auto flex flex-col justify-center items-center pt-32">
          <p className="mb-5">Innovation & Automation</p>
          <h1 className="text-5xl text-center font-extralight leading-[1.2]">
            Automating{" "}
            <span className="font-bold text-blue-600">Repetitive Tasks</span>{" "}
            <br />
            fostering progressive efficiency
          </h1>
          <Button className="mt-10 bg-blue-600 hover:bg-blue-400">
            Get Started
          </Button>
        </div>
      </section>

      <section className="w-full">
        <div className="flex gap-32 mt-28 p-8 mx-auto justify-center items-center">
          <FaWordpress size={100} />
          <FaShopify size={100} />
          <SiWebflow className="rounded-full" size={100} />
          <SiElementor size={100} />
          <FaSquarespace size={100} />
          <SiGodaddy size={100} />
        </div>
      </section>
    </>
  );
}

export default App;
