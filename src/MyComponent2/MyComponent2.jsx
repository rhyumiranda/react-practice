// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';

function MyComponent2 (){
  
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("Visa");
  const [shipping, setShipping] = useState("Delivery");

  function handleNameChange(event){
    setName(event.target.value);
  }

  function handleQuantityChange(event){
    setQuantity(event.target.value);
  }

  function handleSetComment(event){
    setComment(event.target.value);
  }

  function handlePaymentChange(event){
    setPayment(event.target.value);
  }

  function handleShippingChange(event){
    setShipping(event.target.value);
  }

  return(
    <div>
      <input value={name} onChange={handleNameChange}/>
      <p>Name: {name}</p>
      <input value={quantity} onChange={handleQuantityChange} type='number'/>
      <p>Quantity: {quantity}</p>
      <textarea value={comment} onChange={handleSetComment} placeholder='Enter delivery instructions'/>
      <p>Comment: {comment}</p>
      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select an option</option>
        <option value="Visa">Visa</option>
        <option value="Mastercard">Mastercard</option>
        <option value="Giftcard">Giftcard</option>
      </select>
      <p>Payment: {payment}</p>
      <label>
        <input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={handleShippingChange}/>
        Pick-up
      </label><br />
      <label>
        <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange}/>
        Delivery
      </label>
      <p>Shipping: {shipping}</p>
    </div>
  );
}

export default MyComponent2