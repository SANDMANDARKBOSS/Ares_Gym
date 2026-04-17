import './globals.css';

export const metadata = {
  metadataBase: new URL('https://ares-gym-k1f1.vercel.app'), // Actualizado a tu dominio real de Vercel
  title: 'Ares Gym | El Mejor Gimnasio de Entrenamiento de Fuerza en Pichincha',
  description: 'Ares Gym: Entrenamiento de élite y alto rendimiento. Equipamiento profesional para hipertrofia, potencia y recomposición corporal con asesoría experta 24/7.',
  keywords: ['Gimnasio en Pichincha', 'Entrenamiento de fuerza', 'Culturismo', 'Ares Gym', 'Gimnasio Elite', 'Asesoría deportiva Ecuador'],
  openGraph: {
    title: 'Ares Gym | Elite Fitness & Strength',
    description: 'Domina tu destino con el mejor equipamiento de fuerza profesional.',
    url: 'https://ares-gym-k1f1.vercel.app',
    siteName: 'Ares Gym',
    images: [
      {
        url: '/assets/logo.jpeg',
        width: 800,
        height: 800,
        alt: 'Ares Gym Logo',
      },
    ],
    locale: 'es_EC',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ares Gym | Elite Fitness',
    description: 'Entrenamiento de alto rendimiento en Pichincha.',
    images: ['/assets/logo.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Gym",
    "name": "Ares Gym",
    "image": "/assets/logo.jpeg",
    "@id": "https://aresgym.com",
    "url": "https://aresgym.com",
    "telephone": "+593998191554",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Tu Dirección Exacta",
      "addressLocality": "Quito",
      "addressRegion": "Pichincha",
      "postalCode": "170150",
      "addressCountry": "EC"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -0.180653, // Coordenadas aproximadas de Quito
      "longitude": -78.467834
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "06:00",
      "closes": "22:00"
    },
    "sameAs": [
      "https://facebook.com/aresgym",
      "https://instagram.com/aresgym"
    ]
  };

  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/assets/logo.jpeg" type="image/jpeg" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"/>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
