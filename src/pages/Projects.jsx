import { Header } from "../components/Header";
import { SectionContact } from "../components/SectionContact";
import { CgDetailsMore } from "react-icons/cg";
import { IoEyeSharp } from "react-icons/io5";
import Pass from "../assets/Passin.png";
import Mynotes from "../assets/Mynotes.png";
import Gitfav from "../assets/gitfav.png";
import Cardapio from "../assets/Cardapio.png";
import Timer from "../assets/timer.png";
import Sorte from "../assets/sorte.png";
import Loja from "../assets/loja_mary.png";
import Tech from "../assets/tech.png";
import Dashboard from "../assets/dashboard.png";

export function Projects() {
  return (
    <div className="flex flex-col xl:flex-row w-full">
      <SectionContact />
      <section className="w-full h-[88vh] mt-7 bg-back rounded-md p-4 scrollbar scrollbar-thumb-green-700 overflow-y-auto">
        <Header />
        <h1 className="text-2xl font-semibold xl:mt-5">Projetos</h1>
        <p className="border border-green-700 w-24"></p>
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-5 mt-6">
          <div className="relative">
            <img
              src={Pass}
              alt="Projeto pass.in"
              title="Projeto pass.in"
              className="mt-5 w-full h-56 object-cover rounded-lg hover:border-green-700 hover:border-[0.2rem]"
            />
            <div className="flex items-center justify-between mt-3">
              <div>
                <p className="font-bold text-lg">Pass.in</p>
                <p className="text-sm text-zinc-400">Desenvolvimento Web</p>
              </div>
              <div className="flex gap-2 font-extralight">
                <a
                  href="https://pass-in-six.vercel.app/"
                  title="Visualizar projeto"
                  target="_blank"
                  className="p-2 bg-zinc-700 rounded-md hover:bg-zinc-800"
                >
                  <IoEyeSharp size={30} />
                </a>
                <a
                  href="https://github.com/JeffS1lva/pass.in"
                  title="Detalhes do Projeto"
                  target="_blank"
                  className="flex p-2 bg-zinc-700 rounded-md hover:bg-zinc-800"
                >
                  <CgDetailsMore size={30} />
                </a>
              </div>
            </div>
          </div>

          {/* Mynotes */}
          <div className="relative">
            <img
              src={Mynotes}
              alt="Projeto My Notes"
              title="Projeto My Notes"
              className="mt-5 w-full h-56 object-cover rounded-lg hover:border-green-700 hover:border-[0.2rem]"
            />
            <div className="flex items-center justify-between mt-3">
              <div>
                <p className="font-bold text-lg">My Notes</p>
                <p className="text-sm text-zinc-400">Desenvolvimento Web</p>
              </div>
              <div className="flex gap-2 font-extralight">
                <a
                  href="https://my-notes-app-seven.vercel.app/"
                  title="Visualizar projeto"
                  target="_blank"
                  className="p-2 bg-zinc-700 rounded-md hover:bg-zinc-800"
                >
                  <IoEyeSharp size={30} />
                </a>
                <a
                  href="https://github.com/JeffS1lva/My-Notes-App"
                  title="Detalhes do Projeto"
                  target="_blank"
                  className="flex p-2 bg-zinc-700 rounded-md hover:bg-zinc-800"
                >
                  <CgDetailsMore size={30} />
                </a>
              </div>
            </div>
          </div>

          {/* Gitfav */}
          <div className="relative">
            <img
              src={Gitfav}
              alt="Projeto Gitfav"
              title="Projeto Gitfav"
              className="mt-5 w-full h-56 object-cover rounded-lg hover:border-green-700 hover:border-[0.2rem]"
            />
            <div className="flex items-center justify-between mt-3">
              <div>
                <p className="font-bold text-lg">Gitfav</p>
                <p className="text-sm text-zinc-400">Desenvolvimento Web</p>
              </div>
              <div className="flex gap-2 font-extralight">
                <a
                  href="https://jeffs1lva.github.io/GitFav/"
                  title="Visualizar projeto"
                  target="_blank"
                  className="p-2 bg-zinc-700 rounded-md hover:bg-zinc-800"
                >
                  <IoEyeSharp size={30} />
                </a>
                <a
                  href="https://github.com/JeffS1lva/GitFav"
                  title="Detalhes do Projeto"
                  target="_blank"
                  className="flex p-2 bg-zinc-700 rounded-md hover:bg-zinc-800"
                >
                  <CgDetailsMore size={30} />
                </a>
              </div>
            </div>
          </div>

          {/* Cardapio */}
          <div className="relative">
            <img
              src={Cardapio}
              alt="Projeto Cardapio Online"
              title="Projeto Cardapio Online"
              className="mt-5 w-full h-56 object-cover rounded-lg hover:border-green-700 hover:border-[0.2rem]"
            />
            <div className="flex items-center justify-between mt-3">
              <div>
                <p className="font-bold text-lg">Cardapio Online</p>
                <p className="text-sm text-zinc-400">Desenvolvimento Web</p>
              </div>
              <div className="flex gap-2 font-extralight">
                <a
                  href="https://app-cardap.vercel.app/"
                  title="Visualizar projeto"
                  target="_blank"
                  className="p-2 bg-zinc-700 rounded-md hover:bg-zinc-800"
                >
                  <IoEyeSharp size={30} />
                </a>
                <a
                  href="https://github.com/JeffS1lva/App_Cardap/"
                  title="Detalhes do Projeto"
                  target="_blank"
                  className="flex p-2 bg-zinc-700 rounded-md hover:bg-zinc-800"
                >
                  <CgDetailsMore size={30} />
                </a>
              </div>
            </div>
          </div>

          {/* Timer */}
          <div className="relative">
            <img
              src={Timer}
              alt="Projeto Timer"
              title="Projeto Timer"
              className="mt-5 w-full h-56 object-cover rounded-lg hover:border-green-700 hover:border-[0.2rem]"
            />
            <div className="flex items-center justify-between mt-3">
              <div>
                <p className="font-bold text-lg">Timer</p>
                <p className="text-sm text-zinc-400">Desenvolvimento Web</p>
              </div>
              <div className="flex gap-2 font-extralight">
                <a
                  href="https://jeffs1lva.github.io/Timer-2.0/"
                  title="Visualizar projeto"
                  target="_blank"
                  className="p-2 bg-zinc-700 rounded-md hover:bg-zinc-800"
                >
                  <IoEyeSharp size={30} />
                </a>
                <a
                  href="https://github.com/JeffS1lva/Timer-2.0"
                  title="Detalhes do Projeto"
                  target="_blank"
                  className="flex p-2 bg-zinc-700 rounded-md hover:bg-zinc-800"
                >
                  <CgDetailsMore size={30} />
                </a>
              </div>
            </div>
          </div>

          {/* Sorte */}
          <div className="relative">
            <img
              src={Sorte}
              alt="Projeto Biscoito da Sorte"
              title="Projeto Biscoito da Sorte"
              className="mt-5 w-full h-56 object-cover rounded-lg hover:border-green-700 hover:border-[0.2rem]"
            />
            <div className="flex items-center justify-between mt-3">
              <div>
                <p className="font-bold text-lg">Biscoito da Sorte</p>
                <p className="text-sm text-zinc-400">Desenvolvimento Web</p>
              </div>
              <div className="flex gap-2 font-extralight">
                <a
                  href="https://jeffs1lva.github.io/Biscoito-Da-Sorte/?"
                  title="Visualizar projeto"
                  target="_blank"
                  className="p-2 bg-zinc-700 rounded-md hover:bg-zinc-800"
                >
                  <IoEyeSharp size={30} />
                </a>
                <a
                  href="https://github.com/JeffS1lva/Biscoito-Da-Sorte"
                  title="Detalhes do Projeto"
                  target="_blank"
                  className="flex p-2 bg-zinc-700 rounded-md hover:bg-zinc-800"
                >
                  <CgDetailsMore size={30} />
                </a>
              </div>
            </div>
          </div>

          {/* Loja */}
          <div className="relative">
            <img
              src={Loja}
              alt="Projeto Loja Mary"
              title="Projeto Loja Mary"
              className="mt-5 w-full h-56 object-cover rounded-lg hover:border-green-700 hover:border-[0.2rem]"
            />
            <div className="flex items-center justify-between mt-3">
              <div>
                <p className="font-bold text-lg">Loja Mary</p>
                <p className="text-sm text-zinc-400">Desenvolvimento Web</p>
              </div>
              <div className="flex gap-2 font-extralight">
                <a
                  href="https://loja-mary.vercel.app/"
                  title="Visualizar projeto"
                  target="_blank"
                  className="p-2 bg-zinc-700 rounded-md hover:bg-zinc-800"
                >
                  <IoEyeSharp size={30} />
                </a>
                <a
                  href="https://github.com/JeffS1lva/Loja_Mary"
                  title="Detalhes do Projeto"
                  target="_blank"
                  className="flex p-2 bg-zinc-700 rounded-md hover:bg-zinc-800"
                >
                  <CgDetailsMore size={30} />
                </a>
              </div>
            </div>
          </div>

          {/* Tech */}
          <div className="relative">
            <img
              src={Tech}
              alt="Projeto Tech"
              title="Projeto Tech"
              className="mt-5 w-full h-56 object-cover rounded-lg hover:border-green-700 hover:border-[0.2rem]"
            />
            <div className="flex items-center justify-between mt-3">
              <div>
                <p className="font-bold text-lg">Tech</p>
                <p className="text-sm text-zinc-400">Desenvolvimento Web</p>
              </div>
              <div className="flex gap-2 font-extralight">
                <a
                  href="https://jeffs1lva.github.io/projeto-tech/?"
                  title="Visualizar projeto"
                  target="_blank"
                  className="p-2 bg-zinc-700 rounded-md hover:bg-zinc-800"
                >
                  <IoEyeSharp size={30} />
                </a>
                <a
                  href="https://github.com/JeffS1lva/projeto-tech"
                  title="Detalhes do Projeto"
                  target="_blank"
                  className="flex p-2 bg-zinc-700 rounded-md hover:bg-zinc-800"
                >
                  <CgDetailsMore size={30} />
                </a>
              </div>
            </div>
          </div>

          {/* Dashboard */}
          <div className="relative">
            <img
              src={Dashboard}
              alt="Projeto Dashboard"
              title="Projeto Dashboard"
              className="mt-5 w-full h-56 object-cover rounded-lg hover:border-green-700 hover:border-[0.2rem]"
            />
            <div className="flex items-center justify-between mt-3">
              <div>
                <p className="font-bold text-lg">Dashboard</p>
                <p className="text-sm text-zinc-400">Desenvolvimento Web</p>
              </div>
              <div className="flex gap-2 font-extralight">
                <a
                  href="https://github.com/JeffS1lva/dashboard"
                  title="Visualizar projeto"
                  target="_blank"
                  className="p-2 bg-zinc-700 rounded-md hover:bg-zinc-800"
                >
                  <IoEyeSharp size={30} />
                </a>
                <a
                  href="https://github.com/JeffS1lva/dashboard"
                  title="Detalhes do Projeto"
                  target="_blank"
                  className="flex p-2 bg-zinc-700 rounded-md hover:bg-zinc-800"
                >
                  <CgDetailsMore size={30} />
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
