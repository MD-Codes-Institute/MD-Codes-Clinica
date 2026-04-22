import whats from "../../assets/icon-whatsapp.png";
import email from "../../assets/icon-email.png";
import insta from "../../assets/icon-instagram.png";
import { message, phoneNumber, sentEmail, subject } from "../../data/content";

export default function SocialLinks({ variant = "desktop" }) {
  const classContainer =
    variant === "desktop"
      ? "hidden xl:flex flex-row justify-center items-center gap-5 w-auto"
      : "flex flex-row justify-center items-center gap-8";
  return (
    <div className={classContainer}>
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="nooper noreffer"
        className="w-7 h-7"
      >
        <img
          src={whats}
          alt="Icone do whatsapp"
          className="hover:scale-115 hover:transition-transform"
        />
      </a>
      {/* link para o instagram */}
      <a href="https://www.instagram.com/mauriciodemaio/" target="_blank" className="w-7 h-7">
        <img
          src={insta}
          alt="icone do instagram"
          className="hover:scale-115 hover:transition-transform"
        />
      </a>
      {/* link para o e-mail */}
      <a
        href={`mailto:${sentEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
          message
        )}`}
        className="w-7 h-7"
      >
        <img
          src={email}
          alt="Icone do email"
          className="hover:scale-115 hover:transition-transform"
        />
      </a>
    </div>
  );
}
