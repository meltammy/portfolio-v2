import { Contacts } from "@/components/Contacts";
import styles from "./Welcome.module.scss";
import { ButtonToggleTheme } from "@/components/ButtonToggleTheme";

export function Welcome() {
  return (
    <section className={styles.container}>
      <h1>
        Oi, eu sou a <b>Mel</b>
      </h1>
      <h2>Desenvolvedora Web Full Stack</h2>
      <Contacts className={styles.contacts} />
      <ButtonToggleTheme />
    </section>
  );
}
