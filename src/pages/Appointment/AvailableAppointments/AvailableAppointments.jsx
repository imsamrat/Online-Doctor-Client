import React from "react";
import {Container, Grid, Typography} from '@mui/material';
import Booking from '../Booking/Booking';

const bookings = [
  {
    id: 1,
    name: "Teeth Orthodontics",
    time: "8:00 AM - 9:00 AM",
    space: 10,
  },
  {
    id: 2,
    name: "Cosmetic Dentistry",
    time: "10:05 AM - 11:30 AM",
    space: 10,
  },
  {
    id: 3,
    name: "Teeth Cleaning",
    time: "8:00 AM - 9:00 AM",
    space: 10,
  },
  {
    id: 4,
    name: "Cavity Protection",
    time: "8:00 AM - 9:00 AM",
    space: 10,
  },
  {
    id: 5,
    name: "Teeth Orthodontics",
    time: "8:00 AM - 9:00 AM",
    space: 10,
  },
  {
    id: 6,
    name: "Teeth Orthodontics",
    time: "8:00 AM - 9:00 AM",
    space: 10,
  },
];
const AvailableAppointments = ({ date }) => {
  return (
    <Container>
      <Typography sx={{ color: 'info.main', mb:2, fontWeight: 600 }} variant="h4">Available Appointments on {date.toDateString()}</Typography>
      <Grid container spacing={2}>
        {
          bookings.map(booking => <Booking key={booking.id} booking={booking} date={date}></Booking>)
        }
      </Grid>
    </Container>
  );
};

export default AvailableAppointments;
