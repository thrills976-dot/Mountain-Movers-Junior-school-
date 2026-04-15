import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { IMAGES } from "@/constants/images";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* School Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src={IMAGES.LOGO} 
                alt="School Logo" 
                className="w-12 h-12 object-contain rounded-lg"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
                referrerPolicy="no-referrer"
              />
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl hidden">
                M
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl leading-none text-white">
                  MOUNTAIN MOVERS
                </span>
                <span className="text-[10px] tracking-[0.2em] font-medium text-slate-400">
                  JUNIOR SCHOOL
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Empowering the next generation of leaders through excellence in education, 
              character building, and spiritual growth. Join our community of excellence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#about" className="hover:text-secondary transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3" /> About Our School</a></li>
              <li><a href="#academics" className="hover:text-secondary transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Academic Programs</a></li>
              <li><a href="#activities" className="hover:text-secondary transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Co-Curricular</a></li>
              <li><a href="#admissions" className="hover:text-secondary transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Admissions Process</a></li>
              <li><Link to="/gallery" className="hover:text-secondary transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3" /> School Gallery</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0" />
                <span>158 Herbert Chitepo, Mutare Zimbabwe</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <span>078 691 9470<br />+263 78 691 9470 (WhatsApp)</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <span>mountainmoversjuniorschools@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Stay Updated</h4>
            <p className="text-sm text-slate-400 mb-4">
              Subscribe to our newsletter for the latest school news and events.
            </p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-slate-900 border-slate-800 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-secondary"
              />
              <button className="w-full bg-primary text-white py-2 rounded-md text-sm font-bold hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {currentYear} Mountain Movers Junior School. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
