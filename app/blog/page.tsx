import { Separator } from "@/components/ui/separator";
import { History, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/lib/blog-data";

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans text-foreground pt-24">
      {/* Blog Hero Section */}
      <section className="flex flex-col items-center justify-center relative py-20 md:py-32 overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 mb-6">
              Éditorial
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-linear-to-r from-foreground to-foreground/70 mb-6">
              Perspectives & Horizons
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Exploration des tendances, analyses stratégiques et retour sur
              notre aventure humaine et entrepreneuriale.
            </p>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[100px]" />
      </section>

      <Separator className="max-w-4xl mx-auto" />

      {/* Notre Parcours (Kept as requested) */}
      <section className="flex flex-col items-center justify-center py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
            <div className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                alt="Team working together"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
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

      {/* Values transformed into "Latest Articles" style */}
      <section className="flex flex-col items-center justify-center py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Nos Valeurs & Insights
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Découvrez les piliers qui soutiennent notre approche et nos
                dernières réflexions.
              </p>
            </div>
            <Button variant="outline" className="hidden md:flex">
              Voir tous les articles
            </Button>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {blogPosts.map((article, index) => (
              <Card
                key={index}
                className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group bg-background"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
                    {article.category}
                  </div>
                </div>
                <CardHeader className="p-6 pb-3">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime} de lecture</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <CardDescription className="text-base line-clamp-3">
                    {article.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Link
                    href={`/blog/${article.slug}`}
                    className="text-sm font-medium text-primary flex items-center gap-2 hover:underline"
                  >
                    Lire l&apos;article <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center md:hidden">
            <Button variant="outline">Voir tous les articles</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
