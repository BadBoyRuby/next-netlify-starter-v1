import Script from "next/script";
import { useEffect, useState } from "react";

export default function Dashboard() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    function checkIdentity() {
      if (window.netlifyIdentity) {
        const currentUser = window.netlifyIdentity.currentUser();

        // Eğer kullanıcı login değilse ANA SAYFAYA AT
        if (!currentUser) {
          window.location.href = "/";
        } else {
          setUser(currentUser);
        }
      }
    }

    window.addEventListener("load", checkIdentity);

    return () => window.removeEventListener("load", checkIdentity);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />

      <h1>Dashboard</h1>

      {/* Kullanıcı bilgisi */}
      {user ? (
        <p>Hoşgeldin, <b>{user.email}</b></p>
      ) : (
        <p>Yükleniyor...</p>
      )}

      <hr style={{ margin: "20px 0" }} />

      <h2>Cognos Raporu Alanı</h2>
      <p>Buraya Cognos HTML embed gelecek.</p>

      <div
        id="report"
        style={{
          marginTop: "20px",
          padding: "15px",
          border: "1px solid #ddd",
          borderRadius: "5px",
          background: "#fafafa",
        }}
      >
        Cognos raporu buraya yüklenebilir.
      </div>
    </div>
  );
}
