import { blogPosts } from "@/lib/blog-data";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-background pt-24 pb-20">
      {/* Hero Image */}
      <div className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container px-4 md:px-6 text-center text-white">
            <div className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground mb-4">
              {post.category}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 max-w-4xl mx-auto">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-6 text-sm md:text-base text-white/80">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readTime} de lecture
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container px-4 md:px-6 py-12 max-w-3xl mx-auto">
        <Link href="/blog">
          <Button
            variant="ghost"
            className="mb-8 pl-0 hover:pl-2 transition-all"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour aux articles
          </Button>
        </Link>

        <div
          className="prose prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-12 pt-8 border-t">
          <h3 className="text-xl font-bold mb-6">Continuer la lecture</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {blogPosts
              .filter((p) => p.slug !== post.slug)
              .slice(0, 2)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group block p-4 rounded-xl border bg-card hover:bg-accent/50 transition-colors"
                >
                  <h4 className="font-bold group-hover:text-primary transition-colors mb-2">
                    {relatedPost.title}
                  </h4>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {relatedPost.description}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </article>
  );
}
