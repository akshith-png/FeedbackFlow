import React, { useState } from "react";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    feedback: "",
    rating: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form:", form);

    try {
      const response = await fetch("https://msramhmrla.execute-api.eu-north-1.amazonaws.com/prod/ps-lab-feedbackapp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          feedback: form.feedback,
          rating: form.rating
        })
      });

      const result = await response.json();
      console.log("Server response:", result);

      if (response.ok) {
        alert("✅ Feedback submitted successfully!");
        setForm({ name: "", email: "", feedback: "", rating: "" });
      } else {
        alert("❌ Submission failed. Try again.");
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("⚠️ Something went wrong. Check console for details.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-xl shadow-xl">
      <h2 className="text-xl font-bold mb-4">Give Us Your Feedback</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full border p-2 rounded"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="w-full border p-2 rounded"
        />
        <textarea
          name="feedback"
          value={form.feedback}
          onChange={handleChange}
          placeholder="Your feedback..."
          required
          className="w-full border p-2 rounded"
        ></textarea>
        <select
          name="rating"
          value={form.rating}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        >
          <option value="">Rate us (1-5)</option>
          <option value="1">1 - Poor</option>
          <option value="2">2 - Fair</option>
          <option value="3">3 - Good</option>
          <option value="4">4 - Very Good</option>
          <option value="5">5 - Excellent</option>
        </select>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;