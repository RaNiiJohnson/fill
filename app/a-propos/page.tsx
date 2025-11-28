import { Separator } from "@/components/ui/separator";
import { CheckCircle2, History, Target, Users } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans text-foreground pt-24">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-linear-to-r from-foreground to-foreground/70 mb-6">
              Notre Mission & Notre Histoire
            </h1>
            <p className="text-xl text-muted-foreground">
              Découvrez qui nous sommes et ce qui nous anime au quotidien pour
              accompagner votre réussite.
            </p>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[100px]" />
      </section>

      <Separator />

      {/* Detailed History Section */}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
            <div className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                alt="Team working together"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <History className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight">
                  Notre Parcours
                </h2>
              </div>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Tout a commencé il y a plus de dix ans, avec une vision simple
                  mais ambitieuse : transformer la manière dont les entreprises
                  abordent leurs défis stratégiques et humains.
                </p>
                <p>
                  Fondé par une équipe d&apos;anciens dirigeants et de
                  consultants seniors, notre cabinet s&apos;est construit sur
                  l&apos;idée que la véritable performance naît de
                  l&apos;alignement entre la stratégie d&apos;entreprise et le
                  potentiel humain.
                </p>
                <p>
                  Au fil des années, nous avons grandi aux côtés de nos clients,
                  traversant avec eux les révolutions technologiques et les
                  mutations du marché. Notre capacité d&apos;adaptation et notre
                  engagement sans faille ont fait de nous un partenaire de
                  confiance pour de nombreuses organisations, des startups
                  prometteuses aux multinationales établies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values / Philosophy Section */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Nos Valeurs Fondamentales
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ces principes guident chacune de nos actions et définissent notre
              culture d'entreprise.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Excellence",
                description:
                  "Nous visons la plus haute qualité dans chaque mission, ne nous contentant jamais de l'ordinaire.",
                icon: Target,
              },
              {
                title: "Intégrité",
                description:
                  "La transparence et l'honnêteté sont au cœur de nos relations avec nos clients et partenaires.",
                icon: CheckCircle2,
              },
              {
                title: "Collaboration",
                description:
                  "Nous croyons en la force du collectif et co-construisons les solutions avec nos clients.",
                icon: Users,
              },
            ].map((value, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-8 rounded-2xl bg-background shadow-sm border"
              >
                <div className="p-4 rounded-full bg-primary/10 text-primary mb-6">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
