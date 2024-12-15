"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoscroll from "embla-carousel-auto-scroll";
import Image from "next/image";

type StackItem = {
  title: string;
  svg: string;
  usage: "BDD-ORM" | "Framework-Lib" | "Langage-Archi" | "Outils";
  white?: boolean
};

const stack: StackItem[] = [

  // Langages
  { title: "Java", svg: "java", usage: "Langage-Archi" },
  { title: "JavaScript", svg: "javascript", usage: "Langage-Archi" },
  { title: "PHP", svg: "php", usage: "Langage-Archi" },
  { title: "HTML", svg: "html", usage: "Langage-Archi" },
  { title: "CSS", svg: "css", usage: "Langage-Archi" },
  { title: "API Rest", svg: "rest", usage: "Langage-Archi" },

  // Frameworks et Librairies
  { title: "Spring", svg: "spring", usage: "Framework-Lib" },
  { title: "NextJS", svg: "nextjs", usage: "Framework-Lib", white: true },
  { title: "AdonisJS", svg: "adonis", usage: "Framework-Lib" },
  { title: "AngularJS", svg: "angular", usage: "Framework-Lib" },
  { title: "WebSocket", svg: "websocket", usage: "Framework-Lib", white: true },
  { title: "Node.js", svg: "node", usage: "Framework-Lib" },
  { title: "Express", svg: "express", usage: "Framework-Lib", white: true },
  { title: "Laravel", svg: "laravel", usage: "Framework-Lib" },
  { title: "Ajax", svg: "ajax", usage: "Framework-Lib" },
  { title: "JQuery", svg: "jquery", usage: "Framework-Lib" },
  { title: "TailwindCSS", svg: "tailwindcss", usage: "Framework-Lib" },
  { title: "Bootstrap", svg: "bootstrap", usage: "Framework-Lib" },
  
  // BDD ORM
  { title: "MongoDB", svg: "mongodb", usage: "BDD-ORM" },
  { title: "MySQL", svg: "mysql", usage: "BDD-ORM" },
  { title: "Eloquent", svg: "eloquent", usage: "BDD-ORM", white: true },
  { title: "Hibernate", svg: "hibernate", usage: "BDD-ORM" },

  // Outils
  { title: "Git", svg: "git", usage: "Outils" },
  { title: "Stripe", svg: "stripe", usage: "Outils" },
  { title: "Trello", svg: "trello", usage: "Outils" },
  { title: "Jira", svg: "jira", usage: "Outils" },
  { title: "Scrum", svg: "scrum", usage: "Outils" },
  { title: "Prince 2", svg: "prince2", usage: "Outils" },
];

export default function Skills() {
  
  return (
    <section className="container w-full px-6 mx-auto mt-20" id="skills">
      <h3 className="text-3xl font-medium text-center">{"Compétences"}</h3>

      <h2 className="text-2xl mt-10">Langages et Architectures</h2>
      <Carousel
        className="w-full mt-5"
        opts={{ loop: true }}
        plugins={[
          Autoscroll({
            speed: 1,
            stopOnInteraction: false,
            stopOnFocusIn: false,
            stopOnMouseEnter: true,
          }),
        ]}
      >
        <CarouselContent>
          {stack.filter((item) => item.usage === "Langage-Archi").map((item, index) => (
            skillItem(index, item)
          ))}
        </CarouselContent>
      </Carousel>

      <h2 className="text-2xl mt-10">Frameworks et Librairies</h2>
      <Carousel
        className="w-full mt-5"
        opts={{ loop: true }}
        plugins={[
          Autoscroll({
            speed: 1,
            stopOnInteraction: false,
            stopOnFocusIn: false,
            stopOnMouseEnter: true,
          }),
        ]}
      >
        <CarouselContent>
          {stack.filter((item) => item.usage === "Framework-Lib").map((item, index) => (
            skillItem(index, item)
          ))}
        </CarouselContent>
      </Carousel>

      <h2 className="text-2xl mt-10">BDD et ORM</h2>
      <Carousel
        className="w-full mt-5"
        opts={{ loop: true }}
        plugins={[
          Autoscroll({
            speed: 1,
            stopOnInteraction: false,
            stopOnFocusIn: false,
            stopOnMouseEnter: true,
          }),
        ]}
      >
        <CarouselContent>
          {stack.filter((item) => item.usage === "BDD-ORM").map((item, index) => (
            skillItem(index, item)
          ))}
        </CarouselContent>
      </Carousel>

      <h2 className="text-2xl mt-10">Outils et Méthodes</h2>
      <Carousel
        className="w-full mt-5"
        opts={{ loop: true }}
        plugins={[
          Autoscroll({
            speed: 1,
            stopOnInteraction: false,
            stopOnFocusIn: false,
            stopOnMouseEnter: true,
          }),
        ]}
      >
        <CarouselContent>
          {stack.filter((item) => item.usage === "Outils").map((item, index) => (
            skillItem(index, item)
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}

function skillItem(index: number, item: StackItem) {
    return (
        <CarouselItem
              key={index}
              className="basis-1/2 sm:basis-1/3 md:basis-1/5 lg:basis-1/6 2xl:basis-1/12 2xl:m-5"
            >
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm hover:scale-[1.15] duration-500 cursor-pointer m-3 2xl:m-0 2xl:w-[15vh]">
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparant"></div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center p-6">
                  <Image
                    src={`/assets/logos/${item.svg}.svg`}
                    width={64}
                    height={64}
                    alt={item.svg}
                    className={`h-16 ${item.white ? "bg-white" : ""}`}
                  />
                  <h6 className="font-medium text-sm mt-4">{item.title}</h6>
                </div>
              </div>
            </CarouselItem>
    );
}