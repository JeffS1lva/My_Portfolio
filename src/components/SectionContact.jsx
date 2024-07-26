import { FaWhatsapp, FaGithub } from "react-icons/fa";
import { PiEnvelopeSimple } from "react-icons/pi";
import { FiSmartphone } from "react-icons/fi";
import { RiMapPinLine } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";

export function SectionContact() {
  return (
    <div className=" sm:p-6 lg:p-8 flex justify-center">
      <section className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl bg-back rounded-lg p-4 sm:p-6 lg:p-8 2xl:">
        <div className="flex flex-col items-center text-center">
          <img
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto 2xl:mt-28"
            src="https://github.com/JeffS1lva.png"
            alt="perfil"
          />
          <h2 className="mt-4 sm:mt-6 text-lg sm:text-xl font-semibold">Jefferson Silva</h2>
          <hr className="w-full mt-4 sm:mt-6" />
        </div>

        <section className="mt-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-zinc-600 flex items-center justify-center rounded-lg hover:bg-zinc-900 cursor-pointer">
              <PiEnvelopeSimple size={28} />
            </div>
            <div>
              <h3 className="font-semibold">E-mail</h3>
              <p className="text-slate-400 flex-wrap">jeffdsilva.29@gmail.com</p>
            </div>
          </div>
        </section>

        <section className="mt-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-zinc-600 flex items-center justify-center rounded-lg hover:bg-zinc-900 cursor-pointer">
              <FiSmartphone size={28} />
            </div>
            <div>
              <h3 className="font-semibold">Celular</h3>
              <p className="text-slate-400">(11) 91467-5286</p>
            </div>
          </div>
        </section>

        <section className="mt-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-zinc-600 flex items-center justify-center rounded-lg hover:bg-zinc-900 cursor-pointer">
              <RiMapPinLine size={28} />
            </div>
            <div>
              <h3 className="font-semibold">Localização</h3>
              <p className="text-slate-400">Mauá, São Paulo - SP</p>
            </div>
          </div>
        </section>

        <section className="flex justify-center mt-6 gap-3">
          <a
            href="https://www.linkedin.com/in/jefferson-silva-developer/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-zinc-600 flex items-center justify-center rounded-lg hover:bg-zinc-900 cursor-pointer"
          >
            <CiLinkedin size={28} />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5511914675286"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-zinc-600 flex items-center justify-center rounded-lg hover:bg-zinc-900 cursor-pointer"
          >
            <FaWhatsapp size={28} />
          </a>
          <a
            href="https://github.com/JeffS1lva"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-zinc-600 flex items-center justify-center rounded-lg hover:bg-zinc-900 cursor-pointer"
          >
            <FaGithub size={28} />
          </a>
        </section>
      </section>
    </div>
  );
}
