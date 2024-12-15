"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { IconAddressBook, IconBrandGithub, IconBrandLinkedin, IconBrandSlack, IconSparkles } from "@tabler/icons-react";
import { Card } from "../ui/card";

interface social {
    link: string
    icon: JSX.Element,
    username: string
}

const socials: social[] = [
    {
        icon: <IconBrandGithub size={24} />,
        link: "https://github.com/hugo-piedanna",
        username: "GitHub",
      },
      {
        icon: <IconBrandLinkedin size={24} />,
        link: "https://www.linkedin.com/in/hugo-piedanna-a80570246/",
        username: "Linkedin",
      },
      {
        icon: <IconBrandSlack size={30} />,
        link: "https://www.malt.fr/profile/hugopiedanna",
        username: "Malt",
      }
];

export default function Home(){
    function scrollToSection(section: string) {
        const el = document.getElementById(section);
        if (el) {
            const topOffset = el.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: topOffset - 100,
                behavior: 'smooth'
            });
        }
    }

    return (
        <section className="container w-full px-6 mx-auto relative" id="home">
            <div className="w-[700px] h-[350px] bg-gradient-to-tr z-10 from-violet-500 to-rose-500 rounded-[100%] absolute top-[50%] left-[25%] opacity-50 translate-x-[-50%] translate-y-[-50%] blur-[100px]">

            </div>
            <div className="grid lg:grid-cols-3 gap-8 pt-[15vh]">
                <div className="flex flex-col lg:col-span-2 gap-8 h-full justify-center z-20">
                    <h2 className="text-5xl font-bold leading-[3.5rem]">
                        {"Bonjour !"}
                        <br /> {"Je m'appelle "}
                        <span className="bg-gradient-to-tr from-violet-500 to-rose-500 inline-block text-transparent bg-clip-text">
                        {"Hugo"}
                        </span>
                        {", et je suis "}
                        <span className="bg-gradient-to-tr from-violet-500 to-rose-500 inline-block text-transparent bg-clip-text">
                        {"freelance"}
                        </span>
                        {" en développement web "}
                        <span className="bg-gradient-to-tr from-violet-500 to-rose-500 inline-block text-transparent bg-clip-text">
                        {"full-stack"}
                        </span>
                        {"."}
                    </h2>
                    <p className="text-md indent-5">{"Passionné par le développement depuis toujours, j'ai hâte de vous faire profiter de ma créativité et de mon analyse afin de répondre à vos besoins ! J'alimente mon ouverture d'esprit en voyageant. J'aiguise mon esprit d'analyse en jouant à des jeux de stratégie. J'ai le goût de l'effort que j'entretiens en pratiquant du sport plusieurs fois par semaine. Je nourris mon imagination et ma curiosité pour les réalisations techniques à travers mes déplacements dans des parcs d'attractions."}</p>
                    <div className="flex items-center flex-wrap gap-2 lg:gap-4">
                        {socials.map((social, index) => (
                            <Button asChild key={index} variant="ghost">
                                <Link
                                    href={social.link}
                                    target="_blank"
                                    className="flex items-center"
                                    >
                                    {social.icon} {social.username}
                                </Link>
                            </Button>
                        ))}
                    </div>
                    <div className="flex items-center flex-wrap gap-2 lg:gap-4">
                        <Button
                            className="flex items-center"
                            size="lg"
                            onClick={() => scrollToSection('contact')}
                        >
                            <IconAddressBook size={24} /> {"Me contacter"}
                        </Button>
                        <Button asChild variant={"outline"} >
                            <Link
                                href={"CV_Hugo_Piedanna.pdf"}
                                target="_blank"
                                className="flex items-center betw"
                            >
                                <IconSparkles size={24} /> {"Voir mon CV"}
                            </Link>
                        </Button>
                    </div>
                </div>
                <Card className="hidden lg:flex flex-col gap-8 h-full justify-center border-none rounded-[100%]">
                    <img src="assets/avatar.jpg" alt="Photo d'Hugo Piedanna" className="rounded-[100%]" />
                </Card>
            </div>
        </section>
    );
}