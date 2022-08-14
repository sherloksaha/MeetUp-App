import React from "react";
import Card from "../UI/Card";
import classes from "./NewmeetupForm.module.css";
import {useRef} from 'react';
function NewmeetupForm(props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();
    function submithandler(e){
        e.preventDefault();
        const enteredTitle= titleInputRef.current.value;
        const enteredImage= imageInputRef.current.value;
        const enteredAddress=addressInputRef.current.value;
        const enteredDescription=descriptionInputRef.current.value; 
        const meetupData={
            title: enteredTitle,
            image : enteredImage,
            address : enteredAddress,
            description : enteredDescription
        };
      
        props.addMeetup(meetupData);
    }
  return (
    <Card> 
      <form className={classes.form} onSubmit={submithandler}>
      <div className={classes.control}>
        <label htmlFor="title">Meetups Title</label>
        <input type="text"  required id="titile" ref={titleInputRef}/>
      </div>
      <div className={classes.control}>
        <label htmlFor="image">Meetups Image</label>
        <input type="url"  required id="image" ref={imageInputRef}/>
      </div>
      <div className={classes.control}>
        <label htmlFor="address">Meetups Address</label>
        <input type="text"  required id="address" ref={addressInputRef}/>
      </div>
      <div className={classes.control}>
        <label htmlFor="Description">Meetups Address</label>
        <textarea  required id="Description" rows='5' ref={descriptionInputRef}/>
      </div>
      <div>
        <button className={classes.actions}>Upload</button>
      </div>
      </form>
    </Card>
  );
}
export default NewmeetupForm;
