import { Header } from "../components/Header";
import { SectionContact } from "../components/SectionContact";
import { ProjectCard } from "../components/ProjectCard";
import Pass from "../assets/Passin.png";
import Mynotes from "../assets/Mynotes.png";
import Gitfav from "../assets/gitfav.png";
import Cardapio from "../assets/Cardapio.png";
import Timer from "../assets/timer.png";
import Sorte from "../assets/sorte.png";
import Loja from "../assets/loja_mary.png";
import Tech from "../assets/tech.png";
import Dashboard from "../assets/dashboard.png";

const projects = [
  {
    image: Pass,
    alt: "Projeto pass.in",
    title: "Pass.in",
    description: "Desenvolvimento Web",
    demoLink: "https://pass-in-six.vercel.app/",
    detailsLink: "https://github.com/JeffS1lva/pass.in",
  },
  {
    image: Mynotes,
    alt: "Projeto My Notes",
    title: "My Notes",
    description: "Desenvolvimento Web",
    demoLink: "https://my-notes-app-seven.vercel.app/",
    detailsLink: "https://github.com/JeffS1lva/My-Notes-App",
  },
  {
    image: Gitfav,
    alt: "Projeto Gitfav",
    title: "Gitfav",
    description: "Desenvolvimento Web",
    demoLink: "https://jeffs1lva.github.io/GitFav/",
    detailsLink: "https://github.com/JeffS1lva/GitFav",
  },
  {
    image: Cardapio,
    alt: "Projeto Cardapio Online",
    title: "Cardapio Online",
    description: "Desenvolvimento Web",
    demoLink: "https://app-cardap.vercel.app/",
    detailsLink: "https://github.com/JeffS1lva/App_Cardap/",
  },
  {
    image: Timer,
    alt: "Projeto Timer",
    title: "Timer",
    description: "Desenvolvimento Web",
    demoLink: "https://jeffs1lva.github.io/Timer-2.0/",
    detailsLink: "https://github.com/JeffS1lva/Timer-2.0",
  },
  {
    image: Sorte,
    alt: "Projeto Biscoito da Sorte",
    title: "Biscoito da Sorte",
    description: "Desenvolvimento Web",
    demoLink: "https://jeffs1lva.github.io/Biscoito-Da-Sorte/?",
    detailsLink: "https://github.com/JeffS1lva/Biscoito-Da-Sorte",
  },
  {
    image: Loja,
    alt: "Projeto Loja Mary",
    title: "Loja Mary",
    description: "Desenvolvimento Web",
    demoLink: "https://loja-mary.vercel.app/",
    detailsLink: "https://github.com/JeffS1lva/Loja_Mary",
  },
  {
    image: Tech,
    alt: "Projeto Tech",
    title: "Tech",
    description: "Desenvolvimento Web",
    demoLink: "https://jeffs1lva.github.io/projeto-tech/?",
    detailsLink: "https://github.com/JeffS1lva/projeto-tech",
  },
  {
    image: Dashboard,
    alt: "Projeto Dashboard",
    title: "Dashboard",
    description: "Desenvolvimento Web",
    demoLink: "https://github.com/JeffS1lva/dashboard",
    detailsLink: "https://github.com/JeffS1lva/dashboard",
  },
];

export function Projects() {
  return (
    <div className="flex flex-col xl:flex-row w-full gap-3">
      <SectionContact />
      <section className="w-full h-[88vh] bg-back rounded-md p-4 scrollbar scrollbar-thumb-green-700 overflow-y-auto">
        <Header />
        <h1 className="text-2xl font-semibold xl:mt-5">Projetos</h1>
        <p className="border border-green-700 w-24"></p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 mt-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              alt={project.alt}
              title={project.title}
              description={project.description}
              demoLink={project.demoLink}
              detailsLink={project.detailsLink}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
