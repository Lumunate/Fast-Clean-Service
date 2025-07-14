import { Loader } from "../components/mui/Loader";
import React, { createContext, useContext, useEffect, useState } from "react";

const BookingsContext = createContext();

export const useBookings = () => {
  return useContext(BookingsContext);
};

const BookingsProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAllBookings = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/booking`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });
        const data = await response.json();

        if (response.ok) {
          setBookings(data?.data);
          setLoading(false);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchAllBookings();
  }, []);

  if (loading) return <Loader />;
  return <BookingsContext.Provider value={{ bookings, loading }}>{children}</BookingsContext.Provider>;
};

export default BookingsProvider;
