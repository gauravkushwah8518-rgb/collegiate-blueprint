import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('campus');

  const galleryImages = {
    campus: [
      { id: 1, alt: 'Library', color: 'bg-gradient-to-br from-blue-400 to-blue-600' },
      { id: 2, alt: 'Sports Complex', color: 'bg-gradient-to-br from-green-400 to-green-600' },
      { id: 3, alt: 'Lecture Hall', color: 'bg-gradient-to-br from-purple-400 to-purple-600' },
      { id: 4, alt: 'Research Lab', color: 'bg-gradient-to-br from-orange-400 to-orange-600' },
    ],
    events: [
      { id: 5, alt: 'Tech Symposium', color: 'bg-gradient-to-br from-indigo-400 to-indigo-600' },
      { id: 6, alt: 'Cultural Fest', color: 'bg-gradient-to-br from-pink-400 to-pink-600' },
      { id: 7, alt: 'Sports Day', color: 'bg-gradient-to-br from-teal-400 to-teal-600' },
      { id: 8, alt: 'Convocation', color: 'bg-gradient-to-br from-yellow-400 to-yellow-600' },
    ],
  };

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Campus Gallery
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our vibrant campus life through images of our facilities, events, and community.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="campus" className="text-base">Campus Life</TabsTrigger>
            <TabsTrigger value="events" className="text-base">Events</TabsTrigger>
          </TabsList>

          <TabsContent value="campus" className="mt-0">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {galleryImages.campus.map((image, index) => (
                <div
                  key={image.id}
                  className={`${image.color} aspect-square rounded-lg cursor-pointer hover:scale-105 transition-transform shadow-lg flex items-center justify-center animate-fade-in`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="text-white font-semibold text-lg">{image.alt}</span>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="events" className="mt-0">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {galleryImages.events.map((image, index) => (
                <div
                  key={image.id}
                  className={`${image.color} aspect-square rounded-lg cursor-pointer hover:scale-105 transition-transform shadow-lg flex items-center justify-center animate-fade-in`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="text-white font-semibold text-lg">{image.alt}</span>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Gallery;
