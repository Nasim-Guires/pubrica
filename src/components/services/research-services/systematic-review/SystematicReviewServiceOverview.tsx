import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import React from "react";

const SystematicReviewServiceOverview = () => {
  return (
    <section
      aria-label="Systematic Review Writing & Rewriting Services"
      className="sys-rev-overview-container"
      style={{
        fontFamily: "Arial, sans-serif",
        color: "#111827",
        lineHeight: "1.6",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      {/* Top Banner Header */}
      <header
        style={{
          backgroundColor: "#0d1d25",
          color: "#ffffff",
          textAlign: "center",
          padding: "30px 20px",
          borderRadius: "4px",
          marginBottom: "40px",
        }}
      >
        <h1
          style={{ fontSize: "2rem", fontWeight: "bold", margin: "0 0 10px 0" }}
        >
          Systematic Review Writing &amp; Rewriting Services
        </h1>
        <p
          style={{
            fontSize: "1rem",
            color: "#e2e8f0",
            margin: "0 auto",
            maxWidth: "800px",
          }}
        >
          Pubrica delivers expert literature synthesis, methodological
          precision, and publication-ready documentation to enhance the
          scientific credibility and impact of your research.
        </p>
      </header>

      {/* Main Content Section */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "40px",
          alignItems: "start",
          marginBottom: "60px",
        }}
      >
        {/* Left Text Column */}
        <div>
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: "bold",
              color: "#0f2c3a",
              margin: "0 0 10px 0",
            }}
          >
            Expert Systematic Review Services for Clinical and Evidence-Based
            Research
          </h2>

          <h3
            style={{
              fontSize: "1.05rem",
              color: "#0f2c3a",
              fontWeight: "600",
              margin: "0 0 20px 0",
            }}
          >
            PRISMA, Cochrane &amp; PROSPERO-Compliant Reviews for Clinical,
            Healthcare, and Evidence-Based Research
          </h3>

          <p
            style={{
              fontSize: "0.95rem",
              marginBottom: "16px",
              color: "#374151",
            }}
          >
            Crafting a high-quality{" "}
            <a
              href="/services/research-services/systematic-review"
              style={{ color: "#2563eb", textDecoration: "none" }}
            >
              systematic review manuscript writing services
            </a>{" "}
            that complies with PRISMA guidelines,{" "}
            <a
              href="/services/research-services/systematic-review"
              style={{ color: "#2563eb", textDecoration: "none" }}
            >
              Cochrane methodology
            </a>
            , and PROSPERO registration standards can be challenging, especially
            for busy researchers and clinicians. At Pubrica, our team of
            experienced systematic literature review editors, data extractors,
            and medical and life science PhD writers delivers comprehensive{" "}
            <a
              href="/services/research-services/systematic-review"
              style={{ color: "#2563eb", textDecoration: "none" }}
            >
              systematic review
            </a>{" "}
            and{" "}
            <a
              href="/services/research-services/systematic-review"
              style={{ color: "#2563eb", textDecoration: "none" }}
            >
              meta-analysis services
            </a>{" "}
            across diverse disciplines, including clinical medicine, public
            health, nutrition and functional foods, pharma regulatory
            submissions, AI and machine learning research, and social sciences.
          </p>

          <p
            style={{
              fontSize: "0.95rem",
              marginBottom: "24px",
              color: "#374151",
            }}
          >
            We offer high-quality{" "}
            <a
              href="/services/research-services/systematic-review"
              style={{ color: "#2563eb", textDecoration: "none" }}
            >
              systematic review literature review support
            </a>
            ,{" "}
            <a
              href="/services/research-services/systematic-review"
              style={{ color: "#2563eb", textDecoration: "none" }}
            >
              data extraction for systematic review
            </a>
            , evidence synthesis, risk of bias measures, and statistical
            meta-analysis, ensuring methodological rigor, accuracy, and
            publication-ready quality. Our experts also identify key research
            gaps, highlighting missing or inadequate evidence to guide clinical
            decision-making, policy formulation, and future research priorities.
          </p>

        <GetFreeQuoteButton/>
        </div>

        {/* Right Image Column with Custom Backing Effect */}
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "450px",
            }}
          >
            {/* Background Accent Box */}
            <div
              style={{
                position: "absolute",
                top: "20px",
                left: "-15px",
                width: "100%",
                height: "100%",
                backgroundColor: "#0f2c3a",
                borderRadius: "16px",
                zIndex: 1,
              }}
            />
            {/* Image Container */}
            <div
              style={{
                position: "relative",
                zIndex: 2,
                borderRadius: "16px",
                overflow: "hidden",
                backgroundColor: "#ffffff",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800"
                alt="Medical researchers analyzing systematic review data and clinical evidence"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* "Why Pubrica" Cards Grid */}
      <section aria-labelledby="why-pubrica-title">
        <h2
          id="why-pubrica-title"
          style={{
            fontSize: "1.75rem",
            fontWeight: "bold",
            color: "#0f2c3a",
            marginBottom: "24px",
          }}
        >
          Why Pubrica
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {/* Card 1 */}
          <article
            style={{
              backgroundColor: "#ffffff",
              borderLeft: "4px solid #f59e0b",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            }}
          >
            <h3
              style={{
                fontSize: "1.1rem",
                fontWeight: "bold",
                margin: "0 0 10px 0",
                color: "#111827",
              }}
            >
              Proven Expertise
            </h3>
            <p style={{ fontSize: "0.9rem", color: "#4b5563", margin: 0 }}>
              Skilled{" "}
              <a
                href="/services/research-services/systematic-review"
                style={{ color: "#2563eb", textDecoration: "none" }}
              >
                systematic review editing services
              </a>
              , data extractors, and medical/life science PhD writers with
              experience in PRISMA, Cochrane, and PROSPERO-compliant reviews.
            </p>
          </article>

          {/* Card 2 */}
          <article
            style={{
              backgroundColor: "#ffffff",
              borderLeft: "4px solid #10b981",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            }}
          >
            <h3
              style={{
                fontSize: "1.1rem",
                fontWeight: "bold",
                margin: "0 0 10px 0",
                color: "#111827",
              }}
            >
              Comprehensive Services
            </h3>
            <p style={{ fontSize: "0.9rem", color: "#4b5563", margin: 0 }}>
              From literature search strategy development and Rayyan/Covidence
              screening to{" "}
              <a
                href="/services/research-services/systematic-review"
                style={{ color: "#2563eb", textDecoration: "none" }}
              >
                risk of bias assessment
              </a>
              ,{" "}
              <a
                href="/services/research-services/systematic-review"
                style={{ color: "#2563eb", textDecoration: "none" }}
              >
                systematic review data extraction services
              </a>
              , and{" "}
              <a
                href="/services/research-services/systematic-review"
                style={{ color: "#2563eb", textDecoration: "none" }}
              >
                meta-analysis
              </a>{" "}
              reporting.
            </p>
          </article>

          {/* Card 3 */}
          <article
            style={{
              backgroundColor: "#ffffff",
              borderLeft: "4px solid #8b5cf6",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            }}
          >
            <h3
              style={{
                fontSize: "1.1rem",
                fontWeight: "bold",
                margin: "0 0 10px 0",
                color: "#111827",
              }}
            >
              Industry Coverage
            </h3>
            <p style={{ fontSize: "0.9rem", color: "#4b5563", margin: 0 }}>
              Expertise in clinical medicine, public health, nutrition,
              functional foods, pharma regulatory submissions, AI and machine
              learning, and environmental risk assessment.
            </p>
          </article>

          {/* Card 4 */}
          <article
            style={{
              backgroundColor: "#ffffff",
              borderLeft: "4px solid #3b82f6",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            }}
          >
            <h3
              style={{
                fontSize: "1.1rem",
                fontWeight: "bold",
                margin: "0 0 10px 0",
                color: "#111827",
              }}
            >
              Publication Support
            </h3>
            <p style={{ fontSize: "0.9rem", color: "#4b5563", margin: 0 }}>
              <a
                href="/services/research-services/systematic-review"
                style={{ color: "#2563eb", textDecoration: "none" }}
              >
                High-impact journal submission support
              </a>
              ,{" "}
              <a
                href="/services/research-services/systematic-review"
                style={{ color: "#2563eb", textDecoration: "none" }}
              >
                systematic review journal formatting services
              </a>
              , and submission assistance to boost acceptance in high-impact
              journals.
            </p>
          </article>

          {/* Card 5 */}
          <article
            style={{
              backgroundColor: "#ffffff",
              borderLeft: "4px solid #f97316",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            }}
          >
            <h3
              style={{
                fontSize: "1.1rem",
                fontWeight: "bold",
                margin: "0 0 10px 0",
                color: "#111827",
              }}
            >
              Tailored Solutions
            </h3>
            <p style={{ fontSize: "0.9rem", color: "#4b5563", margin: 0 }}>
              Flexible scope, depth, and budget to match your research needs
              while maintaining methodological rigor and publication-ready
              quality.
            </p>
          </article>
        </div>
      </section>
    </section>
  );
};

export default SystematicReviewServiceOverview;
