import whats from "../../assets/Whatsapp Simbolo.png";
import email from "../../assets/icon-email.png";
import insta from "../../assets/icon-instagram.png";

export default function SocialLinks({ variant = "desktop" }) {
  const message = "Olá, gostária de mais informações!";
  const subject = "Informações sobre a cliníca";
  const emailContact = import.meta.env.CONTACT_EMAIL;
  const phoneNumber = import.meta.env.PHONE_NUMBER;

  const classContainer =
    variant === "desktop"
      ? "hidden xl:flex flex-row justify-center items-center gap-5 w-auto"
      : "flex flex-row justify-center items-center gap-8";
  return (
    <div className={classContainer}>
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar pelo WhatsApp"
        className="w-7 h-7"
      >
        <img
          src={whats}
          alt="Icone do whatsapp"
          className="hover:scale-115 hover:transition-transform"
          loading="lazy"
        />
      </a>
      {/* link para o instagram */}
      <a
        href="https://www.instagram.com/mauriciodemaio/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visitar Instagram"
        className="w-7 h-7"
      >
        <img
          src={insta}
          alt="icone do instagram"
          className="hover:scale-115 hover:transition-transform"
          loading="lazy"
        />
      </a>
      {/* link para o e-mail */}
      <a
        href={`mailto:${emailContact}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
          message,
        )}`}
        aria-label="Enviar e-mail"
        className="w-9 h-9"
      >
        <img
          src={email}
          alt="Icone do email"
          className="hover:scale-115 hover:transition-transform"
          loading="lazy"
        />
      </a>
    </div>
  );
}
