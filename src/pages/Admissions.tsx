import { motion } from "motion/react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, FileText, Calendar, CreditCard } from "lucide-react";

export default function Admissions({ isEmbedded = false }: { isEmbedded?: boolean }) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const parentName = formData.get('parentName');
    const phone = formData.get('phone');
    const email = formData.get('email');
    const childName = formData.get('childName');
    const grade = formData.get('grade');
    const message = formData.get('message');

    const text = `*New Admission Inquiry*\n\n*Parent Name:* ${parentName}\n*Phone:* ${phone}\n*Email:* ${email}\n*Child's Name:* ${childName}\n*Grade:* ${grade}\n*Message:* ${message}`;
    const whatsappUrl = `https://wa.me/263786919470?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className={isEmbedded ? "py-24 bg-slate-50" : "pt-32 pb-24"} id={isEmbedded ? "admissions" : undefined}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold text-primary mb-6">Join Our Community</h1>
          <p className="text-xl text-muted-foreground">
            We are excited to welcome new families to Mountain Movers. 
            Follow our simple step-by-step process to enroll your child.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <h2 className="text-3xl font-bold text-primary">Admission Process</h2>
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Inquiry & Visit",
                  desc: "Contact our admissions office or book a school visit to see our facilities and meet our team.",
                  icon: <Calendar className="w-6 h-6" />
                },
                {
                  step: "02",
                  title: "Application",
                  desc: "Complete the application form and submit it along with the required documents and application fee.",
                  icon: <FileText className="w-6 h-6" />
                },
                {
                  step: "03",
                  title: "Assessment",
                  desc: "Prospective students will undergo a friendly assessment to determine their current level and needs.",
                  icon: <CheckCircle2 className="w-6 h-6" />
                },
                {
                  step: "04",
                  title: "Enrollment",
                  desc: "Upon acceptance, pay the enrollment fee to secure your child's place in our school.",
                  icon: <CreditCard className="w-6 h-6" />
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2 flex items-center gap-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 bg-secondary/10 rounded-2xl border border-secondary/20">
              <h3 className="text-xl font-bold text-primary mb-4">Required Documents</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-secondary" /> Certified Birth Certificate</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-secondary" /> Latest School Report (if applicable)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-secondary" /> Immunization Record</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-secondary" /> Parents' ID/Passport Copies</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-secondary" /> 2 Passport-sized Photos</li>
              </ul>
            </div>
          </div>

          <div className="bg-white border rounded-3xl p-8 shadow-xl sticky top-32">
            <h2 className="text-2xl font-bold text-primary mb-6">Admission Inquiry</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Parent Name</label>
                  <input name="parentName" type="text" required className="w-full border rounded-md px-4 py-2 focus:ring-1 focus:ring-primary outline-none" placeholder="Full Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone Number</label>
                  <input name="phone" type="tel" required className="w-full border rounded-md px-4 py-2 focus:ring-1 focus:ring-primary outline-none" placeholder="+263..." />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email Address</label>
                <input name="email" type="email" required className="w-full border rounded-md px-4 py-2 focus:ring-1 focus:ring-primary outline-none" placeholder="email@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Child's Name</label>
                <input name="childName" type="text" required className="w-full border rounded-md px-4 py-2 focus:ring-1 focus:ring-primary outline-none" placeholder="Child's Full Name" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Grade of Interest</label>
                <select name="grade" required className="w-full border rounded-md px-4 py-2 focus:ring-1 focus:ring-primary outline-none bg-white">
                  <option value="">Select Grade</option>
                  <option value="ECD A">ECD A</option>
                  <option value="ECD B">ECD B</option>
                  <option value="Grade 1">Grade 1</option>
                  <option value="Grade 2">Grade 2</option>
                  <option value="Grade 3">Grade 3</option>
                  <option value="Grade 4">Grade 4</option>
                  <option value="Grade 5">Grade 5</option>
                  <option value="Grade 6">Grade 6</option>
                  <option value="Grade 7">Grade 7</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Message / Questions</label>
                <textarea name="message" required className="w-full border rounded-md px-4 py-2 focus:ring-1 focus:ring-primary outline-none h-32" placeholder="Tell us more about your child..."></textarea>
              </div>
              <Button type="submit" className="w-full bg-primary text-white py-6 text-lg font-bold">Submit Inquiry</Button>
              <p className="text-[10px] text-center text-muted-foreground mt-4">
                By submitting this form, you agree to our privacy policy and consent to being contacted regarding admissions.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
