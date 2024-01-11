import axios from "axios";
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';



function ReserveList() {

  const [bookings, setBookings] = useState([]);

  const fetchTables = async () => {
    try{
      const response = await axios.get("http://localhost:3000/tables")
      setBookings(response.data);
    }catch (error){
      console.log('error',error);
    }
  }
  useEffect(() => {fetchTables()},[bookings]);

return(
  <>
  <Navbar/>

  <div class="w-full items-center justify-center">
  <div className="overflow-xs-auto">
  <table className="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Tel</th>
        <th>Email</th>
        <th>Date</th>
        <th>Time</th>
        <th>Person</th>
      </tr>
    </thead>
    <tbody>
    {bookings.map((booking, index) => (
      <tr key={index}>
          <td>{booking.booking_name}</td>
          <td>{booking.booking_phone}</td>
          <td>{booking.booking_email}</td>
          <td>{booking.booking_date}</td>
          <td>{booking.booking_time}</td>
          <td>{booking.booking_person}</td>
      </tr>
      ))}
    </tbody>
  </table>
  </div>
  </div>
  </>
)
}

export default ReserveList