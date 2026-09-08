import { useState } from "react";
import rentlaoLogo from "./assets/rentlao-logo.png";
import {
  Phone,
  Mail,
  Globe,
  MapPin,
  MessageCircle,
  UserPlus,
  Share2,
  ExternalLink,
  Building2,
} from "lucide-react";

import "./App.css";

function App() {
  const [toast, setToast] = useState("");

  const contact = {
    name: "Bhushan Mahajan",
    firstName: "Bhushan",
    lastName: "Mahajan",
    company: "RENTLAO",
    designation: "Business Development",
    phone: "+919867313288",
    displayPhone: "+91 98673 13288",
    email: "bhushan@assetsentinel.in",
    website: "https://www.rentlao.com",
    address:
      "1909, 9 Business Bay, Mindspace, Malad West, Mumbai - 400064",
  };

  const mapUrl =
    "https://www.google.com/maps/search/?api=1&query=1909%2C%209%20Business%20Bay%2C%20Mindspace%2C%20Malad%20West%2C%20Mumbai%20400064";

  const whatsappUrl =
    "https://wa.me/919867313288?text=Hi%20Bhushan%2C%20I%20got%20your%20digital%20business%20card.";

  const showToast = (message) => {
    setToast(message);

    setTimeout(() => {
      setToast("");
    }, 2500);
  };

  const saveContact = () => {
    const vCard = `BEGIN:VCARD
VERSION:3.0
FN:${contact.name}
N:${contact.lastName};${contact.firstName};;;
ORG:${contact.company}
TITLE:${contact.designation}
TEL;TYPE=CELL:${contact.phone}
EMAIL;TYPE=WORK:${contact.email}
URL:${contact.website}
ADR;TYPE=WORK:;;${contact.address}
END:VCARD`;

    const blob = new Blob([vCard], {
      type: "text/vcard;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "Bhushan-Mahajan-RENTLAO.vcf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);

    showToast("Contact card ready!");
  };

  const shareContact = async () => {
    const shareText = `Bhushan Mahajan
Business Development
RENTLAO

Phone: ${contact.displayPhone}
Email: ${contact.email}
Website: ${contact.website}`;

    const shareData = {
      title: "Bhushan Mahajan | RENTLAO",
      text: shareText,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch (error) {
        if (error?.name === "AbortError") {
          return;
        }
      }
    }

    try {
      await navigator.clipboard.writeText(
        `${shareText}\n\n${window.location.href}`
      );

      showToast("Contact details copied!");
    } catch {
      showToast("Please copy the page link manually.");
    }
  };

  return (
    <div className="page">
      <div className="card">

        {/* TOP BLUE DESIGN */}
        <div className="top-design">
          <div className="circle circle-one"></div>
          <div className="circle circle-two"></div>
          <div className="circle circle-three"></div>
            <div className="top-brand">
            <img
              src={rentlaoLogo}
              alt="RENTLAO"
              className="top-logo-image"
            />
          </div>
        </div>

        {/* HERO */}
        <section className="hero">

          <p className="eyebrow">
            RENTAL & ASSET MANAGEMENT
          </p>

          <h1>
            Bhushan Mahajan
          </h1>

          <div className="designation">
            BUSINESS DEVELOPMENT
          </div>

          <p className="tagline">
            Building meaningful connections and creating
            opportunities through smarter business solutions.
          </p>

        </section>

        {/* CONTACT */}
        <section className="contact-section">

          <a
            href={`tel:${contact.phone}`}
            className="contact-item"
          >
            <div className="contact-icon">
              <Phone size={18} />
            </div>

            <div className="contact-content">
              <span className="contact-label">
                PHONE
              </span>

              <span className="contact-value">
                {contact.displayPhone}
              </span>
            </div>

            <ExternalLink
              size={15}
              className="contact-arrow"
            />
          </a>

          <a
            href={`mailto:${contact.email}`}
            className="contact-item"
          >
            <div className="contact-icon">
              <Mail size={18} />
            </div>

            <div className="contact-content">
              <span className="contact-label">
                EMAIL
              </span>

              <span className="contact-value">
                {contact.email}
              </span>
            </div>

            <ExternalLink
              size={15}
              className="contact-arrow"
            />
          </a>

          <a
            href={contact.website}
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >
            <div className="contact-icon">
              <Globe size={18} />
            </div>

            <div className="contact-content">
              <span className="contact-label">
                WEBSITE
              </span>

              <span className="contact-value">
                www.rentlao.com
              </span>
            </div>

            <ExternalLink
              size={15}
              className="contact-arrow"
            />
          </a>

          <a
            href={mapUrl}
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >
            <div className="contact-icon">
              <MapPin size={18} />
            </div>

            <div className="contact-content">
              <span className="contact-label">
                OFFICE
              </span>

              <span className="contact-value">
                {contact.address}
              </span>
            </div>

            <ExternalLink
              size={15}
              className="contact-arrow"
            />
          </a>

        </section>

        {/* ACTIONS */}
        <section className="actions">

          <a
            href={`tel:${contact.phone}`}
            className="action-button primary"
          >
            <Phone size={17} />
            Call Now
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="action-button whatsapp"
          >
            <MessageCircle size={17} />
            WhatsApp
          </a>

          <button
            className="action-button dark"
            onClick={saveContact}
          >
            <UserPlus size={17} />
            Save Contact
          </button>

          <a
            href={contact.website}
            target="_blank"
            rel="noreferrer"
            className="action-button outline"
          >
            <Globe size={17} />
            Website
          </a>

        </section>

        {/* ABOUT */}
        <section className="about">

          <div className="section-heading">

            <Building2 size={20} />

            <h2>
              About <span>RENTLAO</span>
            </h2>

          </div>

          <p>
            <strong>RENTLAO</strong> is a smart rental and asset
            management platform helping businesses simplify rental
            operations, improve asset utilization, and connect with
            reliable solutions. With a focus on flexibility,
            transparency, and efficiency, we deliver seamless rental
            experiences and build long-term business partnerships
            across India.
          </p>

        </section>

        {/* SHARE */}
        <section className="share-section">

          <div className="share-icon">
            <Share2 size={21} />
          </div>

          <h2>
            Share My Digital Card
          </h2>

          <p>
            Share Bhushan's contact details instantly
            with your network.
          </p>

          <button
            className="share-button"
            onClick={shareContact}
          >
            <Share2 size={16} />
            Share Contact
          </button>

        </section>

        {/* FOOTER */}
        <footer className="footer">

          <span>RENTLAO</span>

          <span className="dot">•</span>

          <span>Bhushan Mahajan</span>

          <span className="dot">•</span>

          <span>Business Development</span>

        </footer>

      </div>

      {/* TOAST */}
      {toast && (
        <div className="toast">
          {toast}
        </div>
      )}

    </div>
  );
}

export default App;