import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export function Topbar() {
  return (
    <div className="bg-zinc-900 text-zinc-300 text-xs py-2 hidden md:block">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex space-x-6">
          <a href="tel:+1234567890" className="flex items-center hover:text-white transition-colors">
            <Phone className="w-3 h-3 mr-2" />
            +1 (234) 567-890
          </a>
          <a href="mailto:contact@company.com" className="flex items-center hover:text-white transition-colors">
            <Mail className="w-3 h-3 mr-2" />
            contact@company.com
          </a>
          <span className="flex items-center">
            <MapPin className="w-3 h-3 mr-2" />
            123 Corporate Blvd, NY 10001
          </span>
        </div>
        <div className="flex space-x-4">
          <Link href="#" className="hover:text-white transition-colors"><Facebook className="w-3.5 h-3.5" /></Link>
          <Link href="#" className="hover:text-white transition-colors"><Twitter className="w-3.5 h-3.5" /></Link>
          <Link href="#" className="hover:text-white transition-colors"><Instagram className="w-3.5 h-3.5" /></Link>
          <Link href="#" className="hover:text-white transition-colors"><Linkedin className="w-3.5 h-3.5" /></Link>
        </div>
      </div>
    </div>
  );
}
