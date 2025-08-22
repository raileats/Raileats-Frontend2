import React, { useEffect, useState } from 'react';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Example: fetch orders from backend using customer mobile
    const dummyOrders = [
      { id: 'RE1234', status: 'Delivered', train: '12345' },
      { id: 'RE1235', status: 'In Kitchen', train: '54321' },
    ];
    setOrders(dummyOrders);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Order History</h2>
      {orders.map(order => (
        <div key={order.id} style={{ padding: '10px', border: '1px solid #ccc', marginBottom: '10px', borderRadius: '8px' }}>
          <p><b>Order ID:</b> {order.id}</p>
          <p><b>Train No:</b> {order.train}</p>
          <p><b>Status:</b> {order.status}</p>
        </div>
      ))}
    </div>
  );
};

export default OrderHistory;
