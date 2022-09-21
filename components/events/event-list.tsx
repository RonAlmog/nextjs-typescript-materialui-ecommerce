import React from "react";
import EventItem from "./event-item";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";

const EventLIst = (props: any) => {
  const { items } = props;

  return (
    <List>
      {items.map((event: any) => (
        <ListItem key={event.id}>
          <EventItem
            key={event.id}
            id={event.id}
            title={event.title}
            location={event.location}
            date={event.date}
            image={event.image}
          ></EventItem>
        </ListItem>
      ))}
    </List>
  );
};

export default EventLIst;
