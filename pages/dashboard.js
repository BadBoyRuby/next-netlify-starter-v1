import Script from "next/script";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (window.netlifyIdentity) {
      const currentUser = window.netlifyIdentity.currentUser();
      if (!currentUser) {
        window.location.href = "/";
      } else {
        setUser(currentUser);
      }
    }
  }, []);

  return (
    <div>
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      <h1>Dashboard</h1>
      {user && (
        <p>Hoşgeldin: {user.email}</p>
      )}

      <div id="report">
        {/* Cognos raporu burada görünecek */}
      </div>
    </div>
  );
}
