import React, { useState } from 'react'
import axios from "axios";
import Navbar from './Navbar';
import Stores from '../data/Stores';
import { GoChecklist } from "react-icons/go";
import { IoPeople } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import { useParams, useNavigate, useLocation } from 'react-router-dom';


function ReserveStepSummary() {
  let Navigate = useNavigate();
  const location = useLocation();
  const dateSelected = location.state.dateSelected.dateSelected;
  const persons = location.state.persons.persons;
  const timeSelected = location.state.timeSelected.timeSelected;
  let { storeName } = useParams();

  const [booking,setBooking] = useState({
    cname:'', email:'', tel:'',note:''});

  let storefilter = Stores.filter((store) => {
    return store.title === `${ storeName }`
  });

  function onBookingChange(event){
    const { name, value } = event.target;
    setBooking((prevBooking) => {
      return {...prevBooking,[name]: value}});
  }

  function onBookingSubmit(event){
    event.preventDefault();
    //setBooking({cname:'', email:'', tel:'', note:''})
    let postData = {
      booking_name:booking.cname,
      booking_email:booking.email,
      booking_phone:booking.tel,
      booking_person:persons,
      booking_date:dateSelected,
      booking_time:timeSelected,
      booking_note:booking.note
    }
    axios.post("http://localhost:3000/tables", postData)
      .then(res => console.log(res))
      .catch(error =>console.log(error))
      Navigate(`/restaurants/${storefilter[0].title}/summary`)
  }

  const PagePrevNavigate = () => {
    Navigate(`/restaurants/${storefilter[0].title}/step3`, {state: {dateSelected: {dateSelected}, persons: {persons} }});
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
          <GoChecklist style={{fontSize: '40px'}}/>
        </div>
        <a class="text-xl"> สรุปรายละเอียดการจอง </a>
        <div class="mt-1" style={{display: "flex", justifyContent: "center"}}>
          <IoPeople style={{fontSize: '20px'}}/> &nbsp;จำนวน {persons} คน
        </div>
        <div class="mt-1" style={{display: "flex", justifyContent: "center"}}>
          <MdDateRange style={{fontSize: '20px'}}/> &nbsp; {dateSelected} {timeSelected}
        </div>
        <form class="rounded-lg pt-4 mb-2" onSubmit={onBookingSubmit}>
          <div class="flex flex-col">
            <div class="flex flex-wrap mx-2 mb-2 items-center">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="cname">Name</label>
              <input class="appearance-none block w-full border border-gray-200 rounded py-1 px-2" 
                        id="cname"
                        name="cname"
                        value={booking.cname}
                        type="text"
                        onChange={onBookingChange}
                        required>
              </input>
            </div>
            <div class="flex flex-wrap mx-2 mb-2 items-center">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="email">email</label>
              <input class="appearance-none block w-full border border-gray-200 rounded py-1 px-2" 
                        id="email"
                        name="email"
                        value={booking.email}
                        type="email"
                        onChange={onBookingChange}
                        required>
              </input>
            </div>
            <div class="flex flex-wrap mx-2 mb-2 items-center">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="tel">tel</label>
              <input class="appearance-none block w-full border border-gray-200 rounded py-1 px-2" 
                        id="tel"
                        name="tel"
                        value={booking.tel}
                        type="tel"
                        onChange={onBookingChange}
                        required>
              </input>
            </div>
            <div class="flex flex-wrap mx-2 mb-2 items-center">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="note">note</label>
              <input class="appearance-none block w-full border border-gray-200 rounded py-1 px-2" 
                        id="note"
                        name="note"
                        value={booking.note}
                        type="text"
                        onChange={onBookingChange}>
              </input>
            </div>
            <div class="flex flex-row item-center justify-center mt-5 mb-5">
              <button onClick={PagePrevNavigate} class="w-36 h-12 mr-5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">Back</button>
              <button type="submit" class="w-36 h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default ReserveStepSummary