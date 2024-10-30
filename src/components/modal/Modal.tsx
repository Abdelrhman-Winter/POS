"use client";
import { useFastFood } from "@/hooks/useFastFood";
import { useState, useCallback } from "react";

export default function Modal() {
  const [showModal, setShowModal] = useState(false);
  const { cart, cartTotalAmount, calcValue, handelClearCart } = useFastFood();

  const printReceipt = useCallback(() => {
    const printWindow = window.open("", "_blank", "height=600,width=800");

    if (!printWindow) {
      console.error("Failed to open print window.");
      return;
    }

    printWindow.document.write(`
      <html>
        <head>
          <title>Receipt</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            h1 { text-align: center; }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
            th, td { border: 1px solid #000; padding: 8px; text-align: center; }
            th { background-color: #f2f2f2; }
            tfoot td { font-weight: bold; }
          </style>
        </head>
        <body>
          <h1>Order Receipt</h1>
          <table>
            <thead>
              <tr>
                <th>Order</th>
                <th>Quantity</th>
                <th>Price (EGP)</th>
              </tr>
            </thead>
            <tbody>
      ${
        cart
          ?.map(
            (order) => `
                <tr>
                  <td>${order.name}</td>
                  <td>${order.quantity}</td>
                  <td>${order.price}</td>
                </tr>`
          )
          .join("") ||
        `
                <tr>
                  <td colspan="3">No items in cart</td>
                </tr>`
      }
            </tbody>
            <tfoot>
              <tr>
                <td colspan="2">Total</td>
                <td>${cartTotalAmount} EGP</td>
              </tr>
              <tr>
                <td colspan="2">Total After Discount</td>
                <td>${calcValue} EGP</td>
              </tr>
            </tfoot>
          </table>
        </body>
      </html>
    `);

    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();

    handelClearCart();
    setShowModal(false);
  }, [cart, cartTotalAmount, calcValue, handelClearCart]);

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
                    onClick={printReceipt}
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
