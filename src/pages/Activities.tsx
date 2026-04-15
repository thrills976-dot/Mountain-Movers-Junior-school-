import { motion } from "motion/react";
import { Trophy, Music, Palette, Users, Dumbbell, Code } from "lucide-react";

export default function Activities({ isEmbedded = false }: { isEmbedded?: boolean }) {
  return (
    <div className={isEmbedded ? "py-24" : "pt-32 pb-24"} id={isEmbedded ? "activities" : undefined}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold text-primary mb-6">Beyond the Classroom</h1>
          <p className="text-xl text-muted-foreground">
            We believe in holistic development. Our wide range of co-curricular activities 
            allows students to discover their passions and develop new skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Dumbbell className="w-10 h-10" />,
              title: "Sports & Athletics",
              activities: ["Swimming", "Athletics", "Soccer", "Tennis", "Cricket", "Netball"]
            },
            {
              icon: <Music className="w-10 h-10" />,
              title: "Arts & Culture",
              activities: ["Choir", "Traditional Dance", "Drama", "Piano Lessons", "Art & Craft"]
            },
            {
              icon: <Code className="w-10 h-10" />,
              title: "Clubs & Societies",
              activities: ["Coding Club", "Chess Club", "Debate Society", "Environmental Club", "Quiz Club"]
            },
            {
              icon: <Users className="w-10 h-10" />,
              title: "Leadership",
              activities: ["Prefects Council", "Junior Parliament", "Community Service", "Public Speaking"]
            },
            {
              icon: <Trophy className="w-10 h-10" />,
              title: "Competitions",
              activities: ["Inter-School Sports", "Eisteddfod", "Math Olympiad", "Spelling Bee"]
            },
            {
              icon: <Palette className="w-10 h-10" />,
              title: "Special Events",
              activities: ["Sports Day", "Culture Day", "Prize Giving", "Christmas Play"]
            }
          ].map((cat, i) => (
            <div key={i} className="p-8 border rounded-2xl hover:border-secondary transition-colors group">
              <div className="text-secondary mb-6 group-hover:scale-110 transition-transform">{cat.icon}</div>
              <h3 className="text-2xl font-bold text-primary mb-4">{cat.title}</h3>
              <ul className="space-y-2">
                {cat.activities.map((a, j) => (
                  <li key={j} className="text-muted-foreground flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-slate-300" /> {a}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
