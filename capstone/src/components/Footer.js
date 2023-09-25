import React from "react";
import logo from "../images/Logo .svg"

const Footer =()=>{
    return(
        <footer>
            <section>
                <div className="company info">
                    <img src={logo} alt=""/>
                </div>
                <div>
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Menu</a></li>
                        <li><a href="/">Order online</a></li>
                        <li><a href="/">Login</a></li>
                        <li><a href="/booking">Reservatoins</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address: <br/> 123 towncity USA</li>
                        <li>Phone: <br/> (123) 456-7890 </li>
                        <li>Email: <br/> Little.Lemon@email.com </li>
                    </ul>
                </div>
                <div>
                    <h3>Social Media</h3>
                    <ul>
                        <li><a href="/">Facebook</a></li>
                        <li><a href="/">Instagram</a></li>
                        <li><a href="/">Twitter</a></li>
                    </ul>
                </div>
            </section>
        </footer>
    );
}
export default Footer;