import heroVideoAsset from "@/assets/videos/hero.mp4.asset.json";
/**
 * Conteúdo editável do site. Todos os textos, fotos, vídeo, projetos,
 * depoimentos, parceiros e contatos vêm deste arquivo.
 * Textos e fotos foram extraídos de https://www.jovemesportista.org/.
 */

const wix = (id: string, ext = "jpg", w = 1400, h = 1000) =>
  `https://static.wixstatic.com/media/e7fda0_${id}~mv2.${ext}/v1/fill/w_${w},h_${h},al_c,q_85,enc_auto/foto.${ext}`;

export const media = {
  logo: wix("04f77ada53684df3be41d875af949187", "jpg", 240, 240),
  banner: wix("ffc53056376f4e7499a3a9c820b164e2", "jpeg", 1600, 1000),
  bannerSide: wix("5f9d1e3777ea4d17ac0746c336e03f31", "jpg", 900, 1100),
  /** Vídeo institucional: informe a URL de um .mp4 (e .vtt de legendas) para substituir a abertura em fotos. */
  heroVideo: { src: heroVideoAsset.url } as null | { src: string; captions?: string; poster?: string },
};

export const site = {
  name: "Projeto Jovem Esportista",
  city: "Diadema – SP",
  years: 20,
  headline: "Mais do que esporte. Oportunidades para transformar vidas.",
  subtitle:
    "Conheça o trabalho do Jovem Esportista e descubra como o esporte, a cultura e a educação contribuem para o desenvolvimento, a convivência e novas oportunidades.",
  mission:
    "Promover o desenvolvimento humano por meio do esporte, da educação e da qualificação profissional, oferecendo oportunidades para crianças, jovens, adultos e idosos.",
  missionExtra:
    "Além das atividades esportivas, disponibilizamos diversos cursos de capacitação e formação, incentivando o aprendizado, o desenvolvimento de habilidades, a inclusão social, a geração de oportunidades e a melhoria da qualidade de vida.",
  about:
    "O Projeto Jovem Esportista foi criado em Diadema com a missão de transformar vidas através da cultura, educação e esporte. Com 20 anos de atuação, oferecemos oportunidades e acolhimento para crianças, jovens, adultos e idosos da comunidade. Por meio de cursos gratuitos de música, inglês, informática e atividades esportivas como futebol, capoeira, ballet, zumba e pilates, buscamos incentivar talentos, fortalecer vínculos e promover a inclusão social.",
  belief:
    "Acreditamos que educar, cuidar e inspirar são fundamentais para construir um futuro mais justo, digno e cheio de esperança.",
  values: ["Respeito", "Disciplina", "Ética", "Responsabilidade", "Trabalho em equipe", "Solidariedade", "Cidadania"],
  pillars: [
    { title: "Esporte", text: "Saúde, disciplina, trabalho em equipe e cidadania através do esporte." },
    { title: "Educação", text: "Conhecimento e desenvolvimento para um futuro com mais oportunidades." },
    { title: "Cultura", text: "A arte e a música como ferramentas de expressão e transformação social." },
    { title: "Cidadania", text: "Cidadãos conscientes, solidários e participativos." },
  ],
  contact: {
    email: "secretaria@ongprojeta.com.br",
    phone: "(11) 4066-1536",
    phoneHref: "tel:+551140661536",
    whatsapp: null as string | null, // ex.: "5511999999999"
    address: null as string | null,
    instagram: "https://www.instagram.com/projetojovemesportista",
    facebook: "https://www.facebook.com/share/1MNi5TS3EL/",
    transparency: "https://www.jovemesportista.org/portal-da-transpar%C3%AAncia",
  },
};

export type Project = {
  slug: string;
  name: string;
  area: "Esporte" | "Cultura" | "Educação" | "Ação social";
  image: string;
  summary: string;
  description: string;
  audience?: string;
  benefits: string[];
};

