"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ChevronRight, Calculator } from "lucide-react";

export default function EMICalculatorPage() {
  const [loanAmount, setLoanAmount] = useState<number>(5000000);
  const [interestRate, setInterestRate] = useState<number>(8.5);
  const [loanTenure, setLoanTenure] = useState<number>(20);

  // EMI Calculation Logic
  const emiData = useMemo(() => {
    const P = loanAmount;
    const R = interestRate / 12 / 100; // Monthly interest rate
    const N = loanTenure * 12; // Tenure in months

    let emi = 0;
    if (R === 0) {
        emi = P / N;
    } else {
        emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    }

    const totalPayment = emi * N;
    const totalInterest = totalPayment - P;

    return {
      monthlyEMI: Math.round(emi),
      totalInterest: Math.round(totalInterest),
      totalPayment: Math.round(totalPayment)
    };
  }, [loanAmount, interestRate, loanTenure]);

  // Formatting helper
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <main className="min-h-screen bg-white font-sans text-[#413F4C]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/60" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
           <nav className="flex justify-center items-center text-xs text-white/50 mb-6 font-semibold uppercase tracking-widest">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 mx-2" />
            <span className="text-[#020D2F]">EMI Calculator</span>
          </nav>
          
          <p className="text-xs font-bold uppercase tracking-widest text-[#020D2F] mb-4">Financial Planning</p>
          <h1 className="text-white mb-4 tracking-widest font-bold text-3xl md:text-5xl uppercase drop-shadow-lg">
            EMI Calculator
          </h1>
          <div className="w-12 h-[2px] bg-[#020D2F] mx-auto mb-6"></div>
          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto font-medium leading-snug">
            Use our EMI calculator to estimate your monthly home loan commitments and plan your dream home purchase.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            {/* Input Controls */}
            <div className="lg:col-span-7 space-y-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-[#020D2F]/20 flex items-center justify-center text-[#020D2F]">
                  <Calculator className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-[#413F4C]">Loan Details</h2>
              </div>

              {/* Loan Amount Slider */}
              <div className="space-y-6 bg-[#F3EEEB] p-8 border border-[#413F4C]/10">
                <div className="flex justify-between items-end mb-4">
                  <label htmlFor="loanAmount" className="text-sm font-bold uppercase tracking-widest text-[#413F4C]/60">
                    Loan Amount
                  </label>
                  <div className="text-2xl font-bold text-[#020D2F]">
                    {formatCurrency(loanAmount)}
                  </div>
                </div>
                <input 
                  type="range" 
                  id="loanAmount"
                  min="500000" 
                  max="50000000" 
                  step="100000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full cursor-pointer accent-[#020D2F]"
                />
                <div className="flex justify-between text-xs text-[#413F4C]/60 font-bold">
                  <span>‚¹5 Lakhs</span>
                  <span>‚¹5 Crores</span>
                </div>
              </div>

              {/* Interest Rate Slider */}
              <div className="space-y-6 bg-[#F3EEEB] p-8 border border-[#413F4C]/10">
                <div className="flex justify-between items-end mb-4">
                  <label htmlFor="interestRate" className="text-sm font-bold uppercase tracking-widest text-[#413F4C]/60">
                    Interest Rate (p.a.)
                  </label>
                  <div className="text-2xl font-bold text-[#020D2F]">
                    {interestRate}%
                  </div>
                </div>
                <input 
                  type="range" 
                  id="interestRate"
                  min="5" 
                  max="15" 
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full cursor-pointer accent-[#020D2F]"
                />
                <div className="flex justify-between text-xs text-[#413F4C]/60 font-bold">
                  <span>5%</span>
                  <span>15%</span>
                </div>
              </div>

              {/* Loan Tenure Slider */}
              <div className="space-y-6 bg-[#F3EEEB] p-8 border border-[#413F4C]/10">
                <div className="flex justify-between items-end mb-4">
                  <label htmlFor="loanTenure" className="text-sm font-bold uppercase tracking-widest text-[#413F4C]/60">
                    Loan Tenure (Years)
                  </label>
                  <div className="text-2xl font-bold text-[#020D2F]">
                    {loanTenure} Years
                  </div>
                </div>
                <input 
                  type="range" 
                  id="loanTenure"
                  min="1" 
                  max="30" 
                  step="1"
                  value={loanTenure}
                  onChange={(e) => setLoanTenure(Number(e.target.value))}
                  className="w-full cursor-pointer accent-[#020D2F]"
                />
                <div className="flex justify-between text-xs text-[#413F4C]/60 font-bold">
                  <span>1 Year</span>
                  <span>30 Years</span>
                </div>
              </div>
            </div>

            {/* Results Display */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 bg-accent text-white p-10 shadow-2xl relative overflow-hidden">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
                
                <h3 className="text-black mb-8 flex items-center gap-3 relative z-10">
                  <span className="w-8 h-[1px] bg-black/30 hidden sm:block"></span>
                  Your EMI Estimate
                </h3>
                
                <div className="space-y-8 relative z-10 border-b border-black/20 pb-8 mb-8">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-black/60 mb-2 font-bold">Monthly EMI</p>
                    <p className="text-4xl sm:text-5xl font-serif font-bold text-black">{formatCurrency(emiData.monthlyEMI)}</p>
                  </div>
                </div>

                <div className="space-y-6 relative z-10 mb-10">
                  <div className="flex justify-between items-center pb-4 border-b border-black/10">
                    <p className="text-sm text-black/70">Principal Amount</p>
                    <p className="font-bold">{formatCurrency(loanAmount)}</p>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-black/10">
                    <p className="text-sm text-black/70">Total Interest</p>
                    <p className="font-bold">{formatCurrency(emiData.totalInterest)}</p>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <p className="text-sm font-bold uppercase tracking-widest text-black/90">Total Payable</p>
                    <p className="font-bold text-xl">{formatCurrency(emiData.totalPayment)}</p>
                  </div>
                </div>

                <Link 
                  href="/contact"
                  className="group relative w-full block text-center bg-black text-white font-bold py-4 uppercase tracking-widest text-xs overflow-hidden transition-all duration-300 hover-scale"
                >
                  <span className="relative z-10 transition-colors">Request Call Back</span>
                  <div className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></div>
                </Link>
                
                <p className="text-[10px] text-black/40 text-center mt-6 leading-relaxed relative z-10">
                  *This is an approximate estimate based on the inputs provided. Actual figures may vary based on bank policies and individual eligibility.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}



