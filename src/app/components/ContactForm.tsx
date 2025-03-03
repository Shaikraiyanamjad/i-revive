"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { MdLocationOn, MdPhone } from "react-icons/md";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    date: "",
    comments: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First Name is required";
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Valid Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone Number is required";
    if (!formData.date) newErrors.date = "Please select a date";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) alert("Appointment request submitted successfully!");
  };

  return (
    <div className="relative w-full py-10 px-2 lg:px-10">
      <Image src="/img144.jpg" alt="Background" fill className="absolute inset-0 -z-10 object-cover" quality={75} priority />
      <div className="relative bg-white bg-opacity-70 p-6 lg:p-14 rounded-xl shadow-2xl flex flex-col md:flex-row gap-12 items-center md:backdrop-blur-lg">
        <div className="md:w-1/2">
          <h2 className="text-xl font-semibold text-primary mb-4">SOLUTIONS TO YOUR PAIN</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Effective pain relief with high-quality, comfortable Hijama services.</h3>
          <p className="text-gray-700 mb-6">Our Hijama services offer natural pain relief, improved circulation, and enhanced wellness.</p>
          <div className="text-gray-700 mb-6">
            <p className="flex items-start gap-2"><MdLocationOn className="text-gray-600 mt-1" size={22} />6th floor, Mawin Zamzam, Mehdipatnam, Hyderabad</p>
            <p className="flex items-center gap-2 mt-2"><MdPhone className="text-gray-600" size={22} /><a href="tel:+918009944335">800-9944-335</a></p>
          </div>
          <div className="mt-8 w-full max-w-lg aspect-video">
            <ReactPlayer url="https://youtu.be/8hjUOqhcVd8" width="100%" height="100%" controls light />
          </div>
        </div>
        <div className="md:w-1/2 bg-primary opacity-95 p-6 md:p-12 rounded-xl shadow-lg w-full">
          <h2 className="text-xl font-semibold text-primary mb-4">GET IN TOUCH</h2>
          <h3 className="text-3xl font-bold mb-6 text-gray-900">Get Appointment</h3>
          <form onSubmit={handleSubmit} className="grid gap-6">
            {["firstName", "email", "phone", "date"].map((name) => (
              <div key={name}>
                <input
                  type={name === "date" ? "date" : "text"}
                  name={name}
                  placeholder={name.charAt(0).toUpperCase() + name.slice(1)}
                  value={formData[name as keyof typeof formData]} // ✅ Fix: Type Assertion
                  onChange={handleChange}
                  className="p-4 border rounded-lg w-full text-lg focus:ring-2 focus:ring-green-500"
                />
                {errors[name] && <p className="text-red-600 text-sm">{errors[name]}</p>}
              </div>
            ))}
            <textarea
              name="comments"
              placeholder="Write Comments"
              value={formData.comments}
              onChange={handleChange}
              className="p-4 border rounded-lg h-32 w-full text-lg focus:ring-2 focus:ring-green-500"
            ></textarea>
            <button type="submit" className="bg-primary text-white p-4 rounded-lg hover:bg-white text-lg font-semibold w-full transition duration-300 border hover:border-primary hover:text-primary">SUBMIT NOW</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
