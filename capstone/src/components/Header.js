import React from "react";
import bannerImg from "../images/restauranfood.jpg"
import BookingForm from "./BookingForm";

const Header = () =>{

    return(
        <header className="header">
            <section>
                <div className="banner">
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterraneran restaurant,
                         focused on traditions recipes served with a modern twist.</p>
                         <button onClick={BookingForm}>Resever table</button>
                </div>
                <div className="banner-img">
                    <img src={bannerImg} alt="banner image"></img>
                </div>
            </section>
        </header>
    )
}
export default Header;