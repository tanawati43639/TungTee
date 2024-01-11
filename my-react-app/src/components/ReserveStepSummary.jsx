import React, { useState } from 'react'
import Navbar from './Navbar';
import Stores from '../data/Stores';
import axios from 'axios';
import { GoChecklist } from "react-icons/go";
import { IoPeople } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import { useParams, useNavigate, useLocation } from 'react-router-dom';


function ReserveStepSummary() {
  let Navigate = useNavigate();
  const location = useLocation();
  let { storeName } = useParams();

  let storefilter = Stores.filter((store) => {
    return store.title === `${ storeName }`
  });

  return (
    <>
    <Navbar/>
    <div class="flex flex-col-reverse min-h-screen md:justify-center md:flex-row mt-20">
      <div class="w-full max-w-lg text-2xl font-mono text-black bg-gray-300 text-center mb-40 mr-10">
        <img src={storefilter[0].thumbnaiUrl} alt="" class="w-full h-3/6 object-cover"/>
          <br/>
          <p>{storefilter[0].title}</p>
          <p>{storefilter[0].description}</p>
          <p>{storefilter[0].location}</p>
      </div>
      <div class="flex flex-col w-full h-full max-w-lg border-solid border-2 border-emerald-300 text-center justify-center items-center">
        <a class="text-2xl">Thank you for booking</a>
      </div>
    </div>
    </>
  )
}

export default ReserveStepSummary