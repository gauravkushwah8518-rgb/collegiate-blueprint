import { Calendar, MapPin, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Events = () => {
  const events = [
    {
      title: 'Annual Tech Symposium 2025',
      date: 'March 15-17, 2025',
      time: '9:00 AM - 5:00 PM',
      location: 'Main Auditorium',
      type: 'Conference',
      status: 'Upcoming',
    },
    {
      title: 'Cultural Festival - Spring Fest',
      date: 'April 5-7, 2025',
      time: '10:00 AM - 8:00 PM',
      location: 'University Grounds',
      type: 'Cultural',
      status: 'Upcoming',
    },
    {
      title: 'Career Fair 2025',
      date: 'March 28, 2025',
      time: '11:00 AM - 4:00 PM',
      location: 'Convention Center',
      type: 'Placement',
      status: 'Upcoming',
    },
  ];

  const news = [
    {
      title: 'Excellence University Ranks Among Top 50 Institutions',
      date: 'February 20, 2025',
      category: 'Achievement',
    },
    {
      title: 'New Research Center for AI & Robotics Inaugurated',
      date: 'February 15, 2025',
      category: 'Announcement',
    },
    {
      title: 'Admission Open for Academic Year 2025-26',
      date: 'February 10, 2025',
      category: 'Admission',
    },
  ];

  return (
    <section id="events" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Events & News
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Upcoming Events */}
          <div className="animate-slide-in-left">
            <h3 className="font-serif text-2xl font-bold mb-6 text-foreground">Upcoming Events</h3>
            <div className="space-y-4">
              {events.map((event, index) => (
                <Card 
                  key={event.title} 
                  className="hover:shadow-lg transition-shadow"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg font-semibold">{event.title}</CardTitle>
                      <Badge variant="secondary">{event.type}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Latest News */}
          <div className="animate-slide-in-left" style={{ animationDelay: '200ms' }}>
            <h3 className="font-serif text-2xl font-bold mb-6 text-foreground">Latest News</h3>
            <div className="space-y-4">
              {news.map((item, index) => (
                <Card 
                  key={item.title} 
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                  style={{ animationDelay: `${(index + 3) * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <Badge className="mb-3" variant="outline">{item.category}</Badge>
                    <h4 className="font-semibold text-lg mb-2 text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.date}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
