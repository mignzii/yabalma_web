"use client";

import { ArrowRight, ChevronLeft, ChevronRight, Star, Package, ShoppingCart, Plus, Minus, Smartphone, ShoppingBasket, Truck, MapPinCheckInside, Banknote, List, ArrowLeft, Instagram ,  } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import Clarity from '@microsoft/clarity';
import Script from 'next/script';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { testimonials } from '../data/testimonials';
import Autoplay from 'embla-carousel-autoplay';



export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [openAccordion, setOpenAccordion] = useState<string | null>("who");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const advantagesSection = document.getElementById('advantages');
      if (advantagesSection) {
        const rect = advantagesSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial visibility

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projectId = 'qd0p087n77'; // Remplacez 'YOUR_PROJECT_ID' par votre ID de projet réel
  useEffect(() => {
    Clarity.init(projectId);
  }, []);
  
  interface Testimonial {
    name: string
    role: string
    content: string
    rating: number
    initials: string
  }
  
  const [api, setApi] = useState<any>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  function StarRating({ rating }: { rating: number }) {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-6 pl-2  w-6 ${i < rating ? "fill-[#FED210] text-[#FED210]" : "fill-none text-[#FFFFFF]"}`}
          />
        ))}
      </div>
    )
  }


  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={index < rating ? 'text-yellow-500' : 'text-gray-300'}>★</span>
    ));
  };




  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-4 md:p-4 bg-[#FFFFFF] ">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo Yabalma"
            width={50}
            height={50}
            className="mr-2"
          />
         
        </div>
        <div className="hidden md:flex space-x-6 font-jakarta ">
          <a href="#" className="hover:text-[#C1121F] text-sm text-[#2C2C31] font-bold">À PROPOS</a>
          <a href="#" className="hover:text-[#C1121F] text-sm text-[#2C2C31] font-bold">NOS SERVICES</a>
          <a href="#" className="hover:text-[#C1121F] text-sm text-[#2C2C31] font-bold">TÉMOIGNAGES</a>
          <a href="#" className="hover:text-[#C1121F] text-sm text-[#2C2C31] font-bold">CONTACT</a>
        </div>
        <button className="bg-[#C1121F] flex items-center gap-2 text-white font-medium text-base font-jakarta  px-4 py-3 rounded-lg hover:bg-red-700">
         <span> <Smartphone size={16} /></span> Télécharger l&apos;app
        </button>
      </nav>

      {/* Hero Section */}
      <section className="px-4 md:px-20   bg-[#FFEEF0] flex flex-col md:flex-row md:gap-x-4 items-center">
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-4xl font-jakarta w-[617px] md:text-[56px] md:leading-normal font-extrabold">
          Gérez vos livraisons à l&apos;internationale avec <span className="text-[#C1121F] text-[56px] font-extrabold ">Yabalma</span>
        </h1>
        <p className="text-[#606065] w-[500px] text-justify font-normal font-jakarta text-base leading-5">
Lorem ipsum dolor sit amet consectetur. Nulla consequat arcu risus accumsan nisl consectetur et eget nec. Mattis tellus elementum rhoncus convallis.         </p>
<div className="flex items-center space-x-[10px]">
  <div className="flex ">
    <Image src="/avatar/Rectangle 2.png" alt="User 1" width={36} height={36} className="rounded-full border-2 border-white" />
    <Image src="/avatar/Rectangle 3.png" alt="User 2" width={36} height={36} className="rounded-full border-2 border-white -ml-2" />
    <Image src="/avatar/Rectangle 4.png" alt="User 3" width={36} height={36} className="rounded-full border-2 border-white -ml-2" />
    <Image src="/avatar/Rectangle 5.png" alt="User 4" width={36} height={36} className="rounded-full border-2 border-white -ml-2" />
    <Image src="/avatar/Rectangle 3.png" alt="User 5" width={36} height={36} className="rounded-full border-2 border-white -ml-2" />
  </div>
  <span className="text-[#3F3F46] font-jakarta uppercase font-bold  text-sm leading-normal"> +12000 utilisateurs</span>
</div>
        <div className="flex space-x-4">
          <button className="bg-[#C1121F] text-center text-sm uppercase font-jakarta font-bold text-white px-6 py-3 rounded-lg hover:bg-red-700">
            Télécharger l&apos;app
          </button>
          <button className="border border-[#C1121F] uppercase font-jakarta font-bold text-sm text-[#C1121F] px-6 py-3 rounded-lg hover:bg-red-50">
            En savoir plus
          </button>
            </div>
      </div>  
        <div className="md:w-1/2 mt-12  md:mt-0">
          <Image
            src="/first.png"
            alt="App Screenshot"
            width={600}
            height={772}
            className=""
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="text-center py-16 bg-[#FFF8F8]">
  <h2 className="text-5xl pb-2 font-bold font-jakarta text-[#3F3F46]">Nos services</h2>
  <p className="text-[#606065] font-normal font-jakarta text-base leading-5 max-w-xl mx-auto mt-3">
    Lorem ipsum dolor sit amet consectetur. Nulla consequat arcu risus
    accumsan nisl consectetur et eget nec. Mattis tellus elementum rhoncus
    convallis.
  </p>

  <div className="grid md:grid-cols-3 gap-6 mt-10 max-w-5xl mx-auto">
    <div className="bg-[#FFFFFF] rounded-2xl shadow-lg p-6 text-center border border-gray-200 hover:shadow-2xl transition">
      <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-[#C1121F] text-white text-3xl">
      <ShoppingBasket size={40} />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mt-4">Validation panier</h3>
      <div className="w-10 h-1 bg-[#C1121F] mx-auto mt-2"></div>
      <p className="text-[#737373] font-montserrat mt-3 text-sm">
        The gradual accumulation of information about atomic and small-scale behaviour...
      </p>
    </div>

    <div className="bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-200 hover:shadow-2xl transition">
      <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-[#C1121F] text-white text-3xl">
      <Truck size={40} />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mt-4">Choix transporteur</h3>
      <div className="w-10 h-1 bg-[#C1121F] mx-auto mt-2"></div>
      <p className="text-[#737373] font-montserrat mt-3 text-sm">
        The gradual accumulation of information about atomic and small-scale behaviour...
      </p>
    </div>

    <div className="bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-200 hover:shadow-2xl transition">
      <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-[#C1121F] text-white text-3xl">
      <MapPinCheckInside size={40} />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mt-4">Suivi de colis</h3>
      <div className="w-10 h-1 bg-[#C1121F] mx-auto mt-2"></div>
      <p className="text-[#737373] font-montserrat mt-3 text-sm">
        The gradual accumulation of information about atomic and small-scale behaviour...
      </p>
    </div>
  </div>
      </section>

  {/* Validation Section */}
  <section className="px-4  py-4 bg-[#FFF2F3]">
        <div className="flex flex-col justify-center h-[450px] md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6  pb-4">
            <h2 className="text-5xl leading-[60px] mt-20 font-bold font-jakarta w-[550px] text-[#3F3F46]">
              <span className="text-[#C1121F]">Valider</span> vos paniers et faites vous <span className="text-[#C1121F]">livrer</span> depuis le Sénégal 
              <span className="inline-block ml-1"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <g clipPath="url(#clip0_2252_2394)">
    <path d="M3.55556 4.44434C2.61256 4.44434 1.70819 4.81894 1.0414 5.48573C0.374602 6.15253 0 7.0569 0 7.99989L0 23.9999C0 24.9429 0.374602 25.8473 1.0414 26.514C1.70819 27.1808 2.61256 27.5554 3.55556 27.5554H10.6667V4.44434H3.55556Z" fill="#00853F"/>
    <path d="M10.6665 4.44434H21.3332V27.5554H10.6665V4.44434Z" fill="#FDEF42"/>
    <path d="M28.4446 4.44434H21.3335V27.5554H28.4446C29.3876 27.5554 30.292 27.1808 30.9588 26.514C31.6256 25.8473 32.0002 24.9429 32.0002 23.9999V7.99989C32.0002 7.0569 31.6256 6.15253 30.9588 5.48573C30.292 4.81894 29.3876 4.44434 28.4446 4.44434Z" fill="#E31B23"/>
    <path d="M16.7726 14.8212L16.0001 12.4443L15.2277 14.8212H12.729L14.7503 16.2897L13.9788 18.6666L16.0001 17.1981L18.0214 18.6666L17.2499 16.2897L19.2712 14.8212H16.7726Z" fill="#00853F"/>
  </g>
  <defs>
    <clipPath id="clip0_2252_2394">
      <rect width="32" height="32" fill="white"/>
    </clipPath>
  </defs>
</svg></span>
            </h2>
            <p className="text-[#606065] w-[550px] font-normal font-jakarta text-base ">
            Lorem ipsum dolor sit amet consectetur. Nulla consequat arcu risus accumsan nisl consectetur et eget nec. Mattis tellus elementum rhoncus convallis. Pellentesque nulla leo erat dictumst sapien. Facilisis rhoncus at vitae elementum quam.            </p>
            <button className="bg-[#C1121F] text-white px-8 py-3 rounded-lg hover:bg-red-700 inline-flex items-center gap-2">
              J&apos;ouvre mon compte
            </button>
          </div>
          <div className="md:w-1/3 pt-16 ">
            <div className="bg-pink-50 rounded-3xl  ">
              <Image
                src="/lady.png"
                alt="Woman using phone"
                width={375}
                height={550}
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Advantages Section */}
      <section id="advantages" className="px-4 py-16 bg-[#FFF8F8]">
        <div className="text-center  max-w-3xl mx-auto mb-16">
          <h2 className="font-jakarta text-5xl font-bold mb-4">Découvrez les avantages</h2>
          <p className="text-gray-600 ">
            Lorem ipsum dolor sit amet consectetur. Nulla consequat arcu risus accumsan nisi consectetur et eget nec. Mattis tellus elementum rhoncus convallis.
          </p>
        </div>

          <div className="flex justify-center items-center w-full mt-8">
          <div className="flex justify-between w-[90%] space-x-4   ">
         
            <div className={`transition-all duration-700 mt-24 w-[20%] rounded-xl bg-[#f9e7e9] ${isVisible ? 'animate-float-up' : 'opacity-0'}`}>
             
              <Image
                src="/hom.png"
                alt="Validation automatique"
                width={220}
                height={220}
                className="rounded-xl relative bottom-11   mx-auto"
              />
               <div className="flex items-center bottom-0 absolute p-3  bg-white  pb-4 gap-4 ">
                <div className="  rounded-lg">
                  < ShoppingBasket className="w-6 h-6 text-[#C1121F]" />
                </div>
                <div>
                  <h3 className="text-sm font-medium font-jakarta w-[215px] text-[#1F2937]  ">
                    Valider automatiquement un panier Shein ou Temu en utilisant votre lien de panier.
                  </h3>
              
                </div>
              </div>
            </div> 
            <div className={`transition-all rounded-xl bg-[#C1121F] w-[20%]  duration-700 delay-200 ${isVisible ? 'animate-float-down' : 'opacity-0'}`}>
              
              <Image
                src="/pay-removebg.png"
                alt="Regroupement de commandes"
                width={220}
                height={220}
                className="rounded-xl relative bottom-11   mx-auto"
              />
              <div className="flex  flex-col bottom-0 absolute p-3  bg-white  pb-32 gap-2">
                <div className="rounded-lg">
                
                  <Banknote className="w-6 h-6 text-[#C1121F]" />
                </div>
                <div>
                  <h3 className="text-sm font-medium font-jakarta w-[215px] text-[#1F2937]  ">
                  Payer directement avec vos mobiles money locaux
                  </h3>
                  
                </div>
              </div>
            </div>
            <div className={`transition-all rounded-xl duration-700 mt-24 w-[20%]   bg-[#f9e7e9] delay-400 ${isVisible ? 'animate-float-down' : 'opacity-0'}`}>
            
              <Image
                src="/liv.jpg"
                alt="Paiement mobile"
                width={220}
                height={220}
                className="rounded-xl relative bottom-11   mx-auto"
              />
                <div className="flex flex-col items-start bottom-0 absolute p-3  bg-white  pb-16 gap-2">
                <div className="rounded-lg">
                  <Truck className="w-6 h-6 text-[#C1121F]" />
                </div>
                <div>
                  <h3 className="text-sm font-medium font-jakarta w-[215px] text-[#1F2937]  ">
                  Choisir votre transporteur de confiance dans l&apos;application
                  </h3>
                
                </div>
              </div>
            </div>
          
          <div className={`transition-all rounded-xl bg-[#C1121F] w-[20%]  duration-700 delay-200 ${isVisible ? 'animate-float-down' : 'opacity-0'}`}>
              
              <Image
                src="/colis.png"
                alt="Regroupement de commandes"
                width={220}
                height={220}
                className="rounded-xl relative bottom-11   mx-auto"
              />
              <div className="flex items-center bottom-0 absolute p-3  bg-white  pb-32 gap-4">
                <div className="rounded-lg">
                  <List className="w-6 h-6 text-[#C1121F]" />
                </div>
                <div>
                  <h3 className="text-sm font-medium font-jakarta w-[215px] text-[#1F2937]  ">
                  Regrouper vos différentes commandes en une seule livraison
                 </h3>
                  
                </div>
              </div>
            </div>
         
        </div>
          </div>
      </section>


    
      {/* Delivery Service Section */}
      <section className="bg-[url('/back.png')] bg-cover bg-center px-4 md:px-24 py-8 relative">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-[600px] text-white pt-16 space-y-6 ">
            <h2 className="text-5xl font-bold w-[600px] font-jakarta leading-[60px] ">
              Un service de livraison de colis bientôt disponible
            </h2>
            <p className="text-[#ffffff] font-jakarta font-normal text-base leading-6">
              Lorem ipsum dolor sit amet consectetur. Nulla consequat arcu risus accumsan nisi consectetur et eget nec. Mattis tellus elementum rhoncus convallis.
            </p>
            <div className="flex flex-col sm:flex-row sm:space-x-2 gap-4">
            
              <div className="bg-white p-3 rounded-lg shadow-md flex flex-col gap-1">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold  text-black font-jakarta text-[22px] leading-7">Trouver un GP</h3>
                  <span className="text-black  font-boldfont-jakarta text-[22px] leading-7">↗</span>
                </div>
                <p className="text-[#606065] text-base font-jakarta font-normal leading-6">
                  Lorem ipsum dolor sit amet consectetur. Nulla
                </p>
            </div>
          
            <div className="bg-white p-3 rounded-lg shadow-md flex flex-col gap-1">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold  text-black font-jakarta text-[22px] leading-7">Livraison colis</h3>
                  <span className="text-black  font-boldfont-jakarta text-[22px] leading-7">↗</span>
                </div>
                <p className="text-[#606065] text-base font-jakarta font-normal leading-6">
                  Lorem ipsum dolor sit amet consectetur. Nulla
                </p>
            </div>
              </div>
            
          </div>
          <div className="md:w-1/2 relative top-8">
            <div className="top-5">
              <Image
                src="/Group 1.png"
                alt="Mobile App Interface"
                width={600}
                height={845}
                className="rounded-3xl to  mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-[url('/terre.png')] bg-cover bg-center px-4 md:px-24 py-8 mt-10">
        <div className="flex flex-col md:flex-row  gap-12">
          <div className="md:w-1/2">
            <div className="">
              <Image
                src="/real.png"
                alt="Yabalma App"
                width={300}
                height={600}
                className=""
              />
            </div>
          </div>
          <div className="md:w-1/2 space-y-6 mt-10">
            <h2 className="text-4xl font-bold">
              Les personnes derrières Yabalma
            </h2>
            <div className="space-y-4">
              {/* Who We Are Accordion */}
              <div className="bg-white rounded-lg">
                <button
                  onClick={() => toggleAccordion("who")}
                  className="w-full px-6 py-4 flex items-center justify-between"
                >
                  <span className="font-semibold">Qui sommes nous ?</span>
                  {openAccordion === "who" ? (
                    <Minus className="text-red-600" />
                  ) : (
                    <Plus className="text-red-600" />
                  )}
                </button>
                {openAccordion === "who" && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor
                    </p>
                  </div>
                )}
              </div>

              {/* Our Values Accordion */}
              <div className="bg-white rounded-lg">
                <button
                  onClick={() => toggleAccordion("values")}
                  className="w-full px-6 py-4 flex items-center justify-between"
                >
                  <span className="font-semibold">Nos valeurs</span>
                  {openAccordion === "values" ? (
                    <Minus className="text-red-600" />
                  ) : (
                    <Plus className="text-red-600" />
                  )}
                </button>
                {openAccordion === "values" && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                )}
              </div>

              {/* Our Vision Accordion */}
              <div className="bg-white rounded-lg">
                <button
                  onClick={() => toggleAccordion("vision")}
                  className="w-full px-6 py-4 flex items-center justify-between"
                >
                  <span className="font-semibold">Notre vision</span>
                  {openAccordion === "vision" ? (
                    <Minus className="text-red-600" />
                  ) : (
                    <Plus className="text-red-600" />
                  )}
                </button>
                {openAccordion === "vision" && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-5xl  font-bold font-jakarta text-[#3F3F46] mb-4">Témoignage de réussite de clients</h2>
        <p className="text-[#606065] max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur. Nulla consequat arcu risus accumsan nisl consectetur et eget nec.
          Mattis tellus elementum rhoncus convallis.
        </p>
      </div>

      <Carousel setApi={setApi} opts={{ loop: true  }} plugins={[Autoplay({ delay: 2000 })]} className="w-full">
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/3 ">
              <Card className="bg-[#C1121F] font-jakarta text-white rounded-3xl h-full rounded-tl-[12px] rounded-tr-[90px] rounded-bl-[90px] rounded-br-[12px] ">
                <CardContent className="p-6 flex flex-col h-full ">
                  <StarRating rating={testimonial.rating} />
                  <p className="mt-4 flex-grow pl-2">{testimonial.content}</p>
                  <div className="flex items-center pl-2 gap-3 mt-6 ">
                    <Avatar>
                      <AvatarFallback className="bg-white text-red-600">{testimonial.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm opacity-90">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-red-600 border-red-600 hover:bg-red-100" />
        <CarouselNext className="text-red-600 border-red-600 hover:bg-red-100" />
      </Carousel>

      <div className="flex justify-center gap-2 mt-8">
        {[...Array(count)].map((_, i) => (
          <button
            key={i}
            className={`h-2 rounded-full transition-all ${i === current ? "w-4 bg-red-600" : "w-2 bg-gray-300"}`}
            onClick={() => api?.scrollTo(i)}
          />
        ))}
      </div>
    </div>
    <section className="bg-[#C1121F] md:flex md:flex-row text-white py-16 px-4 md:px-12 flex flex-col items-center">
    <div className="md:w-1/2">
      <h1 className="text-5xl leading-[60px] w-full  font-bold  mb-4">
          Que vous soyez transporteur ou client, Yabalma est là pour vous !
        </h1>
        <p className="text-left w-[500px] font-jakarta text-gray-300/90 font-normal text-base leading-6 mb-8">
          Lorem ipsum dolor sit amet consectetur. Nulla consequat arcu risus accumsan nisl consectetur et eget nec. Mattis tellus elementum rhoncus convallis.
        </p>
        <div className="flex space-x-4">
        <a href="#" className="">
          <Image
            src="/appstore.png"
            alt="App Store"
            width={132}
            height={49}
            className=" mr-2"
          />
        </a>
        <a href="#" className="">
          <Image
            src="/playstore.png"
            alt="Google Play"
            width={132}
            height={49}
            className=" mr-2"
          />
        </a>
      </div>
    </div>
    <div className="md:w-2/3">
      <Image src="/homme.png" alt="Yabalma App" width={600} height={547} className="rounded-3xl to  mx-auto" />
    </div>
    </section>

      {/* Footer */}
      <footer className="bg-white text-black font-inter px-4 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="flex flex-col gap-4">
            <Image src="/logo.png" alt="Yabalma" width={100} height={100} className="mr-2" />
            <p className="text-[#3F3F46] font-inter font-normal text-base leading-6">
            Top learning experiences that create more talent in the world.            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">À propos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#C1121F] text-[#3F3F46] font-inter font-medium text-base leading-6">Nos services</a></li>
              <li><a href="#" className="hover:text-[#C1121F] text-[#3F3F46] font-inter font-medium text-base leading-6">L&apos;équipe</a></li>
              <li><a href="#" className="hover:text-[#C112 1F] text-[#3F3F46] font-inter font-medium text-base leading-6">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Social</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#C1121F] text-[#3F3F46] font-inter font-medium text-base leading-6">Facebook</a></li>
              <li><a href="#" className="hover:text-[#C1121F] text-[#3F3F46] font-inter font-medium text-base leading-6">Instagram</a></li>
              <li><a href="#" className="hover:text-[#C1121F] text-[#3F3F46] font-inter font-medium text-base leading-6">Twitter</a></li>
              <li><a href="#" className="hover:text-[#C1121F] text-[#3F3F46] font-inter font-medium text-base leading-6">Linkedin</a></li>
              <li><a href="#" className="hover:text-[#C1121F] text-[#3F3F46] font-inter font-medium text-base leading-6">Tiktok</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Légal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#C1121F] text-[#3F3F46] font-inter font-medium text-base leading-6 ">Conditions d&apos;utilisation</a></li>
              <li><a href="#" className="hover:text-[#C1121F] text-[#3F3F46] font-inter font-medium text-base leading-6">Politique de confidentialité</a></li>
              <li><a href="#" className="hover:text-[#C1121F] text-[#3F3F46] font-inter font-medium text-base leading-6">Mentions légales</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold font-jakarta text-[#2C2C31] text-[21px] mb-4">Télécharger Yabalma</h4>
            <div className="flex flex-col justify-start items-start gap-4 ">
              <Image src="/Footerlink.png" alt="App Store" width={184} height={126} className="mr-2" />
             <div className="flex gap-4">
             <a href="#" className="hover:opacity-80">
                <Image
                  src="/appstore.png"
                  alt="App Store"
                  width={85 }
                  height={38}
                />
              </a>
              <a href="#" className="hover:opacity-80">
                <Image
                  src="/playstore.png"
                  alt="Play Store"
                  width={85}
                  height={38}
                />
              </a>
             </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-between  text-center text-[#2C2C31]">
         <div>
         © {new Date().getFullYear()} Yabalma. Tous droits réservés.
         </div>
         <div>
          <p>
            <a href="#" className="hover:text-[#C1121F] text-[#3F3F46] font-inter flex gap-2 font-medium text-base leading-6">
              <Image src="./x.png" alt="Facebook" width={20} height={20} />
              <Image src="./facebook.png" alt="Facebook" width={20} height={20} />
              <Instagram className="w-6 h-6" />
              <Image src="./link.png" alt="Facebook" width={20} height={20} />
            </a>
          </p>
         </div>
        </div>
      </footer>

      <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-776GFX2GWG"
        />
        <Script
            id="google-analytics-init"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
                __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-776GFX2GWG', {
                        page_path: window.location.pathname,
                    });
                `,
            }}
        />
    </div>
  );
}