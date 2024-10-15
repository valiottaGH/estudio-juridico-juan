/** pagina para un estudio juridico */
/** tecnologias implementadas:Next.js, tailwind, javascript, node */
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Car, BookOpen, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import LinkedInLogo from "@/components/iconos/linkedin"

export default function LandingPage() {
  return (
    /** header de la pagina */
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Image
              src="/juan.jpg"
              alt="Logo del Estudio Jurídico"
              width={60}
              height={60}
              className="rounded-full border-4 border-blue-500" 
            /> {/*agrega un contorno a la imagen */}
            <h1 className="text-2xl font-bold">Estudio Liotta Juan Pablo & Asociados</h1>
          </div>
          <nav className="hidden md:flex space-x-4">
            <Link href="#inicio" className="hover:text-gray-300">Inicio</Link>
            <Link href="#servicios" className="hover:text-gray-300">Servicios</Link>
            <Link href="#contacto" className="hover:text-gray-300">Contacto</Link>
          </nav>
          <Button className="md:hidden">Menú</Button>
        </div>
      </header>
      {/** presentacion */}
      <main className="flex-grow">
        <section id="inicio" className="bg-gray-100 py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4 text-burgundy-600">Expertos en Accidentes de Tránsito y Asesoría Legal</h2>
            <p className="text-xl mb-8">Protegemos sus derechos y luchamos por la justicia que merece</p>
            <Button className="bg-burgundy-600 hover:bg-burgundy-700 text-black font-bold py-2 px-4 rounded">
              Consulta Gratuita
            </Button>
          </div>
        </section>

        <section id="servicios" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-burgundy-600">Nuestros Servicios</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-burgundy-600">
                <Car className="w-12 h-12 text-burgundy-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Accidentes de Tránsito</h3>
                <p>Representación legal experta para víctimas de accidentes de tránsito. Obtenga la compensación que merece.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-burgundy-600">
                <BookOpen className="w-12 h-12 text-burgundy-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Asesoría Legal</h3>
                <p>Asesoramiento jurídico integral en diversas áreas del derecho. Soluciones personalizadas para sus necesidades legales.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contacto" className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-burgundy-600">Contáctenos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <form className="space-y-4">
                  <Input type="text" placeholder="Nombre completo" required />
                  <Input type="email" placeholder="Correo electrónico" required />
                  <Input type="tel" placeholder="Teléfono" />
                  <Textarea placeholder="Describa brevemente su caso" required />
                  <Button type="submit" className="w-full bg-burgundy-600 hover:bg-burgundy-700 text-black font-bold py-2 px-4 rounded">
                    Enviar Consulta
                  </Button>
                </form>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-burgundy-600 mr-2" />
                  <span>+54 9 11 7001 1365</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-burgundy-600 mr-2" />
                  <span>juanpabloliotta@live.com.ar</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-burgundy-600 mr-2" />
                  <span>Santa Fe, Santa Fe, Argentina</span>
                  </div>
                  <div className="flex items-center">
                  <LinkedInLogo className="w-6 h-6 text-blue-600 mr-2"  />
                  <Link href="https://www.linkedin.com/in/juan-pablo-liotta-82333917/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">linkedin</Link> 
                  </div> {/** este div crea un link que envia al usuario a una pagina de linkedin */}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Estudio Jurídico liotta Juan Pablo & Asociados. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}