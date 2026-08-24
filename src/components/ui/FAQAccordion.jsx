import { useState } from "react";
import { ChevronDown } from "lucide-react";

// C-04 — Acordeón de FAQ. Navegable por teclado (button + aria-expanded),
// sin dependencia de un primitivo completo (Radix) por la baja complejidad.

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="divide-y divide-fg-muted/20">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left text-fg"
              >
                <span className="font-heading text-lg font-semibold">
                  {item.question}
                </span>
                <ChevronDown
                  size={20}
                  aria-hidden="true"
                  className={`shrink-0 text-accent transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              className={`overflow-hidden transition-all duration-200 ${
                isOpen ? "max-h-96 pb-5" : "max-h-0"
              }`}
            >
              <p className="text-fg-muted">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
