import styles from "./Header.module.scss";

const links = [
  { href: "#contato", children: "Contato" },
  {
    href: "#sobre-mim",
    children: "Sobre mim",
  },
];

export function Header() {
  return (
    <header className={styles.container}>
      <nav>
        {links.map(({ children, href }, index) => (
          <a href={href} key={`nav-item-${index}`}>
            {children}
          </a>
        ))}
      </nav>
    </header>
  );
}
