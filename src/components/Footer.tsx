import Link from "next/link";
import type { Dictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";
import { contactInfo } from "@/data/contact";

const mono = { fontFamily: "var(--font-mono), ui-monospace, monospace" };

export default function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const home = `/${locale}`;
  return (
    <footer>
      <div className="container">
        <div className="footer-mega">DI<em>·</em>LIGHT</div>
        <div className="footer-cols" style={mono}>
          <div>
            <h6>{dict.footer.studio}</h6>
            <p className="studio-desc" style={{ fontFamily: "var(--font-display)" }}>
              {dict.footer.studioDesc}
            </p>
          </div>
          <div>
            <h6>{dict.footer.navigate}</h6>
            <Link href={`${home}#about`}>{dict.nav.about}</Link>
            <Link href={`${home}#process`}>{dict.nav.process}</Link>
            <Link href={`${home}#cases`}>{dict.nav.cases}</Link>
            <Link href={`${home}#services`}>{dict.nav.services}</Link>
          </div>
          <div>
            <h6>{dict.footer.connect}</h6>
            <a href={contactInfo.telegram} target="_blank" rel="noopener noreferrer">Telegram</a>
            <a href={contactInfo.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a href={contactInfo.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
          <div>
            <h6>{dict.footer.office}</h6>
            <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            <a href={`tel:${contactInfo.phone}`}>{contactInfo.phoneDisplay}</a>
            <span>RU / EN / UZ</span>
          </div>
        </div>
        <div className="footer-bottom" style={mono}>
          <span>© {new Date().getFullYear()} DILIGHT · ALMAZOV · {dict.footer.rights}</span>
          <span>{dict.footer.inspiring}</span>
        </div>
      </div>
    </footer>
  );
}
