import React, { useState, useEffect } from "react";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders(db.orders);
  }, []);

  return (
    <div>
      {orders.map(order => (
        <div key={order._id}>
          <h3>{order}</h3>
          <p>{order.items.map(item => item.name).join(", ")}</p>
        </div>
      ))}
    </div>
  );
};

export default OrderHistory;