import React, { useState } from "react";
import Navbar from "../../layouts/Navbar";
import { Carousel } from "react-bootstrap";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import { usePagination } from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import "../home.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@material-ui/core/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Pagination from "@mui/material/Pagination";

import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
function ListHotel() {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
  <div>
      <Navbar />
      <div
        style={{
          marginLeft: "25%",
          justifyContent: "center",
          paddingTop: "5%",
          paddingBottom: "5%",
        }}
      >
        <Card
          sx={{
            width: "90%",
            height: "100%",
            backgroundColor: "#9E8277",
            borderRadius: 10,
            flexDirection: "row",
          }}
        >
          <Grid
            container
            sx={{
              marginTop: 2,
              marginBottom: 2,
              justifyContent: "center",
              marginLeft: 4,
            }}
          >
            <Grid md={4} sx={{ marginTop: 2 }}>
              <Card sx={{ maxWidth: 250, maxHeight: 350, borderRadius: 15 }}>
                <CardHeader
                  action={
                    <IconButton aria-label='settings'>
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title='Mednine'
                />
                <CardMedia
                  component='img'
                  height='100'
                  image='https://cdn.vuetifyjs.com/images/cards/cooking.png'
                  alt='Paella dish'
                />
                <CardContent>
                  <Typography variant='body2' color='text.secondary'>
                    consulter pour voir la liste des hotels et les chambre
                    disponibel
                  </Typography>
                </CardContent>

                <CardActions>
                
                  <Button sx={{ marginLeft: 15 }} size='small'>
                  <Link to="/hotel">
                    Learn More
                    </Link>
                  </Button>
                
                </CardActions>
              </Card>
            </Grid>
          </Grid>
          <Stack
            sx={{ marginTop: "5%", marginBottom: "3%", marginLeft: "30%" }}
            spacing={2}
          >
            <Pagination count={10} color='secondary' />
          </Stack>
        </Card>
      </div>
      </div>
  );
}
export default ListHotel;
