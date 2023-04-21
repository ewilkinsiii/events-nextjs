import { useRouter } from "next/router";
import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";
import EventSearch from "../../components/events/EventsSearch";
import { Fragment } from "react";

const EventsPage = () => {
  const router = useRouter();
  const events =getAllEvents();

  //console.log(router.query);

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath);
  }


  return (
    <Fragment>
        <EventSearch onSearch={findEventsHandler }/>
      <EventList items={events} />
    </Fragment>
  );
};

export default EventsPage;
