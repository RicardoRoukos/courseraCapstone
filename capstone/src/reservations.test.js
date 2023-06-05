import { render, screen } from "@testing-library/react";
import Reservations from './reservations';
import { initializeTimes, updateTimes } from './reducers';

describe('initializeTimes', () => {
  test('returns the expected initial state', () => {
    const initialState = {
      availableTimes: [],
    };

    const newState = initializeTimes();

    expect(newState).toEqual({
      availableTimes: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
    });
  });
});

describe('updateTimes', () => {
  test('returns the same state as the provided state', () => {
    const state = {
      availableTimes: ['17:00', '18:00', '19:00'],
    };

    const newState = updateTimes(state);

    expect(newState).toEqual(state);
  });
});

describe('Reservations Component', () => {
  test('renders the "Reservations" heading', () => {
    render(<Reservations availableTimes={[]} />);
    const headingElement = screen.getByText("Reservations");
    expect(headingElement).toBeInTheDocument();
  });
});
