import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Script from 'next/script'
import { useEffect } from 'react'

export default function Home() {
  
  useEffect(() => {
    if (typeof window !== 'undefined' && window.netlifyIdentity) {
      window.netlifyIdentity.on('login', user => {
        window.location.href = "/dashboard"
      })
    }
  }, [])

  return (
    <div className="container">
      <Head>
        <title>Next.js Customer Portal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Netlify Identity Script */}
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />

      <main>
        <Header title="Customer Portal'a Hoşgeldiniz" />
        
        <p className="description">
          Giriş yapmak için aşağıdaki butonları kullanabilirsiniz:
        </p>

        <div style={{ marginTop: 20 }}>
          <button onClick={() => window.netlifyIdentity.open('login')}>
            Giriş Yap
          </button>

          <button 
            style={{ marginLeft: 10 }}
            onClick={() => window.netlifyIdentity.open('signup')}
          >
            Kayıt Ol
          </button>
        </div>
      </main>

      <Footer />
    </div>
  )
}
