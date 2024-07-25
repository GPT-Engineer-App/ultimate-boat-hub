import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { NavLink } from "react-router-dom";
import { Anchor, Boat, LifeBuoy, ShieldCheck } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-900 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Anchor className="h-8 w-8 mr-2" />
            <span className="text-xl font-bold">Ultimate Boat Sales</span>
          </div>
          <nav className="hidden md:flex space-x-4">
            <NavLink to="/" className="hover:text-blue-300">Home</NavLink>
            <NavLink to="/about" className="hover:text-blue-300">About Us</NavLink>
            <NavLink to="/inventory" className="hover:text-blue-300">Inventory</NavLink>
            <NavLink to="/services" className="hover:text-blue-300">Services</NavLink>
            <NavLink to="/testimonials" className="hover:text-blue-300">Testimonials</NavLink>
            <NavLink to="/blog" className="hover:text-blue-300">Blog</NavLink>
            <NavLink to="/contact" className="hover:text-blue-300">Contact</NavLink>
          </nav>
          <Button variant="secondary">View Our Inventory</Button>
        </div>
      </header>

      <main className="flex-grow">
        <section className="relative h-[500px] bg-cover bg-center" style={{backgroundImage: "url('/placeholder.svg')"}}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Encontre o Barco dos Seus Sonhos</h1>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">Veja Nossa Frota</Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Barcos em Destaque</h2>
            <Carousel className="w-full max-w-4xl mx-auto">
              <CarouselContent>
                {[1, 2, 3].map((boat) => (
                  <CarouselItem key={boat} className="md:basis-1/2 lg:basis-1/3">
                    <Card>
                      <CardContent className="flex flex-col items-center p-6">
                        <img src="/placeholder.svg" alt={`Boat ${boat}`} className="w-full h-48 object-cover mb-4 rounded" />
                        <h3 className="text-xl font-semibold mb-2">Boat Model {boat}</h3>
                        <p className="text-center mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <Button variant="outline">Saiba Mais</Button>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Por Que Escolher-nos</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <ShieldCheck className="h-16 w-16 mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-semibold mb-2">Experiência</h3>
                <p>Anos de experiência no mercado náutico.</p>
              </div>
              <div className="text-center">
                <Boat className="h-16 w-16 mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-semibold mb-2">Qualidade</h3>
                <p>Oferecemos apenas os melhores barcos do mercado.</p>
              </div>
              <div className="text-center">
                <LifeBuoy className="h-16 w-16 mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-semibold mb-2">Atendimento ao Cliente</h3>
                <p>Suporte excepcional antes, durante e após a venda.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">O Que Nossos Clientes Dizem</h2>
            <Carousel className="w-full max-w-4xl mx-auto">
              <CarouselContent>
                {[1, 2, 3].map((testimonial) => (
                  <CarouselItem key={testimonial}>
                    <Card>
                      <CardContent className="flex flex-col items-center p-6">
                        <img src="/placeholder.svg" alt={`Client ${testimonial}`} className="w-20 h-20 rounded-full mb-4" />
                        <p className="text-center mb-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                        <h4 className="font-semibold">Cliente {testimonial}</h4>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>
      </main>

      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><NavLink to="/" className="hover:text-blue-300">Home</NavLink></li>
              <li><NavLink to="/about" className="hover:text-blue-300">Sobre Nós</NavLink></li>
              <li><NavLink to="/inventory" className="hover:text-blue-300">Inventário</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-blue-300">Contato</NavLink></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contato</h3>
            <p>123 Marina Way, Seaside City</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@ultimateboatsales.com</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-300">Facebook</a>
              <a href="#" className="hover:text-blue-300">Instagram</a>
              <a href="#" className="hover:text-blue-300">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;