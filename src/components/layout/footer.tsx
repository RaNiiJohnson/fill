import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-6 border-t bg-background">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-6 text-sm text-muted-foreground mx-auto">
        <p>© 2024 Entreprise Consulting. Tous droits réservés.</p>
        <div className="flex gap-4">
          <Link href="#" className="hover:text-foreground transition-colors">
            Mentions légales
          </Link>
          <Link href="#" className="hover:text-foreground transition-colors">
            Politique de confidentialité
          </Link>
        </div>
      </div>
    </footer>
  );
}
