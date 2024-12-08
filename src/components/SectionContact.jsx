import { FaWhatsapp, FaGithub } from "react-icons/fa";
import { PiEnvelopeSimple } from "react-icons/pi";
import { FiSmartphone } from "react-icons/fi";
import { RiMapPinLine } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";

const ContactInfo = ({ Icon, title, content }) => (
  <section className="mt-4">
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 bg-zinc-600 flex items-center justify-center rounded-lg hover:bg-zinc-900 cursor-pointer">
        <Icon size={28} />
      </div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-slate-400 flex-wrap">{content}</p>
      </div>
    </div>
  </section>
);

// Componente para exibir ícones de redes sociais
const SocialLink = ({ href, Icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 bg-zinc-600 flex items-center justify-center rounded-lg hover:bg-zinc-900 cursor-pointer"
  >
    <Icon size={28} />
  </a>
);

export function SectionContact() {
  return (
    <div className="sm:p-6 lg:p-8 flex justify-center">
      <section className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl bg-back rounded-lg p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col items-center text-center">
          <img
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto"
            z
            src="https://github.com/JeffS1lva.png"
            alt="perfil"
          />
          <h2 className="mt-4 sm:mt-6 text-lg sm:text-xl font-semibold">
            Jefferson Silva
          </h2>
          <hr className="w-full mt-4 sm:mt-6" />
        </div>

        <ContactInfo
          Icon={PiEnvelopeSimple}
          title="E-mail"
          content="jeffdsilva.29@gmail.com"
        />

        <ContactInfo
          Icon={FiSmartphone}
          title="Celular"
          content="(11) 91467-5286"
        />

        <a
          href="https://www.google.com.br/maps/place/R.+Geraldo+Pedro+Corr%C3%AAa,+179+-+Vila+Lisboa,+Mau%C3%A1+-+SP,+09330-570/@-23.6624855,-46.4306893,17.5z/data=!4m6!3m5!1s0x94ce6ea609b0a0cf:0xdab33c3619b77708!8m2!3d-23.662428!4d-46.4289063!16s%2Fg%2F11hcw554wx?entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
        >
          <ContactInfo
            Icon={RiMapPinLine}
            title="Localização"
            content="Mauá, São Paulo - SP"
          />
        </a>

        <section className="flex justify-center mt-6 gap-3">
          <SocialLink
            href="https://www.linkedin.com/in/jefferson-silva-developer/"
            Icon={CiLinkedin}
          />
          <SocialLink
            href="https://api.whatsapp.com/send?phone=5511914675286"
            Icon={FaWhatsapp}
          />
          <SocialLink href="https://github.com/JeffS1lva" Icon={FaGithub} />
        </section>
      </section>
    </div>
  );
}
