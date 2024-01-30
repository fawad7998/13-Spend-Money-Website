// import "./App.css";
// import { useState } from "react";
// import data from '../products.json'

// function App() {
//   const [cartItems, setCartItems] = useState([]);


//   const handleAddToCart = (title) => {
//     const updatedCartItems = [...cartItems];
//     const existingItem = updatedCartItems.find((item) => item.title === title);

//     if (existingItem) {
//       existingItem.count++;
//     } else {
//       updatedCartItems.push({ title, count: 1 });
//     }

//     setCartItems(updatedCartItems);
//   };

//   return (
//     <>
//       <div className="w-full h-16 bg-gray-800 flex items-center justify-center space-x-4">
//         <h1 className="total-cash text-2xl text-white">$100,000,000,000</h1>
//         <h1 className="text-lg text-white font-light">
//           You Have A Lot Of Money to Spend!
//         </h1>
//       </div>

//       <div className="bg-cards w-full bg-gray-900 p-5 flex flex-wrap justify-center space-x-3 space-y-4">
//         {data.map((data) => (
//           <div
//             key={data.id}
//             className="card-1 bg-gray-700 w-1/4 h-full rounded-sm flex flex-col items-center justify-between p-2 mt-4"
//           >
//             <h1 className="text-lg text-white text-center p-2">
//               {data.title}
//             </h1>
//             <img src={data.image} className="p-3 h-64" alt={data.title} />
//             <div className="price-rate flex flex-row w-full items-center justify-between px-4 my-4">
//               <h1 className="rate-btn px-4 py-1 rounded-lg bg-gray-800 text-white text-xs font-light">
//                 {data.title}
//               </h1>
//               <h1 className="price px-4 py-1 rounded-lg bg-gray-800 text-white text-xs font-light">
//                 ${data.price}
//               </h1>
//             </div>
//             <h1 className="Counter text-xl text-white font-semibold pb-2 -mt-8">
//               {cartItems.find((item) => item.title === data.title)?.count || 0}
//             </h1>
//             <div className="flex flex-row w-full h-16 items-center justify-evenly bg-gray-900 border-b border-white">
//               <button className="intrested-btn px-4 h-[20px] bg-gray-900 text-white text-sm font-light border-r border-l border-white">
//                 Interested
//               </button>
//               <button
//                 onClick={() => handleAddToCart(data.title)}
//                 className="add-btn px-4 h-[20px] bg-gray-900 text-white text-xs font-light border-l border-r border-white"
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="w-full h-[410px] bg-gray-900 flex items-center justify-center">
//         <div className="cart-items w-[80%] h-[90%] bg-gray-800 rounded-md">
//           <h1 className="text-2xl text-white font-semibold text-center py-4">Your Cart</h1>
//           <div className="flex flex-col items-center justify-evenly px-4 space-y-2">
//             <div className="w-full h-[180px] overflow-auto good-scroll">

//             {cartItems.map((item, index) => (
//               <div key={index} className="w-full h-10 bg-gray-950 rounded-md flex flex-row items-center justify-between px-4 my-2">
//                 <h1 className="item-name text-xs font-semibold text-white">{item.title}</h1>
//                 <h2 className="item-count text-xs font-semibold text-white">{item.count}</h2>
//               </div>
//             ))}
//             </div>
//             <div className="w-full h-[104px] bg-gray-700 rounded-md flex px-8 flex-row items-center justify-between">
//               <h1 className="all-items-total-amount bg-gray-600 px-5 py-2 rounded-xs duration-500 hover:scale-105 ease-in-out">
//                 Total: {cartItems.reduce((total, item) => total + item.count, 0)}
//               </h1>
//               <h1 className="all-items-total-Price bg-gray-600 px-5 py-2 rounded-xs duration-500 hover:scale-105 ease-in-out">
//                 Total Price:
//               </h1>
//               <button
//                 onClick={() => setCartItems([])}
//                 className="reset-all-btn px-5 py-2 bg-gray-600 rounded-xs hover:bg-gray-800 duration-500 hover:scale-105 ease-in-out"
//               >
//                 Reset
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;


