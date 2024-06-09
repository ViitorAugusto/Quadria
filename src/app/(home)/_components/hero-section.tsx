import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  return (
    <div className="text-gray-50 min-h-[100dvh] flex flex-col">
      <section className="relative bg-[url('/image/background.png')] bg-cover bg-no-repeat">
        <div className="container mx-auto flex flex-col items-center md:flex-row">
          <motion.div
            className="space-y-12 mt-12 md:mt-0 md:flex-1 md:mr-6"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-5xl font-normal text-secondary">
              Tecnologia <br /> para o Varejo
            </h2>
            <p className="">
              Está difícil fazer a gestão do seu negócio?
              <br />
              A gente faz isso há quase três décadas para você.
              <br />
              impulsionr o sucesso da sua empresa.
            </p>
            <Button className="text-primary bg-secondary rounded-full px-8 md:px-12 py-6 font-medium text-base">
              Fale com um especialista
            </Button>
          </motion.div>

          <motion.div
            className="w-full my-12 md:my-0 md:w-auto md:flex-1"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={fadeInUp}
          >
            <Image
              src="/image/hero.png"
              width={600}
              height={600}
              quality={100}
              alt="Profile"
              priority
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </div>

        <div className="container mx-auto flex flex-col-reverse items-center gap-12 md:flex-row my-16 md:mb-48 md:gap-24">
          <motion.div
            className="w-full md:w-auto md:flex-1"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.6 }}
            variants={fadeInUp}
          >
            <Image
              src="/image/hero2.png"
              width={600}
              height={600}
              quality={100}
              alt="Profile"
              priority
              className="w-full h-auto object-contain"
            />
          </motion.div>
          <motion.div
            className="space-y-12 md:flex-1 md:ml-6"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.9 }}
            variants={fadeInUp}
          >
            <h2 className="text-2xl md:text-4xl font-normal text-secondary">
              Gestão de estoque, automação de processos, análise de dados e
              softwares projetados para maximizar o sucesso do seu negócio.
            </h2>
            <p className="w-11/12 text-sm">
              Nossa paixão pela inovação nos permite entender as demandas e
              necessidades de cada cliente e oferecer nossa tecnologia de ponta
              personalizada para que sua empresa possa crescer e conquistar
              novos mercados.
            </p>
            <Button className="text-primary bg-secondary rounded-full px-12 py-6 font-medium text-base">
              Maximize seu negócio
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
