import { CalendarDays, ChevronRight } from "lucide-react";

const languages = [
  { lang: "en", text: "We speak English" },
  { lang: "hi", text: "हम हिंदी बोलते हैं" },
  { lang: "pa", text: "ਅਸੀਂ ਪੰਜਾਬੀ ਬੋਲਦੇ ਹਾਂ" },
  { lang: "ur", text: "ہم اردو بولتے ہیں", dir: "rtl" },
  { lang: "pl", text: "mówimy po polsku" },
  { lang: "fa", text: "ما فارسی صحبت می‌کنیم", dir: "rtl" },
  { lang: "ro", text: "Vorbim românește" },
  { lang: "ar", text: "نحن نتكلم العربية", dir: "rtl" },
];

export default function LanguageBar() {
  return (
    <div className="clinic-utility">
      <div className="clinic-container clinic-utility-inner">
        <div className="clinic-languages" role="region" aria-label="Languages spoken at the clinic. Pause scrolling by hovering or focusing this banner." tabIndex={0}>
          <div className="clinic-language-track">
            {[0, 1].map((copy) => (
              <div className="clinic-language-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
                {languages.map(({ lang, text, dir }) => (
                  <span className="clinic-language-item" key={lang}><span lang={lang} dir={dir}>{text}</span><span className="clinic-language-dot" aria-hidden="true">•</span></span>
                ))}
              </div>
            ))}
          </div>
        </div>
        <a href="/#contact" className="clinic-availability">
          <CalendarDays size={16} aria-hidden="true" />
          <strong>Evening & weekend appointments available</strong>
          <span className="clinic-availability-link">Find your appointment <ChevronRight size={14} aria-hidden="true" /></span>
        </a>
      </div>
    </div>
  );
}
