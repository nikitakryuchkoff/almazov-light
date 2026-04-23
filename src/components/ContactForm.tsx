"use client";

import { type FormEvent } from "react";
import type { Dictionary } from "@/i18n";
import { contactInfo } from "@/data/contact";

const mono = { fontFamily: "var(--font-mono), ui-monospace, monospace" };

export default function ContactForm({ dict }: { dict: Dictionary }) {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(dict.contact.sentMessage);
  };

  return (
    <form className="contact-form rv" onSubmit={handleSubmit}>
      <div className="form-intro" style={mono}>
        <span className="eyebrow">{dict.contact.formIntro}</span>
        <span className="step">{dict.contact.formStep}</span>
      </div>
      <div className="row">
        <label style={mono}>{dict.contact.formName}</label>
        <input type="text" name="name" placeholder={dict.contact.formNamePh} required />
      </div>
      <div className="row">
        <label style={mono}>{dict.contact.formCompany}</label>
        <input type="text" name="company" placeholder={dict.contact.formCompanyPh} />
      </div>
      <div className="row">
        <label style={mono}>{dict.contact.formEmail}</label>
        <input type="email" name="email" placeholder={dict.contact.formEmailPh} required />
      </div>
      <div className="row">
        <label style={mono}>{dict.contact.formScope}</label>
        <select name="scope">
          {dict.contact.scopeOptions.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
      </div>
      <div className="row textarea-row">
        <label style={mono}>{dict.contact.formBrief}</label>
        <textarea name="brief" rows={3} placeholder={dict.contact.formBriefPh} />
      </div>
      <div className="row submit-row">
        <div className="channels">
          <a href={contactInfo.telegram} target="_blank" rel="noopener noreferrer" className="channel tg" style={mono}>
            <span className="ch-dot" />Telegram
          </a>
          <a href={contactInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="channel wa" style={mono}>
            <span className="ch-dot" />WhatsApp
          </a>
        </div>
        <button type="submit" className="submit-btn" style={mono} data-hover>
          {dict.contact.sendBrief}
          <svg viewBox="0 0 14 10" width="14" fill="none" stroke="currentColor" strokeWidth="1.4">
            <path d="M1 5 H13 M9 1 L13 5 L9 9" />
          </svg>
        </button>
      </div>
    </form>
  );
}
