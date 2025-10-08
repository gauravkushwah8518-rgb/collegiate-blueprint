import { Target, Eye, Trophy } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To provide transformative education that empowers students to become leaders, innovators, and responsible global citizens.',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be a globally recognized institution known for academic excellence, cutting-edge research, and positive societal impact.',
    },
    {
      icon: Trophy,
      title: 'Our Values',
      description: 'Excellence, integrity, innovation, inclusivity, and commitment to lifelong learning form the foundation of our institution.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Excellence University
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Established with a commitment to academic excellence, Excellence University has been 
            shaping futures for over three decades. Our state-of-the-art facilities, distinguished 
            faculty, and innovative programs make us a premier destination for higher education.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card 
              key={value.title} 
              className="border-none shadow-lg hover:shadow-xl transition-shadow animate-slide-in-left"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4 text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
