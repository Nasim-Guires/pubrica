import React from "react";

const MetaAnalysisPackagesSection = () => {
  return (
    <section
      style={{
        maxWidth: "1100px",
        margin: "60px auto",
        padding: "0 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2
        style={{
          fontSize: "2.2rem",
          fontWeight: "700",
          color: "#163D44",
          marginBottom: "10px",
        }}
      >
        Meta Analysis Service – Our Packages
      </h2>

      <h3
        style={{
          fontSize: "1.3rem",
          color: "#163D44",
          marginBottom: "20px",
          fontWeight: 600,
        }}
      >
        Tailored Solutions to Fit Your Research Needs and Budget
      </h3>

      <p
        style={{
          fontSize: "16px",
          color: "#374151",
          lineHeight: 1.8,
          marginBottom: "35px",
          maxWidth: "950px",
        }}
      >
        At Pubrica, we offer flexible and customizable meta-analysis service
        packages to support researchers at various stages of their academic or
        clinical projects. Whether you're looking for end-to-end meta-analysis
        support or targeted assistance with specific tasks, we have a package
        for you.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "18px",
        }}
      >
        {/* BASIC */}
        <div
          style={{
            background: "#D7E1E4",
            padding: "18px",
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "15px",
              display: "flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <div
              style={{
                width: 58,
                height: 58,
                borderRadius: "50%",
                background: "#F8D57A",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: 34,
                fontWeight: 700,
              }}
            >
              B
            </div>

            <div>
              <h3 style={{ margin: 0, color: "#1F4B60" }}>Basic</h3>
              <small>Starter Support</small>
            </div>
          </div>

          <p style={{ marginTop: 25, lineHeight: 1.7 }}>
            Perfect for early-stage researchers who need guidance on structure
            and strategy.
          </p>

          <p>
            <strong>➜ Ideal For:</strong> Pilot studies, thesis work, academic
            assignments
          </p>

          <h4>➜ Includes:</h4>

          <ul style={{ lineHeight: 2 }}>
            <li>Comprehensive literature search (2–3 databases)</li>
            <li>Data extraction & tabulation</li>
            <li>Fixed/random effects model analysis</li>
            <li>Basic forest plot generation</li>
            <li>Summary statistics and interpretation</li>
          </ul>

          <p>
            <strong>➜ Turnaround:</strong> 2–3 weeks
          </p>
        </div>

        {/* STANDARD */}
        <div
          style={{
            background: "#DAB9E0",
            padding: "18px",
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "15px",
              display: "flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <div
              style={{
                width: 58,
                height: 58,
                borderRadius: "50%",
                background: "#F8D57A",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: 34,
                fontWeight: 700,
              }}
            >
              S
            </div>

            <div>
              <h3 style={{ margin: 0, color: "#7A44A8" }}>Standard</h3>
              <small>Complete Meta-Analysis</small>
            </div>
          </div>

          <p style={{ marginTop: 25, lineHeight: 1.7 }}>
            Our most popular option for researchers preparing for publication.
          </p>

          <p>
            <strong>➜ Ideal For:</strong> Journal submission, postgraduate
            research, grant-funded studies
          </p>

          <h4>➜ Includes:</h4>

          <ul style={{ lineHeight: 2 }}>
            <li>Comprehensive database search (5+ sources)</li>
            <li>Risk of bias assessment</li>
            <li>Meta-analysis using RevMan/STATA</li>
            <li>Forest & funnel plots</li>
            <li>Drafting of manuscript</li>
            <li>Formatting as per journal guidelines</li>
          </ul>

          <p>
            <strong>➜ Turnaround:</strong> 3–4 weeks
          </p>
        </div>

        {/* PREMIUM */}
        <div
          style={{
            background: "#D8BC83",
            padding: "18px",
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "15px",
              display: "flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <div
              style={{
                width: 58,
                height: 58,
                borderRadius: "50%",
                background: "#F8D57A",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: 34,
                fontWeight: 700,
              }}
            >
              P
            </div>

            <div>
              <h3 style={{ margin: 0, color: "#7A4D0B" }}>Premium</h3>
              <small>Publication-Ready Support</small>
            </div>
          </div>

          <p style={{ marginTop: 25, lineHeight: 1.7 }}>
            Comprehensive support with high-impact journal targeting and
            publication assistance.
          </p>

          <p>
            <strong>➜ Ideal For:</strong> Faculty, clinicians and funded
            projects aiming for top-tier journals.
          </p>

          <h4>➜ Includes:</h4>

          <ul style={{ lineHeight: 2 }}>
            <li>End-to-end protocol & manuscript writing</li>
            <li>Advanced statistical modelling</li>
            <li>Journal formatting & referencing</li>
            <li>GRADE evidence profiles</li>
            <li>Journal submission support</li>
          </ul>

          <p>
            <strong>➜ Turnaround:</strong> 4–6 weeks
          </p>
        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "30px",
        }}
      >
        <button
          style={{
            background: "#C70000",
            color: "#fff",
            border: "none",
            padding: "15px 42px",
            borderRadius: "999px",
            fontSize: "16px",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Get a Free Quote
        </button>
      </div>
    </section>
  );
};

export default MetaAnalysisPackagesSection;
