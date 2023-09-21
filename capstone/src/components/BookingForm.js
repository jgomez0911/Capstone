import React, { useState } from "react";

const BookingForm = (props) =>{
    const [date,setDate] = useState("");
    const [times,setTimes] = useState("");
    const [guests,setGuests] = useState("");
    const [occasion,setOccasion] = useState("");
    const handlesubmit = (e) =>{
        e.preventdefault();
        props.submitForm(e);
    }

    const handleChange = (e) =>{
        setDate(e);
        props.dispatch(e);
    }
    return(
        <header>
            <section>
                <form onSubmit={handlesubmit}>
                    <fieldset>
                        <div>
                            <label htmlFor="book-date">choose date:</label>
                            <input id="book-date" value={Date} onChange={(e)=> handleChange(e.target.value)}></input>
                        </div>

                        <div>
                        <label htmlFor="book-time">choose time:</label>
                        <select id="book-time" value={times} onChange={(e)=> setTimes(e.target.value)}>
                            <option value="">select a time:</option>
                            {
                                props.availableTimes.availableTimes.map(availableTimes=>{
                                    return <option key={availableTimes}>{availableTimes}</option>})
                            }
                        </select>
                        </div>

                        <div>
                            <label htmlFor="booking-guest">number of guests:</label>
                            <input id="book-guests" min="1" value={guests} onChange={(e) => setGuests(e.target.value)}></input>
                        </div>

                        <div>
                            <label htmlFor="booking-occasion">occasion:</label>
                            <select id="book-occasion" key={occasion} value={occasion} onChange={e => setOccasion(e.target.value)}>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                            </select>
                        </div>
                        <div>
                            <input aria-label="on click" type="submit" value={"Make your reservation"}></input>
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>

    );
};

export default BookingForm;