import React, { useEffect } from "react";
import MeetupList from "../Components2/Meetups/MeetupList";
import { useState } from "react";
import classes from './Allmeetups.module.css';
function AllMeetups() {
  const [isloading, setIsloading] = useState(true);
  const [loadedMeetups,setLoadedMeetups]=useState([]);

  useEffect(()=>{

    fetch(
      "https://react-travel-app-b74a2-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups=[];
        for( const key in data){
          const meetup={
            id : key,
            ...data[key]
          };
          meetups.push(meetup);
        }
        setIsloading(false);
        setLoadedMeetups(meetups);
      });

  }, []);

  

  if (isloading) {
    return (
      <section>
        <p>Loading..</p>
      </section>
    );
  }

  return (
    <div>
      <div className={classes.eno}>Your All Food meetups.... </div>
      <MeetupList meetups={loadedMeetups} />
    </div>
  );
}
export default AllMeetups;
