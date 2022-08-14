import React from "react";
import { useHistory } from "react-router-dom";
import NewmeetupForm from "../Components2/Meetups/NewmeetupForm";
function NewMeetups(){

    const history= useHistory();

    function addMeetup(meetupData){
        fetch('https://react-travel-app-b74a2-default-rtdb.firebaseio.com/meetups.json',
        {
            method : 'POST',
            body : JSON.stringify(meetupData),
            headers : {
                'Content-Type' : 'application/json'
            }
        }
        ).then(()=>{
            history.replace('/');
        });
    }


    return <section>
            <h1>Add NewMeetups page</h1>
            <NewmeetupForm addMeetup={addMeetup}/>
    </section>
    
}
export default NewMeetups