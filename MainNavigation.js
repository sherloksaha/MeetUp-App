import React, { useContext } from "react";
import {Link} from 'react-router-dom';
import classes from './MainNavigation.module.css';
import d from './1.png';
import FavouriteContext from "../../Store/favourite-context";
function MainNavigation(){
    const ctx= useContext(FavouriteContext);
    return <header className={classes.header}>
        <div className={classes.logo}><img src={d} alt="k"/></div>
        <nav>
            <ul>
                <li className={classes.h}><Link to='/'>All Meetup</Link></li>
                <li className={classes.h}><Link to='/new-meetup'>Add New Meetup</Link></li>
                <li className={classes.h}><Link to='/Favourite'>Favourite 
                <span className={classes.badge}>{ctx.totalfav}</span></Link></li>
            </ul>
        </nav>
    </header>
}
export default MainNavigation