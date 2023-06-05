import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

export default function Reservations({ availableTimes }) {
  const navigate = useNavigate();
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  const [filteredTimes, setFilteredTimes] = useState(availableTimes);
  const [formValid, setFormValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    filterAvailableTimes(date);
  }, [date]);

  const filterAvailableTimes = (selectedDate) => {
    const currentTime = new Date();
    const filtered = availableTimes.filter((availableTime) => {
      const selectedDateTime = new Date(`${selectedDate} ${availableTime}`);
      const isReserved = selectedDateTime <= currentTime || checkReservation(selectedDateTime);
      return !isReserved;
    });
    setFilteredTimes(filtered);
  };

  const checkReservation = (selectedDateTime) => {
    // Perform the reservation check logic here
    // For demonstration purposes, let's assume we have a reservations array
    const reservations = [
      { date: '2023-06-04', time: '18:00' },
      { date: '2023-06-04', time: '20:00' },
    ];

    return reservations.some((reservation) => {
      const reservationDateTime = new Date(`${reservation.date} ${reservation.time}`);
      return reservationDateTime.getTime() === selectedDateTime.getTime();
    });
  };

  const handleDate = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    setTime('');
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

    if (date === '') {
      setErrorMessage('Please choose a date.');
      return;
    }

    if (time === '') {
      setErrorMessage('Please choose a time.');
      return;
    }

    setErrorMessage('');

    const formData = { date, time, guests, occasion };

    // Make the API call to submit the reservation
    window.submitAPI(formData)
      .then((success) => {
        if (success) {
          filterAvailableTimes(date);
          navigate('/');
        } else {
          console.log('Error submitting reservation');
          navigate('/');
        }
      })
      .catch((error) => {
        console.log('Error submitting reservation:', error);
        navigate('/');
      });
  };

  useEffect(() => {
    validateForm();
  }, [date, time, guests]);

  const validateForm = () => {
    const isValid = date && time && guests > 0;
    setFormValid(isValid);
  };

  return (
    <>
      <form className="reservation-form" onSubmit={handleSubmit}>
        <label htmlFor="date" aria-label="Choose date">
          Choose date
        </label>
        <input type="date" id="date" value={date} onChange={handleDate} required />

        <label htmlFor="time" aria-label="Choose time">
          Choose time
        </label>
        <select id="time" value={time} onChange={handleTime} required>
          {filteredTimes.map((availableTime) => (
            <option key={availableTime}>{availableTime}</option>
          ))}
        </select>

        <label htmlFor="guests" aria-label="Number of guests">
          Number of guests
        </label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={handleGuest}
          required
        />

        <label htmlFor="occasion" aria-label="Occasion">
          Occasion
        </label>
        <select id="occasion" value={occasion} onChange={handleOccasion} required>
          <option value="">Select an occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>

        {errorMessage && <p className="error">{errorMessage}</p>}

        <input
          type="submit"
          value="Make Your reservation"
          disabled={!formValid}
          className={formValid ? '' : 'disabled'}
        />
      </form>
    </>
  );
}
