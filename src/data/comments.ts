export const people = [
  {
    name: "João Almeida",
    role: "CEO na Empresa X",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur.",
    image: "/image/foto-1.png",
  },
  {
    name: "Rafael Soares",
    role: "CEO na Empresa y",
    text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum maximus volutpat.",
    image: "/image/foto-2.png",
  },
  {
    name: "Gabriela Martim",
    role: "Fundadora da Empresa W",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan lorem at.”",
    image: "/image/foto-3.png",
  },
  {
    name: "Rodrigo Alves",
    role: "Diretor Empresa Z",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nisl arcu, auctor.”",
    image: "/image/foto-4.png",
  },
];

// import Image from "next/image";

// export const People = () => {
//   return (
//     <div className="container mx-auto">
//       <h1 className="text-center py-8 md:mb-8 text-3xl md:text-4xl text-primary">
//         Depoimentos
//       </h1>
//       <div className="w-full overflow-x-auto">
//         <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 w-max md:w-full place-items-center">
//           {people.map(person => (
//             <div
//               className="min-w-[280px] md:max-w-xs relative flex-shrink-0 flex justify-center items-center flex-col space-y-4 p-4 bg-white shadow md:shadow-none rounded-lg"
//               key={person.name}
//             >
//               <h3 className="text-center py-2">{person.text}</h3>
//               <Image
//                 src="/arrowdown.png"
//                 alt="arrow"
//                 width={50}
//                 height={50}
//                 className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-2/3"
//               />
//               <Image
//                 src={person.image}
//                 alt={person.name}
//                 width={100}
//                 height={100}
//                 className="rounded-full"
//                 priority
//               />
//               <div className="space-y-2 flex flex-col justify-center items-center">
//                 <p className="font-semibold text-xl text-primary">
//                   {person.name}
//                 </p>
//                 <span className="text-sm font-normal">{person.role}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
