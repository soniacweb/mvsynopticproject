// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useLocation } from "react-router-dom";

// import { listFoodDetails } from "../actions/foodMenuActions";
// import { incQty, decQty } from "../actions/orderActions";

// const FoodSingle = () => {
//   const [qty, setQty] = useState(0);

//   const dispatch = useDispatch();
//   const mealDetails = useSelector((state) => state.mealDetail);
//   const { foodItem } = mealDetails;

//   let location = useLocation();
//   const path = location.pathname.split("/")[2];

//   console.log("hey", path);

//   useEffect(() => {
//     dispatch(listFoodDetails(path));
//   }, [dispatch, path]);

//   console.log(foodItem);
//   console.log(mealDetails);

//   const addQty = (value) => {
//     setQty(value++);
//   };

//   const removeQty = (value) => {
//     setQty(value--);
//   };

//   return (
//     <div>
//       <h1>food single</h1>
//       <h1>{foodItem.dishName}</h1>
//       <image src={foodItem.image} />
//       <p>{foodItem.inStock > 15 ? "Available" : "Hurry, we're running out!"}</p>
//       <img src={foodItem.image} />

//       <button onClick={() => dispatch(incQty(qty))}>+</button>
//       {qty}
//       <button onClick={() => dispatch(decQty(qty))}>-</button>

//       <button>Add to your order</button>

//       {/* <Button onClick={handleOpen}>Open modal</Button> */}
//     </div>
//   );
// };

// export default FoodSingle;
