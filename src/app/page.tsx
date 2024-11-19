/** pagina para un estudio juridico */
/** tecnologias implementadas:Next.js, tailwind, javascript, node */
"use client"; // para poder utilizar useState
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Car, BookOpen, Phone, Mail, MapPin, Gavel, FileUser } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import LinkedInLogo from "@/components/iconos/linkedin";
import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const urlWhatsapp = "https://wa.me/5491170011365?text=Escriba%20su%20consulta";

export default function LandingPage() {
  const menuItems = [
    { href: "#inicio", label: "Inicio" },
    { href: "#servicios", label: "Servicios" },
    { href: "#contacto", label: "Contacto" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    /** header de la pagina */
    <div className="flex flex-col min-h-screen bg-black">
      <header className="bg-black text-yellow-400">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Image
              src="/logo.jpg"
              alt="Logo del Estudio Jurídico"
              width={120}
              height={120}
              className="rounded-full border-4 border-black"
            />
            <h1 className="text-2xl font-bold">Estudio Juridico Liotta & Felix</h1>
          </div>
          <nav className="hidden md:flex space-x-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 rounded-lg transition duration-300 hover:bg-yellow-500 hover:text-black transform"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-black text-yellow-500">
              <nav className="flex flex-col space-y-4 mt-6">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg font-medium hover:text-yellow-500"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      {/** presentacion */}
      <main className="flex-grow">
        <section
          id="inicio"
          className="bg-[url('/fondo.jpg')] bg-cover bg-center py-20 text-yellow-400"
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Expertos en Accidentes de Tránsito y Asesoría Legal</h2>
            <p className="text-xl mb-8">Protegemos sus derechos y luchamos por la justicia que merece</p>
            <Link href={urlWhatsapp} target="_blank">
              <button className="bg-green-500 text-white py-2 px-4 rounded shadow-lg transform transition-all duration-300 ease-in-out hover:shadow-xl hover:translate-y-1 hover:bg-green-600">
                Enviar consulta via WhatsApp
              </button>
            </Link>
          </div>
        </section>

        <section id="servicios" className="bg-black py-20 text-yellow-400">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg shadow-md border-t-4 border-yellow-500">
                <Car className="w-12 h-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Accidentes de Tránsito</h3>
                <p>Representación legal experta para víctimas de accidentes de tránsito. Obtenga la compensación que merece.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-md border-t-4 border-yellow-500">
                <BookOpen className="w-12 h-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Familia</h3>
                <p>Asesoramiento y representación en casos relacionados con derecho de familia, como divorcios, custodia de hijos, adopciones y sucesiones. Soluciones legales personalizadas para su familia.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-md border-t-4 border-yellow-500">
                <Gavel className="w-12 h-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Derecho Penal</h3>
                <p>Defensa legal sólida para aquellos acusados de delitos. Protección de derechos y búsqueda de justicia en cada caso.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-md border-t-4 border-yellow-500">
              <FileUser className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Defensa del Consumidor</h3>
              <p>Protegemos sus derechos como consumidor frente a prácticas abusivas de empresas. Asesoramiento en reclamos por productos defectuosos, publicidad engañosa y cumplimiento de garantías.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contacto" className="bg-gray-900 py-20 text-yellow-400">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Contáctenos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <form className="space-y-4" action="https://formsubmit.co/juanpabloliotta@live.com.ar" method="POST">
                  <Input name="nombre" type="text" placeholder="Nombre completo" required />
                  <Input name="email" type="email" placeholder="Correo electrónico" required />
                  <Input name="tel" type="tel" placeholder="Teléfono" />
                  <Textarea name="comments" placeholder="Describa brevemente su caso" required />
                  <Input
                    name="enviar"
                    type="submit"
                    value="enviar"
                    className="bg-yellow-500 text-black font-bold py-2 px-4 rounded transition transform hover:scale-105 hover:bg-yellow-600 hover:shadow-lg"
                  />
                  <Input type="hidden" name="_next" value="http://localhost:3000" />
                  <Input type="hidden" name="_subject" value="Nuevo caso!" />
                  <Input type="hidden" name="_captcha" value="false" />
                </form>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-2" />
                  <span>+54 9 11 7001 1365 || +54 9 260 433-0595 </span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 mr-2" />
                  <span>juanpabloliotta@live.com.ar || Drbernardofelix@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 mr-2" />
                  <span>Rivadavia n°2555 | Santa Fe, Santa Fe, Argentina</span>
                </div>
                <div className="flex items-center">
                  <LinkedInLogo className="w-6 h-6 text-blue-600 mr-2" />
                  <Link href="https://www.linkedin.com/in/juan-pablo-liotta-82333917/">LinkedIn</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black text-yellow-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Estudio Jurídico Liotta & Felix. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}