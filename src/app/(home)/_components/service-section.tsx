import { data } from "@/data/services-data";
import Image from "next/image";
import { TbPointFilled } from "react-icons/tb";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const ServiceSection = () => {
  return (
    <div className="bg-slate-50 py-16 px-2">
      <section className="container mx-auto px-4 md:px-6 flex flex-col items-center gap-8 relative overflow-x-hidden md:overflow-x-clip">
        <div className="absolute w-[110%] h-24 -top-40 flex items-center justify-center">
          <div className="w-full h-full md:bg-[url('/image/elipse.png')] bg-cover" />
        </div>
        <motion.h2
          className="text-3xl md:text-4xl font-medium text-primary md:mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
        >
          Nossos Serviços
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:my-10 px-2">
          <Image
            src="/svg/work.svg"
            width={350}
            height={350}
            alt="work"
            className="absolute bg-[url('/svg/work.svg')] bg-no-repeat bg-cover w-[350px] h-[350px] right-3 bottom-0 hidden md:block"
          />
          {data.map((item, index) => (
            <motion.div
              className="space-y-2 border border-black px-2 py-2 md:py-4 rounded-xl overflow-hidden bg-white shadow"
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeInUp}
            >
              <div className="flex justify-between">
                <div className="m-2 md:m-4">
                  <Image
                    className="w-auto h-auto"
                    src={item.image ?? ""}
                    width={50}
                    height={50}
                    alt={item.title}
                    priority
                  />
                </div>
                <div className="text-gray-300 flex px-1">
                  <TbPointFilled className="size-6" />
                  <TbPointFilled className="size-6" />
                  <TbPointFilled className="size-6" />
                </div>
              </div>
              <div className="px-4 overflow-y-auto space-y-2">
                <h2 className="text-lg font-semibold text-primary">
                  {item.title}
                </h2>
                <p className="text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

// import { data } from "@/data/services-data";
// import Image from "next/image";
// import { TbPointFilled } from "react-icons/tb";

// export const ServiceSection = () => {
//   return (
//     <div className="bg-slate-50 py-16 px-2">
//       <section className="container mx-auto px-4 md:px-6 flex flex-col items-center gap-8 relative overflow-x-hidden md:overflow-x-clip ">
//         <div className="absolute w-[110%] h-24 -top-40 flex items-center justify-center ">
//           <div className=" w-full h-full md:bg-[url('/image/elipse.png')] bg-cover" />
//         </div>
//         <h2 className="text-3xl md:text-4xl font-medium text-primary md:mb-10">
//           Nossos Serviços
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:my-10 px-2">
//           <Image
//             src="/svg/work.svg"
//             width={350}
//             height={350}
//             alt="work"
//             className="absolute bg-[url('/svg/work.svg')] bg-no-repeat bg-cover w-[350px] h-[350px] right-3 bottom-0 hidden md:block"
//           />
//           {data.map((item, index) => (
//             <div
//               className="space-y-2 border border-black px-2 py-2 md:py-4 rounded-xl overflow-hidden bg-white shadow"
//               key={index}
//             >
//               <div className="flex justify-between">
//                 <div className="m-2 md:m-4">
//                   <Image
//                     className=" w-auto h-auto"
//                     src={item.image ?? ""}
//                     width={50}
//                     height={50}
//                     alt={item.title}
//                     priority
//                   />
//                 </div>
//                 <div className="text-gray-300 flex px-1">
//                   <TbPointFilled className="size-6" />
//                   <TbPointFilled className="size-6" />
//                   <TbPointFilled className="size-6" />
//                 </div>
//               </div>
//               <div className="px-4 overflow-y-auto space-y-2">
//                 <h2 className="text-lg font-semibold text-primary">
//                   {item.title}
//                 </h2>
//                 <p className="text-sm leading-relaxed">{item.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };
