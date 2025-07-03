"use client";

import {
  Star,
  Plus,
  Minus,
  Smartphone,
  ShoppingBasket,
  Truck,
  MapPinCheckInside,
  Banknote,
  List,
  ArrowLeft,
  Instagram,
} from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import Clarity from "@microsoft/clarity";
import Script from "next/script";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { testimonials } from "../data/testimonials";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useRef } from "react";
import ConditionsUtilisation from "./legal/conditions-utilisation";
import MentionsLegales from "./legal/mentions-legales";

// Composant vidéo qui se lance à l'apparition dans le viewport
const VideoOnScroll = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(video);

    return () => {
      observer.unobserve(video);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      loop
      playsInline
      className="rounded-xl w-full h-auto"
    />
  );
};

// Composant téléphone qui affiche une seule "coque" et fait défiler les vidéos les unes après les autres
const PhoneVideoCarousel = ({ videos }: { videos: string[] }) => {
  const [current, setCurrent] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Passer à la vidéo suivante quand la vidéo courante se termine
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const handleEnded = () => {
      setCurrent((prev) => (prev + 1) % videos.length);
    };
    video.addEventListener("ended", handleEnded);
    return () => video.removeEventListener("ended", handleEnded);
  }, [videos, current]);

  // Recharger la nouvelle source et démarrer la lecture
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.load();
      video.play().catch(() => {});
    }
  }, [current]);

  // Jouer / pause selon la visibilité
  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(container);
    return () => observer.unobserve(container);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-[300px] h-[600px] mx-auto bg-black rounded-[40px] border-[7px] border-red-700 shadow-xl flex items-center justify-center"
    >
      {/* Écran du téléphone */}
      <iframe
        src={videos[current]}
        className="w-[96%] h-[97%] object-cover rounded-[30px]"
      />
    </div>
  );
};

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [openAccordion, setOpenAccordion] = useState<string | null>("who");
  const [isVisible, setIsVisible] = useState(false);
  const [openCGU, setOpenCGU] = useState(false);
  const [openMentions, setOpenMentions] = useState(false);
  const [openContact, setOpenContact] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  // Vidéos à afficher dans la section équipe
  const videoPaths = [
    "https://drive.google.com/file/d/1dEgqAbR39lhSAoXKcl7-krnlULk15Zz1/view?usp=drive_link",
    "https://drive.google.com/file/d/1Y_WcKygqIXTszLye03xA0CEKoEK-sDei/view?usp=drive_link",
    "https://drive.google.com/file/d/1qUH4Rwk686fe9rZNoWmiXnXo_JTuGgEz/view?usp=drive_link",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const advantagesSection = document.getElementById("advantages");
      if (advantagesSection) {
        const rect = advantagesSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 50) {
        setShowNavbar(true);
        lastScrollY.current = window.scrollY;
        return;
      }
      if (window.scrollY > lastScrollY.current) {
        // On descend
        setShowNavbar(false);
      } else {
        // On monte
        setShowNavbar(true);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projectId = "qd0p087n77";
  useEffect(() => {
    Clarity.init(projectId);
  }, []);

  interface Testimonial {
    name: string;
    role: string;
    content: string;
    rating: number;
    initials: string;
  }

  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  function StarRating({ rating }: { rating: number }) {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-6 pl-2 w-6 ${
              i < rating
                ? "fill-[#FED210] text-[#FED210]"
                : "fill-none text-[#FFFFFF]"
            }`}
          />
        ))}
      </div>
    );
  }

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  // Tableau des réseaux sociaux
  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/share/16WFPvS6e9/?mibextid=wwXIfr",
      icon: "/facebook.png",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/yabalma_?igsh=MTBhZ212M3h2YmN1Mg==",
      icon: "/instagram.png",
    },
    { name: "X", url: "https://x.com/yabalma_?s=11", icon: "/x.png" },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/company/yabalma/",
      icon: "/link.png",
    },
    { name: "Tiktok", url: "https://www.tiktok.com/@yabalma_?_t=ZN-8xiaYIjdtME&_r=1", icon: "/tiktok.png" },
  ];

  // Pour le smooth scroll
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <motion.div
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Navigation */}
      <motion.nav
        className={`flex items-center justify-between p-4 md:p-4 bg-[#FFFFFF] transition-all duration-300 ${
          showNavbar ? "opacity-100 h-auto" : "opacity-0 h-0 overflow-hidden"
        }`}
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center">
          <Image
            src="./LOGO.png"
            alt="Logo Yabalma"
            width={50}
            height={50}
            className="mr-2"
          />
        </div>
        <div className="hidden md:flex space-x-6 font-jakarta">
          <a
            href="#about"
            className="hover:text-[#C1121F] text-sm text-[#2C2C31] font-bold"
          >
            À PROPOS
          </a>
          <a
            href="#services"
            className="hover:text-[#C1121F] text-sm text-[#2C2C31] font-bold"
          >
            NOS SERVICES
          </a>
          <a
            href="#advantages"
            className="hover:text-[#C1121F] text-sm text-[#2C2C31] font-bold"
          >
            AVANTAGES
          </a>
          <a
            href="#equipe"
            className="hover:text-[#C1121F] text-sm text-[#2C2C31] font-bold"
          >
            ÉQUIPE
          </a>
          <button
             onClick={() => setOpenContact(true)}
             className="hover:text-[#C1121F] text-sm text-[#2C2C31] font-bold bg-transparent border-none p-0"
           >
             CONTACT
           </button>
        </div>
        <button className="bg-[#C1121F] flex items-center gap-2 text-white font-medium text-base font-jakarta px-4 py-3 rounded-lg hover:bg-red-700">
          <span>
            <Smartphone size={16} />
          </span>
          Télécharger l&apos;app
        </button>
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        id="about"
        className="px-4 md:px-20 bg-[#FFEEF0] flex flex-col md:flex-row md:gap-x-4 items-center"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="md:w-2/3 space-y-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-jakarta w-full leading-tight md:leading-normal font-extrabold">
            <span className="text-[#C1121F]">Commandez</span> sur vos sites
            préférés
            <br />
            Et faites-vous <span className="text-[#C1121F]">livrer</span> au
            Sénégal !
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl inline-block text-[#606065] lg:w-[620px] text-justify font-bold font-jakarta">
            L'application révolutionnaire Yabalma est là !
          </p>
          <p className="text-[#606065] lg:w-[620px] text-justify font-normal font-jakarta text-base leading-5">
            Commandez facilement sur Shein, Temu, Amazon depuis une seule
            application.
            <br />
            Choisissez votre mode de livraison, payez avec Wave ou Orange Money,
            <br />
            et recevez vos colis en un temps record.
            <br />
            <br />
            <span className="font-bold text-red-600 text-lg">
              Rien de plus simple !
            </span>
          </p>
          <div className="flex items-center space-x-[10px]">
            <div className="flex">
              <Image
                src="/avatar/Rectangle 2.png"
                alt="User 1"
                width={36}
                height={36}
                className="rounded-full border-2 border-white"
              />
              <Image
                src="/avatar/Rectangle 3.png"
                alt="User 2"
                width={36}
                height={36}
                className="rounded-full border-2 border-white -ml-2"
              />
              <Image
                src="/avatar/Rectangle 4.png"
                alt="User 3"
                width={36}
                height={36}
                className="rounded-full border-2 border-white -ml-2"
              />
              <Image
                src="/avatar/Rectangle 5.png"
                alt="User 4"
                width={36}
                height={36}
                className="rounded-full border-2 border-white -ml-2"
              />
              <Image
                src="/avatar/Rectangle 3.png"
                alt="User 5"
                width={36}
                height={36}
                className="rounded-full border-2 border-white -ml-2"
              />
            </div>
            <span className="text-[#3F3F46] font-jakarta uppercase font-bold text-sm leading-normal">
              +12000 utilisateurs
            </span>
          </div>
          <div className="flex space-x-4">
            <button className="bg-[#C1121F] text-center text-sm uppercase font-jakarta font-bold text-white px-6 py-3 rounded-lg hover:bg-red-700">
              Télécharger l&apos;app
            </button>
                
          </div>
        </div>
        <div className="md:w-1/4 p-2 mt-12 md:mt-0">
          <Carousel
            opts={{
              loop: true,
              align: "start",
              containScroll: "keepSnaps",
            }}
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              <CarouselItem>
                <Image
                  src="/app-screens/screen1.png"
                  alt="App Screenshot 1"
                  width={336}
                  height={370}
                  className="rounded-xl"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/app-screens/screen2.png"
                  alt="App Screenshot 2"
                  width={336}
                  height={370}
                  className="rounded-xl"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/app-screens/screen3.png"
                  alt="App Screenshot 3"
                  width={336}
                  height={370}
                  className="rounded-xl"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/app-screens/screen4.png"
                  alt="App Screenshot 4"
                  width={336}
                  height={370}
                  className="rounded-xl"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/app-screens/screen5.png"
                  alt="App Screenshot 5"
                  width={336}
                  height={370}
                  className="rounded-xl"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/app-screens/screen6.png"
                  alt="App Screenshot 6"
                  width={336}
                  height={370}
                  className="rounded-xl"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/app-screens/screen7.png"
                  alt="App Screenshot 7"
                  width={336}
                  height={370}
                  className="rounded-xl"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/app-screens/screen8.png"
                  alt="App Screenshot 8"
                  width={336}
                  height={370}
                  className="rounded-xl"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/app-screens/screen9.png"
                  alt="App Screenshot 9"
                  width={336}
                  height={370}
                  className="rounded-xl"
                />
              </CarouselItem>
            </CarouselContent>
            {/* <CarouselPrevious className="text-red-600 border-red-600 hover:bg-red-100 " /> */}
            {/* <CarouselNext className="text-red-600 border-red-600 hover:bg-red-100 absolute top-1/2 -translate-y-1/2 right-0" /> */}
          </Carousel>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        id="services"
        className="text-center py-16 bg-[#FFF8F8]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl pb-2 font-bold font-jakarta text-[#3F3F46]">
          Découvrez nos services
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-[#606065] font-normal font-jakarta max-w-xl mx-auto mt-3">
          Comment ça fonctionne ?
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-10 max-w-5xl mx-auto">
          <div className="bg-[#FFFFFF] rounded-2xl shadow-lg p-6 text-center border border-gray-200 hover:shadow-2xl transition">
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-[#C1121F] text-white text-3xl">
              <ShoppingBasket size={40} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mt-4">
              Validation de panier
            </h3>
            <div className="w-10 h-1 bg-[#C1121F] mx-auto mt-2"></div>
            <p className="text-left text-[#737373] font-montserrat mt-3 text-sm">
              Créez votre panier sur Shein, Amazon ou Temu, puis copiez le lien
              et collez-le dans l'application Yabalma pour finaliser votre achat
              en toute sécurité.
            </p>
          </div>

          <div className="bg-[#FFFFFF] rounded-2xl shadow-lg p-6 text-center border border-gray-200 hover:shadow-2xl transition">
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-[#C1121F] text-white text-3xl">
              <ShoppingBasket size={40} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mt-4">
              Shopping intégré
            </h3>
            <div className="w-10 h-1 bg-[#C1121F] mx-auto mt-2"></div>
            <p className="text-left text-[#737373] font-montserrat mt-3 text-sm">
              Naviguez directement sur vos sites e-commerce préférés depuis
              Yabalma, sélectionnez vos produits et validez votre panier en
              quelques clics.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-200 hover:shadow-2xl transition">
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-[#C1121F] text-white text-3xl">
              <Truck size={40} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mt-4">
              Mode de livraison au choix
            </h3>
            <div className="w-10 h-1 bg-[#C1121F] mx-auto mt-2"></div>
            <p className="text-left text-[#737373] font-montserrat mt-3 text-sm">
              Livraison Express (4 à 6 jours) ou Économique (environ 2
              semaines). Payez à la livraison ou en cours de route.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-200 hover:shadow-2xl transition">
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-[#C1121F] text-white text-3xl">
              <Banknote size={40} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mt-4">
              Paiement simplifié
            </h3>
            <div className="w-10 h-1 bg-[#C1121F] mx-auto mt-2"></div>
            <p className="text-left text-[#737373] font-montserrat mt-3 text-sm">
              Payez facilement avec Wave ou Orange Money. C'est simple et
              sécurisé !
            </p>
          </div>
        </div>
      </motion.section>

      {/* Validation Section */}
      <motion.section
        id="validation"
        className="px-4 py-4 bg-[#FFF2F3]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col justify-center md:h-[450px] md:flex-row items-center gap-12">
          <div className="w-3/4 md:w-1/2 space-y-6 pb-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight md:leading-[60px] mt-10 md:mt-20 font-bold font-jakarta w-full md:w-[550px] text-[#3F3F46]">
              Plusieurs <span className="text-[#C1121F]">commandes</span> sur différents sites ?
              <br />
              Pas de panique !
              <br />
              <span className="text-[#C1121F]">Regroupez</span> tout en une seule <span className="text-[#C1121F]">livraison</span>.
            </h2>
            <p className="text-[#606065] md:w-[550px] font-normal font-jakarta text-base">
              Avec nos fonctionnalités "Blocage panier" et "Regroupement colis",
              <br />
              Vous pouvez bloquer vos colis dans nos entrepôts et choisir de
              recevoir tous vos colis en une seule livraison au Sénégal.
              <br />
              <span className="font-bold text-[#C1121F]">
                Pratique, économique et rapide !
              </span>
            </p>
            <button className="bg-[#C1121F] text-white px-8 py-3 rounded-lg hover:bg-red-700 inline-flex items-center gap-2">
              J&apos;ouvre mon compte
            </button>
          </div>
          <div className="md:w-1/3 pt-16">
            <div className="bg-pink-50 rounded-3xl">
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
      </motion.section>

      {/* Advantages Section */}
      <section id="advantages" className="px-4 py-16 bg-[#FFF8F8]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-jakarta font-bold mb-4">
            Découvrez les avantages Yabalma
          </h2>
          <p className="text-gray-600">
            Une gestion simple et optimisée de vos commandes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-[#C1121F] rounded-full flex items-center justify-center mb-4">
              <MapPinCheckInside className="text-white" size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Suivi en temps réel</h3>
            <p className="text-gray-600">
              Recevez des notifications à chaque étape de la livraison.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-[#C1121F] rounded-full flex items-center justify-center mb-4">
              <Smartphone className="text-white" size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Service client 24h/24 – 7j/7
            </h3>
            <p className="text-gray-600">
              Une équipe à votre écoute à tout moment.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-[#C1121F] rounded-full flex items-center justify-center mb-4">
              <List className="text-white" size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Regroupement de colis
            </h3>
            <p className="text-gray-600">
              Plus de colis éparpillés, une seule livraison.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-[#C1121F] rounded-full flex items-center justify-center mb-4">
              <Star className="text-white" size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Application fluide et performante
            </h3>
            <p className="text-gray-600">
              Des mises à jour régulières pour une meilleure expérience
              utilisateur.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <motion.section
        id="equipe"
        className="bg-[url('/terre.png')] bg-cover bg-center px-4 md:px-24 py-8 mt-10"
      >
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <div className="">
              <PhoneVideoCarousel videos={videoPaths} />
            </div>
          </div>
          <div className="md:w-1/2 space-y-6 mt-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              L'équipe derrière Yabalma
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
                      Yabalma, c'est d'abord une histoire de famille, de rêve et
                      de détermination.
                      <br />
                      <br />
                      Nées d'une même vision, Fama et Ami, deux sœurs animées
                      par l'esprit entrepreneurial et un profond désir de
                      changement, ont voulu répondre à un besoin simple : rendre
                      le e-commerce mondial accessible, fiable et fluide pour
                      tous, depuis l'Afrique.
                      <br />
                      <br />
                      Mais cette aventure n'aurait jamais vu le jour sans une
                      équipe tout aussi passionnée. Développeurs, designers,
                      logisticiens… chacun a mis son cœur et son savoir-faire au
                      service d'un même objectif : créer une application
                      intuitive, sécurisée et pensée pour les vrais besoins des
                      utilisateurs.
                      <br />
                      <br />
                      Yabalma, c'est bien plus qu'une application. C'est un
                      projet né de liens humains, porté par une volonté commune
                      d'ouvrir le monde, colis après colis. C'est une solution
                      bâtie avec le cœur, pour connecter les envies d'ici avec
                      les opportunités d'ailleurs.
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
                      <span className="text-[#C1121F] font-bold">
                        🚀 Innovation
                      </span>
                      <br />
                      Nous bousculons les codes du digital et de la logistique
                      pour vous offrir des solutions toujours plus
                      intelligentes.
                      <br />
                      <br />
                      <span className="text-[#C1121F] font-bold">
                        💼 Intrapreneuriat
                      </span>
                      <br />
                      Chez Yabalma, chaque membre de l'équipe est un moteur
                      d'idées. Autonomie, initiative et esprit d'entrepreneur
                      guident notre croissance.
                      <br />
                      <br />
                      <span className="text-[#C1121F] font-bold">
                        🤝 Confiance
                      </span>
                      <br />
                      Notre optique est la fiabilité de nos collaborations à
                      tous les niveaux.
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
                      Devenir le leader de la logistique e-commerce vers
                      l'Afrique, en proposant une solution complète, accessible
                      et adaptée aux besoins réels des consommateurs.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Final Section */}
      <motion.section
        className="bg-[#C1121F] md:flex md:flex-row text-white py-16 px-4 md:px-12 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-3/4 md:w-1/2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight md:leading-[60px] w-full font-bold mb-4">
            Qu'attendez-vous ? Rejoignez-nous !
          </h1>
          <p className="text-left md:w-[500px] font-jakarta text-white-300/90 font-normal text-base leading-6 mb-8">
            Téléchargez Yabalma dès maintenant et découvrez une nouvelle façon
            de commander en ligne.
            <br />
            <br />
            Yabalma, votre passerelle simple, fiable et rapide vers le
            e-commerce mondial.
            <br />
            <br />
            <span className="font-bold text-2xl">Shoppez sans frontière</span>
          </p>
          <div className="flex flex-col items-start gap-6">
            <div className="flex space-x-4">
              <a href="#" className="">
                <Image
                  src="/appstore.png"
                  alt="App Store"
                  width={132}
                  height={49}
                  className="mr-2"
                />
              </a>
              <a href="#" className="">
                <Image
                  src="/playstore.png"
                  alt="Google Play"
                  width={132}
                  height={49}
                  className="mr-2"
                />
              </a>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <Image
                src="/qr-code.png"
                alt="QR Code Yabalma"
                width={150}
                height={150}
                className=""
              />
              <p className="text-[#C1121F] text-center mt-2 font-semibold">
                Scannez pour télécharger
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-2/3">
          <Image
            src="/homme.png"
            alt="Yabalma App"
            width={600}
            height={547}
            className="rounded-3xl mx-auto"
          />
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        id="contact"
        className="bg-white text-black font-inter px-4 md:px-12 py-12"
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="flex flex-col gap-4">
            <Image
              src="./LOGO.png"
              alt="Yabalma"
              width={100}
              height={100}
              className="mr-2"
            />
            <p className="text-[#3F3F46] font-inter font-normal text-base leading-6">
              Shoppez sans frontière !
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">À propos</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="hover:text-[#C1121F] text-[#3F3F46] font-inter font-medium text-base leading-6"
                >
                  Nos services
                </a>
              </li>
              <li>
                <a
                  href="#equipe"
                  className="hover:text-[#C1121F] text-[#3F3F46] font-inter font-medium text-base leading-6"
                >
                  L&apos;équipe
                </a>
              </li>
              <li>
                <button
                   onClick={() => setOpenContact(true)}
                   className="hover:text-[#C1121F] text-[#3F3F46] font-inter font-medium text-base leading-6 bg-transparent border-none p-0"
                 >
                   Contact
                 </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Social</h4>
            <ul className="space-y-2">
              {socialLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#C1121F] text-[#3F3F46] font-inter font-medium text-base leading-6 flex items-center gap-2"
                  >
                    <Image
                      src={item.icon}
                      alt={item.name}
                      width={20}
                      height={20}
                    />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Légal</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setOpenCGU(true)}
                  className="hover:text-[#C1121F] text-[#3F3F46] font-inter font-medium text-base leading-6 bg-transparent border-none cursor-pointer p-0"
                >
                  Conditions d'utilisation
                </button>
              </li>
              <li>
                <button
                  onClick={() => setOpenMentions(true)}
                  className="hover:text-[#C1121F] text-[#3F3F46] font-inter font-medium text-base leading-6 bg-transparent border-none cursor-pointer p-0"
                >
                  Mentions légales
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold font-jakarta text-[#2C2C31] text-[21px] mb-4">
              Télécharger Yabalma
            </h4>
            <div className="flex flex-col justify-start items-start gap-4">
              <Image
                src="/Footerlink.png"
                alt="App Store"
                width={184}
                height={126}
                className="mr-2"
              />
              <div className="flex gap-4">
                <a href="#" className="hover:opacity-80">
                  <Image
                    src="/appstore.png"
                    alt="App Store"
                    width={85}
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
        <div className="mt-8 flex justify-between text-center text-[#2C2C31] flex-wrap gap-4">
          <div>© {new Date().getFullYear()} Yabalma. Tous droits réservés.</div>
          <div className="flex gap-4 justify-center items-center">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
              >
                <Image src={item.icon} alt={item.name} width={28} height={28} />
              </a>
            ))}
          </div>
        </div>
      </motion.footer>

      {/* Modaux CGU et Mentions légales */}
      <Dialog open={openCGU} onOpenChange={setOpenCGU}>
        <DialogContent className="max-h-[80vh] md:min-w-[50vw] overflow-y-auto">
         
          <div className="text-sm text-gray-700 whitespace-pre-line">
            {ConditionsUtilisation()}
          </div>
        </DialogContent>
      </Dialog>
      <Dialog open={openMentions} onOpenChange={setOpenMentions}>
        <DialogContent className="max-h-[80vh] md:min-w-[50vw] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Mentions légales</DialogTitle>
          </DialogHeader>
          <div className="text-sm text-gray-700 whitespace-pre-line">
            {MentionsLegales()}
          </div>
        </DialogContent>
      </Dialog>

      {/* Dialog Contact */}
      <Dialog open={openContact} onOpenChange={setOpenContact}>
        <DialogContent className="max-h-[80vh] md:min-w-[50vw] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Contactez-nous</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-gray-700">
            <p>Email : <a href="mailto:contact@yabalma.com" className="text-[#C1121F]">support@yabalma.com</a></p>
            <p>Téléphone : <a href="tel:+33123456789" className="text-[#C1121F]">+33 1 13 13 13 13</a></p>
            <p>Lieux : Médina, Rue 37 x 20, Villa n°9816
             <br/> Dakar, SN
</p>
          </div>
        </DialogContent>
      </Dialog>

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
    </motion.div>
  );
}
