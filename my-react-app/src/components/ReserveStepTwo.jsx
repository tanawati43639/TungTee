import React, { useState } from 'react'
import Navbar from './Navbar';
import dayjs from 'dayjs';
import Stores from '../data/Stores';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { LuCalendarClock } from "react-icons/lu";
import { IoPeople } from "react-icons/io5";
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';



function ReserveStepTwo() {
  const formatteddate = dayjs(new Date()).format("YYYY-MM-DD");
  let { storeName } = useParams();
  let Navigate = useNavigate();
  const location = useLocation();
  const persons = location.state.persons.persons;
  const [valueCalendar, setValueCalendar] = React.useState(dayjs(formatteddate));
  let strDate = valueCalendar.$D.toString().length === 1 ? "0" + valueCalendar.$D.toString() :valueCalendar.$D.toString();
  const dateSelected = strDate + "-" + parseInt(valueCalendar.$M) + 1 + "-" + valueCalendar.$y;
  
  let storefilter = Stores.filter((store) => {
    return store.title === `${ storeName }`
  });
  const handleClickCalendar = (value) => {
    setValueCalendar(value);
  }
  const PageNextNavigate = () => {
    Navigate(`/restaurants/${storefilter[0].title}/step3`, {state: {dateSelected: {dateSelected}, persons: {persons} }});
  }

  const PagePrevNavigate = () => {
    Navigate(`/restaurants/${storefilter[0].title}/step1`, {state: {dateSelected: {dateSelected}, persons: {persons} }});
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
          <IoPeople style={{fontSize: '20px'}}/>&nbsp;จำนวน {persons} คน
        </div>
        <div class="flex item-center justify-center text-center">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DateCalendar', 'DateCalendar']}>
              <DemoItem label={dateSelected}>
                <DateCalendar value={valueCalendar} onChange={(newValue) => handleClickCalendar(newValue)}/>
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>
        </div>
        <div class="flex flex-row item-center justify-center mb-5">
          <button onClick={PagePrevNavigate} class="w-36 h-12 mr-5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">Back</button>
          <button onClick={PageNextNavigate} class="w-36 h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">Next</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default ReserveStepTwo