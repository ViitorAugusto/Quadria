import { people } from "@/data/comments";
import Image from "next/image";

export const People = () => {
  return (
    <div className="container">
      <h1 className="text-center py-8 mb-8 text-3xl md:text-4xl text-primary">
        Depoimentos
      </h1>
      <div className="w-full overflow-x-auto md:overflow-x-hidden">
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 w-max md:w-full place-items-center">
          {people.map(person => (
            <div
              className="min-w-[20%] md:max-w-64 relative flex-shrink-0 flex justify-center items-center flex-col space-y-6 p-4"
              key={person.name}
            >
              <h3 className="text-center py-2 w-64">{person.text}</h3>
              <Image
                src="/image/arrowdown.png"
                alt="arrow"
                width={200}
                height={50}
                className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-40 w-10/12"
              />
              <Image
                src={person.image}
                alt={person.name}
                width={200}
                height={200}
                className="w-auto h-auto pt-12"
                priority
              />
              <div className="space-y-2 flex flex-col justify-center items-center">
                <p className="font-semibold text-2xl text-primary">
                  {person.name}
                </p>
                <span className="text-sm font-normal">{person.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

//
