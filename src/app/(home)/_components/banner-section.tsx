import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function BannerSection() {
  return (
    <motion.div
      className="hidden container md:flex flex-col md:flex-row bg-white rounded-lg overflow-hidden my-20 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.5 }}
      variants={fadeInUp}
    >
      <motion.div
        className="relative bg-primary clip-arrow p-12 text-white rounded-2xl z-30 h-[400px] w-[700px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-normal mb-4">
          Desde 1996 cuidando da automação comercial da sua empresa
        </h2>
        <ul className="space-y-2 text-lg">
          <li>
            <span className="text-cyan-400 font-semibold">+ de 1.200</span>{" "}
            clientes atendidos
          </li>
          <li>
            <span className="text-cyan-400 font-semibold">+ de 3.500</span>{" "}
            terminais instalados
          </li>
          <li>
            <span className="text-cyan-400 font-semibold">+ de 5 mil</span>{" "}
            colaboradores treinados
          </li>
          <li>
            <span className="text-cyan-400 font-semibold">+ de 40 milhões</span>{" "}
            pessoas impactadas
          </li>
        </ul>
      </motion.div>
      <Button className="text-primary bg-secondary rounded-full px-12 py-6 font-medium text-base absolute left-32 bottom-7 z-50">
        Fale com um especialista
      </Button>
      <motion.div
        className="relative right-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        variants={fadeInUp}
      >
        <Image
          src="/image/foto-5.png"
          alt="Imagem de destaque"
          className="h-[450px] w-[980px] object-cover relative rounded-3xl"
          height={800}
          width={800}
        />
      </motion.div>
    </motion.div>
  );
}
