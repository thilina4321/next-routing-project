import EventItem from "./event-item";


const EventList = (props) => {
  const { items } = props;
  console.log(items.map((item) => console.log("ffff")));

  return (
    <ul>
      {items.map((item)=> (
          <EventItem key={item.id} id={item.id} title={item.title} 
          date={item.date}
          image={item.image}
          location={item.location} />
      ) )}
    
    </ul>
  );
};

export default EventList;
