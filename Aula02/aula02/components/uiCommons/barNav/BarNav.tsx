import "./barNav.css";
import BtnText from "./BtnText";

export default function BarNav() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
            <span>LogoTipo</span>
        </div>
        <div className="menu-items">
          {/* Passando as props do BtnText */}
          <BtnText href="/" texto="Home" />
          <BtnText href="/about" texto="Quem Somos" />
          <BtnText href="/galeria" texto="Galeria de Fotos" />
          <BtnText href="/contato" texto="Fale Conosco" />
        </div>
      </nav>
    </>
  );
}
