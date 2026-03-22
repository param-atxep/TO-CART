"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Mock: decode JWT and get user info
    const token = localStorage.getItem("tocart_token");
    if (!token) {
      router.push("/login");
      return;
    }
    // In real app, decode JWT or fetch user info
    setUser({
      name: "Demo User",
      email: "demo@tocart.com",
      orders: [
        { id: "order_1", total: 199, status: "Delivered" },
        { id: "order_2", total: 299, status: "Shipped" },
      ],
    });
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("tocart_token");
    router.push("/");
  };

  if (!user) return <div className="text-center py-20 text-slate-500">Loading profile...</div>;

  return (
    <div className="max-w-xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-4 text-green-600">My Profile</h1>
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <div className="mb-2"><b>Name:</b> {user.name}</div>
        <div className="mb-2"><b>Email:</b> {user.email}</div>
        <button onClick={handleLogout} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">Logout</button>
      </div>
      <h2 className="text-xl font-semibold mb-2">My Orders</h2>
      <div className="bg-white p-4 rounded-lg shadow">
        {user.orders.length === 0 ? (
          <div className="text-slate-400">No orders yet.</div>
        ) : (
          <ul className="divide-y">
            {user.orders.map(order => (
              <li key={order.id} className="py-2 flex justify-between">
                <span>Order #{order.id}</span>
                <span className="text-green-600 font-bold">₹{order.total}</span>
                <span className="text-slate-500">{order.status}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
