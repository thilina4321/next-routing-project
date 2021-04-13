import Head from 'next/head'
import EventList from '../components/events/event-list'
import RegisterEmail from '../components/input/register';
import {geteaturedEvents} from '../helper/http-util'

const HomePage = (props) => {
  console.log(props.events);
  return (
    <div>
    <Head>
      <title> Event App </title>
    </Head>
      <RegisterEmail />
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
