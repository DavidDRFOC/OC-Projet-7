import React from "react";
import { Link } from "react-router-dom";

import LogementsList from "../Datas/logements.json";
import banner from "../assets/img_banner.png";
import Banner from "../components/Banner";
import Thumbnail from "../components/Thumbnail";

function Home() {
  return (
    <main className="main">
      <div className="main__banner">
        <Banner image={banner} title="Chez vous, partout et ailleurs" />
      </div>
      <section className="main__housing">
        {LogementsList.map((h) => {
          return (
            <article key={h.id}>
              <Link to={`/housing/${h.id}`}>
                <Thumbnail image={h.cover} title={h.title} />
              </Link>
            </article>
          );
        })}
      </section>
    </main>
  );
}

export default Home;
