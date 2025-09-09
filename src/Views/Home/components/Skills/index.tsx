import Image from "next/image";
import styles from "./Skills.module.scss";

const frontendSkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "SASS",
  "Styled-Components",
  "Bootstrap",
  "Redux",
  "Apollo Client",
  "Jest",
  "Testing Library",
];

const backendSkills = [
  "Node.js",
  "Nest.js",
  "TypeScript",
  "REST APIs",
  "GraphQL",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
];

const data = [
  {
    title: "Frontend",
    imageSrc: "/front.png",
    text: `
    No meu papel como desenvolvedora frontend, crio interfaces ricas e
    responsivas utilizando TypeScript, React.js e Next.js.
    <br /> Tenho experiência em aplicar tecnologias como SASS,
    Styled-Components, Bootstrap, Material UI, Redux e Apollo Client.
    <br /> Para garantir a estabilidade e confiabilidade do código,
    realizo testes unitários com Jest e Testing Library.
    `,
    skills: frontendSkills,
  },
  {
    title: "Backend",
    imageSrc: "/back.png",
    text: `
    No backend, contribuo para o desenvolvimento de soluções com Node.js,
    Nest.js, TypeScript e MongoDB, desenvolvendo e integrando APIs REST e
    GraphQL para assegurar uma comunicação eficiente entre os sistemas.
    `,
    skills: backendSkills,
  },
];

export function Skills() {
  return (
    <section className={styles.container}>
      {data.map(({ imageSrc, text, skills, title }, index) => (
        <div key={`skill-item-${index}`}>
          <div className={styles.figure}>
            <Image src={imageSrc} width={80} height={80} alt="" />
            <h1>{title}</h1>
          </div>
          <p dangerouslySetInnerHTML={{ __html: text }} />
          <div className={styles.skills}>
            {skills.map((item) => (
              <b key={item}>{item}</b>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
