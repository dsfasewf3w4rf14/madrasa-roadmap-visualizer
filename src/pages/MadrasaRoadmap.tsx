import { useEffect, useState } from "react";
import { Upload, GraduationCap, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Book {
  id: string;
  title: string;
  titleArabic: string;
  author: string;
  imageUrl?: string;
  isComplete?: boolean;
}

interface SubjectCategory {
  name: string;
  nameArabic: string;
  books: Book[];
  color: string;
}

interface YearData {
  year: number;
  title: string;
  categories: SubjectCategory[];
}

const madrasaProgram: YearData[] = [
  {
    year: 1,
    title: "1-kurs - Asosiy fanlar",
    categories: [
      {
        name: "NAHV",
        nameArabic: "النحو",
        color: "bg-orange-100",
        books: [
          {
            id: "1",
            title: "DURUSUN NAHVIYYA - HIFNIYYEK NOGI",
            titleArabic: "دروس النحوية - حفنية الناجي",
            author: "Hifni Nasif",
          },
          {
            id: "2", 
            title: "NAHV TATBIQIY - XOLID ABDULLAZIZ",
            titleArabic: "النحو التطبيقي - خالد عبد العزيز",
            author: "Khalid Abdul Aziz",
            isComplete: true
          },
          {
            id: "3",
            title: "SHARHU AJRUMIYYA",
            titleArabic: "شرح الآجرومية",
            author: "Ibn Ajrum",
            isComplete: true
          }
        ]
      },
      {
        name: "MUTQLA",
        nameArabic: "المطلقة", 
        color: "bg-blue-100",
        books: [
          {
            id: "4",
            title: "SHIFOHIYYA - AHMAD HOJIH MASUDIY",
            titleArabic: "الشفهية - أحمد حاج مسعودي",
            author: "Ahmad Haj Masoudi",
            isComplete: true
          },
          {
            id: "5",
            title: "MADQOUL QIROAT - SUNNATULLOH BEKPULATOV", 
            titleArabic: "مدقول القراءة - سنة الله بكپولاتوف",
            author: "Sunnatulloh Bekpulatov",
            isComplete: true
          },
          {
            id: "6",
            title: "QISOS NABIYYIN - ABUL HASAN NADAVIY",
            titleArabic: "قصص النبيين - أبو الحسن الندوي", 
            author: "Abul Hasan Nadavi",
            isComplete: true
          }
        ]
      }
    ]
  },
  {
    year: 2,
    title: "2-kurs - O'rta bosqich",
    categories: [
      {
        name: "SARF",
        nameArabic: "الصرف",
        color: "bg-pink-100", 
        books: [
          {
            id: "7",
            title: "MUMTOZ SARF DARSLIGI",
            titleArabic: "ممتاز صرف درسلیگی",
            author: "Mahmudjon Abdusharipov",
            isComplete: true
          }
        ]
      },
      {
        name: "AQIDA",
        nameArabic: "العقيدة",
        color: "bg-yellow-100",
        books: [
          {
            id: "8", 
            title: "AQIDA ILMIIG KIRISH - TAHOVIY AQIDASI",
            titleArabic: "عقیدہ علمیگ کریش - طحاوی عقیدہ سی",
            author: "Imam Tahavi",
            isComplete: true
          },
          {
            id: "9",
            title: "BAPUL AHOLIY - USMOH O'SHIVPIQHUL AMBAR",
            titleArabic: "باب الاهلی - عثمان عشیوہ پیقھول عمبار", 
            author: "Usman Ashiq",
            isComplete: true
          }
        ]
      },
      {
        name: "SARF",
        nameArabic: "الصرف",
        color: "bg-green-100",
        books: [
          {
            id: "10",
            title: "TASRIFI IZZI - IZZUDDIN ZANGONI",
            titleArabic: "تصریف عزی - عز الدین زنگونی",
            author: "Izzuddin Zangoni",
            isComplete: true
          }
        ]
      },
      {
        name: "MUTQLA",
        nameArabic: "المطلقة",
        color: "bg-blue-100", 
        books: [
          {
            id: "11",
            title: "NURUL YAQIN - HUZAIRY",
            titleArabic: "نور الیقین - خضیری",
            author: "Khudari Bek",
            isComplete: true
          }
        ]
      }
    ]
  },
  {
    year: 3,
    title: "3-kurs - Ilg'or bosqich",
    categories: [
      {
        name: "FIQH",
        nameArabic: "الفقه",
        color: "bg-amber-100",
        books: [
          {
            id: "12",
            title: "QUDURIY MUXTASARI IMOM QUDURIY",
            titleArabic: "قدوری مختصری امام قدوری",
            author: "Imam Quduri",
            isComplete: true
          },
          {
            id: "13", 
            title: "MAROQI FALOH - HASAN SHURUNBULOVIY",
            titleArabic: "مراقی فلاح - حسن شورنبولوی",
            author: "Hasan Shurunbulavi", 
            isComplete: true
          }
        ]
      },
      {
        name: "HADIS",
        nameArabic: "الحديث",
        color: "bg-cyan-100",
        books: [
          {
            id: "14",
            title: "TAVSIRUL VUSUL",
            titleArabic: "تیسیر الوصول",
            author: "Abdul Rahman", 
            isComplete: true
          },
          {
            id: "15",
            title: "TAVSIRUL VUSUL", 
            titleArabic: "تیسیر الوصول",
            author: "Abdul Rahman",
            isComplete: true
          }
        ]
      },
      {
        name: "USUL FIQH",
        nameArabic: "أصول الفقه", 
        color: "bg-pink-100",
        books: [
          {
            id: "16",
            title: "MABODIUL USUL - AHMAD BOLANBURIY",
            titleArabic: "مبادی الاصول - احمد بولان بوری",
            author: "Ahmad Bolanbu",
            isComplete: true
          },
          {
            id: "17",
            title: "AL-MUYASSAR FIY USUUL - FIQH - IBROHIM SILQINIY",
            titleArabic: "المیسر فی اصول - فقہ - ابراہیم سلقینی", 
            author: "Ibrahim Silqini",
            isComplete: true
          }
        ]
      }
    ]
  },
  {
    year: 4,
    title: "4-kurs - Ixtisoslashtirish", 
    categories: [
      {
        name: "MANTIQ",
        nameArabic: "المنطق",
        color: "bg-blue-100",
        books: [
          {
            id: "18",
            title: "MULAXXAS FIL MANTIQ - KOZIBJON IBROHIM",
            titleArabic: "ملخص فی المنطق - قاضی جون ابراہیم",
            author: "Qozijan Ibrahim",
            isComplete: true
          },
          {
            id: "19", 
            title: "SUCRO FIL MANTIQ - SAYYID SHARIF JURFONY",
            titleArabic: "صغرو فی المنطق - سید شریف جرگونی",
            author: "Sayyid Sharif Jurjani",
            isComplete: true
          }
        ]
      },
      {
        name: "MUSTVLA HUL HADIS", 
        nameArabic: "مصطلح الحديث",
        color: "bg-orange-100",
        books: [
          {
            id: "20",
            title: "TAVZHU ILMIL-MUSTLAH MAAT - TASHIYYH (Mujiyiddin Awroma)",
            titleArabic: "توضیح علم المصطلح مات - تشییح (مجی الدین اورما)",
            author: "Mujiyiddin Awroma",
            isComplete: true
          },
          {
            id: "21",
            title: "AN-NUKATUL-MADINIYYA BI-SHARHIL-BAYQUNIYYA", 
            titleArabic: "النکات المدینیة بشرح البیقونیة",
            author: "Al-Bayquni",
            isComplete: true
          }
        ]
      },
      {
        name: "NAHV",
        nameArabic: "النحو",
        color: "bg-green-100", 
        books: [
          {
            id: "22",
            title: "KOFIYA - IBN HOJIB",
            titleArabic: "کافیة - ابن حاجب",
            author: "Ibn Hajib",
            isComplete: true
          },
          {
            id: "23",
            title: "TAVZIHU QOTRIN-NADO - ABDUL-KARIM DAIRBON",
            titleArabic: "توضیح قطر الندی - عبد الکریم دیربون", 
            author: "Abdul Karim Dairbon",
            isComplete: true
          }
        ]
      }
    ]
  },
  {
    year: 5,
    title: "5-kurs - Mukammallik va xizmat",
    categories: [
      {
        name: "MUTQLA",
        nameArabic: "المطلقة",
        color: "bg-amber-100", 
        books: [
          {
            id: "24",
            title: "AL-MUKTAR MIN FARAIDIN - NUQULI VAL-ASBOR",
            titleArabic: "المختار من فرائد - نقولی والاسبور", 
            author: "Nuquli Val-Asbor",
            isComplete: true
          },
          {
            id: "25",
            title: "AT-TADBIR ALA ISTIQAMIL-BAROMILIS - MUKADDIMAS",
            titleArabic: "التدبیر علی استقامة البرومیلس - مقدمس",
            author: "Al-Mukaddimas",
            isComplete: true
          }
        ]
      },
      {
        name: "HIKMAT",
        nameArabic: "الحكمة", 
        color: "bg-blue-100",
        books: [
          {
            id: "26",
            title: "MABADIUL HIKMAT - AHMAD BOLANBURIY",
            titleArabic: "مبادی الحکمة - احمد بولان بوری",
            author: "Ahmad Bolanburiy",
            isComplete: true
          },
          {
            id: "27",
            title: "TASAWUROT AVVALIYYA - HASANAYN MAKLUF",
            titleArabic: "تصاورات اولیة - حسنین مکلوف",
            author: "Hasanayn Makluf", 
            isComplete: true
          }
        ]
      },
      {
        name: "AQIDA",
        nameArabic: "العقيدة",
        color: "bg-pink-100",
        books: [
          {
            id: "28", 
            title: "TAMHID - ABU SANO LOMISHIY",
            titleArabic: "تمهید - ابو سنو لومیشی",
            author: "Abu Sano Lomishi",
            isComplete: true
          },
          {
            id: "29",
            title: "IQTISOR FIL I'TIQOD - IMOM GAZZOLIY",
            titleArabic: "اقتصار فی الاعتقاد - امام غزالی",
            author: "Imam Ghazali",
            isComplete: true
          }
        ]
      }
    ]
  }
];

const MadrasaRoadmap = () => {
  const [visibleYears, setVisibleYears] = useState<number[]>([]);
  const [selectedBooks, setSelectedBooks] = useState<{[key: string]: File}>({});

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

  const handleImageUpload = (bookId: string, file: File) => {
    setSelectedBooks(prev => ({
      ...prev,
      [bookId]: file
    }));
  };

  const getImageUrl = (bookId: string) => {
    if (selectedBooks[bookId]) {
      return URL.createObjectURL(selectedBooks[bookId]);
    }
    return undefined;
  };

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

      {/* Years Layout */}
      <div className="container mx-auto px-4 py-16">
        <div className="space-y-24">
          {madrasaProgram.map((yearData, yearIndex) => (
            <div 
              key={yearData.year}
              className={`${
                visibleYears.includes(yearData.year) ? 'animate-fade-in' : 'opacity-0'
              }`}
            >
              {/* Year Header */}
              <div className="text-center mb-12">
                <Badge variant="outline" className="text-2xl px-6 py-3 mb-4">
                  {yearData.year}-KURS
                </Badge>
                <h2 className="text-3xl font-bold text-primary">
                  {yearData.title}
                </h2>
              </div>

              {/* Categories Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {yearData.categories.map((category, categoryIndex) => (
                  <div 
                    key={category.name}
                    className={`${
                      yearIndex % 2 === 0 
                        ? categoryIndex % 2 === 0 ? 'lg:justify-self-end' : 'lg:justify-self-start'
                        : categoryIndex % 2 === 0 ? 'lg:justify-self-start' : 'lg:justify-self-end'
                    }`}
                  >
                    {/* Category Header */}
                    <div className="mb-6">
                      <div className={`inline-block ${category.color} px-4 py-2 rounded-t-lg border-l-4 border-primary`}>
                        <h3 className="text-xl font-bold text-primary">
                          {category.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {category.nameArabic}
                        </p>
                      </div>
                    </div>

                    {/* Books Grid */}
                    <div className="space-y-4">
                      {category.books.map((book, bookIndex) => (
                        <Card 
                          key={book.id}
                          className={`shadow-elegant hover:shadow-xl transition-all duration-300 ${
                            visibleYears.includes(yearData.year) ? 'animate-slide-in-right' : 'opacity-0'
                          }`}
                          style={{ animationDelay: `${bookIndex * 0.2}s` }}
                        >
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              {/* Book Cover Upload Area */}
                              <div className="relative group">
                                <div className="w-24 h-32 rounded-lg overflow-hidden bg-muted border-2 border-dashed border-muted-foreground/30 hover:border-primary/50 transition-colors">
                                  {getImageUrl(book.id) ? (
                                    <img 
                                      src={getImageUrl(book.id)} 
                                      alt={book.title}
                                      className="w-full h-full object-cover"
                                    />
                                  ) : (
                                    <div className="w-full h-full flex items-center justify-center">
                                      <Upload className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
                                    </div>
                                  )}
                                </div>
                                <input
                                  type="file"
                                  accept="image/*"
                                  className="absolute inset-0 opacity-0 cursor-pointer"
                                  onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                      handleImageUpload(book.id, file);
                                    }
                                  }}
                                />
                                {book.isComplete && (
                                  <Badge className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs">
                                    TOLIQ
                                  </Badge>
                                )}
                              </div>

                              {/* Book Details */}
                              <div className="flex-1 min-w-0">
                                <h4 className="font-bold text-card-foreground text-lg mb-2">
                                  {book.title}
                                </h4>
                                <p className="text-sm text-muted-foreground mb-1 font-arabic">
                                  {book.titleArabic}
                                </p>
                                <p className="text-sm text-accent font-medium">
                                  {book.author}
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Year Divider */}
              {yearIndex < madrasaProgram.length - 1 && (
                <div className="mt-16 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary shadow-elegant flex items-center justify-center border-4 border-background">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MadrasaRoadmap;