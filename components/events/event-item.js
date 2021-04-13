import Button from "../ui/button";
import classes from "./event-item.module.css";
// import Image from 'next/image'

const EventItem = (props) => {
  const { id, date, location, title, image } = props;
  const humanReadableDate = new Date(date).toLocaleDateString("en-Us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const eventLink = `/event/${id}`;

  return (
    <li className={classes.event}>
      <img className={classes.img} src={"/" + image} alt={title} />

      <div className={classes.desc}>
        <h2> {title} </h2>
        <div>
          <time> {humanReadableDate} </time>
        </div>
        <div>
          <address> {location} </address>
        </div>
        <div className={classes.explore}>
          <Button page={eventLink} /> 
        </div>
      </div>
    </li>
  );
};

export default EventItem;
