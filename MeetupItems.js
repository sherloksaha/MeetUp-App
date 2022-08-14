import React from "react";
import classes from "./MeetupItems.module.css";
import Card from "../UI/Card";
import {useContext} from 'react';
import FavouriteContext from "../../Store/favourite-context";

function MeetupItems(props) {

  const favouritectx=useContext(FavouriteContext);
  const itemIsFav= favouritectx.itemsFavourite(props.id);

  function ToogleFavo(){
    if(itemIsFav)
    {
      favouritectx.removeFavourite(props.id);
    }else{
      favouritectx.addFavourite({
        id: props.id,
        image:props.image,
        address:props.address,
        description:props.description,
        title:props.title
      });
    }
  }
  
  return (
    <li className={classes.item}>
    <Card>
      <div className={classes.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={classes.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </div>
      <div className={classes.actions}>
        <button onClick={ToogleFavo}>{itemIsFav?'Remove from favourite':'Add to Favourite'}</button>
      </div>
      </Card>
    </li>
  );
}
export default MeetupItems;
