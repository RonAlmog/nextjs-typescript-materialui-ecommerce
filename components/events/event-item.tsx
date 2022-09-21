import React from "react";
import Link from "../../src/Link";

type Props = {
  title: string;
  image: string;
  date: string;
  location: string;
  id: string;
};

const EventItem = (props: Props) => {
  const { title, image, date, location, id } = props;
  const humandate = new Date(date).toLocaleDateString("en-US");
  const address = location.replace(",", "\n");
  const exploreLink = `/events/${id}`;

  return (
    <li>
      <img src={"/" + image} alt={title} />
      <div>
        <div>
          <h2>title</h2>
          <div>
            <time>{humandate}</time>
          </div>
          <div>
            <address>{address}</address>
          </div>
        </div>
        <div>
          <Link href={exploreLink}>exlplore event</Link>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
