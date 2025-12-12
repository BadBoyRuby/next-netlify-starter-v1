import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("login", () => {
        window.location.href = "/dashboard";
      });
    }
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Customer Portal</title>
      </Head>

      {/* Netlify Identity */}
      <Script
        src="https://identity.netlify.com/v1/netlify-identity-widget.js"
        onLoad={() => {
          if (window.netlifyIdentity) {
            window.netlifyIdentity.init();
          }
        }}
      />

      {/* HERO */}
      <section className="hero">
        <h1>Customer Portal</h1>
        <p>Secure access to your reports, insights and services.</p>
      </section>

      {/* LOGIN CARD */}
      <section className="center">
        <div className="card" style={{ maxWidth: 420, width: "100%" }}>
          <h2 style={{ marginTop: 0 }}>Sign in</h2>
          <p style={{ opacity: 0.7 }}>
            Please sign in to access your personalized dashboard.
          </p>

          <div style={{ marginTop: 30 }}>
            <button
              style={{ width: "100%" }}
              onClick={() => window.netlifyIdentity.open("login")}
            >
              Login
            </button>

            <button
              style={{
                width: "100%",
                marginTop: 12,
                background: "transparent",
                color: "#003B6F",
                border: "2px solid #003B6F",
              }}
              onClick={() => window.netlifyIdentity.open("signup")}
            >
              Create Account
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
