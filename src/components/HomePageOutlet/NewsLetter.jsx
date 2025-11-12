import { useState } from "react";

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thanks for subscribing with: ${email}`);
      setEmail("");
    }
  };

  return (
    <div className="bg-gradient-to-r from-primary to-secondary py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Stay Updated with Game Hub
        </h2>
        <p className="text-white text-opacity-90 mb-8 text-lg">
          Subscribe to our newsletter and get the latest game releases, updates,
          and exclusive deals delivered to your inbox.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input input-bordered flex-1 text-base"
          />
          <button type="submit" className="btn btn-neutral px-8">
            Subscribe
          </button>
        </form>

        <p className="text-white text-opacity-75 text-sm mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  );
};

export default NewsLetter;
