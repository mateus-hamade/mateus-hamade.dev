/* eslint-disable react/jsx-max-depth, react/jsx-max-props-per-line, max-len */
import {
  ArrowUpRight,
  BookOpen,
  Box,
  Database,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
} from "lucide-react"
import { FlickeringGrid } from "@/components/ui/flickering-grid"

const projects = [
  {
    name: "Plataforma TôSabendo",
    description:
      "Plataforma educacional de questionários que combina Aprendizagem Adaptativa e Recuperação de Informação para oferecer uma experiência de estudo personalizada.",
    technologies: "Next.js · TypeScript · Tailwind CSS · PostgreSQL",
  },
  {
    name: "Information Retrieval Models",
    description:
      "Implementação de modelos de Recuperação de Informação voltados à identificação e classificação de itens semelhantes a partir de um item de referência.",
    technologies: "Python",
    href: "https://github.com/mateus-hamade/information-retrieval-models",
  },
  {
    name: "Chatbot UFOP",
    description:
      "Assistente virtual integrado ao GPT que centraliza informações úteis e auxilia novos estudantes durante a adaptação à vida universitária na UFOP.",
    technologies: "React",
    href: "https://github.com/mateus-hamade/chatbot-ufop",
  },
  {
    name: "Promogames",
    description:
      "Aplicação que coleta e organiza promoções de jogos, tornando mais simples e rápida a consulta de ofertas disponíveis.",
    technologies: "Django · Python",
    href: "https://github.com/mateus-hamade/promogames-django",
  },
]

const otherProjects = [
  ["Web Scraping", "https://github.com/mateus-hamade/webscraping-python"],
  ["Spotify", "https://github.com/mateus-hamade/spotify-vue"],
  ["Health Hospital", "https://github.com/mateus-hamade/health-vue"],
  ["Jokenpô", "https://github.com/mateus-hamade/jokenpo-pygame"],
  ["Job Finder", "https://github.com/mateus-hamade/job-finder-node"],
  ["Plann.er", "https://github.com/mateus-hamade/plann.er"],
  ["Six Degrees", "https://six-degrees-wikipedia.vercel.app/"]
]

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-5 flex items-center gap-2 text-white">
    <ArrowUpRight className="text-green-400" size={20} />
    <h2 className="text-lg font-semibold">{children}</h2>
  </div>
)

const PortfolioSection = ({ children }: { children: React.ReactNode }) => (
  <section className="portfolio-section">{children}</section>
)

