import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';





export default function Reservations({ availableTimes }) {
  const navigate = useNavigate();
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  const [filteredTimes, setFilteredTimes] = useState(availableTimes);

  useEffect(() => {
    filterAvailableTimes(date);
  }, [date]);

  const filterAvailableTimes = (selectedDate) => {
    const currentTime = new Date();
    const filtered = availableTimes.filter((availableTime) => {
      const selectedDateTime = new Date(`${selectedDate} ${availableTime}`);

      // Check if the selected time is in the past or conflicts with a reservation
      const isReserved = selectedDateTime <= currentTime || checkReservation(selectedDateTime);
      return !isReserved;
    });
    setFilteredTimes(filtered);
  };

  const checkReservation = (selectedDateTime) => {
    // Perform the reservation check logic here
    // You can check against a database or any other data source
    // For demonstration purposes, let's assume we have a reservations array
    const reservations = [
      { date: '2023-06-04', time: '18:00' },
      { date: '2023-06-04', time: '20:00' },
    ];

    // Check if there is a reservation at the selected date and time
    return reservations.some((reservation) => {
      const reservationDateTime = new Date(`${reservation.date} ${reservation.time}`);
      return reservationDateTime.getTime() === selectedDateTime.getTime();
    });
  };

  const handleDate = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    setTime(''); // Reset the time when the date changes
  };

  const handleTime = (e) => {
    setTime(e.target.value);
  };

  const handleGuest = (e) => {
    setGuests(parseInt(e.target.value, 10));
  };

  const handleOccasion = (e) => {
    setOccasion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(date, time, occasion, guests);
    setFilteredTimes(filteredTimes.filter((availableTime) => availableTime !== time));
    navigate('/Confirm');
  };

  return (
    <>
      <form className="reservation-form" onSubmit={handleSubmit}>
        <label htmlFor="date">Choose date</label>
        <input type="date" id="date" value={date} onChange={handleDate} />

        <label htmlFor="time">Choose time</label>
        <select id="time" value={time} onChange={handleTime}>
          {filteredTimes.map((availableTime) => (
            <option key={availableTime}>{availableTime}</option>
          ))}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={handleGuest}
        />

        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={occasion} onChange={handleOccasion}>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>

        <input type="submit" value="Make Your reservation" />
      </form>
    </>
  );
}
