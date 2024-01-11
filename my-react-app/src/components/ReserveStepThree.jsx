import React, { useState } from 'react'
import Navbar from './Navbar';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import Stores from '../data/Stores';
import { LuCalendarClock } from "react-icons/lu";
import { IoPeople } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";


function ReserveStepThree() {
  let Navigate = useNavigate();
  const location = useLocation();
  const dateSelected = location.state.dateSelected.dateSelected;
  const persons = location.state.persons.persons;
  let { storeName } = useParams();

  const [timeSelected, setTimeSelected] = useState('');
  const btnNext = timeSelected.length > 0;
  
  const OnhandleClick = (value) => {
    setTimeSelected(value);
  }

  let storefilter = Stores.filter((store) => {
    return store.title === `${ storeName }`
  });

  const PagePrevNavigate = () => {
    Navigate(`/restaurants/${storefilter[0].title}/step2`, {state: {dateSelected: {dateSelected}, persons: {persons} }});
  }
  const PageNextNavigate = () => {
    Navigate(`/restaurants/${storefilter[0].title}/step4`, {state: {dateSelected: {dateSelected}, persons: {persons}, timeSelected:{timeSelected} }});
  }

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
        <div class="flex mt-5" style={{display: "flex", justifyContent: "center"}}>
            <LuCalendarClock style={{fontSize: '40px'}}/>
          </div>
          <a class="text-xl"> โปรดเลือกวันและเวลา </a>
          <div class="mt-1" style={{display: "flex", justifyContent: "center"}}>
            <IoPeople style={{fontSize: '20px'}}/> &nbsp;จำนวน {persons} คน
          </div>
          <div class="mt-1" style={{display: "flex", justifyContent: "center"}}>
            <MdDateRange style={{fontSize: '20px'}}/> &nbsp;{dateSelected} {timeSelected}
          </div>
          <div class="flex flex-col">
            <div class="flex flex-row item-center justify-center mt-7">
              <button onClick={(event) => OnhandleClick(event.target.value)} value="17:00" class="w-12 h-12 hover:bg-blue-300 text-black rounded-full mx-5">17:00</button>
              <button onClick={(event) => OnhandleClick(event.target.value)} value="18:00" class="w-12 h-12 hover:bg-blue-300 text-black rounded-full mx-5">18:00</button>
              <button onClick={(event) => OnhandleClick(event.target.value)} value="19:00" class="w-12 h-12 hover:bg-blue-300 text-black rounded-full mx-5">19:00</button>
              <button onClick={(event) => OnhandleClick(event.target.value)} value="20:00" class="w-12 h-12 hover:bg-blue-300 text-black rounded-full mx-5">20:00</button>
            </div>
            <div class="flex flex-row item-center justify-center mt-7">
              <button onClick={(event) => OnhandleClick(event.target.value)} value="21:00" class="w-12 h-12 hover:bg-blue-300 text-black rounded-full mx-5">21:00</button>
              <button onClick={(event) => OnhandleClick(event.target.value)} value="22:00" class="w-12 h-12 hover:bg-blue-300 text-black rounded-full mx-5">22:00</button>
              <button onClick={(event) => OnhandleClick(event.target.value)} value="23:00" class="w-12 h-12 hover:bg-blue-300 text-black rounded-full mx-5">23:00</button>
              <button onClick={(event) => OnhandleClick(event.target.value)} value="24:00" class="w-12 h-12 hover:bg-blue-300 text-black rounded-full mx-5">24:00</button>
            </div>
            <div class="flex flex-row item-center justify-center mt-10 mb-5">
              <button onClick={PagePrevNavigate} class="w-36 h-12 mr-5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">Back</button>
              <button disabled={!btnNext} onClick={PageNextNavigate} class={`w-36 h-12 ${!btnNext ? "bg-blue-100":"bg-blue-500"} hover:bg-blue-600 text-white rounded-lg`}>Next</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ReserveStepThree