import React, { useState } from 'react'
import Navbar from './Navbar';
import Stores from '../data/Stores';
import { useNavigate,useParams } from 'react-router-dom'
import { MdGroups } from "react-icons/md";
import { IoPeople } from "react-icons/io5";


function ReserveStepOne() {
  let Navigate = useNavigate();
  const [persons, setPersons] = useState('');
  let { storeName } = useParams();
  let storefilter = Stores.filter((store) => {
    return store.title === `${ storeName }`
  });
  const OnhandleClick = (value) => {
    setPersons(value);
  }
  const PageNavigate = () => {
    Navigate(`/restaurants/${storefilter[0].title}/step2`, {state: {persons: {persons}}});
  }
  const btnNext = persons.length > 0;
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
          <div class="mt-5" style={{display: "flex", justifyContent: "center"}}>
            <MdGroups style={{fontSize: '50px'}}/>
          </div>
          <a class="text-xl"> ระบุจำนวนคน </a>
          <div class="mt-1" style={{display: "flex", justifyContent: "center"}}>
            <IoPeople style={{fontSize: '20px'}}/> &nbsp; {persons} &nbsp;คน
          </div>
          <div class="flex flex-col">
            <div class="flex flex-row item-center justify-center mt-7">
              <button onClick={(event) => OnhandleClick(event.target.value)} value="1" class="w-12 h-12 hover:bg-blue-300 text-black rounded-full mx-5">1</button>
              <button onClick={(event) => OnhandleClick(event.target.value)} value="2" class="w-12 h-12 hover:bg-blue-300 text-black rounded-full mx-5">2</button>
              <button onClick={(event) => OnhandleClick(event.target.value)} value="3" class="w-12 h-12 hover:bg-blue-300 text-black rounded-full mx-5">3</button>
              <button onClick={(event) => OnhandleClick(event.target.value)} value="4" class="w-12 h-12 hover:bg-blue-300 text-black rounded-full mx-5">4</button>
            </div>
            <div class="flex flex-row item-center justify-center mt-7">
              <button onClick={(event) => OnhandleClick(event.target.value)} value="5" class="w-12 h-12 hover:bg-blue-300 text-black rounded-full mx-5">5</button>
              <button onClick={(event) => OnhandleClick(event.target.value)} value="6" class="w-12 h-12 hover:bg-blue-300 text-black rounded-full mx-5">6</button>
              <button onClick={(event) => OnhandleClick(event.target.value)} value="7" class="w-12 h-12 hover:bg-blue-300 text-black rounded-full mx-5">7</button>
              <button onClick={(event) => OnhandleClick(event.target.value)} value="8" class="w-12 h-12 hover:bg-blue-300 text-black rounded-full mx-5">8</button>
            </div>
            <div class="flex flex-row item-center justify-center mt-10 mb-5">
              <button disabled={!btnNext} onClick={PageNavigate} class={`w-36 h-12 ${!btnNext ? "bg-blue-100":"bg-blue-500"} hover:bg-blue-600 text-white rounded-lg`}>Next</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ReserveStepOne