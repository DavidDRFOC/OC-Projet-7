import React from "react";
import Banner from "../components/Banner";
import BannerImg from "../assets/img_banner_about.png";
import Dropdown from "../components/Dropdown";

function About() {
  const dropText = {
    fiability:
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    respect:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    service:
      "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    security:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  };

  return (
    <main className="main">
      <div className="main__banner">
        <Banner image={BannerImg} />
      </div>
      <div className="main__dropdowns">
        <Dropdown title="Fiabilité" content={dropText.fiability} />
        <Dropdown title="Respect" content={dropText.respect} />
        <Dropdown title="Service" content={dropText.service} />
        <Dropdown title="Sécurité" content={dropText.security} />
      </div>
    </main>
  );
}

export default About;
