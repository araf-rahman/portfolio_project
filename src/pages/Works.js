import React, { useState, useEffect } from "react";
import Portfolio from "../components/elements/Portfolio";
import Header from "../components/layouts/Header"
import Pagetitle from "../components/elements/Pagetitle";

const allData = [
  {
    id: 1,
    title: "Spotify Fellowship CRUD App",
    image: "images/Project/Spotify.png",
    link: "https://araf.herokuapp.com",
    language: "Ruby, Sinatra, Postgress",
  },
  {
    id: 2,
    title: "CMP 420 Data Management App",
    image: "images/Project/CMP420.png",
    link:"https://cmp420.herokuapp.com",
    language: "Rails, Postgress",
  },
  {
    id: 3,
    title: "FavLinks",
    image: "images/Project/HW2.gif",
    link: "https://github.com/araf-rahman/cmp464_react_Proj2",
    language: "React",
  },
  {
    id: 4,
    title: "Design Pad",
    image: "images/Project/DesignPad.png",
    link: "https://github.com/araf-rahman/design-pad",
    language: "React",
  },
  {
    id: 5,
    title: "Lacuna-School-Share",
    image: "images/Project/LSS.png",
    link: "https://github.com/araf-rahman/Lacuna-School-Share",
    language: "React and MongoDB",
  },
];

function Works() {
  const [getAllItems] = useState(allData);
  const [dataVisibleCount] = useState(6);
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    setVisibleItems(getAllItems.filter((item) => item.id <= dataVisibleCount));
  }, []);

  return (
    <section id="works">
       <Pagetitle title="Portfolio Projects" />
      <div className="container">
         <Header light/>
        <div className="row portfolio-wrapper">
          {visibleItems.map((item) => (
            <div className="col-md-4 col-sm-6 grid-item" key={item.id}>
              <Portfolio portfolio={item} />
            </div>
          ))}
        </div>  
      </div>
    </section>
  
  );
}
export default Works;
