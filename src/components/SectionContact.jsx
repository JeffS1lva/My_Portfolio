import { FaWhatsapp, FaGithub } from "react-icons/fa";
import { PiEnvelopeSimple } from "react-icons/pi";
import { FiSmartphone } from "react-icons/fi";
import { RiMapPinLine } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";

export function SectionContact() {
  return (
    <div>
      <section className="w-auto h-[87vh] p-5 bg-back  rounded-lg ">
        <div className="flex 2xl:mt-24 text-center items-center flex-col">
          <img
            className="sm:w-40"
            src="https://github.com/JeffS1lva.png"
            alt="perfil"
          />
          <h2 className="sm:mt-6 text-lg font-semibold">Jefferson Silva</h2>
          <hr className="w-full sm:mt-7" />
        </div>

        <section className="mt-10 flex gap-5">
          <div className="w-14 p-2 bg-zinc-600 flex text-center items-center justify-center rounded-lg hover:bg-zinc-900 cursor-pointer">
            <PiEnvelopeSimple size={30} />
          </div>
          <div>
            <h3 className="font-semibold">E-mail</h3>
            <p className="text-slate-400">jeffdsilva.29@gmail.com</p>
          </div>
        </section>
        <section className="mt-6 flex gap-5">
          <div className="w-14 p-2 bg-zinc-600 flex text-center items-center justify-center rounded-lg hover:bg-zinc-900 cursor-pointer">
            <FiSmartphone size={30} />
          </div>
          <div>
            <h3 className="font-semibold">Celular</h3>
            <p className="text-slate-400">(11)91467-5286</p>
          </div>
        </section>
        <section className="mt-6 flex gap-5">
          <div className="w-14 p-2 bg-zinc-600 flex text-center items-center justify-center rounded-lg hover:bg-zinc-900 cursor-pointer">
            <RiMapPinLine size={30} />
          </div>
          <div>
            <h3 className="font-semibold">Localização</h3>
            <p className="text-slate-400">Mauá, São Paulo - SP</p>
          </div>
        </section>
        <section className="flex justify-center mt-10 gap-3">
          <a
            href="https://www.linkedin.com/in/jefferson-silva-developer/"
            target="_blank"
            className="w-14 p-2 bg-zinc-600 flex text-center items-center justify-center rounded-lg hover:bg-zinc-900 cursor-pointer"
          >
            <CiLinkedin size={30} />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5511914675286"
            target="_blank"
            className="w-14 p-2 bg-zinc-600 flex text-center items-center justify-center rounded-lg hover:bg-zinc-900 cursor-pointer"
          >
            <FaWhatsapp size={30} />
          </a>
          <a
            href="https://github.com/JeffS1lva"
            target="_blank"
            className="w-14 p-2 bg-zinc-600 flex text-center items-center justify-center rounded-lg hover:bg-zinc-900 cursor-pointer"
          >
            <FaGithub size={30} />
          </a>
        </section>
      </section>
    </div>
  );
}
