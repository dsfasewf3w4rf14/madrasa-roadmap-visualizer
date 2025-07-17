import { useEffect, useState } from "react";
import { BookOpen, GraduationCap, Star, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Subject {
  name: string;
  nameUz: string;
  description: string;
  hours: number;
}

interface YearData {
  year: number;
  title: string;
  titleUz: string;
  subjects: Subject[];
  color: string;
}

const madrasaProgram: YearData[] = [
  {
    year: 1,
    title: "Foundation Year",
    titleUz: "1-kurs - Asosiy fanlar",
    subjects: [
      { name: "Quran Recitation", nameUz: "Qur'on Qiroati", description: "Proper pronunciation and rules", hours: 120 },
      { name: "Arabic Grammar", nameUz: "Arab tili grammatikasi", description: "Basic Arabic grammar rules", hours: 80 },
      { name: "Islamic Beliefs", nameUz: "Islom aqidasi", description: "Fundamental Islamic beliefs", hours: 60 },
      { name: "Hadith Studies", nameUz: "Hadislar", description: "Introduction to Hadith", hours: 40 },
      { name: "Islamic History", nameUz: "Islom tarixi", description: "Early Islamic history", hours: 50 }
    ],
    color: "from-emerald-400 to-emerald-600"
  },
  {
    year: 2,
    title: "Intermediate Studies",
    titleUz: "2-kurs - O'rta bosqich",
    subjects: [
      { name: "Advanced Quran", nameUz: "Mukammal Qur'on", description: "Tajweed and memorization", hours: 100 },
      { name: "Fiqh Fundamentals", nameUz: "Fiqh asoslari", description: "Islamic jurisprudence basics", hours: 90 },
      { name: "Arabic Literature", nameUz: "Arab adabiyoti", description: "Classical Arabic texts", hours: 70 },
      { name: "Tafseer", nameUz: "Tafsir ilmi", description: "Quranic interpretation", hours: 80 },
      { name: "Islamic Ethics", nameUz: "Islom axloqi", description: "Moral and ethical teachings", hours: 45 }
    ],
    color: "from-blue-400 to-blue-600"
  },
  {
    year: 3,
    title: "Advanced Studies",
    titleUz: "3-kurs - Ilg'or bosqich",
    subjects: [
      { name: "Advanced Fiqh", nameUz: "Mukammal Fiqh", description: "Complex jurisprudential issues", hours: 110 },
      { name: "Hadith Science", nameUz: "Hadis ilmi", description: "Hadith methodology", hours: 85 },
      { name: "Islamic Philosophy", nameUz: "Islom falsafasi", description: "Islamic philosophical thought", hours: 60 },
      { name: "Advanced Tafseer", nameUz: "Mukammal Tafsir", description: "In-depth Quranic commentary", hours: 95 },
      { name: "Comparative Religion", nameUz: "Dinlar tarixи", description: "Study of world religions", hours: 55 }
    ],
    color: "from-purple-400 to-purple-600"
  },
  {
    year: 4,
    title: "Specialization",
    titleUz: "4-kurs - Ixtisoslashtirish",
    subjects: [
      { name: "Teaching Methodology", nameUz: "Ta'lim metodikasi", description: "Islamic teaching methods", hours: 75 },
      { name: "Contemporary Issues", nameUz: "Zamonaviy masalalar", description: "Modern Islamic challenges", hours: 65 },
      { name: "Research Methods", nameUz: "Tadqiqot usullari", description: "Academic research skills", hours: 50 },
      { name: "Community Leadership", nameUz: "Jamiyat rahbariyati", description: "Leading Muslim communities", hours: 60 },
      { name: "Islamic Economics", nameUz: "Islom iqtisodi", description: "Islamic financial principles", hours: 55 }
    ],
    color: "from-amber-400 to-amber-600"
  },
  {
    year: 5,
    title: "Mastery & Service",
    titleUz: "5-kurs - Mukammallik va xizmat",
    subjects: [
      { name: "Advanced Research", nameUz: "Ilmiy tadqiqot", description: "Independent research project", hours: 100 },
      { name: "Practical Training", nameUz: "Amaliy mashg'ulot", description: "Real-world application", hours: 80 },
      { name: "Thesis Writing", nameUz: "Dissertatsiya yozish", description: "Final academic project", hours: 120 },
      { name: "Community Service", nameUz: "Jamiyat xizmati", description: "Serving the community", hours: 70 },
      { name: "Graduation Prep", nameUz: "Bitiruv tayyorligi", description: "Final examinations", hours: 45 }
    ],
    color: "from-rose-400 to-rose-600"
  }
];

const MadrasaRoadmap = () => {
  const [visibleYears, setVisibleYears] = useState<number[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleYears(prev => {
        if (prev.length < madrasaProgram.length) {
          return [...prev, prev.length + 1];
        }
        return prev;
      });
    }, 800);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-bg">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
        <div className="relative container mx-auto px-4 py-16 text-center">
          <div className="animate-fade-in">
            <GraduationCap className="mx-auto mb-6 h-16 w-16 text-primary animate-float" />
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
              5 Yillik Ta'lim Roadmapi
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Islomiy madrasa o'quvchilari uchun mukammal ta'lim yo'li
            </p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="container mx-auto px-4 py-16">
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-primary rounded-full opacity-30"></div>
          
          {/* Timeline Items */}
          <div className="space-y-16">
            {madrasaProgram.map((yearData, index) => (
              <div 
                key={yearData.year}
                className={`relative ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex flex-col md:flex items-center gap-8`}
              >
                {/* Year Card */}
                <div className={`w-full md:w-5/12 ${
                  visibleYears.includes(yearData.year) 
                    ? index % 2 === 0 
                      ? 'animate-slide-in-right' 
                      : 'animate-slide-in-left'
                    : 'opacity-0'
                }`}>
                  <Card className="shadow-elegant hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary/20">
                    <CardHeader className={`bg-gradient-to-r ${yearData.color} text-white rounded-t-lg`}>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-2xl font-bold">
                          {yearData.titleUz}
                        </CardTitle>
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                          {yearData.year}-kurs
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 bg-card">
                      <div className="space-y-4">
                        {yearData.subjects.map((subject, subjectIndex) => (
                          <div 
                            key={subject.name}
                            className={`flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors duration-200 ${
                              visibleYears.includes(yearData.year) ? 'animate-fade-in' : 'opacity-0'
                            }`}
                            style={{ animationDelay: `${subjectIndex * 0.1}s` }}
                          >
                            <BookOpen className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-card-foreground">
                                {subject.nameUz}
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                {subject.description}
                              </p>
                              <div className="flex items-center gap-2 mt-2">
                                <Calendar className="h-4 w-4 text-accent" />
                                <span className="text-sm font-medium text-accent">
                                  {subject.hours} soat
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline Node */}
                <div className={`relative z-10 ${
                  visibleYears.includes(yearData.year) ? 'animate-scale-in' : 'opacity-0'
                }`}>
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${yearData.color} shadow-elegant flex items-center justify-center border-4 border-background`}>
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <Badge variant="outline" className="bg-background">
                      {yearData.year}-kurs
                    </Badge>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="w-full md:w-5/12 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className={`mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 ${
          visibleYears.length === madrasaProgram.length ? 'animate-fade-in' : 'opacity-0'
        }`}>
          <Card className="text-center p-6 bg-gradient-primary text-primary-foreground">
            <h3 className="text-3xl font-bold mb-2">5</h3>
            <p className="text-lg">Yil davomiyligi</p>
          </Card>
          <Card className="text-center p-6 bg-gradient-accent text-accent-foreground">
            <h3 className="text-3xl font-bold mb-2">
              {madrasaProgram.reduce((total, year) => total + year.subjects.length, 0)}
            </h3>
            <p className="text-lg">Umumiy fanlar soni</p>
          </Card>
          <Card className="text-center p-6 bg-card border-2 border-primary/20">
            <h3 className="text-3xl font-bold mb-2 text-primary">
              {madrasaProgram.reduce((total, year) => 
                total + year.subjects.reduce((yearTotal, subject) => yearTotal + subject.hours, 0), 0
              )}
            </h3>
            <p className="text-lg text-card-foreground">Umumiy soat</p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MadrasaRoadmap;