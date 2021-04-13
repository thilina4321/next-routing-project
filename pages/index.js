import EventList from '../components/events/event-list'
import {geteaturedEvents} from '../helper/http-util'

const HomePage = (props) => {
  console.log(props.events);
  return (
    <div>
      <EventList items={props.events} />
    </div>
  )
}

export const getStaticProps = async()=>{
  const events = await geteaturedEvents()

  return {
    props:{
      events
    }
  }
}

export default HomePage
