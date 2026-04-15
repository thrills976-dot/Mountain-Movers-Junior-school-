import { motion } from "motion/react";
import { IMAGES } from "@/constants/images";

export default function About({ isEmbedded = false }: { isEmbedded?: boolean }) {
  return (
    <div className={isEmbedded ? "py-24" : "pt-32 pb-24"} id={isEmbedded ? "about" : undefined}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl font-bold text-primary mb-8">Empowering and Equipping Them Young</h1>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
            <p className="text-xl leading-relaxed">
              Welcome to Mountain Movers Junior School. We are dedicated to nurturing young minds through quality education, strong values and a caring learning environment. Our goal is to help every child grow in knowledge, confidence and character so they can achieve it.
            </p>
            <p className="leading-relaxed">
              Founded with a clear vision to create a learning environment that combines academic excellence with strong moral character, Mountain Movers Junior School is located in the heart of Harare. We have grown from a small community initiative into a leading primary school, committed to the holistic development of every student.
            </p>

            <div className="my-12 rounded-3xl overflow-hidden shadow-xl">
              <img src={IMAGES.ABOUT_STORY} alt="Our School" className="w-full h-[400px] object-cover" referrerPolicy="no-referrer" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-12">
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
                <p>To provide a holistic, high-quality education that empowers students to move mountains in their lives and communities through faith, discipline, and excellence.</p>
              </div>
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
                <p>To be the premier junior school in Zimbabwe, recognized for producing well-rounded, ethical, and academically outstanding leaders.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Our Core Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Discipline", desc: "Self-control and respect for rules and others." },
                { title: "Excellence", desc: "Striving for the highest standards in all we do." },
                { title: "Integrity", desc: "Honesty and strong moral principles." },
                { title: "Faith", desc: "A foundation of spiritual growth and purpose." },
              ].map((v, i) => (
                <div key={i} className="text-center p-6 border rounded-xl hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-secondary text-xl mb-2">{v.title}</h4>
                  <p className="text-sm">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
