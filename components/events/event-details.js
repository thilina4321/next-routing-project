import classes from "./event-details.module.css";

const EventDetails = (props) => {
  const { title, location, date, description, image } = props;

  return (
    <div className={classes.details}>
      <div className={classes.main}> {title} </div>

      <div className={classes.secondary}>
        <div className={classes.profile}>
          <img className={classes.avator} src={"/" + image} alt={title} />
          <div className={classes.data}>
            <h1> {date} </h1>
            <h1> {location} </h1>
          </div>
        </div>

        <div className={classes.description}>
          <h3> {description} </h3>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
