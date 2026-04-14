import './globals.css';

export const metadata = {
  title: 'Ares Gym | Elite Fitness',
  description: 'Ares Gym - Entrenamiento de alto rendimiento y fuerza.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/assets/logo.jpeg" type="image/jpeg" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"/>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
