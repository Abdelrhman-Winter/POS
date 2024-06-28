import styles from "./InputDetails.module.scss";
const InputDetails = () => {
  return (
    <div>
      <h4 className={styles.textHead}>Product Details</h4>
      <div className={styles.formControl}>
        <input
          className={`${styles.input} ${styles.inputAlt}`}
          id="Name"
          type="text"
          // value={name}
          // onChange={(e) => setName(e.target.value)}
          placeholder="Enter Product Name..."
        ></input>
        <span
          className={`${styles.inputBorder} ${styles.inputBorderAlt}`}
        ></span>
      </div>
      <div className={styles.formControl}>
        <input
          className={`${styles.input} ${styles.inputAlt}`}
          id="price"
          type="number"
          min="1"
          step="any"
          // value={phone}
          // onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter Product Price..."
        ></input>
        <span
          className={`${styles.inputBorder} ${styles.inputBorderAlt}`}
        ></span>
      </div>
      <div className={styles.formControl}>
        <textarea
          className={`${styles.input} ${styles.inputAlt}`}
          id="details"
          // value={phone}
          // onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter Product Details..."
        ></textarea>
        <span
          className={`${styles.inputBorder} ${styles.textarea} ${styles.inputBorderAlt}`}
        ></span>
      </div>
      <div className={styles.addButton}>
        <button
          className={styles.add}
          type="button"
          // onClick={handleAdd}
          // disabled={!selectedCardId}
        >
          Add Product
        </button>
      </div>
    </div>
  );
};

export default InputDetails;
