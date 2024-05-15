import React, { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";
import "./style.scss";

const Slider = () => {
  const { data } = useData(); // Extraction des données
  const [index, setIndex] = useState(0); // Déclaration d'un état local pour suivre l'index et le mettre à jour

  const byDateDesc = data?.focus.sort((evtA, evtB) => // Tri des évènements par date en ordre décroissant
    new Date(evtA.date) > new Date(evtB.date) ? -1 : 1
  );

  const nextCard = () => {
    if (byDateDesc) { // Vérification pour s'assurer que byDateDesc est défini avant d'accéder à sa longueur
      setTimeout(
        () => setIndex(index < byDateDesc.length - 1 ? index + 1 : 0),
        5000
      );
    }
  };
  useEffect(() => {
    nextCard();
  });

  return (
    <div className="SlideCardList">
      {byDateDesc?.map((event, idx) => (
        <div key={event.date}
          className={`SlideCard SlideCard--${index === idx ? "display" : "hide"
            }`} >
          <img src={event.cover} alt="forum" />
          <div className="SlideCard__descriptionContainer">
            <div className="SlideCard__description">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <div>{getMonth(new Date(event.date))}</div>
            </div>
          </div>
        </div>
      ))}
      <div className="SlideCard__paginationContainer">
        <div className="SlideCard__pagination">
          {byDateDesc?.map((event, radioIdx) => ( 
            <input
              key={`r${event.id}-${event.date}`} // Clé unique pour l'élément radio, composée de l'id de l'événement et de sa date
              type="radio"
              name="radio-button"
              checked={index === radioIdx} // Détermine si le bouton radio est coché en fonction de l'index actuel
              readOnly
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;