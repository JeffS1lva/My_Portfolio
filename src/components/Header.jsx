import { Link } from "react-router-dom"

export function Header() {
  return (
    <div>
      <section className="w-full 2xl:mt-5">
        <div>
          <ul className="flex flex-wrap justify-center text-center text-lg m-auto p-1 rounded-xl gap-7 w-full ">
            <Link to="/" className="list-none ">
              <li className="hover:text-lime-600 ">Sobre</li>
            </Link>
            <Link to="/Projects" className="list-none ">
              <li className="hover:text-lime-600 ">Projetos</li>
            </Link>
            <Link to="/Portfolio"  className="list-none  ">
              <li className="hover:text-lime-600">Portfolio</li>
            </Link>
          </ul>
        </div>
      </section>
    </div>
  );
}
