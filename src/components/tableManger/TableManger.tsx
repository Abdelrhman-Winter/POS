import styles from "./TableManger.module.scss";
import BookingInput from "./bookingInput/BookingInput";
const TableManger = () => {
  return (
    <div className={styles.container}>
      <BookingInput />
      <div className="mb-6 text-center">
        <button
          className="w-full px-4 py-2 font-bold text-white bg-[#ff9501] rounded-full hover:bg-gray-500 focus:outline-none focus:shadow-outline"
          type="button"
        >
          ADD Table
        </button>
      </div>
      <div className="mb-6 text-center">
        <button
          className="w-full px-4 py-2 font-bold text-white bg-[#ff9501] rounded-full hover:bg-gray-500 focus:outline-none focus:shadow-outline"
          type="button"
        >
          Remove Table
        </button>
      </div>
      <div className="mb-6 text-center">
        <button
          className="w-full px-4 py-2 font-bold text-white bg-[#ff9501] rounded-full hover:bg-gray-500 focus:outline-none focus:shadow-outline"
          type="button"
        >
          Clear Table
        </button>
      </div>
      <div className="mb-6 text-center">
        <button
          className="w-full px-4 py-2 font-bold text-white bg-[#ff9501] rounded-full hover:bg-gray-500 focus:outline-none focus:shadow-outline"
          type="button"
        >
          Paying
        </button>
      </div>
    </div>
  );
};

export default TableManger;
