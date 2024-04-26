import React, { useState } from "react";

const ContactForm = () => {
  //   form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    service: "",
    message: "",
  });

  return (
    <>
      <form
        action="#"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div>
          <div className="w-full text-center">
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={(e) => {
                setFormData((prevData) => {
                  return { ...prevData, [e.target.name]: e.target.value };
                });
              }}
              placeholder="Enter Your Name"
              className="w-full border rounded py-4 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="w-full">
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={(e) => {
                setFormData((prevData) => {
                  return { ...prevData, [e.target.name]: e.target.value };
                });
              }}
              placeholder="Enter Your E-Mail"
              className="w-full border rounded py-4 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="w-full">
            <input
              type="number"
              name="contactNumber"
              required
              value={formData.contactNumber}
              onChange={(e) => {
                setFormData((prevData) => {
                  return { ...prevData, [e.target.name]: e.target.value };
                });
              }}
              placeholder="Enter Your Phone Number"
              className="w-full border rounded py-4 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="w-full">
            <select
              name="service"
              id="service"
              required
              value={formData.service}
              onChange={(e) => {
                setFormData((prevData) => {
                  return { ...prevData, [e.target.name]: e.target.value };
                });
              }}
              className="w-full border rounded py-4 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="" hidden>
                Select option
              </option>
              <option value="option 1">option 1</option>
              <option value="option 2">option 2</option>
              <option value="option 3">option 3</option>
              <option value="option 4">option 4</option>
            </select>
          </div>
          <div className="w-full">
            <textarea
              name="message"
              id="Message"
              placeholder="Message"
              required
              value={formData.message}
              onChange={(e) => {
                setFormData((prevData) => {
                  return { ...prevData, [e.target.name]: e.target.value };
                });
              }}
              className="w-full h-[100px] border rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
        <button className="bg-[#fd5d5d] text-white py-2 px-12 mt-5 rounded-tl-lg rounded-tr-md rounded-br-2xl">
          Submit
        </button>
      </form>
    </>
  );
};

export default ContactForm;
