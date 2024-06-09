import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
} from "react-icons/fa";
import { RiMapPin2Fill } from "react-icons/ri";

export const Footer = () => {
  return (
    <div className="bg-black">
      <div className="relative bg-[url('/image/bannerfooter.png')] bg-cover bg-no-repeat w-full h-[500px] bg-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative container z-10 flex flex-col items-center md:items-end justify-end h-full py-16 md:py-24 px-4 md:px-20 text-white space-y-8">
          <h2 className="text-2xl md:text-4xl w-full md:w-3/6 text-center md:text-end leading-relaxed">
            Simplifique e Alcance Novos Patamares com a Quadria
          </h2>
          <Button className="text-primary bg-secondary rounded-full px-8 md:px-12 py-4 md:py-6 font-medium text-base">
            Entrar em contato
          </Button>
        </div>
      </div>

      <div className="container py-10 md:py-20 flex flex-col md:flex-row justify-between items-center md:items-start space-y-10 md:space-y-0">
        <div className="flex flex-col items-center md:items-start space-y-4">
          <Image
            src="/svg/placeholder.svg"
            alt="logo"
            className="h-16 w-40"
            width={100}
            height={100}
          />
          <ul className="space-y-4 text-xs font-medium text-white text-center md:text-left">
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#">Quem Somos</Link>
            </li>
            <li>
              <Link href="#">Produtos</Link>
            </li>
            <li>
              <Link href="#">Contato</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-end space-y-4">
          <div className="flex gap-4">
            <FaInstagram className="size-5 text-white" />
            <FaFacebookF className="size-5 text-white" />
            <FaWhatsapp className="size-5 text-white" />
          </div>
          <ul className="text-xs text-white text-center md:text-right space-y-6 mt-4">
            <li className="flex flex-col md:flex-row items-center md:justify-end md:items-end space-y-2 md:space-y-0 md:space-x-2">
              <span>R.Manuel Borbam 257-São Paulo - SP</span>
              <RiMapPin2Fill className="text-white size-4" />
            </li>
            <li className="flex flex-col md:flex-row items-center md:justify-end md:items-end space-y-2 md:space-y-0 md:space-x-2">
              <span>suporte@quadriatech.com.br</span>
              <FaEnvelope className="text-white size-4" />
            </li>
            <li className="flex flex-col md:flex-row items-center md:justify-end md:items-end space-y-2 md:space-y-0 md:space-x-2">
              <span>(11) 4502-4477</span>
              <FaPhoneAlt className="text-white size-4" />
            </li>
          </ul>
        </div>
      </div>
      <div className="container pb-6">
        <Separator className="my-4 bg-gray-500 h-px" />
        <p className="text-gray-300 font-light text-xs text-center">
          Quadria Copyright 2024 - Todos os Direitos Reservados.
        </p>
      </div>
    </div>
  );
};
