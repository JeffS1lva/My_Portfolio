import { SectionContact } from "../components/SectionContact";
import { PiDevices, PiDesktopTowerLight } from "react-icons/pi";
import { FiSmartphone } from "react-icons/fi";
import { Header } from "../components/Header";

const ServiceCard = ({ Icon, title, description }) => (
  <div className="w-full bg-zinc-600 rounded-md p-4 flex items-center mt-4">
    <Icon size={59} className="text-green-600" />
    <div className="ml-3">
      <h1 className="font-bold text-lg">{title}</h1>
      <p className="text-sm">{description}</p>
    </div>
  </div>
);

export function About() {
  return (
    <div className="flex flex-col md:flex-row">
      <SectionContact />
      <section className="w-full h-[88vh] bg-back rounded-md p-3 scrollbar scrollbar-thumb-green-700 overflow-y-auto">
        <Header />
        
        <div className="mt-1">
          <h1 className="text-xl sm:text-2xl font-semibold">Sobre mim</h1>
          <div className="border border-green-700 w-16 sm:w-24"></div>
          <p className="font-normal text-md sm:text-md mt-7 text-gray-300">
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

        <div className="w-full mt-5 border border-green-700"></div>

        <div className="flex flex-col gap-1 mt-7">
          <ServiceCard
            Icon={PiDevices}
            title="Web Development"
            description="Desenvolvendo sites de alta qualidade."
          />
          <ServiceCard
            Icon={FiSmartphone}
            title="Mobile Web"
            description="Desenvolvendo sites de alta qualidade e responsivos."
          />
          <ServiceCard
            Icon={PiDesktopTowerLight}
            title="Fullstack Developer"
            description="Unindo front-end e back-end para criar soluções web completas e eficientes."
          />
        </div>
      </section>
    </div>
  );
}
