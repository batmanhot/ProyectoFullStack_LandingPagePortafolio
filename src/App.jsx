import { useEffect, lazy, Suspense } from "react";
import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import CTAFinal from "./components/sections/CTAFinal";
import Footer from "./components/sections/Footer";
import WhatsAppFloat from "./components/ui/WhatsAppFloat";
import { initAnalytics } from "./hooks/useAnalytics";

// Code-splitting: 199 KiB de los 375 KiB del bundle no se usaban en la
// carga inicial (detectado con Lighthouse mobile, LCP 3.2s > meta de 2.5s
// del DOC-A). Header/Hero/CTAFinal/Footer no dependen de framer-motion y
// quedan en el bundle principal; el resto —incluyendo el propio
// framer-motion, que solo usan estas secciones— carga en paralelo sin
// bloquear el primer paint.
const SobreMi = lazy(() => import("./components/sections/SobreMi"));
const Proyectos = lazy(() => import("./components/sections/Proyectos"));
const Stack = lazy(() => import("./components/sections/Stack"));
const PruebaSocial = lazy(() => import("./components/sections/PruebaSocial"));
const FAQ = lazy(() => import("./components/sections/FAQ"));

// Orden exacto de la Sección B del DOC-A (arquitectura Híbrida, MVP).
function App() {
  useEffect(() => {
    initAnalytics();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <SobreMi />
          <Proyectos />
          <Stack />
          <PruebaSocial />
          <FAQ />
        </Suspense>
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

export default App;
