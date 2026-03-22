export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4 text-center">
      <h1 className="text-4xl font-bold mb-4 text-green-600">Contact Us</h1>
      <p className="text-lg text-slate-700 mb-6">
        Have questions, feedback, or need support? Reach out to us!
      </p>
      <div className="text-slate-500">
        <p>Email: <a href="mailto:atxepzyreva@gmail.com" className="text-blue-600 underline">atxepzyreva@gmail.com</a></p>
        <p>Website: <a href="https://atxep.netlify.app" className="text-blue-600 underline">https://atxep.netlify.app</a></p>
      </div>
    </div>
  );
}
