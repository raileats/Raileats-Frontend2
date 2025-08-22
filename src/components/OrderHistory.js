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
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Order History</h2>
      
      {orders.length === 0 ? (
        <p className="text-gray-500">No orders found.</p>
      ) : (
        orders.map(order => (
          <div
            key={order.id}
            className="p-4 mb-3 border rounded-lg shadow-sm bg-white"
          >
            <p><b>Order ID:</b> {order.id}</p>
            <p><b>Train No:</b> {order.train}</p>
            <p>
              <b>Status:</b>{' '}
              <span
                className={
                  order.status === 'Delivered'
                    ? 'text-green-600 font-semibold'
                    : 'text-yellow-600 font-semibold'
                }
              >
                {order.status}
              </span>
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default OrderHistory;
