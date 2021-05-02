/* eslint-disable */
import React, { useState , useEffect} from 'react';
import '../App.css';


export default function CarList(){

  
    const [carList, setCars] = useState([]);


    useEffect(()=>{
       fetch("https://www.auctionwini.com/entry/carsale/get-carsale-list-ajax")
       .then((res=>{
         return res.json();
       }))
       .then((data=>{
         setCars(data)
       }))
    })    

  return (
    
      <div className="list">
        <h3>2012소나타  <span>좋아요</span></h3>
        <p>이것저것 발행</p>
      </div>
    
  );
}

