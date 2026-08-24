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
const Problemas = lazy(() => import("./components/sections/Problemas"));
const Metodologia = lazy(() => import("./components/sections/Metodologia"));
const SobreMi = lazy(() => import("./components/sections/SobreMi"));
const Experiencia = lazy(() => import("./components/sections/Experiencia"));
const Proyectos = lazy(() => import("./components/sections/Proyectos"));
const Stack = lazy(() => import("./components/sections/Stack"));
const AIEngineering = lazy(() => import("./components/sections/AIEngineering"));
const PruebaSocial = lazy(() => import("./components/sections/PruebaSocial"));
const FAQ = lazy(() => import("./components/sections/FAQ"));

// Orden actualizado según la Sección 32 del spec V2 ("cada sección responde
// una pregunta del visitante"): Hero (¿qué haces?) → Problemas (¿resuelves
// algo como lo mío?) → Método (¿cómo trabajas?) → Sobre mí (¿por qué
// confiar en ti?) → Experiencia → Casos de estudio (¿qué has construido?)
// → Stack (¿con qué?) → IA (¿cómo trabajas hoy?) → Autoridad → FAQ → CTA.
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
          <Problemas />
          <Metodologia />
          <SobreMi />
          <Experiencia />
          <Proyectos />
          <Stack />
          <AIEngineering />
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
