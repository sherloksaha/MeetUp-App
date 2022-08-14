import React from "react";
import { createContext, useState } from "react";

const FavouriteContext = createContext({
  favorites: [],
  totalfav: 0,
  addFavourite : ()=>{},
  removeFavourite:()=>{},
  itemsFavourite : ()=>{}
});

export function FavouriteContextProvider(props) {

    const [userFav,setuserFav]=useState([]);

    function addFavitemHandler(favoritesmeetup){
        setuserFav((prev)=>{
           return prev.concat(favoritesmeetup);
        });
    }

    function removeFavitemHandler(meetupId){
        setuserFav((prev)=>{
            return prev.filter(meetup=> meetup.id!==meetupId);
        });
    }

    function itemsFavitemHandler( meetupId){
        return userFav.some(meet=>meet.id===meetupId);
    }

  
    
  
    const context = {
        favorites: userFav,
        totalfav:userFav.length,
        addFavourite : addFavitemHandler,
        removeFavourite:removeFavitemHandler,
        itemsFavourite : itemsFavitemHandler
    };
  
  return (
    <FavouriteContext.Provider value={context}>
      {props.children}
    </FavouriteContext.Provider>
  );
}
export default FavouriteContext;