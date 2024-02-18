// components/RegisterForm.js
import { format, differenceInYears } from "date-fns";

import React, { useState } from "react";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    gender: "",
    birthdate: "",
    email: "",
    password: "",
    age: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    if (name === "birthdate") {
      const birthdate = new Date(value);
      const age = differenceInYears(new Date(), birthdate);
      setFormData((prevData) => ({ ...prevData, age }));
    }

    // if (name === "password" && value.length < 8) {
    //   // Password is too short
    //   // You can display an error message or handle it accordingly
    //   console.log("Password must be at least 8 characters long");
    //   return;
    // }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to a server)
    console.log("Form submitted:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-4 p-4 bg-white rounded shadow-md"
    >
      <div className="mb-4">
        <label
          htmlFor="firstname"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          First Name
        </label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:shadow-outline-blue"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="lastname"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Last Name
        </label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:shadow-outline-blue"
          required
        />
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:shadow-outline-blue"
            required
          />
        </div>
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:shadow-outline-blue"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Gender:
        </label>
        <label className="inline-flex items-center mr-4">
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formData.gender.includes("male")}
            onChange={handleChange}
            className="form-checkbox text-blue-500 focus:outline-none focus:shadow-outline-blue"
          />
          <span className="ml-2">Male</span>
        </label>
        <label className="inline-flex items-center mr-4">
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender.includes("female")}
            onChange={handleChange}
            className="form-checkbox text-pink-500 focus:outline-none focus:shadow-outline-pink"
          />
          <span className="ml-2">Female</span>
        </label>
      </div>
      <div className="mb-4">
        <label
          htmlFor="birthdate"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Birthdate
        </label>
        <input
          type="date"
          id="birthdate"
          name="birthdate"
          value={formData.birthdate}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:shadow-outline-blue"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="phone"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Phone
        </label>
        <input
          type="phone"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:shadow-outline-blue"
          required
        ></input>
      </div>
      <button
        type="submit"
        className="w-full bg-amber-600 text-white p-2 rounded focus:outline-none focus:shadow-outline-blue"
      >
        Sign Up
      </button>
    </form>
  );
};

export default RegisterForm;
