import React, { useState } from 'react'
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import Stores from '../data/Stores';


//main_url/restaurants/name_restaurant
function Reserve_Form() {
  let { storeName } = useParams();
  //filter specific store in Stores
  let storefilter = Stores.filter((store) => {
    return store.title === `${ storeName }`
  });
  
  const [order,setOrder] = useState({
    sname:'', cname:'', email:'', tel:'', person:'', date:'',time:'', note:''});
  const [allorder,setAllOrder] = useState([]);

  function onOrderChange(event){
    const { name, value } = event.target;
    setOrder((prevOrder) => {
      return {...prevOrder,[name]: value}});
  }

  function onOrderSubmit(event){
    event.preventDefault();
    setAllOrder((prevAllOrder) => {
      return [...prevAllOrder,order]
  });
    setOrder({sname:'', cname:'', email:'', tel:'', person:'', date:'',time:'', note:''})
  }
//{`${store.title}`}
  return (
    <>
    <Navbar/>
    <div class="flex flex-row min-h-screen justify-center mt-20">
      <div class="w-full max-w-lg text-2xl font-mono text-black bg-gray-500 text-center mb-40 mr-10">
      <img src={storefilter[0].thumbnaiUrl} alt="" class="w-full h-3/6 object-cover"/>
        <br/>
        <p>{storefilter[0].title}</p>
        <p>{storefilter[0].description}</p>
        <p>{storefilter[0].location}</p>
      </div>
      <div class="w-full max-w-xl">
        <form class="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4" onSubmit={onOrderSubmit}>
          <div class="flex flex-wrap mx-2 mb-4">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="cname">
                Name
              </label>
              <input class="appearance-none block w-full border border-gray-200 rounded py-2 px-2 mb-2" 
                  id="cname"
                  name="cname"
                  value={order.cname}
                  type="text"
                  onChange={onOrderChange}
                  required></input>
            </div>
          </div>
          <div class="flex flex-wrap mx-2 mb-4">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="email">
                Email
              </label>
              <input class="appearance-none block w-full border border-gray-200 rounded py-2 px-2 mb-2" 
                  id="email"
                  name="email"
                  value={order.email}
                  type="email"
                  onChange={onOrderChange}
                  required></input>
            </div>
          </div>
          <div class="flex flex-wrap mx-2 mb-4">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="tel">
                Tel
              </label>
              <input class="appearance-none block w-full border border-gray-200 rounded py-2 px-2 mb-2" 
                  id="tel" 
                  name="tel"
                  value={order.tel}
                  type="tel"
                  onChange={onOrderChange}
                  ></input>
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="person">
                person
              </label>
              <select class="block w-full mt-1" 
                  id="person"
                  name="person"
                  value={order.person}
                  onChange={onOrderChange}
                  >
                  <option>Select</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                </select>
            </div>
          </div>
          <div class="flex flex-wrap mx-2 mb-4">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="date">
                Date
              </label>
              <input class="appearance-none block w-full border border-gray-200 rounded py-2 px-2 mb-2" 
                  id="date" 
                  type="date"
                  name="date"
                  value={order.date}
                  onChange={onOrderChange}
                    
                  ></input>
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="time">
                Time
              </label>
              <input class="appearance-none block w-full border border-gray-200 rounded py-2 px-2 mb-2" 
                  id="time" 
                  type="time"
                  name="time"
                  value={order.time}
                  onChange={onOrderChange}
                    
                  ></input>
            </div>
          </div>
          <div class="flex flex-wrap mx-2 mb-4">
              <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="note">
                  Note
                </label>
                <input class="appearance-none block w-full border border-gray-200 rounded py-2 px-2 mb-2" 
                id="note"
                type="text"
                name="note"
                value={order.note}
                onChange={onOrderChange}  
                ></input>
              </div>
          </div>
          <div class="flex items-center justify-center">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
            type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default Reserve_Form