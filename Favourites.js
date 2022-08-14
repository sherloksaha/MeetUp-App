import React from "react";
import {useContext} from 'react';
import FavouriteContext from "../Store/favourite-context";
import MeetupItems from "../Components2/Meetups/MeetupItems";
function Favourites(){
    const favcrtx= useContext(FavouriteContext);
    let content;
    if(favcrtx.totalfav===0){
        content = <p>you have nothing here..</p>
    }else{
        content= <MeetupItems meetups={favcrtx.favorites}/>
    }
    return <section>
        <h1>My Favourites..</h1>
       {content}
    </section>
}
export default Favourites