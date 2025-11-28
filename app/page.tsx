import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  History,
  Lightbulb,
  Mail,
  MapPin,
  Phone,
  Target,
  Users,
} from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans text-foreground">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden py-24 md:py-32 lg:py-40">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="flex flex-col gap-6 text-center lg:text-left">
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium backdrop-blur-sm w-fit mx-auto lg:mx-0 bg-secondary/50 text-secondary-foreground">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                Excellence & Innovation
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-linear-to-r from-foreground to-foreground/70">
                Élevez votre Potentiel
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl lg:mx-0">
                Nous accompagnons les entreprises et les leaders dans leur
                transformation. Consulting stratégique et coaching sur mesure
                pour une performance durable.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row justify-center lg:justify-start">
                <Button size="lg" className="gap-2 text-base h-12 px-8">
                  Nous Contacter <ArrowRight className="h-4 w-4" />
                </Button>
                <Link href="/blog">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary text-primary hover:bg-primary/10"
                  >
                    En savoir plus
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-[600px] lg:max-w-none">
              <HeroVideoDialog
                className="block dark:hidden"
                animationStyle="from-center"
                videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                thumbnailSrc="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop"
                thumbnailAlt="Consulting meeting"
              />
              <HeroVideoDialog
                className="hidden dark:block"
                animationStyle="from-center"
                videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                thumbnailSrc="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop"
                thumbnailAlt="Consulting meeting"
              />
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute -top-24 -z-10 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[100px] opacity-50 right-0" />
        <div className="absolute top-1/2 -z-10 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[100px] opacity-30 left-0" />
      </section>

      <Separator />

      {/* Histoire & Objectif Section */}
      <section
        id="notre-histoire"
        className="flex flex-col py-24 bg-muted/30 items-center justify-center"
      >
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
            {/* Notre Histoire */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <History className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight">
                  Notre Histoire
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Fondée sur la conviction que chaque organisation possède un
                potentiel inexploité, notre cabinet est né de la rencontre
                d&apos;experts passionnés par l&apos;humain et la stratégie.
                Depuis nos débuts, nous avons accompagné des dizaines
                d&apos;entreprises, des startups aux grands groupes, dans leurs
                défis les plus complexes.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Notre parcours est marqué par une quête constante
                d&apos;excellence et d&apos;innovation, tissant des liens
                durables avec nos partenaires basés sur la confiance et les
                résultats.
              </p>
            </div>

            {/* Notre Objectif */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <Target className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight">
                  Notre Objectif
                </h2>
              </div>
              <ul className="grid gap-4">
                {[
                  "Catalyser la croissance durable de nos clients.",
                  "Développer le leadership et l'intelligence collective.",
                  "Apporter des solutions concrètes et mesurables.",
                  "Innover dans les méthodes de management et de stratégie.",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                    <span className="text-lg text-muted-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Activités Section */}
      <section
        id="nos-activites"
        className="flex flex-col py-24 items-center justify-center  bg-background"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
              Nos Domaines d&apos;Expertise
            </h2>
            <p className="max-w-[700px] text-lg text-muted-foreground">
              Des solutions complètes pour répondre à vos enjeux de
              développement et de transformation.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="group relative overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-linear-to-br from-transparent to-primary/5 opacity-100" />
              <CardHeader>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-blue-500/10 text-blue-500">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl mb-2">
                  Consulting Stratégique
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Analyse approfondie et recommandations pour orienter vos
                  décisions majeures.
                </p>
              </CardContent>
            </Card>
            <Card className="group relative overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-linear-to-br from-transparent to-primary/5 opacity-100" />
              <CardHeader>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-green-500/10 text-green-500">
                  <Users className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl mb-2">
                  Coaching de Dirigeants
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Accompagnement personnalisé pour renforcer votre leadership et
                  votre impact.
                </p>
              </CardContent>
            </Card>
            <Card className="group relative overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-linear-to-br from-transparent to-primary/5 opacity-100" />
              <CardHeader>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-purple-500/10 text-purple-500">
                  <BrainCircuit className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl mb-2">
                  Transformation Digitale
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Guidance dans l&apos;adoption des nouvelles technologies et
                  processus.
                </p>
              </CardContent>
            </Card>
            <Card className="group relative overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-linear-to-br from-transparent to-primary/5 opacity-100" />
              <CardHeader>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-yellow-500/10 text-yellow-500">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl mb-2">
                  Formation & Ateliers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Programmes sur mesure pour monter en compétence vos équipes.
                </p>
              </CardContent>
            </Card>
            <Card className="group relative overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-linear-to-br from-transparent to-primary/5 opacity-100" />
              <CardHeader>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-red-500/10 text-red-500">
                  <Target className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl mb-2">
                  Gestion de Projet
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Pilotage efficace de vos initiatives stratégiques.
                </p>
              </CardContent>
            </Card>
            <Card className="group relative overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-linear-to-br from-transparent to-primary/5 opacity-100" />
              <CardHeader>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-indigo-500/10 text-indigo-500">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl mb-2">
                  Audit Organisationnel
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Diagnostic complet pour optimiser vos structures et processus.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Info / Stats Section */}
      <section className="py-24 bg-primary text-primary-foreground flex flex-col items-center justify-center">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "10+", label: "Années d'Expérience" },
              { value: "50+", label: "Entreprises Accompagnées" },
              { value: "98%", label: "Satisfaction Client" },
              { value: "24/7", label: "Support Dédié" },
            ].map((stat, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <span className="text-4xl md:text-5xl font-bold">
                  {stat.value}
                </span>
                <span className="text-sm md:text-base opacity-80">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 bg-muted/50 flex flex-col items-center justify-center"
      >
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Prêt à transformer votre entreprise?
              </h2>
              <p className="text-lg text-muted-foreground">
                Contactez-nous dès aujourd&apos;hui pour une consultation .
                Discutons de vos projets et voyons comment nous pouvons vous
                aider à atteindre vos objectifs.
              </p>

              <div className="flex flex-col gap-4 mt-4">
                <Link
                  href="mailto:contact@entreprise.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="p-3 rounded-full bg-background shadow-sm">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground/40 group-hover:text-primary transition-colors">
                      contact@entreprise.com
                    </p>
                  </div>
                </Link>
                <Link
                  href="tel:+33123456789"
                  className="flex items-center gap-4 group"
                >
                  <div className="p-3 rounded-full bg-background shadow-sm">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Téléphone</p>
                    <p className="text-muted-foreground/40 group-hover:text-primary transition-colors">
                      +33 1 23 45 67 89
                    </p>
                  </div>
                </Link>
                <Link
                  href={
                    "https://www.google.com/maps/place/La+Tour+Redland/@-18.8841735,47.5206908,1019m/data=!3m2!1e3!4b1!4m6!3m5!1s0x21f0812edc843973:0x18d65fdd081e2cdc!8m2!3d-18.8841786!4d47.5232657!16s%2Fg%2F11q251srpq?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D"
                  }
                  className="flex items-center gap-4 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="p-3 rounded-full bg-background shadow-sm">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Adresse</p>
                    <p className="text-muted-foreground/40 group-hover:text-primary transition-colors">
                      La Tour, Rue Ravoninahitriniarivo - ANKORONDRANO
                      ANTANANARIVO, 101
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            <Card className="p-6 md:p-8 shadow-lg border-none bg-background">
              <form className="flex flex-col gap-4">
                <div className="grid gap-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nom complet
                  </label>
                  <Input id="name" placeholder="Votre nom" />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="votre@email.com"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Votre message" />
                </div>
                <Button size="lg" className="mt-2 w-full">
                  Envoyer le message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
