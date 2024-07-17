/* eslint-disable no-irregular-whitespace */
import { SectionContact } from "../components/SectionContact";
import { Header } from "../components/Header";
import { PiStudent } from "react-icons/pi";
import {
  FaRegUser,
  FaCode,
  FaNode,
  FaReact,
  FaFigma,
  FaJava,
} from "react-icons/fa";
import { TbHtml } from "react-icons/tb";
import { MdOutlineCss } from "react-icons/md";
import { DiJavascript1 } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiSqlite, SiVite, SiKnexdotjs, SiInsomnia } from "react-icons/si";

export function Portfolio() {
  const fileUrl = '../../public/Curriculo.pdf';
  const fileName = 'Jefferson_Silva.pdf';

  return (
    <div className="sm:w-[188vh] 2xl:w-full flex gap-6">
      <SectionContact />
      <section className="w-full h-[87vh] bg-back rounded-md py-4 overflow-auto scrollbar scrollbar-thumb-green-700">
        <Header />
        <div className="ml-5">
          <h1 className="text-2xl font-semibold xl:mt-10">Curriculo</h1>
          <p className="border border-green-700 w-24 2xl:ml-1"></p>
          <div className="relative">
            <a
              href={fileUrl}
              download={fileName}
              title="Download Curriculo"
              className=" absolute bg-zinc-700 hover:bg-zinc-800 text-white font-semibold p-3 rounded right-0 -top-10 mr-3"
            >
              Baixar CV
            </a>
          </div>
        </div>
        <section>
          <div className="ml-5 mt-10 flex items-center gap-4">
            <PiStudent
              className="w-16 h-11 p-1 bg-zinc-800 rounded-lg"
              size={38}
              color="218F61"
            />
            <p className="font-semibold text-xl">Formação Acadêmica</p>
          </div>
          <p className="border border-gray-100 h-16 w-[0.1rem] ml-[5.4%] 2xl:ml-[3.4%] z-10"></p>
          <div className="flex gap-6 items-center ">
            <p className=" w-6 h-6 mb-1 ml-[4.3%] 2xl:ml-[2.7%] border border-green-400 rounded-3xl bg-green-500"></p>
            <h3 className="font-semibold text-lg">
              Ensino Superior - Tecnologo
            </h3>
          </div>
          <div className="ml-[8.9%] font-light">
            <p>FAM - Faculdade Das Américas</p>
            <p>Consolação - SP</p>
            <span className="text-sm font-semibold text-green-400">
              2022 - Cursando
            </span>
          </div>
          <div className="relative">
            <p className="absolute border border-gray-100 h-[8rem] 2xl:h-[9.3rem] 2xl:-bottom-[4.5rem] w-[0.1rem] ml-[5.4%] 2xl:ml-[3.4%] -bottom-[3.2rem] "></p>
          </div>
          <div className="flex gap-6 items-center ">
            <p className=" w-6 h-6 mt-[5.4%] ml-[4.3%] 2xl:ml-[2.7%] 2xl:mt-[4.6%] border border-green-400 rounded-3xl bg-green-500"></p>
            <h3 className="font-semibold text-lg mt-[5%]  ">
              Cursos - Programação
            </h3>
          </div>
          <div className="ml-[8.9%] font-light">
            <p>Instituição - Rocketseat</p>
            <li>Programação FullStack</li>
            <li>Javascript, Node, React, Typescript, SQL, Java. </li>
            <span className="text-sm font-semibold text-green-400">
              2023 - Cursando
            </span>
          </div>
        </section>
        <section>
          <div className="ml-5 mt-10 flex items-center gap-4">
            <FaRegUser
              className="w-16 h-10 p-1.5 bg-zinc-800 rounded-lg"
              size={38}
              color="218F61"
            />
            <p className="font-semibold text-xl">Experiências</p>
          </div>
          <p className="border border-gray-100 h-14 w-[0.1rem] ml-[5.4%] 2xl:ml-[3.4%] z-10"></p>
          <div className="flex gap-6 items-center ">
            <p className=" w-6 h-6 mb-1 ml-[4.3%] 2xl:ml-[2.7%] border border-green-400 rounded-3xl bg-green-500"></p>
            <h3 className="font-semibold text-lg">Auxiliar de Almoxarifado</h3>
          </div>
          <div className="ml-[9.3%] 2xl:ml-[5.5rem] font-light">
            <span className="text-sm font-semibold text-green-400">
              2022 - Presente
            </span>
            <p className="mt-2 2xl:w-[80rem] ">
              Receber e conferir materiais entregues, verificando sua
              conformidade com as ordens de compra e notas fiscais, Armazenar os
              materiais de forma segura e organizada, seguindo os procedimentos
              de armazenamento adequados.
            </p>
          </div>
          <div className="relative">
            <p className="absolute border border-gray-100 h-[6.5rem] w-[0.1rem] ml-[5.4%] 2xl:ml-[3.4%] -bottom-[1.2rem] "></p>
          </div>
          <div className="flex gap-6 items-center ">
            <p className=" w-6 h-6 mt-5 ml-[4.3%] 2xl:ml-[2.7%] border border-green-400 rounded-3xl bg-green-500"></p>
            <h3 className="font-semibold text-lg mt-4">
              Operador de Loja - Pleno
            </h3>
          </div>
          <div className="ml-[9.5%] 2xl:ml-[5.6rem] font-light">
            <span className="text-sm font-semibold text-green-400">
              2020 - 2021
            </span>
            <p className="mt-2">
              Exposição e organização de mercadorias em prateleiras e gôndolas
              de formas atrativa e em pontos de venda estratégicos,
              acrescentando as etiquetas de preço correspondentes, de forma a
              chamar a atenção do público.
            </p>
          </div>
        </section>
        <section>
          <div className="ml-5 mt-10 flex items-center gap-4">
            <FaCode
              className="w-16 h-10 p-2 bg-zinc-800 rounded-lg"
              size={38}
              color="218F61"
            />
            <p className="font-semibold text-xl">Tecnologias</p>
          </div>
          <div className="grid grid-cols-6 ml-52 mt-14 gap-3 items-center w-7/12 2xl:grid 2xl:grid-cols-12 2xl:gap-24 2xl:ml-36">
            <TbHtml
              className="w-20 p-2 bg-zinc-700 rounded-lg hover:bg-zinc-800"
              size={50}
            />
            <MdOutlineCss
              className="w-20 bg-zinc-700 rounded-lg hover:bg-zinc-800"
              size={50}
            />
            <DiJavascript1
              className="w-20 p-2 bg-zinc-700 rounded-lg hover:bg-zinc-800"
              size={50}
            />
            <FaNode
              className="w-20 p-1 bg-zinc-700 rounded-lg hover:bg-zinc-800"
              size={50}
            />
            <RiTailwindCssFill
              className="w-20 p-1 bg-zinc-700 rounded-lg hover:bg-zinc-800"
              size={50}
            />
            <SiSqlite
              className="w-20 p-1 bg-zinc-700 rounded-lg hover:bg-zinc-800"
              size={50}
            />
            <SiVite
              className="w-20 p-1 bg-zinc-700 rounded-lg hover:bg-zinc-800"
              size={50}
            />
            <FaReact
              className="w-20 p-1 bg-zinc-700 rounded-lg hover:bg-zinc-800"
              size={50}
            />
            <FaFigma
              className="w-20 p-1 bg-zinc-700 rounded-lg hover:bg-zinc-800"
              size={50}
            />
            <SiKnexdotjs
              className="w-20 p-1 bg-zinc-700 rounded-lg hover:bg-zinc-800"
              size={50}
            />
            <SiInsomnia
              className="w-20 p-1 bg-zinc-700 rounded-lg hover:bg-zinc-800"
              size={50}
            />
            <FaJava
              className="w-20 p-1 bg-zinc-700 rounded-lg hover:bg-zinc-800"
              size={50}
            />
          </div>
        </section>
      </section>
    </div>
  );
}
