import { Header } from "../components/Header";
import { SectionContact } from "../components/SectionContact";

export function Contact() {
  
  return(
    <div>
      <div className="flex  sm:w-[188vh] gap-6" >
      <SectionContact />
      <section className="w-auto sm:h-[87vh] bg-back rounded-md p-4 scrollbar scrollbar-thumb-green-700 ">
        <div>
          <Header />
        </div>
        <div className="ml-5">
          <h1 className="text-2xl font-semibold xl:mt-5">Contato</h1>
          <p className="border border-green-700 w-24"></p>
        </div>
      </section>
      
      
      </div>
    </div>
  )
}