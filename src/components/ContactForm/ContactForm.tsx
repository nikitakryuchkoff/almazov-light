"use client";

import { type ChangeEvent, type FormEvent, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { CONTACT_FORM_HONEYPOT_FIELD, CONTACT_FORM_LIMITS } from "@/constants/contact-form";
import type { Dictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";
import type {
  ContactFormFieldErrorCode,
  ContactFormFieldErrors,
  ContactFormFieldName,
  ContactFormFields,
} from "@/types/contact";
import { getContactFormFieldErrors } from "@/utils/contact-form";
import styles from "./ContactForm.module.css";

type SubmissionState = "idle" | "submitting" | "submitted" | "error";

const INITIAL_VALUES: ContactFormFields = {
  name: "",
  email: "",
  topic: "",
  brief: "",
};

export default function ContactForm({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const [status, setStatus] = useState<SubmissionState>("idle");
  const [values, setValues] = useState<ContactFormFields>(INITIAL_VALUES);
  const [touched, setTouched] = useState<Partial<Record<ContactFormFieldName, boolean>>>({});
  const [fieldErrors, setFieldErrors] = useState<ContactFormFieldErrors>({});
  const [showValidation, setShowValidation] = useState(false);

  const isSubmitting = status === "submitting";

  const getErrorMessage = (code: ContactFormFieldErrorCode | undefined): string | null => {
    if (!code) {
      return null;
    }

    if (code === "invalid_email") {
      return dict.contact.invalidEmailError;
    }

    return dict.contact.requiredFieldError;
  };

  const getVisibleError = (field: ContactFormFieldName): string | null => {
    if (!showValidation && !touched[field]) {
      return null;
    }

    return getErrorMessage(fieldErrors[field]);
  };

  const handleChange =
    (field: ContactFormFieldName) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const nextValues = {
        ...values,
        [field]: event.target.value,
      };

      setValues(nextValues);

      if (status === "submitted" || status === "error") {
        setStatus("idle");
      }

      if (showValidation || touched[field]) {
        setFieldErrors(getContactFormFieldErrors(nextValues));
      }
    };

  const handleBlur = (field: ContactFormFieldName) => () => {
    setTouched((current) => ({
      ...current,
      [field]: true,
    }));
    setFieldErrors(getContactFormFieldErrors(values));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const contactMethodConfirmation = String(formData.get(CONTACT_FORM_HONEYPOT_FIELD) ?? "");

    const nextErrors = getContactFormFieldErrors(values);

    setShowValidation(true);
    setTouched({
      name: true,
      email: true,
      topic: true,
      brief: true,
    });
    setFieldErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          [CONTACT_FORM_HONEYPOT_FIELD]: contactMethodConfirmation,
          locale,
        }),
      });

      if (!response.ok) {
        throw new Error("Request failed.");
      }

      setValues(INITIAL_VALUES);
      setTouched({});
      setFieldErrors({});
      setShowValidation(false);
      setStatus("submitted");
    } catch {
      setStatus("error");
    }
  };

  const nameError = getVisibleError("name");
  const emailError = getVisibleError("email");
  const topicError = getVisibleError("topic");

  return (
    <form className={styles.root} onSubmit={handleSubmit} data-reveal noValidate>
      <input
        type="text"
        name={CONTACT_FORM_HONEYPOT_FIELD}
        tabIndex={-1}
        autoComplete="new-password"
        className={styles.honeypot}
        aria-hidden="true"
      />
      <div className={styles.intro}>
        <span className={styles.eyebrow}>{dict.contact.formIntro}</span>
      </div>
      <div className={styles.row}>
        <label className={styles.label}>{dict.contact.formName}</label>
        <div className={styles.controlStack}>
          <input
            type="text"
            name="name"
            value={values.name}
            placeholder={dict.contact.formNamePh}
            onChange={handleChange("name")}
            onBlur={handleBlur("name")}
            className={[styles.fieldInput, nameError ? styles.inputError : ""].join(" ").trim()}
            required
            maxLength={CONTACT_FORM_LIMITS.nameMax}
            disabled={isSubmitting}
            aria-invalid={Boolean(nameError)}
          />
          {nameError ? (
            <span className={styles.fieldError} aria-live="polite">
              {nameError}
            </span>
          ) : null}
        </div>
      </div>
      <div className={styles.row}>
        <label className={styles.label}>{dict.contact.formEmail}</label>
        <div className={styles.controlStack}>
          <input
            type="email"
            name="email"
            value={values.email}
            placeholder={dict.contact.formEmailPh}
            onChange={handleChange("email")}
            onBlur={handleBlur("email")}
            className={[styles.fieldInput, emailError ? styles.inputError : ""].join(" ").trim()}
            required
            maxLength={CONTACT_FORM_LIMITS.emailMax}
            disabled={isSubmitting}
            aria-invalid={Boolean(emailError)}
          />
          {emailError ? (
            <span className={styles.fieldError} aria-live="polite">
              {emailError}
            </span>
          ) : null}
        </div>
      </div>
      <div className={styles.row}>
        <label className={styles.label}>{dict.contact.formTopic}</label>
        <div className={styles.controlStack}>
          <input
            type="text"
            name="topic"
            value={values.topic}
            placeholder={dict.contact.formTopicPh}
            onChange={handleChange("topic")}
            onBlur={handleBlur("topic")}
            className={[styles.fieldInput, topicError ? styles.inputError : ""].join(" ").trim()}
            required
            maxLength={CONTACT_FORM_LIMITS.topicMax}
            disabled={isSubmitting}
            aria-invalid={Boolean(topicError)}
          />
          {topicError ? (
            <span className={styles.fieldError} aria-live="polite">
              {topicError}
            </span>
          ) : null}
        </div>
      </div>
      <div className={[styles.row, styles.rowTextarea].join(" ")}>
        <label className={styles.label}>{dict.contact.formBrief}</label>
        <div className={styles.controlStack}>
          <TextareaAutosize
            name="brief"
            value={values.brief}
            minRows={1}
            placeholder={dict.contact.formBriefPh}
            onChange={handleChange("brief")}
            onBlur={handleBlur("brief")}
            className={styles.fieldInput}
            maxLength={CONTACT_FORM_LIMITS.briefMax}
            disabled={isSubmitting}
          />
        </div>
      </div>
      <div className={[styles.row, styles.submitRow].join(" ")}>
        <button type="submit" className={styles.submitButton} data-hover disabled={isSubmitting}>
          {isSubmitting ? dict.contact.sendingBrief : dict.contact.sendBrief}
          <svg viewBox="0 0 14 10" width="14" fill="none" stroke="currentColor" strokeWidth="1.4">
            <path d="M1 5 H13 M9 1 L13 5 L9 9" />
          </svg>
        </button>
      </div>
      {status === "error" ? (
        <div className={styles.errorStrip}>{dict.contact.sendError}</div>
      ) : null}
      {status === "submitted" ? (
        <div className={styles.successStrip} aria-live="polite">
          {dict.contact.sentMessage}
        </div>
      ) : null}
    </form>
  );
}
