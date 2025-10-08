import { Users, BookOpen, Award, GraduationCap } from 'lucide-react';

const Stats = () => {
  const stats = [
    { icon: Users, value: '10,000+', label: 'Active Students' },
    { icon: BookOpen, value: '150+', label: 'Programs Offered' },
    { icon: Award, value: '95%', label: 'Placement Rate' },
    { icon: GraduationCap, value: '500+', label: 'Expert Faculty' },
  ];

  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <stat.icon className="h-12 w-12 mx-auto mb-4 text-accent" />
              <div className="font-serif text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-primary-foreground/80 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
