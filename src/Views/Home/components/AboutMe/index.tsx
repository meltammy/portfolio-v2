import styles from "./AboutMe.module.scss";

export function AboutMe() {
  return (
    <section className={styles.container} id="sobre-mim">
      <div>
        <h1>Melissa Tammy</h1>
        <h2>
          Transformo ideias em soluções digitais com propósito e eficiência.
        </h2>
        <a
          target="_blank"
          href="https://drive.google.com/drive/folders/1BrSa5J6729CVtuCcWxY5YFxQLb_gd5O2?usp=drive_link"
        >
          Baixar currículo
        </a>
      </div>
    </section>
  );
}
