import { Header } from "../components/Header";
import { SectionContact } from "../components/SectionContact";
import { FaRegEye } from "react-icons/fa6";
import { CgDetailsMore } from "react-icons/cg";
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
    <div className="flex gap-5">
      <SectionContact />
      <section className="w-full sm:h-[87vh] bg-back rounded-md p-4 scrollbar scrollbar-thumb-green-700 overflow-y-auto">
      
        <Header />
        <h1 className="text-2xl font-semibold xl:mt-5">Projetos</h1>
        <p className="border border-green-700 w-24"></p>
        <div className="list-none flex gap-4 mt-4 ">
          <a href="#" className="hover:text-lime-600 ">
            <li>Todos</li>
          </a>
          <a href="#" className="hover:text-lime-600 ">
            <li>Web Design</li>
          </a>
          <a href="#" className="hover:text-lime-600 ">
            <li>Development Web</li>
          </a>
        </div>
        <div className="grid grid-cols-3 2xl:grid-cols-5 w-full 2xl:mt-7 gap-5 ">
          <div className="relative">
            <img
              src={Pass}
              alt="Projeto pass.in"
              title="Projeto pass.in"
              className="mt-5 w-72 blur-sm"
            />
            <a
              href="https://pass-in-six.vercel.app/"
              title="Visualizar projeto"
              target="_blank"
            >
              <FaRegEye
                className="w-16 p-1 bg-zinc-800 absolute left-[33%] top-[38%] transform -translate-x-1/2 rounded-lg hover:scale-110 hover:duration-300"
                size={38}
                color="218F61"
              />
            </a>
            <a
              href="https://github.com/JeffS1lva/pass.in"
              title="Detalhes do Projeto"
              target="_blank"
            >
              <CgDetailsMore
                className="w-16 p-1 bg-zinc-800 absolute left-[58%] top-[38%] transform -translate-x-1/2 rounded-lg hover:scale-110 hover:duration-300"
                size={40}
                color="218F61"
              />
            </a>
            <p className="mt-3 font-bold text-lg">Pass.in</p>
            <p className="text-zinc-400">Desenvolvimento Web</p>
          </div>
          <div className="relative">
            <img
              src={Mynotes}
              alt="Projeto My Notes"
              title="Projeto My Notes"
              className="mt-5 w-72 blur-sm"
            />
            <a
              href="https://my-notes-app-seven.vercel.app/"
              title="Visualizar projeto"
              target="_blank"
            >
              <FaRegEye
                className="w-16 p-1 bg-view-icon absolute left-[33%] top-[38%] transform -translate-x-1/2 rounded-lg hover:scale-110 hover:duration-300"
                size={38}
                color="218F61"
              />
            </a>
            <a
              href="https://github.com/JeffS1lva/My-Notes-App"
              title="Detalhes do Projeto"
              target="_blank"
            >
              <CgDetailsMore
                className="w-16 p-1 bg-zinc-800 absolute left-[58%] top-[38%] transform -translate-x-1/2 rounded-lg hover:scale-110 hover:duration-300"
                size={40}
                color="218F61"
              />
            </a>
            <p className="mt-3 font-bold text-lg">My Notes</p>
            <p className="text-zinc-400">Desenvolvimento Web</p>
          </div>
          <div className="relative ">
            <img
              src={Gitfav}
              alt="Projeto Gitfav"
              title="Projeto Gitfav"
              className="mt-5 w-72 blur-sm"
            />
            <a
              href="https://jeffs1lva.github.io/GitFav/"
              title="Visualizar projeto"
              target="_blank"
            >
              <FaRegEye
                className="w-16 p-1 bg-view-icon absolute left-[33%] top-[38%] transform -translate-x-1/2 rounded-lg hover:scale-110 hover:duration-300"
                size={38}
                color="218F61"
              />
            </a>
            <a
              href="https://github.com/JeffS1lva/GitFav"
              title="Detalhes do Projeto"
              target="_blank"
            >
              <CgDetailsMore
                className="w-16 p-1 bg-zinc-800 absolute left-[58%] top-[38%] transform -translate-x-1/2 rounded-lg hover:scale-110 hover:duration-300"
                size={40}
                color="218F61"
              />
            </a>
            <p className="mt-3 font-bold text-lg">Gitfav</p>
            <p className="text-zinc-400">Desenvolvimento Web</p>
          </div>
          <div className="relative">
            <img
              src={Cardapio}
              alt="Projeto Cardapio Online"
              title="Projeto Cardapio Online"
              className="mt-5 w-72 h-52 rounded-lg blur-sm"
            />
            <a
              href="https://app-cardap.vercel.app/"
              title="Visualizar projeto"
              target="_blank"
            >
              <FaRegEye
                className="w-16 p-1 bg-view-icon absolute left-[33%] top-[38%] transform -translate-x-1/2 rounded-lg hover:scale-110 hover:duration-300"
                size={38}
                color="218F61"
              />
            </a>
            <a
              href="https://github.com/JeffS1lva/App_Cardap/"
              title="Detalhes do Projeto"
              target="_blank"
            >
              <CgDetailsMore
                className="w-16 p-1 bg-zinc-800 absolute left-[58%] top-[38%] transform -translate-x-1/2 rounded-lg hover:scale-110 hover:duration-300"
                size={40}
                color="218F61"
              />
            </a>
            <p className="mt-3 font-bold text-lg">Cardapio Online</p>
            <p className="text-zinc-400">Desenvolvimento Web</p>
          </div>
          <div className="relative">
            <img
              src={Timer}
              alt="Projeto Timer"
              title="Projeto Timer"
              className="mt-5 w-72 h-52 rounded-lg blur-sm"
            />
            <a
              href="https://jeffs1lva.github.io/Timer-2.0/"
              title="Visualizar projeto"
              target="_blank"
            >
              <FaRegEye
                className="w-16 p-1 bg-view-icon absolute left-[33%] top-[38%] transform -translate-x-1/2 rounded-lg hover:scale-110 hover:duration-300"
                size={38}
                color="218F61"
              />
            </a>
            <a
              href="https://github.com/JeffS1lva/Timer-2.0"
              title="Detalhes do Projeto"
              target="_blank"
            >
              <CgDetailsMore
                className="w-16 p-1 bg-zinc-800 absolute left-[58%] top-[38%] transform -translate-x-1/2 rounded-lg hover:scale-110 hover:duration-300"
                size={40}
                color="218F61"
              />
            </a>
            <p className="mt-3 font-bold text-lg">Timer</p>
            <p className="text-zinc-400">Desenvolvimento Web</p>
          </div>
          <div className="relative">
            <img
              src={Sorte}
              alt="Projeto Biscoito da Sorte"
              title="Projeto Cardapio Online"
              className="mt-5 w-72 h-52 rounded-lg blur-sm"
            />
            <a
              href="https://jeffs1lva.github.io/Biscoito-Da-Sorte/?"
              title="Visualizar projeto"
              target="_blank"
            >
              <FaRegEye
                className="w-16 p-1 bg-view-icon absolute left-[33%] top-[38%] transform -translate-x-1/2 rounded-lg hover:scale-110 hover:duration-300"
                size={38}
                color="218F61"
              />
            </a>
            <a
              href="https://github.com/JeffS1lva/Biscoito-Da-Sorte"
              title="Detalhes do Projeto"
              target="_blank"
            >
              <CgDetailsMore
                className="w-16 p-1 bg-zinc-800 absolute left-[58%] top-[38%] transform -translate-x-1/2 rounded-lg hover:scale-110 hover:duration-300"
                size={40}
                color="218F61"
              />
            </a>
            <p className="mt-3 font-bold text-lg">Biscoito da Sorte</p>
            <p className="text-zinc-400">Desenvolvimento Web</p>
          </div>
          <div className="relative">
            <img
              src={Loja}
              alt="Projeto Loja"
              title="Projeto Loja"
              className="mt-5 w-72 h-52 rounded-lg blur-sm"
            />
            <a
              href="https://loja-mary.vercel.app/"
              title="Visualizar projeto"
              target="_blank"
            >
              <FaRegEye
                className="w-16 p-1 bg-view-icon absolute left-[33%] top-[38%] transform -translate-x-1/2 rounded-lg hover:scale-110 hover:duration-300"
                size={38}
                color="218F61"
              />
            </a>
            <a
              href="https://github.com/JeffS1lva/loja_mary"
              title="Detalhes do Projeto"
              target="_blank"
            >
              <CgDetailsMore
                className="w-16 p-1 bg-zinc-800 absolute left-[58%] top-[38%] transform -translate-x-1/2 rounded-lg hover:scale-110 hover:duration-300"
                size={40}
                color="218F61"
              />
            </a>
            <p className="mt-3 font-bold text-lg">Loja Mary</p>
            <p className="text-zinc-400">Web design</p>
          </div>
          <div className="relative">
            <img
              src={Tech}
              alt="Projeto Tech Advance"
              title="Projeto Tech Advance"
              className="mt-5 w-72 h-52 rounded-lg blur-sm"
            />
            <a
              href="https://tech-advances.vercel.app/"
              title="Visualizar projeto"
              target="_blank"
            >
              <FaRegEye
                className="w-16 p-1 bg-view-icon absolute left-[33%] top-[38%] transform -translate-x-1/2 rounded-lg hover:scale-110 hover:duration-300"
                size={38}
                color="218F61"
              />
            </a>
            <a
              href="https://github.com/JeffS1lva/Tech_Advance"
              title="Detalhes do Projeto"
              target="_blank"
            >
              <CgDetailsMore
                className="w-16 p-1 bg-zinc-800 absolute left-[58%] top-[38%] transform -translate-x-1/2 rounded-lg hover:scale-110 hover:duration-300"
                size={40}
                color="218F61"
              />
            </a>
            <p className="mt-3 font-bold text-lg">Tech Advance</p>
            <p className="text-zinc-400">Desenvolvimento Web</p>
          </div>
          <div className="relative">
            <img
              src={Dashboard}
              alt="Projeto Dashboard"
              title="Projeto Dashboard"
              className="mt-5 w-72 h-52 rounded-lg blur-sm"
            />
            <a
              href="https://app-tech-lb0k94hvd-jeffersons-projects-0ac393e5.vercel.app/"
              title="Visualizar projeto"
              target="_blank"
            >
              <FaRegEye
                className="w-16 p-1 bg-view-icon absolute left-[33%] top-[38%] transform -translate-x-1/2 rounded-lg hover:scale-110 hover:duration-300"
                size={38}
                color="218F61"
              />
            </a>
            <a
              href="https://github.com/JeffS1lva/Dashboard-Tailwind"
              title="Detalhes do Projeto"
              target="_blank"
            >
              <CgDetailsMore
                className="w-16 p-1 bg-zinc-800 absolute left-[58%] top-[38%] transform -translate-x-1/2 rounded-lg hover:scale-110 hover:duration-300"
                size={40}
                color="218F61"
              />
            </a>
            <p className="mt-3 font-bold text-lg">Dashboard</p>
            <p className="text-zinc-400">Web design</p>
          </div>
        </div>
      </section>
    </div>
  );
}
