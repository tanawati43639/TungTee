import React from 'react'
import { useState } from 'react';
import Navbar from './Navbar';



function ReserveList({ allorder }) {
  const orders = allorder.map((order) => {
    return(
      <tr>
        <td>{order.cname}</td>
        <td>{order.tel}</td>
        <td>{order.person}</td>
        <td>{order.date}</td>
        <td>{order.time}</td>
        <td>{order.note}</td>
      </tr>
  )});

return(
  <>
  <Navbar/>
  <div class="w-full max-w-xl">
  <div className="overflow-xs-auto">
  <table className="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Tel</th>
        <th>Person</th>
        <th>Date</th>
        <th>Time</th>
        <th>Note</th>
      </tr>
    </thead>
    <tbody>
      {orders}
    </tbody>
  </table>
  </div>
  </div>
  </>
)
}

export default ReserveList