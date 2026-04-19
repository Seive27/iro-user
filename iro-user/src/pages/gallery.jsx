import { useState } from "react";
import { X, Camera, Heart, Calendar, ZoomIn } from "lucide-react";

const GALLERY_IMAGES = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?w=800&h=800&fit=crop&auto=format",
    title: "First steps after surgery",
    category: "Recovery",
    date: "March 2024",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1615789591457-74a63395c990?w=800&h=800&fit=crop&auto=format",
    title: "Therapy & recovery",
    category: "Recovery",
    date: "February 2024",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=800&h=800&fit=crop&auto=format",
    title: "Meeting forever families",
    category: "Adoption",
    date: "March 2024",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?w=800&h=800&fit=crop&auto=format",
    title: "Learning to play again",
    category: "Daily Life",
    date: "January 2024",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=800&h=800&fit=crop&auto=format",
    title: "Volunteer care moments",
    category: "Volunteers",
    date: "February 2024",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=800&h=800&fit=crop&auto=format",
    title: "Mochi's journey",
    category: "Success Stories",
    date: "December 2023",
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&h=800&fit=crop&auto=format",
    title: "Lumen's new beginning",
    category: "Success Stories",
    date: "November 2023",
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=800&h=800&fit=crop&auto=format",
    title: "Pebble's playful spirit",
    category: "Daily Life",
    date: "January 2024",
  },
  {
    id: 9,
    url: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=800&h=800&fit=crop&auto=format",
    title: "Thistle's gentle nature",
    category: "Daily Life",
    date: "February 2024",
  },
  {
    id: 10,
    url: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800&h=800&fit=crop&auto=format",
    title: "Community adoption event",
    category: "Events",
    date: "March 2024",
  },
  {
    id: 11,
    url: "https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?w=800&h=800&fit=crop&auto=format",
    title: "Shelter care routine",
    category: "Daily Life",
    date: "January 2024",
  },
  {
    id: 12,
    url: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=800&h=800&fit=crop&auto=format",
    title: "Happy adoption day",
    category: "Adoption",
    date: "February 2024",
  },
];

const CATEGORIES = ["All", "Recovery", "Adoption", "Daily Life", "Volunteers", "Success Stories", "Events"];

function ImageModal({ image, onClose, onNext, onPrev }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/95 backdrop-blur-sm">
      <button
        onClick={onClose}
        className="absolute top-5 right-5 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-colors"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={onPrev}
        className="absolute left-5 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-colors"
      >
        <span className="text-white text-2xl">‹</span>
      </button>

      <button
        onClick={onNext}
        className="absolute right-5 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-colors"
      >
        <span className="text-white text-2xl">›</span>
      </button>

      <div className="max-w-5xl w-full">
        <img
          src={image.url}
          alt={image.title}
          className="w-full h-auto max-h-[80vh] object-contain rounded-2xl"
        />
        <div className="mt-6 text-center">
          <h3 className="text-white text-2xl font-bold mb-2">{image.title}</h3>
          <div className="flex items-center justify-center gap-4 text-white/60 text-sm">
            <span className="flex items-center gap-1">
              <Heart size={14} />
              {image.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              {image.date}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = selectedCategory === "All" 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === selectedCategory);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleNext = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const handlePrev = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <div className="w-full min-h-screen bg-slate-50" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@400;500;700&display=swap');
        .display { font-family: 'Playfair Display', serif; }
        .gradient-text { background: linear-gradient(135deg, #2563eb, #0ea5e9); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .gallery-item { transition: transform .3s ease, box-shadow .3s ease; }
        .gallery-item:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(14,100,180,.15); }
        .gallery-item:hover .overlay { opacity: 1; }
        .overlay { opacity: 0; transition: opacity .3s ease; }
      `}</style>

      {/* Hero Section */}
      <div className="relative w-full bg-gradient-to-br from-blue-50 via-sky-50 to-slate-50 pt-40 pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-sky-100/60 to-blue-100/40 blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-xs font-semibold px-4 py-2 rounded-full mb-8 tracking-wide">
              <Camera className="w-3.5 h-3.5" />
              {GALLERY_IMAGES.length} Photos
            </div>
            
            <h1 className="display text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.08] text-slate-800 mb-6">
              Our{" "}
              <span className="display italic gradient-text">Gallery</span>
            </h1>
            
            <p className="text-slate-500 text-lg leading-relaxed mb-10">
              Moments of hope, healing, and happiness. See the incredible journey of our rescued cats and the community that supports them.
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-8">
        <div className="flex flex-wrap justify-center gap-3">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-xl text-sm font-semibold border transition-all ${
                selectedCategory === category
                  ? "bg-blue-600 text-white border-transparent shadow-lg shadow-blue-200"
                  : "bg-white border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 pb-24">
        <p className="text-slate-400 text-xs font-semibold mb-6 uppercase tracking-wide">
          Showing {filteredImages.length} of {GALLERY_IMAGES.length} photos
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              onClick={() => handleImageClick(image)}
              className="gallery-item bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm cursor-pointer group"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="overlay absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent flex items-end p-4">
                  <div className="text-white">
                    <h3 className="font-bold text-sm mb-1">{image.title}</h3>
                    <div className="flex items-center gap-3 text-xs text-white/80">
                      <span className="flex items-center gap-1">
                        <Heart size={10} />
                        {image.category}
                      </span>
                      <span>{image.date}</span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Camera className="w-7 h-7 text-slate-300" />
            </div>
            <p className="text-slate-500 font-semibold">No photos found</p>
            <p className="text-slate-400 text-sm">Try selecting a different category</p>
          </div>
        )}
      </div>

      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </div>
  );
}
