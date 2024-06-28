"use client";
import { useState } from "react";
import { useRestaurantTable } from "@/hooks/useRestaurantTable";
import styles from "./BookingInput.module.scss";

const BookingInput = () => {
  const { selectedCardId, updateTable } = useRestaurantTable();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleBooking = () => {
    // Ensure that there's a selected card
    if (!selectedCardId) return;

    // Update the table with the new name and phone
    updateTable(selectedCardId, {
      name,
      phone: Number(phone),
      state: "Booked up",
    });

    // Reset the form fields after booking
    setName("");
    setPhone("");
  };

  return (
    <form className={styles.inputSection}>
      <h4>Booking</h4>
      <div className={styles.formControl}>
        <input
          className={`${styles.input} ${styles.inputAlt}`}
          id="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Booking Name..."
        />
        <span
          className={`${styles.inputBorder} ${styles.inputBorderAlt}`}
        ></span>
      </div>
      <div className={styles.formControl}>
        <input
          className={`${styles.input} ${styles.inputAlt}`}
          id="Phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter Booking Phone..."
        />
        <span
          className={`${styles.inputBorder} ${styles.inputBorderAlt}`}
        ></span>
      </div>
      <div className={styles.bookingButton}>
        <button
          className={styles.booking}
          type="button"
          onClick={handleBooking}
          disabled={!selectedCardId}
        >
          Booking
        </button>
      </div>
    </form>
  );
};

export default BookingInput;
