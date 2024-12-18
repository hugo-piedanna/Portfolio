"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { IconBrandGithub, IconBrandLinkedin, IconBrandSlack, IconClick } from "@tabler/icons-react";
import { LinkPreview } from "../ui/link-preview";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { z } from "zod"
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Loader2 } from "lucide-react";

interface contact {
    title: string,
    subtitle: string,
    icon: JSX.Element,
    link: string,
    target: "_blank" | "_self"
}

const contacts: contact[] = [
    {
        title: "Proposer une mission",
        subtitle: "Mon profil malt",
        icon: <IconBrandSlack size={30} />,
        link: "https://www.malt.fr/profile/hugopiedanna",
        target: "_blank",
    },
    {
        title: "Accéder à mes codes",
        subtitle: "Mon github",
        icon: <IconBrandGithub size={24} />,
        link: "https://github.com/hugo-piedanna",
        target: "_blank",
    },
    {
        title: "Regarder mes posts",
        subtitle: "Mon profil linkedin",
        icon: <IconBrandLinkedin size={24} />,
        link: "https://www.linkedin.com/in/hugo-piedanna-a80570246/",
        target: "_blank",
    }
];

const FormSchema = z.object({
    email: z.string()
        .email("Vous devez rentrer un e-mail valide."),
    object: z.string()
        .min(5, { message: "Vous devez renseigner un objet. (5 caractères minimum)" }),
    content: z.string()
        .min(25, { message: "Votre e-mail doit contenir un message. (25 caractères minimum)" })
});

export default function Contact() {
    const { executeRecaptcha } = useGoogleReCaptcha();
    const { toast } = useToast();
    const [submit, setSubmit] = useState<boolean>(false);

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: "",
            object: "",
            content: ""
        }
    });

    const handleSubmit = async(data: z.infer<typeof FormSchema>) => {
        setSubmit(true);
        if(!executeRecaptcha){
            toast({
                title: "Erreur lors de l'envoi !",
                description: "La vérification recaptcha de Google n'est pas disponible. Réessayez plus tard ou contactez moi via linkedin.",
                variant: "destructive",
                duration: 5000,
            });
            setSubmit(false);
            return;
        }

        const gRecaptchaToken = await executeRecaptcha('inquirySubmit');

        const responseCaptcha = await axios({
            method: "post",
            url: "/api/recaptcha",
            data: {
                gRecaptchaToken
            },
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            }
        });

        if(responseCaptcha.data?.success === true){
            const responseMailer = await axios({
                method: "post",
                url: "/api/mailer",
                data: data,
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json"
                }
            });

            if(responseMailer.data?.success === true){
                toast({
                    title: "Message envoyé !",
                    description: "Je vous recontacte le plus vite possible.",
                    duration: 5000
                });

                form.reset({
                    email: "",
                    object: "",
                    content: ""
                });
            }else{
                toast({
                    title: "Erreur lors de l'envoi !",
                    description: responseMailer.data?.message,
                    variant: "destructive",
                    duration: 5000
                });
            }
        } else {
            toast({
                title: "Erreur lors de l'envoi !",
                description: responseCaptcha.data?.message,
                variant: "destructive",
                duration: 5000
            });
        }
        setSubmit(false);
    }

    return (
        
        <section className="container px-6 w-full mx-auto mt-20" id="contact">
            <h3 className="text-3xl font-medium text-center">{"Contact"}</h3>

            <div className="grid lg:grid-cols-2 gap-8 pt-5 mt-16">
                <div>
                    <Card className="h-full">
                        <CardHeader>
                            <CardTitle> Me contacter </CardTitle>
                            <CardDescription>{"Vous pouvez m'envoyer un e-mail pour toute question ou demande."}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(handleSubmit)} className="grid w-full items-center gap-4">
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>E-mail</FormLabel>
                                                <FormControl>
                                                    <Input type="email" placeholder="x@domaine.com" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )} 
                                    />
                                    <FormField
                                        control={form.control}
                                        name="object"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Objet</FormLabel>
                                                <FormControl>
                                                    <Input type="text" placeholder="Question à propos de ..." {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )} 
                                    />
                                    <FormField
                                        control={form.control}
                                        name="content"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Contenu</FormLabel>
                                                <FormControl>
                                                    <Textarea
                                                        placeholder="Ecrivez votre message ici."
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )} 
                                    />
                                    {submit ? 
                                        <Button disabled>
                                            <Loader2 className="animate-spin" />
                                            Envoi en cours
                                        </Button> : 
                                        <Button type="submit">Envoyer</Button>}
                                </form>
                            </Form>
                        </CardContent>
                    </Card>
                </div>
                <div className="flex flex-col gap-4 h-full">
                    {contacts.map((item, index) => (
                        <Card key={index} className="relative mb-5 lg:mb-0">
                            <div className="flex h-full w-full items-center flex-col justify-center p-6">
                                <div className="flex items-center gap-2">
                                    {item.icon}
                                    <h4 className="text-xl font-medium">{item.title}</h4>
                                </div>
                                <LinkPreview
                                    
                                    url={item.link}
                                    className="mt-2 text-sm text-muted-foreground flex items-center gap-2 hover:underline underline-offset-4"
                                >
                                    {item.subtitle} <IconClick size={16} />
                                </LinkPreview>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
