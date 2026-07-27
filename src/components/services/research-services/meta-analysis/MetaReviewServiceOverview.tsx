import React from "react";

const MetaReviewServiceOverview = () => {
  return (
   <section
  aria-labelledby="getting-started-title"
  style={{
    maxWidth: "980px",
    margin: "60px auto",
    padding: "0 20px",
    fontFamily: "Arial, sans-serif",
  }}
>
  <h2
    id="getting-started-title"
    style={{
      textAlign: "center",
      fontSize: "2rem",
      fontWeight: "700",
      color: "#153B44",
      marginBottom: "32px",
    }}
  >
    Getting Started With This Service Is Easy!
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      gap: "18px",
    }}
  >
    {/* Left Card */}
    <article
      style={{
        background: "#fff",
        borderLeft: "5px solid #facc15",
        borderRadius: "8px",
        padding: "22px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
      }}
    >
      <h3
        style={{
          margin: "0 0 18px",
          fontSize: "1.45rem",
          fontWeight: "700",
          color: "#1f2937",
        }}
      >
        What You Provide
      </h3>

      <ul
        style={{
          padding: 0,
          margin: 0,
          listStyle: "none",
        }}
      >
        {[
          "Variables extracted for meta-analysis—Ensure that all outcomes are comparable and all interventions and comparators are the same or at least similar enough.",
          "Number of tables and figures formatted as per journal guidelines.",
          "Sub-group analyses are expected.",
          "Conducting subgroup analysis.",
        ].map((item, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              alignItems: "flex-start",
              marginBottom: "14px",
              color: "#374151",
              lineHeight: "1.7",
              fontSize: "15px",
            }}
          >
            <span
              style={{
                color: "#ef4444",
                fontSize: "20px",
                marginRight: "10px",
                lineHeight: 1,
              }}
            >
              •
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>

    {/* Right Card */}
    <article
      style={{
        background: "#fff",
        borderLeft: "5px solid #8b5cf6",
        borderRadius: "8px",
        padding: "22px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
      }}
    >
      <h3
        style={{
          margin: "0 0 18px",
          fontSize: "1.45rem",
          fontWeight: "700",
          color: "#1f2937",
        }}
      >
        What We Provide
      </h3>

      <ul
        style={{
          padding: 0,
          margin: 0,
          listStyle: "none",
        }}
      >
        {[
          "Conducting a meta-analysis based on the variables provided.",
          "Formatting tables and figures according to the specific journal's guidelines.",
          "Conducting subgroup analysis.",
        ].map((item, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              alignItems: "flex-start",
              marginBottom: "14px",
              color: "#374151",
              lineHeight: "1.7",
              fontSize: "15px",
            }}
          >
            <span
              style={{
                color: "#ef4444",
                fontSize: "20px",
                marginRight: "10px",
                lineHeight: 1,
              }}
            >
              •
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  </div>
</section>
  );
};

export default MetaReviewServiceOverview;
