import { motion } from "motion/react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    const text = `*New Contact Message*\n\n*Name:* ${name}\n*Email:* ${email}\n*Subject:* ${subject}\n*Message:* ${message}`;
    const whatsappUrl = `https://wa.me/263786919470?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold text-primary mb-6">Get in Touch</h1>
          <p className="text-xl text-muted-foreground">
            Have questions? We're here to help. Reach out to us via any of the channels below 
            or visit our campus in Mutare.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-primary">Call Us</h3>
                <p className="text-muted-foreground">078 691 9470</p>
                <p className="text-muted-foreground">+263 78 691 9470 (WhatsApp)</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-primary">Email Us</h3>
                <p className="text-muted-foreground">mountainmoversjuniorschools@gmail.com</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-primary">Visit Us</h3>
                <p className="text-muted-foreground">158 Herbert Chitepo, Mutare Zimbabwe</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-primary">Office Hours</h3>
                <p className="text-muted-foreground">Mon - Fri: 7:30 AM - 4:30 PM</p>
                <p className="text-muted-foreground">Sat: 8:00 AM - 12:00 PM</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 bg-white border rounded-3xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-primary mb-6">Send a Message</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-sm font-medium">Your Name</label>
                <input name="name" type="text" required className="w-full border rounded-md px-4 py-2 focus:ring-1 focus:ring-primary outline-none" placeholder="Full Name" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email Address</label>
                <input name="email" type="email" required className="w-full border rounded-md px-4 py-2 focus:ring-1 focus:ring-primary outline-none" placeholder="email@example.com" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium">Subject</label>
                <input name="subject" type="text" required className="w-full border rounded-md px-4 py-2 focus:ring-1 focus:ring-primary outline-none" placeholder="How can we help?" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium">Message</label>
                <textarea name="message" required className="w-full border rounded-md px-4 py-2 focus:ring-1 focus:ring-primary outline-none h-40" placeholder="Your message..."></textarea>
              </div>
              <div className="md:col-span-2">
                <Button type="submit" className="w-full bg-primary text-white py-6 text-lg font-bold">Send Message</Button>
              </div>
            </form>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="w-full h-[400px] bg-slate-200 rounded-3xl overflow-hidden relative">
          <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-bold text-xl">
            Google Maps Embed Placeholder
          </div>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121511.03647671077!2d31.033162!3d-17.824858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a4e706b1713f%3A0x6c3f83027636f8!2sHarare%2C%20Zimbabwe!5e0!3m2!1sen!2sus!4v1712950000000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
