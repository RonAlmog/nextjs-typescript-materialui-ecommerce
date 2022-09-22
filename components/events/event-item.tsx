import React from "react";
import Link from "../../src/Link";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";

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
      <Card>
        <CardHeader>
          title={title}
          subtitle={address}
        </CardHeader>
        <CardMedia
          component="img"
          height="194"
          image={"/" + image}
          alt={title}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {title}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <Link href={exploreLink}>{title}</Link>
        </CardActions>
      </Card>
    </li>
  );
};

export default EventItem;
