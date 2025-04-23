import styles from "./EventItem.module.css";

import useLikedEvents from "../../../../hooks/useLikedEvents";
import HearthFilled from "../../../../assets/hearth-filled.png";
import HearthUnfilled from "../../../../assets/hearth-unfilled.png";


const EventItem = ({ info, id, name, images, onEventClick }) => {
  const {isEventLiked, toogleEventLike} = useLikedEvents (id);

  const handleSeeMoreClick = (evt) => {
    evt.stopPropagation();
    onEventClick(id);
  };

  const handleHearthClick = () =>{
    toogleEventLike();
  };

  return (
    <div
      onClick={() => console.log("padre clickeado")}
      className={styles.eventItemContainer}
    >
      <div className={styles.eventInfoContainer}>
        <div className={styles.containerImage}>
          <img 
            src={isEventLiked ? HearthFilled : HearthUnfilled}
            alt="Hearth button"
            className={styles.hearthImage}
            onClick={handleHearthClick}  
          />
          <img
            className={styles.eventImage}
            src={images}
            alt={name}
            width={200}
            height={200}
          />
        </div>
        <h4 className={styles.eventName}>{name}</h4>
        <p className={styles.eventInfo}>{info}</p>
        <button onClick={handleSeeMoreClick} className={styles.seeMoreBtn}>
          {/*<Link to = {'/detail/${id}'}>
          Ver mas
          </Link>*/}
          Ver mas
        </button>
      </div>
    </div>
  );
};

export default EventItem;
