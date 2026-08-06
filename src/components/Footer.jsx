import { useState } from 'react';
import { FiFacebook, FiInstagram, FiLinkedin, FiMail, FiMapPin, FiPhone, FiYoutube } from 'react-icons/fi';

const columns = {
  About: ['Our Story', 'Faculty', 'Centres', 'Selections'],
  Courses: ['Foundation', 'Test Series', 'Interview Prep', 'Revision Batches'],
  Resources: ['Daily Quiz', 'Judgement Notes', 'Exam Calendar', 'Blog'],
  Support: ['FAQ', 'Help Center', 'Contact Us', 'Student Support'],
};

const socials = [FiFacebook, FiInstagram, FiLinkedin, FiYoutube];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = /.+@.+\..+/.test(email.trim());
    setMessage(isValid ? 'Thanks. You will receive updates from Judiciary Gold.' : 'Enter a valid email address to subscribe.');
  };

  return (
    <footer id="contact" className="content-auto px-4 pb-8 pt-10 sm:px-6 lg:px-8 lg:pt-16">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-6 shadow-luxe sm:p-10 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/20 bg-gold/10 text-sm font-bold tracking-[0.32em] text-gold">
                JG
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.5em] text-white/45">Premium Judiciary</p>
                <p className="text-lg font-semibold text-white">Judiciary Gold</p>
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/65">
              Judiciary Gold is a premium coaching concept focused on disciplined preparation, legal clarity, and confident selection outcomes for serious aspirants.
            </p>

            <div className="mt-6 space-y-3 text-sm text-white/65">
              <div className="flex items-center gap-3"><FiPhone className="text-gold" /> +91 98765 43210</div>
              <div className="flex items-center gap-3"><FiMail className="text-gold" /> admissions@judiciarygold.com</div>
              <div className="flex items-center gap-3"><FiMapPin className="text-gold" /> New Delhi, India</div>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-5">
            {Object.entries(columns).map(([title, items]) => (
              <div key={title}>
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-gold/80">{title}</h3>
                <div className="mt-5 space-y-3">
                  {items.map((item) => (
                    <a key={item} href="#contact" className="block text-sm text-white/65 transition hover:text-gold">
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            ))}

            <div className="sm:col-span-2 xl:col-span-1">
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-gold/80">Newsletter</h3>
              <p className="mt-5 text-sm leading-7 text-white/65">Get selection updates, exam alerts, and revision reminders in your inbox.</p>
              <form className="mt-5 space-y-3" onSubmit={handleSubmit} noValidate>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter your email"
                  aria-label="Newsletter email"
                  className="w-full rounded-full border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-gold/40 focus:ring-2 focus:ring-gold/20"
                />
                <button
                  type="submit"
                  className="w-full rounded-full bg-gold px-4 py-3 text-sm font-semibold text-black transition hover:bg-[#d7b451] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  Subscribe
                </button>
                {message ? <p className="text-sm text-white/65">{message}</p> : null}
              </form>

              <div className="mt-6 flex items-center gap-3 text-white/60">
                {socials.map((Icon, socialIndex) => (
                  <button
                    key={Icon.displayName || Icon.name}
                    type="button"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-gold/30 hover:text-gold"
                    aria-label={`Footer social profile ${socialIndex + 1}`}
                  >
                    <Icon size={16} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/8 pt-6 text-center text-sm text-white/50">
          Concept Website Mockup created for UI/UX Assessment purposes.
        </div>
      </div>
    </footer>
  );
}