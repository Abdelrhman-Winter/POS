"use client";

import { useFastFood } from "@/hooks/useFastFood ";
import { useState } from "react";
import styles from "./Model.module.scss";

export default function Modal() {
  const [showModal, setShowModal] = useState(false);
  const { cart, cartTotalAmount, calcValue, handelClearCart } = useFastFood();

  function printDivContent(divId: string) {
    const printElement = document.getElementById(divId);
    if (!printElement) {
      console.error(`Element with ID "${divId}" not found.`);
      return;
    }

    const printContents = printElement.innerHTML;
    const originalContents = document.body.innerHTML;

    // Create a new window for printing
    const tmpWindow = window.open("", "PRINT", "height=400,width=600");
    const tmpDoc = tmpWindow?.document;

    if (!tmpDoc) {
      console.error("Failed to create a new window for printing.");
      return;
    }

    // Write the content to be printed
    tmpDoc.write("<html><head><title>Print Content</title></head><body>");
    tmpDoc.write("<h1>Order Details</h1>"); // Optional: Add a title
    tmpDoc.write(printContents);
    tmpDoc.write("</body></html>");

    tmpDoc.close(); // Necessary for IE >= 10
    tmpWindow?.focus(); // Use optional chaining
    tmpWindow?.print();
    tmpWindow?.close();

    // Restore the original content
    document.body.innerHTML = originalContents;
  }

  // Usage: Call printDivContent('print') where 'print' is the ID of your <div>.

  // Call printDivContent('print') before executing handelClearCart()
  const payAndPrint = () => {
    printDivContent("printablediv"); // Print the content of the specified div
    handelClearCart();
    setShowModal(false);
  };
  return (
    <>
      <button
        className="bg-[#ff9501] hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-[0 0 0 10px] w-[175px] h-[50px]"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Bill
      </button>
      <button
        className="bg-[#ff9501] hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-[0 0 10px 0] w-[175px] h-[50px]"
        type="button"
        onClick={() => handelClearCart()}
      >
        clear
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto absolute inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none min-h-[400px] min-w-[350px]">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">bill</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                      X
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto" id="printablediv">
                  <div>
                    <div className=" flex gap-[10%] justify-center font-semibold">
                      <p>ORDER</p>
                      <p>QUANTITY</p>
                      <p>PRICE</p>
                    </div>

                    {cart
                      ? cart.map((order: any) => {
                          return (
                            <div
                              className="flex gap-[10%] justify-around"
                              key={order.id}
                            >
                              <div className=" relative w-[70px] aspect-square">
                                <p className=" w-9 ">{order.name}</p>
                              </div>
                              {order.quantity}
                              <div className=" justify-self-center text-[#847577]">
                                {order.price}EG
                              </div>
                            </div>
                          );
                        })
                      : ""}
                  </div>
                  <div>
                    <div className=" flex justify-between border-t-[1px] border-solid">
                      {" "}
                      <p>Total</p>
                      <p>{cartTotalAmount} egp</p>
                    </div>
                    <div className=" flex justify-between border-t-[1px] border-solid">
                      <p>Total after discount</p>
                      <p>{calcValue} egp</p>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => payAndPrint()}
                  >
                    pay
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
