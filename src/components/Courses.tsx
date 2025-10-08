import { BookOpen, Microscope, Code, Briefcase, Palette, Calculator } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Courses = () => {
  const departments = [
    {
      icon: Code,
      name: 'Computer Science & IT',
      programs: 'B.Tech, M.Tech, MCA',
      description: 'Cutting-edge programs in AI, ML, cybersecurity, and software engineering.',
    },
    {
      icon: Briefcase,
      name: 'Business & Management',
      programs: 'BBA, MBA, B.Com',
      description: 'Develop leadership skills with focus on entrepreneurship and innovation.',
    },
    {
      icon: Microscope,
      name: 'Sciences',
      programs: 'B.Sc, M.Sc, Ph.D',
      description: 'Research-focused programs in physics, chemistry, biology, and more.',
    },
    {
      icon: Calculator,
      name: 'Engineering',
      programs: 'B.Tech, M.Tech',
      description: 'Mechanical, electrical, civil, and other engineering disciplines.',
    },
    {
      icon: Palette,
      name: 'Arts & Humanities',
      programs: 'BA, MA, Ph.D',
      description: 'Explore literature, history, philosophy, and social sciences.',
    },
    {
      icon: BookOpen,
      name: 'Education',
      programs: 'B.Ed, M.Ed, D.Ed',
      description: 'Prepare to inspire the next generation of learners.',
    },
  ];

  return (
    <section id="courses" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Academic Programs
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose from a wide range of undergraduate, postgraduate, and doctoral programs 
            designed to meet the demands of today's dynamic world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept, index) => (
            <Card 
              key={dept.name} 
              className="hover:shadow-xl transition-shadow cursor-pointer group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <dept.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="font-serif text-xl">{dept.name}</CardTitle>
                <CardDescription className="text-accent font-medium">
                  {dept.programs}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{dept.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
