"use client";
import { useFastFood } from "@/hooks/useFastFood";
import { useState, useCallback } from "react";
import styles from "./Modal.module.scss";

export default function Modal() {
  const [showModal, setShowModal] = useState(false);
  const { cart, cartTotalAmount, calcValue, handelClearCart } = useFastFood();

  const printDivContent = useCallback((divId: string) => {
    const printElement = document.getElementById(divId);
    if (!printElement) {
      console.error(`Element with ID "${divId}" not found.`);
      return;
    }

    const printContents = printElement.innerHTML;
    const originalContents = document.body.innerHTML;

    const tmpWindow = window.open("", "PRINT", "height=400,width=600");
    const tmpDoc = tmpWindow?.document;

    if (!tmpDoc) {
      console.error("Failed to create a new window for printing.");
      return;
    }

    tmpDoc.write("<html><head><title>Print Content</title></head><body>");
    tmpDoc.write("<h1>Order Details</h1>");
    tmpDoc.write(printContents);
    tmpDoc.write("</body></html>");

    tmpDoc.close();
    tmpWindow?.focus();
    tmpWindow?.print();
    tmpWindow?.close();

    document.body.innerHTML = originalContents;
  }, []);

  const payAndPrint = useCallback(() => {
    printDivContent("printablediv");
    handelClearCart();
    setShowModal(false);
  }, [printDivContent, handelClearCart]);

  return (
    <>
      <button
        className="bg-[#7928ca] hover:bg-[#00eac7] text-white font-bold py-2 px-4 rounded-[0 0 0 10px] w-[175px] h-[50px]"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Bill
      </button>
      <button
        className="bg-[#7928ca] hover:bg-[#fe5370] text-white font-bold py-2 px-4 rounded-[0 0 10px 0] w-[175px] h-[50px]"
        type="button"
        onClick={handelClearCart}
      >
        Clear
      </button>
      {showModal && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto absolute inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none min-h-[400px] min-w-[350px]">
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Bill</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      X
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto" id="printablediv">
                  <div>
                    <div className="flex gap-[10%] justify-center font-semibold">
                      <p>ORDER</p>
                      <p>QUANTITY</p>
                      <p>PRICE</p>
                    </div>
                    {cart?.map((order) => (
                      <div
                        className="flex gap-[10%] justify-around"
                        key={order.id}
                      >
                        <p className="w-9">{order.name}</p>
                        <span>{order.quantity}</span>
                        <span className="justify-self-center text-[#847577]">
                          {order.price} EG
                        </span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex justify-between border-t-[1px] border-solid">
                      <p>Total</p>
                      <p>{cartTotalAmount} EGP</p>
                    </div>
                    <div className="flex justify-between border-t-[1px] border-solid">
                      <p>Total after discount</p>
                      <p>{calcValue} EGP</p>
                    </div>
                  </div>
                </div>
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
                    onClick={payAndPrint}
                  >
                    Pay
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
}
