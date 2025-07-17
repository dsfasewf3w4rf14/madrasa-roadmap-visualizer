import { useEffect, useState } from "react";
import { BookOpen, GraduationCap, Star, Upload, Image } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Book {
  id: string;
  title: string;
  author?: string;
  image?: string;
}

interface Category {
  name: string;
  nameUz: string;
  books: Book[];
  bgColor: string;
}

interface YearData {
  year: number;
  title: string;
  titleUz: string;
  categories: Category[];
}

const madrasaProgram: YearData[] = [
  {
    year: 1,
    title: "1-KURS",
    titleUz: "1-KURS",
    categories: [
      {
        name: "NAHV",
        nameUz: "NAHV",
        bgColor: "bg-orange-100",
        books: [
          { id: "nahv1", title: "DURUSUN NAHVIYYA - HIFNIYBEK NOSI" },
          { id: "nahv2", title: "NAHV TATBIQOV - XOLID ABDULAZIZ" },
          { id: "nahv3", title: "SHARHU AJRUMIYYA" }
        ]
      },
      {
        name: "MUTOLAA",
        nameUz: "KUTOLAA",
        bgColor: "bg-blue-100",
        books: [
          { id: "kutolaa1", title: "SHIFOHIYYA - AHMAD HODIY MAQSUDIY" },
          { id: "kutolaa2", title: "MARDAVIK QIROAT - SUNNATULLOH BEKPOLAT" },
          { id: "kutolaa3", title: "QISOS NABIYYIN - ABUL HASAN NADAVIY" }
        ]
      },
      {
        name: "SARF",
        nameUz: "SARF",
        bgColor: "bg-pink-100",
        books: [
          { id: "sarf1", title: "MUMTOZ SARF DARSLIGI - MAMURJON ABDUSHARIPOV" }
        ]
      }
    ]
  },
  {
    year: 2,
    title: "2-KURS",
    titleUz: "2-KURS",
    categories: [
      {
        name: "FIQH",
        nameUz: "FIQH",
        bgColor: "bg-orange-100",
        books: [
          { id: "fiqh1", title: "Fiqhul Muyassar - Muhammad Ali Nadaviy" },
          { id: "fiqh2", title: "QUDURIY MUXTASARI INOM QUDURIY" }
        ]
      },
      {
        name: "HADIS",
        nameUz: "HADIS",
        bgColor: "bg-blue-100",
        books: [
          { id: "hadis1", title: "ARBAYIN NAVAVIYYA - INOM NAVAVIY" },
          { id: "hadis2", title: "RIYOZUS SOLIHIN - INOM NAVAVIY" }
        ]
      },
      {
        name: "NAHV",
        nameUz: "NAHV",
        bgColor: "bg-pink-100",
        books: [
          { id: "nahv4", title: "UNMUZAJ - INOM ZAMAXSHARIY" },
          { id: "nahv5", title: "HIDOYATU NAHV - BUSHRO" }
        ]
      }
    ]
  },
  {
    year: 3,
    title: "3-KURS",
    titleUz: "3-KURS",
    categories: [
      {
        name: "FIQH",
        nameUz: "FIQH",
        bgColor: "bg-orange-100",
        books: [
          { id: "fiqh3", title: "QUDURIY MUXTASARI INOM QUDURIY" },
          { id: "fiqh4", title: "MAROQI FALOH HASAN SHURUNBULOLIY" }
        ]
      },
      {
        name: "HADIS",
        nameUz: "HADIS",
        bgColor: "bg-blue-100",
        books: [
          { id: "hadis3", title: "TAYSIRUL VUSUL" },
          { id: "hadis4", title: "TAYSIRUL-VUSUL" }
        ]
      },
      {
        name: "USULUL FIQH",
        nameUz: "USULUL FIQH",
        bgColor: "bg-pink-100",
        books: [
          { id: "usul1", title: "MABODIUL USUL - AHMAD BOLANBHURIY" },
          { id: "usul2", title: "AL-MUYASSAR FIY USULIL-FIQH - IBROHIM SILQINIY" }
        ]
      }
    ]
  },
  {
    year: 4,
    title: "4-KURS",
    titleUz: "4-KURS",
    categories: [
      {
        name: "MUSTALA HUL HADIS",
        nameUz: "MUSTALA HUL HADIS",
        bgColor: "bg-orange-100",
        books: [
          { id: "mustala1", title: "MUXTOROT MINAL-ADABIL-ARABIY" },
          { id: "mustala2", title: "MIRQOT FIL MANTIQ - FAZL XAYROBODIY" }
        ]
      },
      {
        name: "MANTIQ",
        nameUz: "MANTIQ",
        bgColor: "bg-blue-100",
        books: [
          { id: "mantiq1", title: "MUXTOSOT MINAL-ADABIL-ARABIY" },
          { id: "mantiq2", title: "SHARHI MULLA - MULLA JOMIY" }
        ]
      },
      {
        name: "HIIKMAT",
        nameUz: "HIKMAT",
        bgColor: "bg-blue-100",
        books: [
          { id: "hikmat1", title: "AQIBUL DANS VAL MUNZARA - MUHYIDDIN ABDULHAMID" },
          { id: "hikmat2", title: "XULOSATI ILMIY VAZ - YUSUF DINIY" }
        ]
      }
    ]
  },
  {
    year: 5,
    title: "5-KURS",
    titleUz: "5-KURS",
    categories: [
      {
        name: "MUSTALA HUL HADIS",
        nameUz: "MUSTALA HUL HADIS",
        bgColor: "bg-orange-100",
        books: [
          { id: "mustala3", title: "AL-MASALILUL-USULIYYA FIL HAQIQIYYA WASH SHARIYYA" },
          { id: "mustala4", title: "SHARHJUL VIQOYA - SODRUSH SHARIYA" }
        ]
      },
      {
        name: "HADIS",
        nameUz: "HADIS",
        bgColor: "bg-blue-100",
        books: [
          { id: "hadis5", title: "MUXTOROT MINAL-MIRQOT" },
          { id: "hadis6", title: "AR-RUDUD ALASH-SHUBUHOT" }
        ]
      },
      {
        name: "USULUL FIQH",
        nameUz: "USULUL FIQH",
        bgColor: "bg-pink-100",
        books: [
          { id: "usul3", title: "NURUL ANVOR - MULLA JIYJON" }
        ]
      },
      {
        name: "MANTIQ",
        nameUz: "MANTIQ",
        bgColor: "bg-blue-100",
        books: [
          { id: "mantiq3", title: "ABDULLA YAZIDIY TAHZIB MANTHQA SHARHI ABDULLAHI YAZIDIY" }
        ]
      }
    ]
  }
];

