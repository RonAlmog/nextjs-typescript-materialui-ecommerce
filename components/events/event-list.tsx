import React from "react";
import EventItem from "./event-item";

const EventLIst = (props: any) => {
  const { items } = props;

  return (
    <ul>
      {items.map((event: any) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
        ></EventItem>
      ))}
    </ul>
  );
};

export default EventLIst;