import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 px-6 py-32 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-slate-600">
            Have a question or want to work together? I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Email</h3>
                  <a
                    href="mailto:harshita@example.com"
                    className="text-slate-600 hover:text-indigo-600 transition-colors"
                  >
                    agrawalharshita976@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Phone</h3>
                  <a
                    href="tel:+919876543210"
                    className="text-slate-600 hover:text-indigo-600 transition-colors"
                  >
                    +91 7000682502
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Location</h3>
                  <p className="text-slate-600">India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl p-6 text-white">
              <h3 className="font-bold text-lg mb-4">Follow Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/harshita-agrawal-00a602339"
                  className="hover:opacity-80 transition-opacity"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/agrawalharshita976-cpu"
                  className="hover:opacity-80 transition-opacity"
                >
                  GitHub
                </a>
                <a
                  href="https://leetcode.com/u/harshita112/"
                  className="hover:opacity-80 transition-opacity"
                >
                  Leetcode
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-700 font-semibold">
                  ✓ Message sent successfully! I'll get back to you soon.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 transition-all"
                  placeholder="John Doe"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 transition-all"
                  placeholder="john@example.com"
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 transition-all resize-none"
                  rows="6"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-bold py-3 rounded-lg hover:from-indigo-700 hover:to-indigo-800 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
              >
                Send Message
              </button>
            </form>

            <p className="text-center text-slate-500 text-sm mt-6">
              I'll respond to your message within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