const BookCard = ({ book, categoryColor }: { book: Book; categoryColor: string }) => {
  // Placeholder images for books
  const placeholderImages = [
    "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400",
    "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400", 
    "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400",
    "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400",
    "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400"
  ];
  
  const randomImage = placeholderImages[Math.floor(Math.random() * placeholderImages.length)];

  return (
    <div className={`relative rounded-lg ${categoryColor} min-h-[280px] flex flex-col shadow-lg`}>
      {/* Book Image */}
      <div className="p-3">
        <div className="relative mb-3">
          <img 
            src={randomImage} 
            alt={book.title} 
            className="w-full h-40 object-cover rounded-md shadow-md"
          />
        </div>
      </div>
      
      {/* Book Info - White Background */}
      <div className="bg-white p-4 rounded-b-lg flex-1">
        <h4 className="font-bold text-sm text-gray-800 leading-tight mb-2">
          {book.title}
        </h4>
        {book.author && (
          <p className="text-xs text-gray-600">{book.author}</p>
        )}
      </div>
      
      {/* TOLIQ Badge */}
      <div className="absolute top-1 right-1">
        <div className="bg-orange-600 text-white px-2 py-1 rounded-md transform rotate-45 text-xs font-bold">
          TOLIQ
        </div>
      </div>
    </div>
  );
};

const CategorySection = ({ category }: { category: Category }) => {
  return (
    <div className="mb-8 flex gap-4">
      {/* Category Header - Positioned to the side */}
      <div className="flex-shrink-0">
        <div className={`${category.bgColor} px-3 py-8 rounded-lg flex items-center justify-center min-h-[200px]`}>
          <h3 className="font-bold text-lg text-gray-800 transform -rotate-90 origin-center whitespace-nowrap">
            {category.nameUz}
          </h3>
        </div>
      </div>
      
      {/* Books Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-1">
        {category.books.map((book) => (
          <BookCard 
            key={book.id} 
            book={book} 
            categoryColor={category.bgColor}
          />
        ))}
      </div>
    </div>
  );
};

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
                } flex flex-col md:flex items-start gap-8`}
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
                    <CardHeader className="bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-t-lg">
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
                      {yearData.categories.map((category) => (
                        <CategorySection 
                          key={category.name} 
                          category={category}
                        />
                      ))}
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline Node */}
                <div className={`relative z-10 ${
                  visibleYears.includes(yearData.year) ? 'animate-scale-in' : 'opacity-0'
                }`}>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 shadow-elegant flex items-center justify-center border-4 border-background">
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
              {madrasaProgram.reduce((total, year) => 
                total + year.categories.reduce((catTotal, cat) => catTotal + cat.books.length, 0), 0
              )}
            </h3>
            <p className="text-lg">Umumiy kitoblar soni</p>
          </Card>
          <Card className="text-center p-6 bg-card border-2 border-primary/20">
            <h3 className="text-3xl font-bold mb-2 text-primary">
              {madrasaProgram.reduce((total, year) => total + year.categories.length, 0)}
            </h3>
            <p className="text-lg text-card-foreground">Umumiy kategoriyalar</p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MadrasaRoadmap;