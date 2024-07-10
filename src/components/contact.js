import React from "react";

const Contact = () => {
  return (
    <section
      className="w-full mx-auto min-h-custom-content flex flex-col justify-center"
      style={{
        background: "radial-gradient(circle, #a7a5c6, #6d8a96, #8797b2)",
      }}
    >
      <div className="w-full xl:w-[1200px] px-4 py-5 flex flex-col items-center gap-10">
        <h1 className="text-[#000] text-4xl font-bold">Contact</h1>
        <form className="w-full sm:w-[90%] md:w-[600px] rounded-xl flex flex-col justify-center gap-3">
          <div className="text-left">
            <label for="name">Name:</label>
            <input
              className="w-full"
              type="text"
              id="name"
              name="name"
              required
            />
          </div>
          <div className="text-left">
            <label for="email">Email:</label>
            <input
              className="w-full"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="text-left">
            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button
            type="submit"
            className="w-fit mx-auto py-2 px-5 rounded-xl bg-red-500 text-white hover:text-red-500 hover:bg-white"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
