const BookingInput = () => {
  return (
    <form>
      <div className="mb-4">
        <label
          className="block mb-2 text-sm font-bold text-gray-700"
          htmlFor="Name"
        >
          Booking Name
        </label>
        <input
          className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          id="Name"
          type="Name"
          placeholder="Enter Booking Name..."
        />
      </div>

      <div className="mb-4">
        {" "}
        <label
          className="block mb-2 text-sm font-bold text-gray-700"
          htmlFor="Phone"
        >
          Booking Phone
        </label>
        <input
          className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          id="Phone"
          type="Phone"
          placeholder="Enter Booking Phone..."
        />
      </div>
      <div className="mb-6 text-center">
        <button
          className="w-full px-4 py-2 font-bold text-white bg-[#ff9501] rounded-full hover:bg-gray-500 focus:outline-none focus:shadow-outline"
          type="button"
        >
          Booking
        </button>
      </div>
    </form>
  );
};

export default BookingInput;