import "./App.css";
import { useState } from "react";
import data from '../products.json'

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [totalCash, setTotalCash] = useState(100000000000);

  const handleAddToCart = (title, price) => {
    const updatedCartItems = [...cartItems];
    const existingItem = updatedCartItems.find((item) => item.title === title);

    if (existingItem) {
      existingItem.count++;
    } else {
      updatedCartItems.push({ title, price, count: 1 });
    }

    setCartItems(updatedCartItems);
  };

  const handleRemoveFromCart = (title, price) => {
    const updatedCartItems = [...cartItems];
    const existingItem = updatedCartItems.find((item) => item.title === title);

    if (existingItem) {
      if (existingItem.count > 1) {
        existingItem.count--;
      } else {
        updatedCartItems.splice(updatedCartItems.indexOf(existingItem), 1);
      }
    }

    setCartItems(updatedCartItems);
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.count, 0);
  const remainingBudget = totalCash - totalPrice;

  return (
    <>
      <div className="w-full h-16 bg-gray-800 flex items-center justify-center space-x-4">
        <h1 className="total-cash text-2xl text-white">${totalCash}</h1>
        <h1 className="text-lg text-white font-light">
          You Have A Lot Of Money to Spend!
        </h1>
        <h1 className="text-lg text-white font-light">
          Remaining Budget: ${remainingBudget}
        </h1>
      </div>

      <div className="bg-cards w-full bg-gray-900 p-5 flex flex-wrap justify-center space-x-3 space-y-4">
        {data.map((data) => (
          <div
            key={data.id}
            className="card-1 bg-gray-700 w-1/4 h-full rounded-sm flex flex-col items-center justify-between p-2 mt-4"
          >
            <h1 className="text-lg text-white text-center p-2">
              {data.title}
            </h1>
            <img src={data.image} className="p-3 h-64" alt={data.title} />
            <div className="price-rate flex flex-row w-full items-center justify-between px-4 my-4">
              <h1 className="rate-btn px-4 py-1 rounded-lg bg-gray-800 text-white text-xs font-light">
                {data.title}
              </h1>
              <h1 className="price px-4 py-1 rounded-lg bg-gray-800 text-white text-xs font-light">
                ${data.price}
              </h1>
            </div>
            <h1 className="Counter text-xl text-white font-semibold pb-2 -mt-8">
              {cartItems.find((item) => item.title === data.title)?.count || 0}
            </h1>
            <div className="flex flex-row w-full h-16 items-center justify-evenly bg-gray-900 border-b border-white">
              <button className="intrested-btn px-4 h-[20px] bg-gray-900 text-white text-sm font-light border-r border-l border-white">
                Interested
              </button>
              <button
                onClick={() => handleAddToCart(data.title, data.price)}
                className="add-btn px-4 h-[20px] bg-gray-900 text-white text-xs font-light border-l border-r border-white"
              >
                Add to Cart
              </button>
              <button
                onClick={() => handleRemoveFromCart(data.title, data.price)}
                className="remove-btn px-4 h-[20px] bg-gray-900 text-white text-xs font-light border-l border-r border-white"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full h-[410px] bg-gray-900 flex items-center justify-center">
        <div className="cart-items w-[80%] h-[90%] bg-gray-800 rounded-md">
          <h1 className="text-2xl text-white font-semibold text-center py-4">Your Cart</h1>
          <div className="flex flex-col items-center justify-evenly px-4 space-y-2">
            <div className="w-full h-[180px] overflow-auto good-scroll">
              {cartItems.map((item, index) => (
                <div key={index} className="w-full h-10 bg-gray-950 rounded-md flex flex-row items-center justify-between px-4 my-2">
                  <h1 className="item-name text-xs font-semibold text-white">{item.title}</h1>
                  <h2 className="item-count text-xs font-semibold text-white">{item.count}</h2>
                </div>
              ))}
            </div>
            <div className="w-full h-[104px] bg-gray-700 rounded-md flex px-8 flex-row items-center justify-between">
              <h1 className="all-items-total-amount bg-gray-600 px-5 py-2 rounded-xs duration-500 hover:scale-105 ease-in-out">
                Total: {cartItems.reduce((total, item) => total + item.count, 0)}
              </h1>
              <h1 className="all-items-total-Price bg-gray-600 px-5 py-2 rounded-xs duration-500 hover:scale-105 ease-in-out">
                Total Price: ${totalPrice}
              </h1>
              <button
                onClick={() => setCartItems([])}
                className="reset-all-btn px-5 py-2 bg-gray-600 rounded-xs hover:bg-gray-800 duration-500 hover:scale-105 ease-in-out"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

