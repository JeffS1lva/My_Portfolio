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
import { FaArrowDownLong } from "react-icons/fa6";

const ItemCard = ({ icon: Icon, title, description, date, promotions }) => {
  const hasPromotions = Array.isArray(promotions) && promotions.length > 0;

  return (
    <div className="ml-5 w-4/6 lg:ml-24 p-4 rounded-md bg-zinc-800 mt-7 hover:bg-zinc-900 shadow-md">
      <div className="flex items-center gap-3">
        <p className="w-3 h-3 border border-green-400 rounded-full bg-green-500"></p>
        <h3 className="font-semibold text-md lg:text-lg">{title}</h3>
        
          
       
      </div>

      {hasPromotions ? (
        <div className="ml-6 mt-4 space-y-6 relative border-l-2 border-green-600 pl-6">
          {promotions.map((promo, index) => (
            <div key={index} className="relative">
              <span className="absolute -left-4 top-1.5 w-3 h-3 bg-green-500 rounded-full border border-green-300" />
              <div className="flex items-center gap-2">
                <p className="font-medium text-sm lg:text-base">
                  {promo.title}
                </p>
                <span className="text-xs text-muted-foreground">
                  ({promo.period})
                </span>
                {index > 0 && (
                  <span className="text-green-400 bg-green-900 px-2 py-0.5 rounded-full text-xs font-semibold ml-2">
                    Promoção Interna
                  </span>
                )}
              </div>
              <p className="text-sm text-zinc-400 mt-1">{promo.description}</p>
            </div>
          ))}
          {date && (
            <p className="text-xs text-green-400 italic mt-2">
              Período total: {date}
            </p>
          )}
        </div>
      ) : (
        <div className="ml-8 lg:ml-14 font-light mt-2">
          {description?.map((line, index) => (
            <p key={index} className="text-sm text-zinc-300">
              {line}
            </p>
          ))}
          {date && (
            <span className="text-sm font-semibold text-green-400">{date}</span>
          )}
        </div>
      )}
    </div>
  );
};

export function Portfolio() {
  const fileUrl = "/JeffersonCv.pdf";
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
            <p className="font-semibold text-lg lg:text-xl">
              Formação Acadêmica
            </p>
          </div>
          <ItemCard
            icon={PiStudent}
            title="Ensino Superior - Tecnólogo"
            description={["FAM - Faculdade Das Américas", "Consolação - SP"]}
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
            title="Empresa PolarFix"
            date="2024 - Atual"
            promotions={[
              {
                title: "Auxiliar de Almoxarifado",
                period: "2024 - 2025",
                description:
                  "Receber e conferir materiais entregues, verificando sua conformidade com as ordens de compra e notas fiscais.",
              },
              {
                title: "Suporte Técnico",
                period: "2025 - Atual",
                description:
                  "Resolução de problemas técnicos de hardware e software Atendimento ao cliente via telefone, e-mail ou chat, Manutenção preventiva de equipamentos de informática,Monitoramento e atualização de sistemas de segurança, Colaboração comequipes de TI para projetos e soluções integradas.",
              },
            ]}
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
            {[
              TbHtml,
              MdOutlineCss,
              DiJavascript1,
              FaNode,
              RiTailwindCssFill,
              SiSqlite,
              SiVite,
              FaReact,
              FaFigma,
              SiKnexdotjs,
              SiInsomnia,
              FaJava,
            ].map((Icon, index) => (
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
