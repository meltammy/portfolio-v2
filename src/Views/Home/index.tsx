import { BackgroundAnimation } from "@/components/Background";
import { Header } from "@/components/Header";
import { Welcome } from "./components/Welcome";
import { AboutMe } from "./components/AboutMe";
import styles from "./HomeView.module.scss";
import { ContactMe } from "./components/ContactMe";
import { Skills } from "./components/Skills";

export function HomeView() {
  return (
    <div className={styles.container}>
      <BackgroundAnimation />
      <Welcome />
      <Header />
      <AboutMe />
      <Skills />
      <ContactMe />
    </div>
  );
}
