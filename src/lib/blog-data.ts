export interface BlogPost {
  slug: string;
  category: string;
  title: string;
  description: string;
  image: string;
  date: string;
  readTime: string;
  content: string; // HTML or Markdown content
}

export const blogPosts: BlogPost[] = [
  {
    slug: "excellence-comme-standard",
    category: "Philosophie",
    title: "L'Excellence comme Standard",
    description:
      "Pourquoi nous visons la plus haute qualité dans chaque mission et comment cela transforme les résultats de nos clients.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    date: "28 Nov 2024",
    readTime: "5 min",
    content: `
      <p>L'excellence n'est pas un acte, mais une habitude. Chez Entreprise Consulting, cette citation d'Aristote résonne dans chacun de nos projets.</p>
      <h2>Une exigence quotidienne</h2>
      <p>Viser l'excellence signifie ne jamais se contenter du "suffisant". C'est aller au-delà des attentes, anticiper les besoins non formulés et livrer une valeur ajoutée tangible à chaque étape.</p>
      <p>Dans un monde en perpétuelle mutation, la médiocrité est le chemin le plus court vers l'obsolescence. C'est pourquoi nous investissons continuellement dans la formation de nos consultants et la veille stratégique.</p>
      <h2>L'impact sur nos clients</h2>
      <p>Lorsque l'excellence devient un standard, elle se propage. Nos clients ne bénéficient pas seulement de nos conseils, ils adoptent cette culture de la performance et de la rigueur.</p>
    `,
  },
  {
    slug: "integrite-en-affaires",
    category: "Éthique",
    title: "L'Intégrité en Affaires",
    description:
      "La transparence et l'honnêteté ne sont pas des options. Découvrez comment nous bâtissons des relations durables.",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop",
    date: "25 Nov 2024",
    readTime: "4 min",
    content: `
      <p>La confiance est la monnaie la plus précieuse dans le monde des affaires. Sans elle, aucune transaction durable n'est possible.</p>
      <h2>La transparence totale</h2>
      <p>Nous croyons en une transparence radicale. Que les nouvelles soient bonnes ou mauvaises, nos clients méritent la vérité. C'est cette honnêteté qui nous permet de construire des stratégies solides et réalistes.</p>
      <h2>Des relations durables</h2>
      <p>L'intégrité fidélise. Nos clients reviennent vers nous non seulement pour notre expertise, mais parce qu'ils savent que nous agissons toujours dans leur meilleur intérêt.</p>
    `,
  },
  {
    slug: "force-du-collectif",
    category: "Méthodologie",
    title: "La Force du Collectif",
    description:
      "La co-construction est au cœur de notre succès. Plongée dans nos méthodes de travail collaboratives.",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
    date: "20 Nov 2024",
    readTime: "6 min",
    content: `
      <p>Aucun de nous ne sait ce que nous savons tous, ensemble. La collaboration n'est pas juste un mot à la mode, c'est notre moteur.</p>
      <h2>Co-construction</h2>
      <p>Nous ne livrons pas des solutions "prêtes à l'emploi". Nous les construisons avec vous. Vos équipes détiennent la connaissance du terrain, nous apportons la méthodologie et le recul stratégique.</p>
      <h2>Diversité des perspectives</h2>
      <p>En réunissant des profils variés autour d'une même table, nous favorisons l'émergence d'idées innovantes qui n'auraient jamais vu le jour en silo.</p>
    `,
  },
];
