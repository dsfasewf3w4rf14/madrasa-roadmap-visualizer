import { Link } from "react-router-dom";
import { GraduationCap, BookOpen, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-bg">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 animate-fade-in">
          <GraduationCap className="mx-auto mb-6 h-20 w-20 text-primary animate-float" />
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6">
            Islomiy Madrasa
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            5 yillik mukammal ta'lim dasturi bilan islomiy ilmlarni chuqur o'rganing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="shadow-elegant hover:shadow-xl transition-all duration-300 animate-slide-in-left">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <BookOpen className="h-8 w-8 text-primary" />
                Ta'lim Dasturi
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Qur'on, Hadis, Fiqh, Arab tili va boshqa islomiy fanlar bo'yicha 
                to'liq ta'lim olish imkoniyati.
              </p>
              <Link to="/roadmap">
                <Button className="w-full bg-gradient-primary hover:opacity-90 transition-opacity">
                  5 Yillik Roadmapni Ko'rish
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="shadow-elegant hover:shadow-xl transition-all duration-300 animate-slide-in-right">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <GraduationCap className="h-8 w-8 text-accent" />
                Bitiruvchilarimiz
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Madrasa bitiruvchilari jamiyatda diniy rahbarlik va ta'lim 
                sohasida faoliyat yuritishadi.
              </p>
              <Button variant="outline" className="w-full">
                Batafsil Ma'lumot
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">5</div>
              <div className="text-muted-foreground">Yil davomiyligi</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-accent mb-2">25+</div>
              <div className="text-muted-foreground">Turli fanlar</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">1800+</div>
              <div className="text-muted-foreground">Umumiy soatlar</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
