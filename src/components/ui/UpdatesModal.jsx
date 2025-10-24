import React, { useState } from "react";

const UpdatesModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Here you would typically handle the email signup
      console.log("Email submitted:", email);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
        onClose();
      }, 2000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
      <div 
        className="bg-white p-8 rounded-lg max-w-md w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {!isSubmitted ? (
          <>
            <h2 className="text-xl mb-4 text-center text-black" style={{ fontFamily: 'Inter', fontWeight: 700, letterSpacing: '-0.05em' }}>
              Stay Updated
            </h2>
            <p className="text-sm mb-6 text-center text-black" style={{ fontFamily: 'Inter', fontWeight: 400, letterSpacing: '-0.05em' }}>
              Join for updates on new releases and events.
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded mb-4 text-black"
                style={{ fontFamily: 'Inter', fontWeight: 400 }}
                required
              />
              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex-1 bg-black text-white p-3 rounded hover:bg-gray-800 transition-colors"
                  style={{ fontFamily: 'Inter', fontWeight: 700, letterSpacing: '-0.05em' }}
                >
                  Subscribe
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 bg-gray-200 text-black p-3 rounded hover:bg-gray-300 transition-colors"
                  style={{ fontFamily: 'Inter', fontWeight: 700, letterSpacing: '-0.05em' }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-xl mb-4 text-black" style={{ fontFamily: 'Inter', fontWeight: 700, letterSpacing: '-0.05em' }}>
              Welcome to Exhile
            </h2>
            <p className="text-sm text-black" style={{ fontFamily: 'Inter', fontWeight: 400, letterSpacing: '-0.05em' }}>
              You've been added to our mailing list.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UpdatesModal;