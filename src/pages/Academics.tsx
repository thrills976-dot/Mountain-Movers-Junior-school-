import { motion } from "motion/react";
import { BookOpen, Brain, Palette, Calculator, Languages, Globe } from "lucide-react";
import { IMAGES } from "@/constants/images";

export default function Academics({ isEmbedded = false }: { isEmbedded?: boolean }) {
  return (
    <div className={isEmbedded ? "py-24 bg-slate-50" : "pt-32 pb-24"} id={isEmbedded ? "academics" : undefined}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold text-primary mb-6">Academic Excellence</h1>
          <p className="text-xl text-muted-foreground">
            We offer a comprehensive curriculum that balances traditional subjects with modern skills, 
            ensuring our students are prepared for the challenges of the 21st century.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            {
              title: "ECD A & B",
              age: "Ages 3-5",
              focus: "Socialization, motor skills, and basic literacy through play-based learning.",
              subjects: ["Creative Arts", "Physical Education", "Early Literacy", "Numeracy"]
            },
            {
              title: "Junior Primary",
              age: "Grades 1-3",
              focus: "Building strong foundations in core subjects and developing study habits.",
              subjects: ["English", "Mathematics", "Science", "Shona/Ndebele", "ICT"]
            },
            {
              title: "Senior Primary",
              age: "Grades 4-7",
              focus: "Advanced concepts, critical thinking, and preparation for national exams.",
              subjects: ["Social Studies", "Agriculture", "Heritage Studies", "Advanced Math", "English Literature"]
            }
          ].map((level, i) => (
            <div key={i} className="bg-white border rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-secondary font-bold mb-2">{level.age}</div>
              <h3 className="text-2xl font-bold text-primary mb-4">{level.title}</h3>
              <p className="text-muted-foreground mb-6">{level.focus}</p>
              <div className="space-y-2">
                <h4 className="font-bold text-sm uppercase tracking-wider text-slate-400">Key Subjects</h4>
                <ul className="grid grid-cols-1 gap-1">
                  {level.subjects.map((s, j) => (
                    <li key={j} className="text-sm flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary" /> {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-primary text-white rounded-3xl p-12 overflow-hidden relative">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Teaching Philosophy</h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                We believe in a student-centered approach where teachers act as facilitators of discovery. 
                Our classrooms are vibrant spaces of inquiry, collaboration, and critical thinking.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex gap-3">
                  <Brain className="w-6 h-6 text-secondary" />
                  <span>Critical Thinking</span>
                </div>
                <div className="flex gap-3">
                  <Globe className="w-6 h-6 text-secondary" />
                  <span>Global Perspective</span>
                </div>
                <div className="flex gap-3">
                  <Calculator className="w-6 h-6 text-secondary" />
                  <span>Problem Solving</span>
                </div>
                <div className="flex gap-3">
                  <Palette className="w-6 h-6 text-secondary" />
                  <span>Creativity</span>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <img src={IMAGES.ACADEMICS_PHILOSOPHY} alt="Learning" className="rounded-xl shadow-2xl" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
