import { Contacts } from "@/components/Contacts";
import styles from "./ContactMe.module.scss";

export function ContactMe() {
  return (
    <section className={styles.container} id="contato">
      <h1>Vamos trabalhar juntos?</h1>
      <div>
        <p>Estou aberta a novas conexões, projetos e oportunidades.</p>
        <p>Entre em contato e vamos conversar!</p>
      </div>

      <Contacts className={styles.contacts} />
    </section>
  );
}
