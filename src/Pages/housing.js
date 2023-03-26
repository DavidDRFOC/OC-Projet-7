import React from "react";
import { useParams } from "react-router-dom";
import LogementsList from "../Datas/logements.json";

import Dropdown from "../components/Dropdown.js";
import Carousel from "../components/Carousel.js";
import Host from "../components/Host.js";
import Rate from "../components/Rate.js";
import Tag from "../components/Tag.js";
import Error from "../Pages/Error";

function Housing({ setShowFooter }) {
  const { id } = useParams();
  const logement = LogementsList.find((logement) => logement.id === id);
  if (!logement) {
    return <Error setShowFooter={setShowFooter} />;
  }
  return (
    <main className="main">
      <Carousel images={logement.pictures} />
      <div className="housing">
        <div className="housing__wrapper">
          <div className="housing__informations">
            <h1 className="housing__title">{logement.title}</h1>
            <p className="housing__location">{logement.location}</p>
            <div className="housing__tags">
              {logement.tags.map((tag, i) => (
                <Tag key={i} tag={tag} />
              ))}
            </div>
          </div>
          <div className="housing__ratingHost">
            <Rate rate={logement.rating} />
            <Host host={logement.host} />
          </div>
        </div>
      </div>
      <div className="housing__dropdowns">
        <Dropdown title="Description" content={logement.description} />
        <Dropdown title="Equipement" content={logement.equipments} />
      </div>
    </main>
  );
}

export default Housing;
