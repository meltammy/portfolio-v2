import { Icon } from "../Icon";

const links = [
  {
    href: "https://www.linkedin.com/in/meltammy/",
    icon: "LinkedIn",
  },
  {
    href: "https://github.com/meltammy",
    icon: "GitHub",
  },
  {
    href: "https://api.whatsapp.com/send?phone=5511953734273",
    icon: "WhatsApp",
  },
] as const;

type Props = {
  className?: string;
};

export function Contacts({ className }: Props) {
  const size = "40";

  return (
    <section className={className}>
      {links.map(({ icon, href }, index) => (
        <a href={href} key={`contact-item-${index}`}>
          <Icon icon={icon} width={size} height={size} />
        </a>
      ))}
    </section>
  );
}