const Home = () => {
  return (
    <main className="relative isolate min-h-screen bg-gray-950 px-6 py-10 text-gray-400 sm:px-10">
      <FlickeringGrid
        className="fixed inset-0 z-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_90%)]"
        squareSize={2}
        gridGap={8}
        color="#4ade80"
        maxOpacity={0.14}
        flickerChance={0.08}
      />
      <div className="relative z-10 mx-auto max-w-5xl">
        <header className="border-b border-gray-800 pb-10">
          <p className="mb-2 font-mono text-sm text-green-400">Olá 👋, eu sou</p>
          <h1 className="text-3xl font-bold text-white sm:text-5xl">Mateus Hamade</h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed">
            Pesquisador pela Universidade Federal de Viçosa e Desenvolvedor de Software Júnior.
          </p>

          <nav className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm">
            <a className="social-link" href="mailto:mateus.hamade.dev@gmail.com">
              <Mail size={17} /> E-mail
            </a>
            <a className="social-link" href="https://www.linkedin.com/in/mateus-hamade/" target="_blank" rel="noreferrer">
              <Linkedin size={17} /> LinkedIn
            </a>
            <a className="social-link" href="https://github.com/mateus-hamade" target="_blank" rel="noreferrer">
              <Github size={17} /> GitHub
            </a>
            <a className="social-link" href="https://huggingface.co/mateus-hamade" target="_blank" rel="noreferrer">
              <Database size={17} /> Hugging Face
            </a>
          </nav>
        </header>

        <PortfolioSection>
          <SectionTitle>Sobre mim</SectionTitle>
          <p className="max-w-4xl leading-7">
            Profissional formado em <span className="text-green-400">Ciência da Computação</span> pela{" "}
            <span className="text-green-400">Universidade Federal de Ouro Preto (UFOP)</span>, com sólidos
            conhecimentos em <span className="text-green-400">Estruturas de Dados e Algoritmos</span> e forte
            interesse em desenvolvimento de <span className="text-green-400 italic">software</span>. Possuo
            experiência prática com <span className="text-green-400 italic">TypeScript</span>, atuando
            principalmente com <span className="text-green-400 italic">React.js</span> e{" "}
            <span className="text-green-400 italic">Next.js</span>,
            além de conhecimento em gerenciamento de estado com{" "}
            <span className="text-green-400 italic">Context API</span> e{" "}
            <span className="text-green-400 italic">Redux</span>. Tenho habilidade no uso de{" "}
            <span className="text-green-400 italic">Tailwind CSS</span> para a construção de interfaces
            responsivas e modernas e experiência com bancos de dados relacionais e não relacionais, como{" "}
            <span className="text-green-400 italic">PostgreSQL</span> e{" "}
            <span className="text-green-400 italic">MongoDB</span>. Também tenho familiaridade com{" "}
            <span className="text-green-400 italic">Git</span> e metodologias ágeis,
            prezando pelo trabalho colaborativo, pela qualidade do código e pelos princípios de{" "}
            <span className="text-green-400 italic">UI/UX</span>. Atualmente, faço mestrado em{" "}
            <span className="text-green-400">Ciência da Computação</span> na{" "}
            <span className="text-green-400">Universidade Federal de Viçosa (UFV)</span>. Minha pesquisa investiga{" "}
            <span className="text-green-400">Redes Complexas</span> aplicadas à análise de ecossistemas de apostas,
            buscando compreender suas dinâmicas e desenvolver soluções para desafios relacionados a{" "}
            <span className="text-green-400 italic">Bets</span> e{" "}
            <span className="text-green-400 italic">Prediction Markets</span>.
          </p>
        </PortfolioSection>

        <PortfolioSection>
          <SectionTitle>Experiência</SectionTitle>
          <div className="experience-list">
            <article className="experience-card">
              <div className="item-heading">
                <div>
                  <h3>Desenvolvedor <em>Full-Stack</em></h3>
                  <p className="item-place">Cachaça Gestor · Ouro Preto, MG</p>
                </div>
                <span className="period">ago. 2024 — presente</span>
              </div>
              <p className="role-progression">Estagiário (ago. 2024 — jul. 2025) · Júnior (jul. 2025 — presente)</p>
              <ul className="experience-details">
                <li>
                  Desenvolvimento de interfaces utilizando <em>Next.js</em> e <em>TailwindCSS</em>
                </li>
                <li>
                  Desenvolvimento de APIs com <em>Node.js</em> e <em>Typescript</em>
                </li>
                <li>
                  Criação e execução de testes automatizados com <em>Jest</em>
                </li>
                <li>Elaboração de documentação técnica para manutenção e evolução dos projetos</li>
              </ul>
            </article>

            <article className="experience-card">
              <div className="item-heading">
                <div>
                  <h3>Coorientador de Trabalho de Conclusão de Curso</h3>
                  <p className="item-place">Universidade Federal de Ouro Preto</p>
                </div>
                <span className="period">out. 2025 — presente</span>
              </div>
              <ul className="experience-details">
                <li>
                  Coorientação de pesquisa aplicada na área de Gerenciamento de Dados e Informações,
                  com foco em Sistemas Adaptativos e de Recomendação.
                </li>
                <li>
                  Contribuição metodológica e técnica durante o desenvolvimento e análise do trabalho.
                </li>
              </ul>
            </article>
          </div>
        </PortfolioSection>

        <PortfolioSection>
          <SectionTitle>Formação acadêmica</SectionTitle>
          <div className="grid gap-4 md:grid-cols-2">
            <article className="info-card">
              <GraduationCap className="text-green-400" />
              <div>
                <h3>Mestrado em Ciência da Computação</h3>
                <p>Universidade Federal de Viçosa</p>
                <span>mar. 2026 — presente</span>
              </div>
            </article>
            <article className="info-card">
              <GraduationCap className="text-green-400" />
              <div>
                <h3>Bacharelado em Ciência da Computação</h3>
                <p>Universidade Federal de Ouro Preto · Coeficiente 8,7</p>
                <span>mar. 2021 — abr. 2025</span>
              </div>
            </article>
          </div>
        </PortfolioSection>

        <PortfolioSection>
          <SectionTitle>Publicação</SectionTitle>
          <a
            className="publication-card"
            href="https://doi.org/10.5753/sbie.2025.12181"
            target="_blank"
            rel="noreferrer"
          >
            <BookOpen className="mt-1 shrink-0 text-green-400" />
            <div>
              <h3>
                Proposta e Desenvolvimento de uma Estratégia de Aprendizagem Adaptativa Baseada em
                Recuperação de Informação para a Plataforma TôSabendo
              </h3>
              <p>Mateus do Carmo Eleto Hamade, Guilherme Tavares de Assis</p>
              <p>
                Publicado em: Anais do Simpósio Brasileiro de Informática na Educação (SBIE 2025).{" "}
                <em>SBC Open Lib</em>.
              </p>
              <span className="block">
                DOI: https://doi.org/10.5753/sbie.2025.12181
              </span>
            </div>
            <ArrowUpRight className="ml-auto shrink-0" size={19} />
          </a>
        </PortfolioSection>

        <PortfolioSection>
          <SectionTitle>Projetos em destaque</SectionTitle>
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project) => {
              const content = (
                <>
                  <div className="flex items-start justify-between gap-3">
                    <Box className="text-green-400" size={21} />
                    {project.href && <ArrowUpRight size={18} />}
                  </div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <span>{project.technologies}</span>
                </>
              )

              return project.href ? (
                <a key={project.name} className="project-card" href={project.href} target="_blank" rel="noreferrer">
                  {content}
                </a>
              ) : (
                <article key={project.name} className="project-card">{content}</article>
              )
            })}
          </div>

          <h3 className="mb-3 mt-8 text-sm font-semibold uppercase tracking-wider text-gray-500">
            Outros projetos
          </h3>
          <div className="flex flex-wrap gap-2">
            {otherProjects.map(([name, href]) => (
              <a className="project-pill" href={href} target="_blank" rel="noreferrer" key={name}>
                {name} <ArrowUpRight size={14} />
              </a>
            ))}
          </div>
        </PortfolioSection>

        <PortfolioSection>
          <SectionTitle>Tecnologias</SectionTitle>
          <p className="mb-4 max-w-4xl text-sm leading-6 text-gray-500">
            <span className="font-semibold text-green-400">Observação:</span> esta lista reúne tecnologias
            que já utilizei ou com as quais adquiri conhecimento ao longo da minha trajetória, ainda que
            nem todas façam parte da minha atuação atual.
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "TypeScript", "Python", "Java", "C", "C++", "SQL", "Next.js", "Node.js",
              "Tailwind CSS", "Django", "PostgreSQL", "MongoDB", "Jest",
            ].map((technology) => <span className="tech-pill" key={technology}>{technology}</span>)}
          </div>
        </PortfolioSection>

        <PortfolioSection>
          <SectionTitle>Idiomas</SectionTitle>
          <p>
            <span className="text-green-400">Inglês</span> — nível intermediário
          </p>
        </PortfolioSection>

        <footer className="border-t border-gray-800 py-8 text-sm">
          © {new Date().getFullYear()} Mateus Hamade
        </footer>
      </div>
    </main>
  )
}

export default Home
