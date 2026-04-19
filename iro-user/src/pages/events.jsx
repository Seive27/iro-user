import { useState } from "react";
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  PawPrint, 
  HandHeart,
  ChevronRight,
  Filter,
  Search,
  X,
  Mail,
  User,
  Phone
} from "lucide-react";

function RegistrationModal({ event, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    attendees: "1",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration submission here
    alert(`Registration submitted for ${event.title}!`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-8">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-xl flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5 text-slate-600" />
        </button>

        <div className="mb-6">
          <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
            <Calendar className="w-6 h-6 text-blue-600" />
          </div>
          <h2 className="display text-2xl font-bold text-slate-800 mb-2">
            Register for Event
          </h2>
          <p className="text-slate-500 text-sm">{event.title}</p>
          <div className="flex items-center gap-4 mt-3 text-xs text-slate-400">
            <span className="flex items-center gap-1">
              <Calendar size={12} />
              {event.month} {event.day}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={12} />
              {event.time}
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wide mb-2 block">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="John Doe"
                className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 outline-none text-sm"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wide mb-2 block">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="john@example.com"
                className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 outline-none text-sm"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wide mb-2 block">
              Phone Number
            </label>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                placeholder="+1 (555) 000-0000"
                className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 outline-none text-sm"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wide mb-2 block">
              Number of Attendees
            </label>
            <select
              value={formData.attendees}
              onChange={(e) => setFormData({...formData, attendees: e.target.value})}
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 outline-none text-sm"
            >
              <option value="1">1 Person</option>
              <option value="2">2 People</option>
              <option value="3">3 People</option>
              <option value="4">4 People</option>
              <option value="5+">5+ People</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wide mb-2 block">
              Additional Message (Optional)
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              placeholder="Any questions or special requirements?"
              rows="3"
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 outline-none text-sm resize-none"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-bold text-sm hover:bg-blue-700 transition-colors"
            >
              Complete Registration
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 rounded-xl font-bold text-sm border-2 border-slate-200 hover:bg-slate-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const EVENTS = [
  {
    id: 1,
    day: "22",
    month: "Feb",
    title: "Adoption Fair at Riverside Park",
    description: "Meet our resident cats and learn about disability-friendly adoption.",
    type: "Adoption",
    typeColor: "bg-emerald-100 text-emerald-700 border-emerald-200",
    icon: PawPrint,
    location: "Riverside Park, Main Pavilion",
    time: "10:00 AM - 4:00 PM",
    details: "Join us for a special adoption event where you can meet our wonderful cats looking for forever homes. Our team will be on hand to answer questions about caring for cats with special needs. Free refreshments and cat care workshops throughout the day!",
  },
  {
    id: 2,
    day: "08",
    month: "Mar",
    title: "Volunteer Orientation Day",
    description: "Join our family of caregivers and make a lasting difference.",
    type: "Volunteer",
    typeColor: "bg-sky-100 text-sky-700 border-sky-200",
    icon: Users,
    location: "Ocattery Shelter, Training Room",
    time: "2:00 PM - 5:00 PM",
    details: "Learn about volunteer opportunities at Ocattery. We'll cover cat care basics, safety protocols, and how you can contribute to our mission. No experience necessary - just a love for cats and a desire to help!",
  },
  {
    id: 3,
    day: "15",
    month: "Mar",
    title: "Fundraising Charity Dinner",
    description: "An evening of compassion, stories, and community togetherness.",
    type: "Fundraiser",
    typeColor: "bg-amber-100 text-amber-700 border-amber-200",
    icon: HandHeart,
    location: "Grand Hotel Ballroom",
    time: "6:00 PM - 10:00 PM",
    details: "Support Ocattery at our annual charity dinner. Enjoy a gourmet meal, live music, and inspiring stories from adopters. Silent auction featuring local artists and businesses. All proceeds go directly to cat care and medical treatments.",
  },
  {
    id: 4,
    day: "29",
    month: "Mar",
    title: "Spring Adoption Event",
    description: "Special spring event with reduced adoption fees for senior cats.",
    type: "Adoption",
    typeColor: "bg-emerald-100 text-emerald-700 border-emerald-200",
    icon: PawPrint,
    location: "Ocattery Shelter",
    time: "11:00 AM - 5:00 PM",
    details: "Celebrate spring with us! Reduced adoption fees for cats 5 years and older. Meet our senior cats who have so much love to give. Includes free starter kit with adoption.",
  },
  {
    id: 5,
    day: "12",
    month: "Apr",
    title: "Cat Care Workshop",
    description: "Learn essential skills for caring for cats with special needs.",
    type: "Volunteer",
    typeColor: "bg-sky-100 text-sky-700 border-sky-200",
    icon: Users,
    location: "Ocattery Shelter, Training Room",
    time: "1:00 PM - 4:00 PM",
    details: "Hands-on workshop covering medication administration, mobility assistance, and behavioral support for cats with disabilities. Perfect for current and prospective adopters and volunteers.",
  },
  {
    id: 6,
    day: "26",
    month: "Apr",
    title: "Community Fundraiser Walk",
    description: "Walk for whiskers - a 5K fundraising walk for cat rescue.",
    type: "Fundraiser",
    typeColor: "bg-amber-100 text-amber-700 border-amber-200",
    icon: HandHeart,
    location: "Riverside Trail, Starting Point A",
    time: "8:00 AM - 12:00 PM",
    details: "Join us for a scenic 5K walk along the river. Registration includes a t-shirt and goodie bag. Prizes for top fundraisers. Family and pet-friendly event!",
  },
];

function EventTypeBadge({ type, typeColor }) {
  return (
    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${typeColor}`}>
      {type}
    </span>
  );
}

export default function EventsPage() {
  const [filterType, setFilterType] = useState("all");
  const [search, setSearch] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);

  const filteredEvents = EVENTS.filter(event => {
    const matchType = filterType === "all" || event.type === filterType;
    const matchSearch = event.title.toLowerCase().includes(search.toLowerCase()) ||
                       event.description.toLowerCase().includes(search.toLowerCase());
    return matchType && matchSearch;
  });

  return (
    <div className="w-full min-h-screen bg-slate-50" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@400;500;700&display=swap');
        .display { font-family: 'Playfair Display', serif; }
        .gradient-text { background: linear-gradient(135deg, #2563eb, #0ea5e9); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .event-card { transition: transform .3s ease, box-shadow .3s ease; }
        .event-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(14,100,180,.1); }
      `}</style>

      {/* Hero Section */}
      <div className="relative w-full bg-gradient-to-br from-blue-50 via-sky-50 to-slate-50 pt-40 pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-sky-100/60 to-blue-100/40 blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-xs font-semibold px-4 py-2 rounded-full mb-8 tracking-wide">
              <Calendar className="w-3.5 h-3.5" />
              {EVENTS.length} Upcoming Events
            </div>
            
            <h1 className="display text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.08] text-slate-800 mb-6">
              Upcoming{" "}
              <span className="display italic gradient-text">Events</span>
            </h1>
            
            <p className="text-slate-500 text-lg leading-relaxed mb-10">
              Join us at our upcoming events and be part of the Ocattery community. From adoption fairs to fundraisers, there's always something happening!
            </p>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-8">
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search events..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="w-4 h-4 text-slate-400 flex-shrink-0" />
              {["all", "Adoption", "Volunteer", "Fundraiser"].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilterType(type)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-semibold border transition-all ${
                    filterType === type
                      ? "bg-blue-600 text-white border-transparent shadow-lg shadow-blue-200"
                      : "bg-white border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-600"
                  }`}
                >
                  {type === "all" ? "All Events" : type}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Events List */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 pb-24">
        <p className="text-slate-400 text-xs font-semibold mb-6 uppercase tracking-wide">
          Showing {filteredEvents.length} of {EVENTS.length} events
        </p>

        <div className="space-y-6">
          {filteredEvents.map((event) => {
            const Icon = event.icon;
            return (
              <div key={event.id} className="event-card bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
                <div className="flex flex-col md:flex-row">
                  {/* Date Badge */}
                  <div className="flex-shrink-0 bg-gradient-to-br from-blue-600 to-indigo-700 p-8 flex flex-col items-center justify-center text-white md:w-32">
                    <p className="text-4xl font-bold mb-1">{event.day}</p>
                    <p className="text-sm font-semibold uppercase tracking-wider opacity-90">{event.month}</p>
                  </div>

                  {/* Event Details */}
                  <div className="flex-1 p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`w-10 h-10 ${event.typeColor.split(' ')[0]} rounded-xl flex items-center justify-center`}>
                            <Icon className={`w-5 h-5 ${event.typeColor.split(' ')[1]}`} />
                          </div>
                          <EventTypeBadge type={event.type} typeColor={event.typeColor} />
                        </div>
                        <h2 className="display text-2xl font-bold text-slate-800 mb-2">{event.title}</h2>
                        <p className="text-slate-500 text-sm leading-relaxed mb-4">{event.description}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-6 text-sm text-slate-600 mb-6">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-blue-600" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-blue-600" />
                        <span>{event.time}</span>
                      </div>
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed mb-6 bg-slate-50 p-4 rounded-xl">
                      {event.details}
                    </p>

                    <button 
                      onClick={() => setSelectedEvent(event)}
                      className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
                    >
                      Register Now
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-7 h-7 text-slate-300" />
            </div>
            <p className="text-slate-500 font-semibold">No events found</p>
            <p className="text-slate-400 text-sm">Try adjusting your search or filters</p>
          </div>
        )}
      </div>

      {selectedEvent && (
        <RegistrationModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
}
