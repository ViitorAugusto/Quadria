import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
export const Management = () => {
  return (
    <div className="bg-slate-50">
      <div className="mt-16 py-16 container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-16">
        <Image
          src="/svg/placeholder.svg"
          alt="Placeholder"
          width={400}
          height={400}
          className="rounded-2xl "
        />
        <div className="space-y-8 text-center md:text-left px-2">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-medium text-primary"
          >
            Potencialize sua gestão
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="leading-relaxed"
          >
            Você está cansado de perder dinheiro por não ter o controle de seu
            estoque, não conseguir acompanhar os processos de vendas, o
            desempenho financeiro da sua empresa e ainda não consegue cumprir
            obrigações fiscais?
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="leading-relaxed"
          >
            Pare de sofrer! A Quadria simplifica sua jornada com soluções
            inteligentes desenvolvidas por quem tem mais de 2 décadas de
            experiência no varejo.
          </motion.p>
          <Button className="text-primary bg-secondary rounded-full px-12 py-6 font-medium text-base">
            Maximize seu negócio
          </Button>
        </div>
      </div>
    </div>
  );
};
