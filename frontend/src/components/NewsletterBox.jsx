import React from 'react';

const NewsletterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        We Provide Best Quality Products at Affordable Prices
      </p>
      <p className="text-blue-400 mt-3">Hi by hi best hi people</p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
      >
        <input
          className="w-full outline-none py-2 px-3"
          type="email"
          placeholder="Enter your Email"
          required
        />
        <button type="submit" className="bg-red-600 text-white text-xs px-5 py-2">
          Subscribe
        </button>
      </form>
    </div>
  )
}

export default NewsletterBox;
