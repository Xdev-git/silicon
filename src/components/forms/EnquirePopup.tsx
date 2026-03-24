"use client";

import { useState } from "react";
import { X, ArrowRight } from "lucide-react";
import Image from "next/image";

interface EnquirePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EnquirePopup({ isOpen, onClose }: EnquirePopupProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Close popup after showing success message
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 3000);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-4xl bg-background shadow-2xl overflow-hidden flex flex-col md:flex-row animate-in zoom-in-95 duration-500">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center bg-black/10 hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20 rounded-full transition-colors"
          aria-label="Close form"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Left Side: Image / Branding */}
        <div className="hidden md:block w-2/5 relative bg-accent">
          <Image 
            src="https://placehold.co/800x1200/E6E9EE/9AA0A6.png?text=Luxury+Living" 
            alt="Luxury Real Estate"
            fill
            className="object-cover opacity-60 mix-blend-overlay"
          />
          <div className="relative z-10 p-12 h-full flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-serif text-black mb-4">Discover Extraordinary Living</h3>
              <p className="text-black/80 font-sans text-sm leading-relaxed">Let us guide you toward your ideal residential or commercial space in Central India's finest developments.</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-[1px] bg-black/30"></div>
                <span className="text-black text-xs tracking-widest uppercase font-bold">Premium </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-[1px] bg-black/30"></div>
                <span className="text-black text-xs tracking-widest uppercase font-bold">Exclusive</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-3/5 p-8 md:p-12 pb-16 bg-white dark:bg-zinc-950"> {/* Increased bottom padding */}
          {isSuccess ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-20 min-h-[300px]">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-bold">Thank You!</h3>
              <p className="text-muted-foreground">Your inquiry has been received. Our team will contact you shortly.</p>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h3 className="mb-2">Enquire Now</h3>
                <p className="text-zinc-500 text-sm">Please fill out the form below and our real estate experts will get in touch with you.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">First Name</label>
                    <input 
                      type="text" 
                      id="firstName"
                      required
                      className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-2 text-sm transition-colors"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName"
                      required
                      className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-2 text-sm transition-colors"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email Address</label>
                    <input 
                      type="email" 
                      id="email"
                      required
                      className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-2 text-sm transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone"
                      required
                      className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-2 text-sm transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="interest" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Area of Interest</label>
                  <select 
                    id="interest"
                    required
                    className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-2 text-sm transition-colors text-foreground appearance-none cursor-pointer"
                  >
                    <option value="" disabled selected>Select an option</option>
                    <option value="residential">Residential Properties</option>
                    <option value="commercial">Commercial Spaces</option>
                    <option value="investment">Investment Opportunities</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Message</label>
                  <textarea 
                    id="message"
                    rows={2}
                    className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-2 text-sm transition-colors resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full bg-accent text-black font-bold py-4 uppercase tracking-widest text-[11px] overflow-hidden transition-all duration-300 mt-4 disabled:opacity-70 disabled:cursor-not-allowed hover-scale"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                    {!isSubmitting && <ArrowRight className="w-4 h-4" />}
                  </span>
                  <div className="absolute inset-0 bg-black/5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></div>
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
