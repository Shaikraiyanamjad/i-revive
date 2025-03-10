"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface DoctorSectionProps {
  doctorType: string;
  altText: string;
}

const DoctorSection: React.FC<DoctorSectionProps> = ({ doctorType, altText }) => {
  const timeSlots = ["9:30 AM", "9:45 AM", "10:00 AM", "10:15 AM", "10:30 AM", "10:45 AM", "11:00 AM", "11:15 AM", "11:30 AM", "11:45 AM", "12:00 PM", "12:15 PM", "12:30 PM", "12:45 PM", "1:00 PM", "1:15 PM", "1:30 PM", "1:45 PM", "2:00 PM", "2:15 PM", "2:30 PM", "2:45 PM", "3:00 PM", "3:15 PM", "3:30 PM", "3:45 PM", "4:00 PM", "4:15 PM", "4:30 PM", "4:45 PM", "5:00 PM", "5:15 PM", "5:30 PM", "5:45 PM"];


  const [hydrated, setHydrated] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>(timeSlots[0]); // Default to first time slot
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [dob, setDob] = useState<string>("");
  const [age, setAge] = useState<string>("");

  // Ensure consistent rendering between SSR and client
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0]; // Format: YYYY-MM-DD
    setSelectedDate(today);
    setDob(today);
    setHydrated(true);
  }, []);

  // Prevent SSR mismatch by delaying render until client hydration
  if (!hydrated) {
    return <div className="border rounded-lg p-4 shadow-md h-48 animate-pulse bg-gray-100" />;
  }

  return (
    <div className="border rounded-lg p-4 shadow-md">
      <Image
        src="/doctor.png"
        alt={altText}
        width={100}
        height={100}
        className="w-32 h-32 object-cover rounded mb-4 mx-auto"
      />
      <h2 className="text-xl font-semibold mb-4 text-center">
        CHP ({doctorType})
      </h2>
      <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Phone:</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>
      <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Select Date:</label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Select Time:</label>
          <select
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            className="w-full p-2 border rounded"
          >
            {timeSlots.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Date of Birth:</label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Age (Years):</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>
      <button className="w-full px-4 py-2 bg-primary text-white rounded">
        Book Appointment
      </button>
    </div>
  );
};

const BookAppointment: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl md:text-2xl font-bold mb-2 text-center">
        Book Your Appointment
      </h1>
      <p className="text-gray-600 mb-6 text-center">
        Choose your preferred CHP, select a date and time, and provide your
        contact details to schedule an appointment.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DoctorSection doctorType="Male" altText="Male Doctor" />
        <DoctorSection doctorType="Female" altText="Female Doctor" />
      </div>
    </div>
  );
};

export default BookAppointment;
