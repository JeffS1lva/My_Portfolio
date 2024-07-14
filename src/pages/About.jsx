import { SectionContact } from "../components/SectionContact"
import { PiDevices } from "react-icons/pi";
import { FiSmartphone } from "react-icons/fi";
import { PiDesktopTowerLight } from "react-icons/pi";
import { Header } from "../components/Header";

export function About() {
  return (
    <div className="flex  sm:w-[188vh] gap-6" >
      <SectionContact />
      <section className="w-auto sm:h-[87vh] bg-back rounded-md p-4 scrollbar scrollbar-thumb-green-700 ">
        <div>
          <Header />
        </div>
        <div className="mt-1">
          <h1 className="text-2xl  font-semibold">Sobre mim</h1>
          <p className="border border-green-700 w-24"></p>
          <p className="font-normal text-md m-auto mt-7 w-full  text-gray-300">
            👋🏻 Olá! Sou Jefferson, um Desenvolvedor Front-End apaixonado por
            desafios e aprendizado contínuo. Atualmente, estou cursando Análise
            e Desenvolvimento de Sistemas e Programação Front-End na Rocketseat,
            onde mergulho profundamente em tecnologias modernas. Fascinado pela
            complexidade das aplicações, minha jornada me levou a uma
            especialização na Rocketseat e na Universidade, consolidando meu
            compromisso com a excelência técnica. Em meus projetos pessoais,
            explorar Javascript e NodeJS é minha paixão. Desde EcmaScript até
            funções assíncronas e consumo de API, busco sempre aprimorar meu
            conhecimento. Além disso, tenho experiência com o framework
            TailwindCSS. Atualmente, estou focado nas trilhas de Java, Spring
            Boot, ReactJS, Typescript e NextJS. 🛠️💻
          </p>
        </div>

        <section>
          <p className="w-96 m-auto mt-5 border border-green-700" />

          <div className="flex justify-center gap-9  ">
            <div className="w-full bg-zinc-600 rounded-md p-4 flex gap-5 mt-7  items-center ">
              <PiDevices size={59} className="mt-3 text-green-600" />
              <div>
                <h1 className="font-bold text-lg">Web Development</h1>
                <p className="text-sm">
                  Desenvolvendo sites de alta qualidade.
                </p>
              </div>
            </div>
            <div className="w-full bg-zinc-600 rounded-md p-4 flex gap-5 mt-7 items-center ">
              <FiSmartphone size={59} className="mt-3 text-green-600" />
              <div>
                <h1 className="font-bold text-lg">Mobile Web</h1>
                <p className="text-sm">
                  Desenvolvendo sites de alta qualidade e responsivas.
                </p>
              </div>
            </div>
          </div>
          <div className="w-[83vh] bg-zinc-600 rounded-md p-2 flex gap-8 mt-3 m-auto items-center ">
            <PiDesktopTowerLight size={75} className="mt-3 text-green-600" />
            <div>
              <h1 className="font-bold text-lg">Fullstack Developer</h1>
              <p className="text-sm">
                Unindo front-end e back-end para criar soluções web completas e
                eficientes.
              </p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
