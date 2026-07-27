"use client";

interface PackageItem {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  idealFor: string;
  includes: string[];
  turnaround: string;
  backgroundColor?: string;
  borderColor?: string;
}

interface PackagesProps {
  title: string;
  subtitle: string;
  description: string;
  packages: PackageItem[];
  buttonText?: string;
  onButtonClick?: () => void;
}

export default function CommonPackages({
  title,
  subtitle,
  description,
  packages,
  buttonText = "Get a Free Quote",
  onButtonClick,
}: PackagesProps) {
  return (
    <section
      style={{
        maxWidth: "1200px",
        margin: "60px auto",
        padding: "0 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Heading */}
      <h2
        style={{
          fontSize: "42px",
          fontWeight: 700,
          color: "#0b3a57",
          marginBottom: "10px",
        }}
      >
        {title}
      </h2>

      <h3
        style={{
          fontSize: "26px",
          fontWeight: 600,
          marginBottom: "20px",
          color: "#1b1b1b",
        }}
      >
        {subtitle}
      </h3>

      <p
        style={{
          fontSize: "18px",
          lineHeight: "32px",
          color: "#444",
          maxWidth: "1000px",
          marginBottom: "40px",
        }}
      >
        {description}
      </p>

      {/* Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "20px",
        }}
      >
        {packages.map((pkg, index) => (
          <div
            key={index}
            style={{
              background: pkg.backgroundColor || "#f5f5f5",
              border: `5px solid ${pkg.borderColor || "#ddd"}`,
              padding: "18px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Header */}
            <div
              style={{
                background: "#fff",
                padding: "14px",
                display: "flex",
                alignItems: "center",
                gap: "15px",
                marginBottom: "25px",
              }}
            >
              <img
                src={pkg.icon}
                alt={pkg.title}
                style={{
                  width: "55px",
                  height: "55px",
                  objectFit: "contain",
                }}
              />

              <div>
                <h3
                  style={{
                    margin: 0,
                    fontSize: "30px",
                    color: "#0b3a57",
                  }}
                >
                  {pkg.title}
                </h3>

                <p
                  style={{
                    margin: "5px 0 0",
                    fontSize: "17px",
                    color: "#444",
                  }}
                >
                  {pkg.subtitle}
                </p>
              </div>
            </div>

            {/* Description */}
            <p
              style={{
                fontSize: "17px",
                lineHeight: "30px",
                marginBottom: "25px",
              }}
            >
              {pkg.description}
            </p>

            {/* Ideal For */}
            <p
              style={{
                fontSize: "17px",
                lineHeight: "30px",
              }}
            >
              <strong>➜ Ideal For:</strong> {pkg.idealFor}
            </p>

            {/* Includes */}
            <div style={{ marginTop: "20px" }}>
              <h4
                style={{
                  fontSize: "20px",
                  marginBottom: "15px",
                }}
              >
                ➜ Includes:
              </h4>

              <ul
                style={{
                  paddingLeft: "22px",
                  margin: 0,
                }}
              >
                {pkg.includes.map((item, i) => (
                  <li
                    key={i}
                    style={{
                      fontSize: "17px",
                      lineHeight: "32px",
                      marginBottom: "8px",
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Turnaround */}
            <p
              style={{
                marginTop: "25px",
                fontSize: "17px",
                fontWeight: 600,
              }}
            >
              ➜ Turnaround: {pkg.turnaround}
            </p>
          </div>
        ))}
      </div>

      {/* Button */}
      <div
        style={{
          textAlign: "center",
          marginTop: "45px",
        }}
      >
        <button
          onClick={onButtonClick}
          style={{
            background: "#c70000",
            color: "#fff",
            border: "none",
            padding: "15px 40px",
            fontSize: "18px",
            borderRadius: "30px",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
}
