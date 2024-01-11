import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Stores from '../data/Stores';
import { Link } from 'react-router-dom';

function Home() {
  const [searchText,SetSearchText] = useState('');
  const [filteredItems, setFilteredItems] = useState(Stores);

  const handleFilterButtonClick = (selectedLocation) => {
    let filtered = Stores.filter((store) =>{
      return store.location.includes(selectedLocation)
    });
    setFilteredItems(filtered);
  };

  const handleFilterSearchBar = (selectedLocation) => {
    SetSearchText(selectedLocation);
    let filtered = Stores.filter((store) =>{
      return store.location.includes(selectedLocation) || store.title.includes(selectedLocation)
    });
    setFilteredItems(filtered);
  };

  return (
    <>
    <Navbar/>
    <div class="flex justify-center items-center mb-5 mt-7">
      <div class="flex w-24">
        <label class="text-black text-xl font-bold font-mono"> Search </label>
      </div>
      <div class="flex w-6/12">
          <input type="text" class="rounded-lg input-sm w-full" onChange={(event) => handleFilterSearchBar(event.target.value)} value={searchText}/>
      </div>
    </div>
    <div className="flex flex-col items-center md:justify-center md:flex-row">
        <a class="text-black text-xl font-bold font-mono"> Recommended Location </a>
        <button onClick={(event) => handleFilterButtonClick(event.target.value)} value="สะพานควาย" class="select-none rounded-lg border border-gray-900 py-3 px-6 mx-3 text-center align-middle font-sans text-sm font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-blue-300 active:opacity-[0.85]"> สะพานควาย </button>
        <button onClick={(event) => handleFilterButtonClick(event.target.value)} value="จตุจักร" class="select-none rounded-lg border border-gray-900 py-3 px-6 mx-3 text-center align-middle font-sans text-sm font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-blue-300 active:opacity-[0.85]"> จตุจักร </button>
        <button onClick={(event) => handleFilterButtonClick(event.target.value)} value="อารีย์" class="select-none rounded-lg border border-gray-900 py-3 px-6 mx-3 text-center align-middle font-sans text-sm font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-blue-300 active:opacity-[0.85]"> อารีย์ </button>
        <button onClick={(event) => handleFilterButtonClick(event.target.value)} value="สนามเป้า" class="select-none rounded-lg border border-gray-900 py-3 px-6 mx-3 text-center align-middle font-sans text-sm font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-blue-300 active:opacity-[0.85]"> สนามเป้า </button>
        <button onClick={(event) => handleFilterButtonClick(event.target.value)} value="" class="select-none rounded-lg border border-gray-900 py-3 px-6 mx-3 text-center align-middle font-sans text-sm font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-blue-300 active:opacity-[0.85]"> ทั้งหมด </button>
    </div>
    <div class="bg-gradient-to-bl flex mt-10 justify-center md:h-screen">
      <div class="container mx-auto p-2">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredItems.map((store, index) => (
          <div class="bg-white rounded-lg border p-2">
            <img src={store.thumbnaiUrl} alt="Placeholder Image" class="w-full h-48 rounded-md object-cover"/>
            <div class="px-1 py-1">
              <div key={store.id} class="font-bold text-sm mb-1">{store.title}</div>
              <p class="text-gray-700 text-xs">{store.description}</p>
              <p class="text-gray-500 text-xs">{store.location}</p>
            </div>
            <div class="px-1 py-1 text-right">
              <Link to={`/restaurants/${store.title}/step1`} class="text-blue-500 hover:underline text-sm">Book Now</Link>
            </div>
          </div>
        ))}

        </div>
      </div>
    </div>
    </>
  )
}

export default Home