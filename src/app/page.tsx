/** pagina para un estudio juridico */
/** tecnologias implementadas:Next.js, tailwind, javascript, node */
"use client"; //para poder utilizar useState
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Car, BookOpen, Phone, Mail, MapPin, Gavel,} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import LinkedInLogo from "@/components/iconos/linkedin"
import React from "react";


const urlWhatsapp = "https://wa.me/5491170011365?text=Escriba%20su%20consulta";
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
  <Link
    href="#inicio"
    className="relative px-4 py-2 rounded-lg text-white transition duration-300 hover:bg-gray-300 hover:text-gray-800  transform"
  >
    Inicio
  </Link>
  <Link
    href="#servicios"
    className="relative px-4 py-2 rounded-lg text-white transition duration-300 hover:bg-gray-300 hover:text-gray-800"
  >
    Servicios
  </Link>
  <Link
    href="#contacto"
    className="relative px-4 py-2 rounded-lg text-white transition duration-300 hover:bg-gray-300 hover:text-gray-800"
  >
    Contacto
  </Link>
</nav>
        
        </div>
      </header>
      {/** presentacion */}
      <main className="flex-grow">
        <section id="inicio" className="bg-[url('/fondo.jpg')] bg-cover bg-center py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl text-white font-bold mb-4 text-burgundy-600">Expertos en Accidentes de Tránsito y Asesoría Legal</h2>
            <p className="text-xl text-white mb-8">Protegemos sus derechos y luchamos por la justicia que merece</p>
            
            <Link href={urlWhatsapp} target="_blank ">
            <button className=" bg-green-500 text-white py-2 px-4 rounded shadow-lg transform transition-all duration-300 ease-in-out hover:shadow-xl hover:translate-y-1 hover:bg-green-600">Enviar consulta via WhatsApp</button>
            </Link>
           
          </div>
        </section>

        <section id="servicios" className="bg-blue-100 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-burgundy-600">Nuestros Servicios</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-300 p-6 rounded-lg shadow-md border-t-4 border-burgundy-600">
                <Car className="w-12 h-12 text-burgundy-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Accidentes de Tránsito</h3>
                <p>Representación legal experta para víctimas de accidentes de tránsito. Obtenga la compensación que merece.</p>
              </div>
              <div className="bg-blue-300  p-6 rounded-lg shadow-md border-t-4 border-burgundy-600">
                <BookOpen className="w-12 h-12 text-burgundy-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Asesoría Legal</h3>
                <p>Asesoramiento jurídico integral en diversas áreas del derecho. Soluciones personalizadas para sus necesidades legales.</p>
              </div>
              <div className="bg-blue-300  p-6 rounded-lg shadow-md border-t-4 border-burgundy-600">
                <Gavel className="w-12 h-12 text-burgundy-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Derecho Penal</h3>
                <p>Defensa legal sólida para aquellos acusados de delitos. Protección de derechos y búsqueda de justicia en cada caso.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contacto" className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-burgundy-600">Contáctenos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <form className="space-y-4" action="https://formsubmit.co/juanpabloliotta@live.com.ar" method="POST">
                  <Input name="nombre" type="text" placeholder="Nombre completo" required />
                  <Input name="email" type="email" placeholder="Correo electrónico" required />
                  <Input name="tel" type="tel" placeholder="Teléfono" />
                  <Textarea name="comments" placeholder="Describa brevemente su caso" required />
                  <Input name="enviar" type="submit" value={"enviar"} className="bg-blue-500 text-white font-bold py-2 px-4 rounded transition transform hover:scale-105 hover:bg-blue-600 hover:shadow-lg"/> 
                  <Input type="hidden" name="_next" value="http://localhost:3000"/>
                  <Input type="hidden" name="_subject" value="Nuevo caso!"/>
                  <Input type="hidden" name="_captcha" value="false"/>
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