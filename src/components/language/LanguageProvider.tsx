"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export type Lang = "en" | "pt";

const langStorageKey = "portfolio-lang";

const dictionaries: Record<Lang, Record<string, string>> = {
  en: {
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "nav.github": "GitHub",

    "hero.title": "Software Engineer",

    "about.heading":
      "Driven by curiosity and a love for design, I create simple, functional, and visually striking digital experiences. As a student, I\u2019m always learning and exploring new ideas.",
    "about.text":
      "The fusion of my passion for design, development, and seamless user experiences places me at the intersection of creativity and technology in the digital world.",
    "about.more": "More about me",

    "work.title": "Impressive Works",
    "work.subtitle":
      "HERE'S A SELECTION OF PROJECTS THAT SHOWCASE MY PASSION FOR DESIGN AND DEVELOPMENT, REFLECTING CREATIVITY AND INNOVATION.",
    "work.explore": "Explore more",

    "touch.label": "That's all for now.",
    "touch.title1": "Got a project in mind?",
    "touch.title2": "Let's talk",
    "touch.cta": "Get in touch",
    "touch.email": "Email:",
    "touch.phone": "Phone",

    "footer.tagline": "your friendly chaos creator",

    "skills.heading1": "Skills that fuel my",
    "skills.heading2": "passion",
    "skills.metersTitle": "Core stack at a glance",

    "projects.title": "My Projects",
    "projects.subtitle":
      "A selection of things I've built \u2014 live apps, clones and open-source experiments, synced straight from my GitHub.",
    "projects.fromGithub": "From GitHub",
    "projects.featured": "Featured builds",
    "projects.loadError":
      "Couldn't load repositories right now \u2014 visit the GitHub profile above to see everything.",
    "projects.reposAndFollowers": "public repos \u00b7 {n} followers",

    "blog.title": "Blog",
    "blog.subtitle":
      "Notes on frontend development, React, Next.js and everything in between.",
    "blog.empty": "No posts yet \u2014 come back soon.",
    "blog.allPosts": "All posts",
    "blog.previous": "Previous",
    "blog.next": "Next",
    "blog.readTime": "min read",

    "contact.title": "Let's talk",
    "contact.subtitle":
      "Got a project in mind, a question, or just want to say hi? My inbox is always open.",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.location": "Location",
    "contact.locationValue": "Luanda, Angola",
    "contact.namePlaceholder": "Your name",
    "contact.emailPlaceholder": "Your email",
    "contact.messagePlaceholder": "Tell me about your project...",
    "contact.send": "Send message",
    "contact.sending": "Opening mail client...",
    "contact.sent":
      "Thanks! Your email client should open \u2014 hit send and I\u2019ll get back to you soon.",
  },
  pt: {
    "nav.home": "In\u00edcio",
    "nav.projects": "Projetos",
    "nav.skills": "Skills",
    "nav.blog": "Blog",
    "nav.contact": "Contacto",
    "nav.github": "GitHub",

    "hero.title": "Engenheiro de Software",

    "about.heading":
      "Movido pela curiosidade e pelo amor ao design, crio experi\u00eancias digitais simples, funcionais e visualmente marcantes. Como estudante, estou sempre a aprender e a explorar novas ideias.",
    "about.text":
      "A fus\u00e3o da minha paix\u00e3o por design, desenvolvimento e experi\u00eancias de utilizador perfeitas coloca-me na interse\u00e7\u00e3o entre criatividade e tecnologia no mundo digital.",
    "about.more": "Mais sobre mim",

    "work.title": "Trabalhos Impressionantes",
    "work.subtitle":
      "AQUI EST\u00c1 UMA SELE\u00c7\u00c3O DE PROJETOS QUE MOSTRAM A MINHA PAIX\u00c3O POR DESIGN E DESENVOLVIMENTO, REFLETINDO CRIATIVIDADE E INOVA\u00c7\u00c3O.",
    "work.explore": "Ver mais",

    "touch.label": "Isso \u00e9 tudo por agora.",
    "touch.title1": "Tem um projeto em mente?",
    "touch.title2": "Vamos conversar",
    "touch.cta": "Entrar em contacto",
    "touch.email": "Email:",
    "touch.phone": "Telefone",

    "footer.tagline": "o vosso criador de caos amig\u00e1vel",

    "skills.heading1": "Skills que alimentam a minha",
    "skills.heading2": "paix\u00e3o",
    "skills.metersTitle": "Stack principal num relance",

    "projects.title": "Os Meus Projetos",
    "projects.subtitle":
      "Uma sele\u00e7\u00e3o do que constru\u00ed \u2014 apps, clones e experi\u00eancias open-source, sincronizados diretamente do meu GitHub.",
    "projects.fromGithub": "Do GitHub",
    "projects.featured": "Projetos destacados",
    "projects.loadError":
      "N\u00e3o foi poss\u00edvel carregar os reposit\u00f3rios agora \u2014 visita o perfil GitHub acima para ver tudo.",
    "projects.reposAndFollowers": "repos p\u00fablicos \u00b7 {n} seguidores",

    "blog.title": "Blog",
    "blog.subtitle":
      "Notas sobre desenvolvimento frontend, React, Next.js e tudo o que est\u00e1 entre.",
    "blog.empty": "Ainda sem posts \u2014 volta em breve.",
    "blog.allPosts": "Todos os posts",
    "blog.previous": "Anterior",
    "blog.next": "Pr\u00f3ximo",
    "blog.readTime": "min de leitura",

    "contact.title": "Vamos conversar",
    "contact.subtitle":
      "Tem um projeto em mente, uma pergunta, ou quer apenas dizer ol\u00e1? A minha caixa de entrada est\u00e1 sempre aberta.",
    "contact.email": "Email",
    "contact.phone": "Telefone",
    "contact.location": "Localiza\u00e7\u00e3o",
    "contact.locationValue": "Luanda, Angola",
    "contact.namePlaceholder": "O seu nome",
    "contact.emailPlaceholder": "O seu email",
    "contact.messagePlaceholder": "Fale-me sobre o seu projeto...",
    "contact.send": "Enviar mensagem",
    "contact.sending": "A abrir o cliente de email...",
    "contact.sent":
      "Obrigado! O seu cliente de email deve abrir \u2014 clique em enviar e responderei em breve.",
  },
};

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  t: (key: string, vars?: Record<string, string | number>) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export const langInitScript = `
(function () {
  try {
    var l = localStorage.getItem(${JSON.stringify(langStorageKey)});
    if (l === "pt" || l === "en") document.documentElement.setAttribute("data-lang", l);
  } catch (e) {}
})();
`;

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(langStorageKey);
    if (stored === "pt" || stored === "en") setLangState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-lang", lang);
    document.documentElement.lang = lang === "pt" ? "pt" : "en";
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(langStorageKey, next);
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === "en" ? "pt" : "en");
  }, [lang, setLang]);

  const t = useCallback(
    (key: string, vars?: Record<string, string | number>) => {
      let text = dictionaries[lang][key] ?? dictionaries.en[key] ?? key;
      if (vars) {
        for (const [k, v] of Object.entries(vars)) {
          text = text.replace(`{${k}}`, String(v));
        }
      }
      return text;
    },
    [lang],
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

/** Tiny translate component for brevity in JSX. */
export function T({ k, vars }: { k: string; vars?: Record<string, string | number> }) {
  const { t } = useLanguage();
  return <>{t(k, vars)}</>;
}
