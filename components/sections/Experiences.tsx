import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ChevronRight } from "lucide-react";
import { LinkPreview } from "../ui/link-preview";
import Link from "next/link";

interface experience {
  title: string,
  website: string,
  hardskills: string[],
  softskills: string[],
  company: string,
  date: string,
  description: string,
  projectName: string
};

const experiences: experience[] = [
  {
    title: "Développeur full-stack",
    website: "https://www.cegedim.fr/Pages/default.aspx",
    hardskills: ["Spring", "Java EE", "Angular JS"],
    softskills: ["Jira", "Scrum"],
    company: "Cegedim",
    date: "Depuis 2023",
    description: "Développement d'une application web permettant de paramétrer le progiciel far de Cegedim (Active Infinite). Pour se faire, j'ai dû développer à l'indentique, les fonctionnalités déjà présentes dans l'ancien logiciel de paramétrage. J'ai veillé à ce que les contraintes métier soient toujours respectées tout en apportant des adaptations aux fonctionnalités.",
    projectName: "Active Infinite Paramétrage Web"
  },
  {
    title: "Développeur back-end",
    website: "https://ultimate-themepark.com/",
    hardskills: ["Java", "Websocket", "PHP", "Laravel"],
    softskills: ["Stripe", "SAV", "Relation client"],
    company: "Inovancy",
    date: "Depuis 2021",
    description: "Développement d'un plugin minecraft en java. Pour faciliter la configuration de ce plugin, j'ai développé un espace web pour les clients permettant de configurer leur plugin. J'ai aussi développé une page web connectée au plugin via websocket qui permet de jouer de la musique en temps réel en fonction d'où se déplacent les utilisateurs.",
    projectName: "Ultimate Theme Park"
  }
];

export default function Experience() {
  return (
    <section className="container px-6 w-full mx-auto mt-20" id="experiences">
      <h3 className="text-3xl font-medium text-center">{"Expériences"}</h3>
      <div className="grid xl:grid-cols-2 gap-8 mt-16">
        {experiences.map((experience, index) => (
          <Card key={index} className="relative group">
            <CardHeader>
                <div className="flex flex-row justify-between">
                    <CardTitle>{experience.title}</CardTitle>
                    <span className="text-sm">{experience.date}</span>
                </div>
                <CardDescription>
                    {experience.company} ({experience.projectName})
                </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm indent-5">
                {experience.description}
              </p>
              <div className="flex items-center flex-wrap gap-2 mt-6">
                {experience.hardskills.map((hardSkill, index) => (
                    <Badge variant="outline" key={index} className="w-fit">
                        {hardSkill}
                    </Badge>
                ))}
              </div>
              <div className="flex items-center flex-wrap gap-2 mt-2">
                {experience.softskills.map((softSkill, index) => (
                    <Badge variant="outline" key={index} className="w-fit">
                        {softSkill}
                    </Badge>
                ))}
              </div>
            </CardContent>
            <div className="group-hover:blur-[0px] absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-white text-sm font-medium bg-black/70 py-2 px-4 rounded-xl">
              <LinkPreview url={experience.website} className="flex items-center betw">
                {"Visiter le site"} <ChevronRight />
              </LinkPreview>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}