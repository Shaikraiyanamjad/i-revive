"use client";
import React, { useState } from "react";
import Image from "next/image";

interface DoctorSectionProps {
  doctorType: string;
  altText: string;
}

const DoctorSection: React.FC<DoctorSectionProps> = ({
  doctorType,
  altText,
}) => {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [dob, setDob] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const timeSlots = ["10:00 AM", "11:00 AM", "02:00 PM", "04:00 PM"];

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
        Book Appointment ({doctorType} Doctor)
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
        Choose your preferred doctor, select a date and time, and provide your
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
