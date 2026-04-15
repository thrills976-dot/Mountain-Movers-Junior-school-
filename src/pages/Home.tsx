import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, ShieldCheck, Users, BookOpen, Trophy, Heart, Music, Palette, Dumbbell, Code, CheckCircle2, FileText, Calendar, CreditCard, Phone, Mail, MapPin, Clock, Upload } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import { IMAGES } from "@/constants/images";
import About from "./About";
import Academics from "./Academics";
import Activities from "./Activities";
import Admissions from "./Admissions";

export default function Home() {
  const handleInquirySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const parentName = formData.get('parentName');
    const email = formData.get('email');
    const grade = formData.get('grade');
    const message = formData.get('message');

    const text = `*New Admission Inquiry*\n\n*Parent Name:* ${parentName}\n*Email:* ${email}\n*Grade:* ${grade}\n*Message:* ${message}`;
    const whatsappUrl = `https://wa.me/263786919470?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    const text = `*New Contact Message*\n\n*Name:* ${firstName} ${lastName}\n*Email:* ${email}\n*Subject:* ${subject}\n*Message:* ${message}`;
    const whatsappUrl = `https://wa.me/263786919470?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section id="home" className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-gradient-to-br from-muted via-white to-secondary/20">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 skew-x-12 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-secondary/10 rounded-tr-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-bold mb-6 tracking-wider uppercase shadow-sm">
              Enrollment Open for 2026
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1] text-primary">
              Empowering and <br />
              <span className="text-secondary drop-shadow-sm">Equipping Them Young.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed font-medium">
              Welcome to Mountain Movers Junior School. We are dedicated to nurturing young minds through quality education, strong values and a caring learning environment. Our goal is to help every child grow in knowledge, confidence and character so they can achieve it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-7 font-bold shadow-lg cursor-pointer" onClick={() => {
                const element = document.getElementById('admissions');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}>
                <span>Enroll Your Child Now</span>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 text-lg px-8 py-7 shadow-sm cursor-pointer" onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}>
                <span>Book a School Visit</span>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Full Sections Embedded */}
      <About isEmbedded={true} />
      <Academics isEmbedded={true} />
      <Activities isEmbedded={true} />
      <Admissions isEmbedded={true} />

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-8">Visit Our Campus</h2>
              <div className="space-y-6 mb-12">
                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-secondary shrink-0" />
                  <div>
                    <h4 className="font-bold text-primary">Location</h4>
                    <p className="text-muted-foreground">158 Herbert Chitepo, Mutare Zimbabwe</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-secondary shrink-0" />
                  <div>
                    <h4 className="font-bold text-primary">Call / WhatsApp</h4>
                    <p className="text-muted-foreground">078 691 9470</p>
                    <p className="text-muted-foreground">+263 78 691 9470</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="w-6 h-6 text-secondary shrink-0" />
                  <div>
                    <h4 className="font-bold text-primary">Email</h4>
                    <p className="text-muted-foreground">mountainmoversjuniorschools@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="h-[300px] rounded-2xl overflow-hidden border">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.123456789!2d32.666!3d-18.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a4e706b1713f%3A0x6c3f83027636f8!2sMutare%2C%20Zimbabwe!5e0!3m2!1sen!2sus!4v1712950000000!5m2!1sen!2sus" 
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl border">
              <h3 className="text-2xl font-bold text-primary mb-6">Send us a Message</h3>
              <form className="space-y-4" onSubmit={handleContactSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <input name="firstName" type="text" placeholder="First Name" required className="w-full border rounded-md px-4 py-2 outline-none focus:ring-1 focus:ring-primary bg-white" />
                  <input name="lastName" type="text" placeholder="Last Name" required className="w-full border rounded-md px-4 py-2 outline-none focus:ring-1 focus:ring-primary bg-white" />
                </div>
                <input name="email" type="email" placeholder="Email Address" required className="w-full border rounded-md px-4 py-2 outline-none focus:ring-1 focus:ring-primary bg-white" />
                <input name="subject" type="text" placeholder="Subject" required className="w-full border rounded-md px-4 py-2 outline-none focus:ring-1 focus:ring-primary bg-white" />
                <textarea name="message" placeholder="How can we help?" required className="w-full border rounded-md px-4 py-2 outline-none focus:ring-1 focus:ring-primary bg-white h-32"></textarea>
                <Button type="submit" className="w-full bg-primary text-white font-bold py-6">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">What Our Parents Say</h2>
            <div className="flex justify-center gap-1">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />)}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Mrs. Chipo Moyo",
                role: "Parent of Grade 4 Student",
                quote: "The transformation in my son's confidence and academic performance since joining Mountain Movers is remarkable. The teachers truly care."
              },
              {
                name: "Mr. David Zhou",
                role: "Parent of ECD B Student",
                quote: "I love the values-based approach. My daughter is not just learning to read, she's learning to be a kind and responsible individual."
              },
              {
                name: "Mrs. Sarah Tsvangirai",
                role: "Parent of Grade 7 Graduate",
                quote: "Mountain Movers prepared my son perfectly for high school. He entered his new school with a strong foundation and great discipline."
              }
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 italic text-slate-600 relative">
                <span className="text-6xl text-slate-100 absolute top-4 left-4 font-serif">"</span>
                <p className="relative z-10 mb-6 leading-relaxed">
                  {t.quote}
                </p>
                <div className="flex items-center gap-4 not-italic">
                  <div className="w-12 h-12 bg-slate-200 rounded-full" />
                  <div>
                    <div className="font-bold text-primary">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-secondary-foreground mb-8">
            Ready to give your child <br /> the best start?
          </h2>
          <p className="text-xl text-secondary-foreground/80 mb-12 max-w-2xl mx-auto">
            Limited spaces available for the upcoming term. Join the Mountain Movers family today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 text-xl px-10 py-8 font-bold">
              <a href="#admissions">Apply for Admission</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 text-xl px-10 py-8">
              <a href="#contact">Inquire Now</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
