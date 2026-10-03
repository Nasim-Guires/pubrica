"use client";

import React, { useEffect, useRef, useState } from "react";
import "./FloatingContactTabs.css";

const ZOHO_FORM_SRC =
  "https://forms.zohopublic.com/guiressolutions1/form/popupformPubrica/formperma/hYU4UGFZipv_oRx3iJzsEjoLTjFGmDyvOPuvgKkuJIQ";

// Passes the page the visitor was on to the Zoho form, as Zoho's embed snippet does.
function buildFormSrc(): string {
  let referrer = window.location.href;
  try {
    if (window.self !== window.top && window.top) {
      referrer = window.top.location.href;
    }
  } catch {
    // cross-origin parent: keep this frame's URL
  }
  if (referrer.length > 1800) {
    const q = referrer.indexOf("?");
    if (q > -1) referrer = referrer.substring(0, q);
    referrer = referrer.substring(0, 1800);
  }
  return `${ZOHO_FORM_SRC}${ZOHO_FORM_SRC.includes("?") ? "&" : "?"}referrername=${encodeURIComponent(referrer)}`;
}

export default function FloatingContactTabs() {
  const [callOpen, setCallOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [formSrc, setFormSrc] = useState<string | undefined>(undefined);
  const callWrapRef = useRef<HTMLDivElement>(null);

  // Close the number list on outside click.
  useEffect(() => {
    if (!callOpen) return;
    const onMouseDown = (e: MouseEvent) => {
      if (callWrapRef.current && !callWrapRef.current.contains(e.target as Node)) {
        setCallOpen(false);
      }
    };
    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, [callOpen]);

  // Escape closes the popup first, then the number list.
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (modalOpen) setModalOpen(false);
      else if (callOpen) setCallOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [modalOpen, callOpen]);

  // Lock page scroll while the popup is open.
  useEffect(() => {
    if (!modalOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [modalOpen]);

  const openModal = () => {
    setCallOpen(false);
    setFormSrc((current) => current ?? buildFormSrc());
    setModalOpen(true);
  };

  return (
    <>
      <div className="ti-tabs" id="ti-tabs">
        {/* Call */}
        <div className="ti-tab-wrap" ref={callWrapRef}>
          <div className="ti-call-list" hidden={!callOpen}>
            <div className="ti-call-title">Call Us</div>

            <a href="tel:+919884350006">
              <span className="ti-code" style={{ background: "#e8f5e9", color: "#1b7a2f" }}>IN</span>
              <span>
                <span className="ti-call-label">India</span>
                <span className="ti-call-num">+91 9884350006</span>
              </span>
            </a>

            <a href="tel:+19725029262">
              <span className="ti-code" style={{ background: "#e8eefc", color: "#1a2a6c" }}>US</span>
              <span>
                <span className="ti-call-label">US</span>
                <span className="ti-call-num">+1-972-502-9262</span>
              </span>
            </a>
          </div>

          <button
            type="button"
            className={`ti-tab${callOpen ? " ti-active" : ""}`}
            style={{ background: "#2b1236" }}
            aria-label="Call us"
            aria-expanded={callOpen}
            onClick={() => setCallOpen((open) => !open)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.1 1.17 2 2 0 012.11 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
            </svg>
            <span>Call Us</span>
          </button>
        </div>

        {/* WhatsApp */}
        <div className="ti-tab-wrap">
          <a
            className="ti-tab"
            href="https://wa.me/919884350006"
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: "#1fa855" }}
            aria-label="Chat with us on WhatsApp"
          >
            <svg viewBox="0 0 32 32" fill="#fff">
              <path d="M16 2C8.268 2 2 8.268 2 16c0 2.478.666 4.797 1.824 6.795L2 30l7.385-1.797A13.94 13.94 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.45 11.45 0 01-5.824-1.594l-.418-.248-4.381 1.066 1.1-4.258-.272-.437A11.46 11.46 0 014.5 16C4.5 9.649 9.649 4.5 16 4.5S27.5 9.649 27.5 16 22.351 27.5 16 27.5zm6.29-8.61c-.344-.172-2.035-1.003-2.35-1.118-.316-.115-.546-.172-.776.172-.23.344-.891 1.118-1.093 1.348-.2.23-.402.258-.746.086-.344-.172-1.453-.536-2.767-1.708-1.022-.913-1.712-2.04-1.912-2.384-.2-.344-.021-.53.15-.701.155-.155.344-.402.516-.603.172-.2.23-.344.344-.574.115-.23.058-.43-.029-.603-.086-.172-.776-1.87-1.063-2.561-.28-.672-.563-.58-.776-.591l-.66-.011c-.23 0-.603.086-.919.43-.316.344-1.207 1.18-1.207 2.878s1.236 3.338 1.408 3.568c.172.23 2.433 3.713 5.895 5.207.824.356 1.467.569 1.969.728.827.263 1.58.226 2.175.137.663-.1 2.035-.832 2.322-1.635.287-.803.287-1.491.2-1.635-.086-.144-.316-.23-.66-.402z" />
            </svg>
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Enquire */}
        <div className="ti-tab-wrap">
          <button
            type="button"
            className="ti-tab"
            style={{ background: "#9b2d8e" }}
            aria-label="Enquire now"
            onClick={openModal}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7l9 6 9-6" />
            </svg>
            <span>Enquire Now</span>
          </button>
        </div>
      </div>

      {/* Enquiry popup (Zoho form) */}
      <div
        className="ti-overlay"
        hidden={!modalOpen}
        onClick={(e) => {
          if (e.target === e.currentTarget) setModalOpen(false);
        }}
      >
        <div className="ti-panel" role="dialog" aria-modal="true" aria-label="Enquire now">
          <button type="button" className="ti-close" aria-label="Close" onClick={() => setModalOpen(false)}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 2l12 12M14 2L2 14" stroke="#1a2a6c" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          <div className="ti-panel-scroll">
            <iframe className="ti-zoho" title="Contact Form popup" aria-label="Contact Form popup" src={formSrc} />
          </div>
        </div>
      </div>
    </>
  );
}
