"use client";

import { type FormEvent } from "react";
import type { Dictionary } from "@/i18n";
import { contactInfo } from "@/data/contact";
import styles from "./ContactForm.module.css";

export default function ContactForm({ dict }: { dict: Dictionary }) {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    alert(dict.contact.sentMessage);
  };

  return (
    <form className={styles.root} onSubmit={handleSubmit} data-reveal>
      <div className={styles.intro}>
        <span className={styles.eyebrow}>{dict.contact.formIntro}</span>
        <span className={styles.step}>{dict.contact.formStep}</span>
      </div>
      <div className={styles.row}>
        <label className={styles.label}>{dict.contact.formName}</label>
        <input type="text" name="name" placeholder={dict.contact.formNamePh} required />
      </div>
      <div className={styles.row}>
        <label className={styles.label}>{dict.contact.formCompany}</label>
        <input type="text" name="company" placeholder={dict.contact.formCompanyPh} />
      </div>
      <div className={styles.row}>
        <label className={styles.label}>{dict.contact.formEmail}</label>
        <input type="email" name="email" placeholder={dict.contact.formEmailPh} required />
      </div>
      <div className={styles.row}>
        <label className={styles.label}>{dict.contact.formScope}</label>
        <select name="scope">
          {dict.contact.scopeOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>
      <div className={[styles.row, styles.rowTextarea].join(" ")}>
        <label className={styles.label}>{dict.contact.formBrief}</label>
        <textarea name="brief" rows={3} placeholder={dict.contact.formBriefPh} />
      </div>
      <div className={[styles.row, styles.submitRow].join(" ")}>
        <div className={styles.channels}>
          <a
            href={contactInfo.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className={[styles.channel, styles.telegram].join(" ")}
          >
            <span className={styles.channelDot} />
            Telegram
          </a>
          <a
            href={contactInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className={[styles.channel, styles.whatsapp].join(" ")}
          >
            <span className={styles.channelDot} />
            WhatsApp
          </a>
        </div>
        <button type="submit" className={styles.submitButton} data-hover>
          {dict.contact.sendBrief}
          <svg viewBox="0 0 14 10" width="14" fill="none" stroke="currentColor" strokeWidth="1.4">
            <path d="M1 5 H13 M9 1 L13 5 L9 9" />
          </svg>
        </button>
      </div>
    </form>
  );
}
