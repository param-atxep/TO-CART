"use client";
import { useState } from "react";
import { GoogleLoginButton } from "react-social-login-buttons";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  // Mock login handler (replace with real API/JWT logic)
  const handleLogin = async (e) => {
    e.preventDefault();
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <div className="w-full max-w-md p-8 bg-white rounded shadow-md transition-all duration-300">
          <h2 className="text-2xl font-bold mb-6 text-center">Login to ToCart</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && <div className="text-red-500 text-sm">{error}</div>}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
          <div className="my-4 flex items-center justify-center">
            <span className="text-gray-400 text-xs">or</span>
          </div>
          <GoogleLoginButton onClick={handleGoogleLogin} style={{ width: "100%" }} />
          <p className="mt-4 text-center text-sm">
            Don&apos;t have an account?{' '}
            <a href="/signup" className="text-blue-600 hover:underline">Create Account</a>
          </p>
        </div>
      </div>
    );
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 rounded"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="bg-green-600 text-white py-2 rounded font-semibold" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
        {error && <div className="text-red-500 text-sm text-center">{error}</div>}
      </form>
      <div className="my-6 text-center text-slate-500">or</div>
      <button onClick={handleGoogleLogin} className="w-full mb-2 bg-white border py-2 rounded flex items-center justify-center gap-2 hover:bg-slate-50">
        <span className="text-blue-600 font-bold">G</span> Login with Google
      </button>
      <button onClick={handleMobileLogin} className="w-full bg-white border py-2 rounded flex items-center justify-center gap-2 hover:bg-slate-50">
        <span className="text-green-600 font-bold">📱</span> Login with Mobile (Mock)
      </button>
      <div className="mt-6 text-center text-slate-500 text-sm">
        Demo: <b>demo@tocart.com</b> / <b>password</b>
      </div>
    </div>
  );
}
