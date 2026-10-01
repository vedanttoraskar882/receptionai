import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Building2, User, Phone, Mail, ArrowRight, ShieldCheck } from 'lucide-react';

const STORAGE_KEY = 'receptionAI_pilot_submissions';

export default function PilotModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    organisationName: '',
  });

  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsSuccess(false);
      setErrors({});
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    let timer;
    if (isSuccess) {
      timer = setTimeout(() => {
        handleModalClose();
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [isSuccess]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors = {};

    // Full Name
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    }

    // Organisation Name
    if (!formData.organisationName.trim()) {
      newErrors.organisationName = 'Organisation Name is required.';
    }

    // Phone Number validation
    // Allowed: numbers, spaces, +, -, parentheses, reasonable minimum digits (at least 7 digits)
    const phoneTrimmed = formData.phoneNumber.trim();
    const phoneCharsValid = /^[\d\s+\-()]+$/.test(phoneTrimmed);
    const digitsOnly = phoneTrimmed.replace(/\D/g, '');
    if (!phoneTrimmed || !phoneCharsValid || digitsOnly.length < 7) {
      newErrors.phoneNumber = 'Please enter a valid phone number.';
    }

    // Email validation
    // Contains: text before @, @, valid domain after @, dot extension
    const emailTrimmed = formData.emailAddress.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z0-9-]{2,}$/;
    if (!emailTrimmed || !emailRegex.test(emailTrimmed)) {
      newErrors.emailAddress = 'Please enter a valid email address.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      // 1. Read existing array from localStorage safely
      let existingSubmissions = [];
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed)) {
            existingSubmissions = parsed;
          }
        }
      } catch (e) {
        existingSubmissions = [];
      }

      // 2. Build the new submission object with ISO timestamp
      const newSubmission = {
        fullName: formData.fullName.trim(),
        phoneNumber: formData.phoneNumber.trim(),
        emailAddress: formData.emailAddress.trim(),
        organisationName: formData.organisationName.trim(),
        submissionDateTime: new Date().toISOString(),
      };

      // 3. Append to existing array (never overwrite)
      existingSubmissions.push(newSubmission);

      // 4. Save complete updated array back to localStorage
      localStorage.setItem(STORAGE_KEY, JSON.stringify(existingSubmissions));

      // 5. Show success state and clear form fields
      setIsSuccess(true);
      setFormData({
        fullName: '',
        phoneNumber: '',
        emailAddress: '',
        organisationName: '',
      });
      setErrors({});
    } catch (err) {
      console.error('Failed to save submission to localStorage:', err);
    }
  };

  const handleModalClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="pilot-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
        onClick={handleModalClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl border border-slate-200 z-10 transition-all">
        {/* Header decoration */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-6 py-5 text-white flex items-center justify-between border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-xs font-semibold tracking-wider uppercase text-cyan-400">ReceptionAI Pilot</span>
            </div>
            <h3 id="pilot-modal-title" className="text-xl font-bold text-white mt-1">
              Request a Pilot
            </h3>
          </div>
          <button
            onClick={handleModalClose}
            className="rounded-lg p-2 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          {isSuccess ? (
            <div className="text-center py-6">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 mb-4 border border-emerald-200">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">
                Thank you. Your pilot request has been recorded.
              </h4>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed max-w-sm mx-auto">
                Our UK operational onboarding specialist will review your front-desk requirements and reach out within one business day.
              </p>
              <button
                type="button"
                onClick={handleModalClose}
                className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800 transition shadow-sm text-sm"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                Connect your clinic or hospitality reception with an intelligent automation layer. Enter your organisation details below.
              </p>

              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <User className="h-4 w-4" />
                  </div>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Dr. Sarah Jenkins"
                    className={`w-full rounded-lg border pl-10 pr-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                      errors.fullName
                        ? 'border-rose-400 bg-rose-50/20 focus:ring-rose-400'
                        : 'border-slate-300 bg-slate-50/50 focus:border-cyan-500 focus:ring-cyan-500'
                    }`}
                  />
                </div>
                {errors.fullName && (
                  <p className="mt-1 text-xs text-rose-600">{errors.fullName}</p>
                )}
              </div>

              {/* Organisation Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Organisation Name <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Building2 className="h-4 w-4" />
                  </div>
                  <input
                    type="text"
                    value={formData.organisationName}
                    onChange={(e) => setFormData({ ...formData, organisationName: e.target.value })}
                    placeholder="e.g. Meadowbrook Medical Practice"
                    className={`w-full rounded-lg border pl-10 pr-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                      errors.organisationName
                        ? 'border-rose-400 bg-rose-50/20 focus:ring-rose-400'
                        : 'border-slate-300 bg-slate-50/50 focus:border-cyan-500 focus:ring-cyan-500'
                    }`}
                  />
                </div>
                {errors.organisationName && (
                  <p className="mt-1 text-xs text-rose-600">{errors.organisationName}</p>
                )}
              </div>

              {/* Work Email */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Email Address <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Mail className="h-4 w-4" />
                  </div>
                  <input
                    type="email"
                    value={formData.emailAddress}
                    onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                    placeholder="name@company.co.uk"
                    className={`w-full rounded-lg border pl-10 pr-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                      errors.emailAddress
                        ? 'border-rose-400 bg-rose-50/20 focus:ring-rose-400'
                        : 'border-slate-300 bg-slate-50/50 focus:border-cyan-500 focus:ring-cyan-500'
                    }`}
                  />
                </div>
                {errors.emailAddress && (
                  <p className="mt-1 text-xs text-rose-600">{errors.emailAddress}</p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Phone Number <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Phone className="h-4 w-4" />
                  </div>
                  <input
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    placeholder="+44 20 7946 0912"
                    className={`w-full rounded-lg border pl-10 pr-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                      errors.phoneNumber
                        ? 'border-rose-400 bg-rose-50/20 focus:ring-rose-400'
                        : 'border-slate-300 bg-slate-50/50 focus:border-cyan-500 focus:ring-cyan-500'
                    }`}
                  />
                </div>
                {errors.phoneNumber && (
                  <p className="mt-1 text-xs text-rose-600">{errors.phoneNumber}</p>
                )}
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 text-white font-semibold text-sm hover:from-blue-700 hover:via-cyan-700 hover:to-teal-700 transition shadow-md shadow-cyan-600/20 active:scale-[0.99]"
                >
                  <span>Request My Pilot</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-600 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                <span>Zero installation commitment • Built for UK healthcare & hospitality SMEs</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
