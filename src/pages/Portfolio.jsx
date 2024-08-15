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


const ItemCard = ({ icon: Icon, title, description, date }) => (
  <div className="ml-5 w-4/6 lg:ml-24 p-2 rounded-md bg-zinc-800 mt-7 hover:bg-zinc-900">
    <div className="flex gap-4 lg:gap-6 items-center">
      <p className="w-3 h-3 mb-1 border border-green-400 rounded-full bg-green-500"></p>
      <h3 className="font-semibold text-md lg:text-lg">{title}</h3>
    </div>
    <div className="ml-8 lg:ml-14 font-light">
      {description.map((line, index) => <p key={index}>{line}</p>)}
      {date && <span className="text-sm font-semibold text-green-400">{date}</span>}
    </div>
  </div>
);

export function Portfolio() {
  const fileUrl = "/Curriculo.pdf";
  const fileName = "Jefferson_Silva.pdf";

  return (
    <div className="flex flex-col lg:flex-row gap-3 p-1">
      <SectionContact />
      <section className="w-full h-[88vh] bg-back rounded-md py-4 overflow-auto scrollbar scrollbar-thumb-green-700">
        <Header />
        
        <div className="ml-5">
          <h1 className="text-2xl font-semibold mt-4 lg:mt-10">Currículo</h1>
          <p className="border border-green-700 w-24"></p>
          <div className="relative">
            <a
              href={fileUrl}
              download={fileName}
              title="Download Currículo"
              className="absolute bg-zinc-700 hover:bg-zinc-800 text-white font-semibold p-3 rounded right-0 top-0 lg:-top-10 lg:mr-3"
            >
              Baixar CV
            </a>
          </div>
        </div>

        <section>
          <div className="ml-5 mt-10 flex items-center gap-4">
            <PiStudent
              className="w-12 h-12 p-2 bg-zinc-800 rounded-lg lg:w-16 lg:h-11"
              size={38}
              color="218F61"
            />
            <p className="font-semibold text-lg lg:text-xl">Formação Acadêmica</p>
          </div>
          <ItemCard
            icon={PiStudent}
            title="Ensino Superior - Tecnólogo"
            description={[
              "FAM - Faculdade Das Américas",
              "Consolação - SP",
            ]}
            date="2022 - Cursando"
          />
          <ItemCard
            icon={PiStudent}
            title="Cursos - Programação"
            description={[
              "Instituição - Rocketseat",
              "Programação FullStack",
              "Javascript, Node, React, Typescript, SQL, Java.",
            ]}
            date="2023 - Cursando"
          />
        </section>

        <section>
          <div className="ml-5 mt-10 flex items-center gap-4">
            <FaRegUser
              className="w-12 h-12 p-2 bg-zinc-800 rounded-lg lg:w-16 lg:h-10"
              size={38}
              color="218F61"
            />
            <p className="font-semibold text-lg lg:text-xl">Experiências</p>
          </div>
          <ItemCard
            icon={FaRegUser}
            title="Auxiliar de Almoxarifado"
            description={[
              "Receber e conferir materiais entregues, verificando sua conformidade com as ordens de compra e notas fiscais, armazenar os materiais de forma segura e organizada, seguindo os procedimentos de armazenamento adequados.",
            ]}
            date="2022 - Presente"
          />
          <ItemCard
            icon={FaRegUser}
            title="Operador de Loja - Pleno"
            description={[
              "Exposição e organização de mercadorias em prateleiras e gôndolas de formas atrativa e em pontos de venda estratégicos, acrescentando as etiquetas de preço correspondentes, de forma a chamar a atenção do público.",
            ]}
            date="2020 - 2021"
          />
        </section>

        <section>
          <div className="ml-5 mt-10 flex items-center gap-4">
            <FaCode
              className="w-12 h-12 p-2 bg-zinc-800 rounded-lg lg:w-16 lg:h-10"
              size={38}
              color="218F61"
            />
            <p className="font-semibold text-lg lg:text-xl">Tecnologias</p>
          </div>
          <div className="grid grid-cols-3 gap-3 items-center mt-6 mx-6 sm:grid-cols-8 sm:gap-10 lg:grid-cols-6 lg:gap-6 lg:mx-24 xl:grid-cols-6 2xl:grid-cols-12 2xl:gap-10 ">
            {[TbHtml, MdOutlineCss, DiJavascript1, FaNode, RiTailwindCssFill, SiSqlite, SiVite, FaReact, FaFigma, SiKnexdotjs, SiInsomnia, FaJava].map((Icon, index) => (
              <Icon
                key={index}
                className="w-16 p-2 bg-zinc-700 rounded-lg hover:bg-zinc-800 lg:w-20"
                size={50}
              />
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}