export const projects: Project[] = [
  {
    slug: "futebol-de-salao",
    name: "Futebol de Salão",
    area: "Esporte",
    image: wix("3f7e8a6b3e2847be9a31ddcbd252c856", "jpeg"),
    summary: "Disciplina, respeito e trabalho em equipe dentro e fora da quadra.",
    description:
      "O projeto de futebol de salão tem como objetivo desenvolver a disciplina, o respeito, o trabalho em equipe e a promoção de hábitos saudáveis. Além da prática esportiva, também abordamos valores sociais fundamentais para a formação cidadã. Acreditamos que, através do esporte, podemos moldar não apenas atletas, mas cidadãos conscientes e engajados.",
    audience: "Crianças e adolescentes",
    benefits: ["Disciplina e respeito", "Trabalho em equipe", "Hábitos saudáveis", "Formação cidadã"],
  },
  {
    slug: "capoeira",
    name: "Capoeira",
    area: "Esporte",
    image: wix("6211aca65a09420da9b09d7c61d4162a", "jpeg"),
    summary: "Cultura brasileira, ritmo e espírito de grupo em cada roda.",
    description:
      "As aulas de capoeira oferecem uma experiência rica e envolvente, valorizando a cultura brasileira enquanto promovem o desenvolvimento físico e social dos participantes. A prática aprimora a coordenação motora, equilíbrio, ritmo e disciplina, ao mesmo tempo em que incentiva valores como respeito, cooperação e espírito de grupo.",
    benefits: ["Coordenação motora e equilíbrio", "Ritmo e disciplina", "Respeito e cooperação", "Valorização da cultura brasileira"],
  },
  {
    slug: "ballet",
    name: "Ballet",
    area: "Cultura",
    image: wix("3473c063665a4e458c24582df432b626"),
    summary: "Postura, concentração e expressão corporal com sensibilidade artística.",
    description:
      "As aulas de ballet promovem disciplina, concentração, postura e expressão corporal. A atividade contribui para o desenvolvimento físico, emocional e social, além de estimular a autoestima, a sensibilidade artística e o trabalho em grupo.",
    audience: "Crianças e adolescentes",
    benefits: ["Postura e concentração", "Autoestima", "Sensibilidade artística", "Trabalho em grupo"],
  },
  {
    slug: "zumba",
    name: "Zumba",
    area: "Esporte",
    image: wix("f8ebe7a4917d4667ab1d683b9304f0e2", "jpeg"),
    summary: "Dança e exercício aeróbico para se manter ativo enquanto se diverte.",
    description:
      "As aulas de Zumba são uma forma divertida e energizante de se exercitar. Combinando dança e exercícios aeróbicos, elas proporcionam benefícios para a saúde, melhoram o condicionamento físico e elevam a autoestima.",
    benefits: ["Condicionamento físico", "Saúde", "Autoestima", "Convivência"],
  },
  {
    slug: "informatica",
    name: "Informática",
    area: "Educação",
    image: wix("c3546f0a207d436994308a55fcb05e1b"),
    summary: "Inclusão digital e acesso à tecnologia para todas as idades.",
    description:
      "O curso de informática promove inclusão digital e acesso à tecnologia. Os alunos aprendem noções básicas de computador, digitação, internet, pacote Office e uso consciente da tecnologia, ampliando oportunidades educacionais e profissionais.",
    audience: "Crianças, jovens e adultos",
    benefits: ["Noções de computador e digitação", "Internet e pacote Office", "Uso consciente da tecnologia", "Oportunidades profissionais"],
  },
  {
    slug: "fotografia",
    name: "Fotografia",
    area: "Cultura",
    image: wix("8ab007cb88b24c53adb06243ec55a192"),
    summary: "Criatividade e olhar artístico por trás das lentes.",
    description:
      "O curso de fotografia estimula a criatividade e a expressão artística dos participantes. São ensinadas técnicas básicas de fotografia, enquadramento, iluminação e prática fotográfica, incentivando o desenvolvimento cultural e profissional.",
    benefits: ["Técnicas de enquadramento e iluminação", "Expressão artística", "Desenvolvimento cultural", "Qualificação profissional"],
  },
  {
    slug: "pascoa-feliz",
    name: "Páscoa Feliz",
    area: "Ação social",
    image: wix("e17154b385c842f6b0f6a0ceeb267695", "jpeg"),
    summary: "Há mais de 25 anos levando alegria e solidariedade na Páscoa.",
    description:
      "O Projeto Páscoa Feliz tem feito a diferença há mais de 25 anos, promovendo alegria e solidariedade durante a Páscoa. Com um compromisso contínuo de apoiar comunidades, nosso objetivo é levar sorrisos e esperança para aqueles que mais precisam.",
    benefits: ["Solidariedade", "Apoio às comunidades", "Tradição de mais de 25 anos"],
  },
  {
    slug: "banco-de-alimentos",
    name: "Banco de Alimentos",
    area: "Ação social",
    image: wix("4a285c6234d94d90a92d61df8bca3e60", "jpeg"),
    summary: "Combate à insegurança alimentar com a Prefeitura de Diadema e doadores.",
    description:
      "O Banco de Alimentos é uma ação social voltada ao combate à insegurança alimentar e ao apoio de famílias em situação de vulnerabilidade social. Por meio de parcerias com a Prefeitura de Diadema, doadores e colaboradores, realizamos a arrecadação e distribuição de alimentos para famílias cadastradas no programa.",
    audience: "Famílias cadastradas no programa",
    benefits: ["Arrecadação de alimentos", "Distribuição a famílias cadastradas", "Rede de doadores e colaboradores"],
  },
];

/** Indicadores confirmados pelo site oficial. Acrescente novos apenas com dados verificados. */
export const impact = [
  { value: "20", label: "anos de atuação em Diadema" },
  { value: "25+", label: "anos do Projeto Páscoa Feliz" },
  { value: String(projects.length), label: "projetos e atividades" },
  { value: "Todas", label: "as idades: crianças, jovens, adultos e idosos" },
];

/** Depoimentos reais e autorizados. Deixe vazio até receber relatos aprovados. */
export const testimonials: { quote: string; name: string; role: string; photo?: string; project?: string }[] = [];

/** Parceiros confirmados. */
export const partners: { name: string; logo?: string; url?: string }[] = [{ name: "Prefeitura de Diadema" }];

export const heroSlides = projects.slice(0, 6).map((p) => ({ src: p.image, label: p.name }));

/** Portal da Transparência: acrescente novos anos/instrumentos e documentos aqui. */
export const transparency = [
  {
    year: "2025",
    entity: "Ministério do Esporte – SNEAELIS",
    title: "Termo de Fomento Instrumento nº 976198",
    value: "R$ 294.000,00",
    documents: [
      { label: "Transparência Termo de Fomento 976198 – Ministério do Esporte", url: "https://drive.google.com/file/d/11_jpWDotHFvobnN5_Xa-Z7CB6Czji2dC/view?usp=sharing" },
      { label: "Publicação no Diário Oficial da União – Associação Projeto Jovem Esportista", url: "https://drive.google.com/file/d/1ZBc72BIBEcM8GVdWlCpIEQKEs30iu7xG/view?usp=sharing" },
      { label: "Extrato do Termo de Fomento 976198 – Ministério do Esporte", url: "https://drive.google.com/file/d/18jwDvsTIOALf0r1_TviX4pglLzPvFpgs/view?usp=sharing" },
    ],
  },
];
