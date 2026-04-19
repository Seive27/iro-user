import { useState } from "react";
import {
  PawPrint, Plus, Edit2, Trash2, Eye, Volume2, Activity,
  ShieldCheck, Search, Filter, Calendar, Bell, Users, Home, MapPin, Clock, Upload
} from "lucide-react";
import logo from "../assets/iro-logo.png";

// Initial mock data - matches the user side
const INITIAL_CATS = [
  {
    id: 1,
    name: "Mochi",
    age: "2 yrs",
    gender: "Female",
    breed: "Domestic Shorthair",
    condition: "Three-legged",
    status: "Ready to Adopt",
    personality: "Playful & curious",
    color: "Orange tabby",
    img: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=400&h=400&fit=crop&auto=format",
    story: "Mochi came to us after a road accident left her with a missing front leg. After months of physiotherapy and love, she's learned to run, jump, and play just like any other cat. She absolutely adores feather toys and will follow you from room to room just to be close.",
    medicalNeeds: "Monthly check-in with vet, no medications required. Mobility is excellent.",
    vaccinated: true,
    vaccinationDetails: "FVRCP (01/15/2024), Rabies (01/15/2024), Next due: 01/15/2025",
    dewormed: true,
    dewormingDate: "2024-01-10",
    spayedNeutered: true,
    microchipped: true,
    microchipNumber: "985112001234567",
    fleaTreatment: true,
    lastVetVisit: "2024-03-15",
  },
  {
    id: 2,
    name: "Lumen",
    age: "4 yrs",
    gender: "Male",
    breed: "Tuxedo",
    condition: "One-eyed",
    status: "Ready to Adopt",
    personality: "Gentle & affectionate",
    color: "Black & white",
    img: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=400&fit=crop&auto=format",
    story: "Lumen lost his left eye to an infection before he was rescued, but it hasn't dimmed his spirit one bit. He's a calm, deeply affectionate cat who loves quiet evenings and gentle petting sessions.",
    medicalNeeds: "Occasional eye drops for his remaining eye. Easy to administer, takes about 30 seconds.",
    vaccinated: true,
    vaccinationDetails: "FVRCP (11/20/2023), Rabies (11/20/2023), Next due: 11/20/2024",
    dewormed: true,
    dewormingDate: "2023-11-15",
    spayedNeutered: true,
    microchipped: true,
    microchipNumber: "985112002345678",
    fleaTreatment: true,
    lastVetVisit: "2024-02-28",
  },
  {
    id: 3,
    name: "Pebble",
    age: "1 yr",
    gender: "Female",
    breed: "Tabby",
    condition: "Deaf",
    status: "In Rehabilitation",
    personality: "Bold & adventurous",
    color: "Grey tabby",
    img: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=400&h=400&fit=crop&auto=format",
    story: "Pebble was born deaf and found on the streets at just 6 weeks old. What she lacks in hearing she makes up for in personality — she communicates entirely through body language and eye contact, and she's absolutely fearless.",
    medicalNeeds: "No medications needed. Communication through visual cues — we'll teach you everything!",
    vaccinated: true,
    vaccinationDetails: "FVRCP (02/01/2024), Rabies (02/01/2024), Next due: 02/01/2025",
    dewormed: true,
    dewormingDate: "2024-01-28",
    spayedNeutered: true,
    microchipped: false,
    microchipNumber: "",
    fleaTreatment: true,
    lastVetVisit: "2024-03-20",
  },
  {
    id: 4,
    name: "Thistle",
    age: "6 yrs",
    gender: "Male",
    breed: "Mixed Breed",
    condition: "Cerebellar Hypoplasia",
    status: "Ready to Adopt",
    personality: "Quiet & loving",
    color: "Cream & white",
    img: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=400&h=400&fit=crop&auto=format",
    story: "Thistle has cerebellar hypoplasia, which gives him a signature wobbly walk that everyone falls in love with. Despite his unsteady gait, he lives a full and happy life and requires only minor accommodations.",
    medicalNeeds: "Low-sided litter box, non-slip mats recommended. No medications required.",
    vaccinated: true,
    vaccinationDetails: "FVRCP (10/10/2023), Rabies (10/10/2023), Next due: 10/10/2024",
    dewormed: true,
    dewormingDate: "2023-10-05",
    spayedNeutered: true,
    microchipped: true,
    microchipNumber: "985112003456789",
    fleaTreatment: true,
    lastVetVisit: "2024-01-15",
  },
];

const INITIAL_EVENTS = [
  {
    id: 1,
    day: "22",
    month: "Feb",
    title: "Adoption Fair at Riverside Park",
    description: "Meet our resident cats and learn about disability-friendly adoption.",
    type: "Adoption",
    location: "Riverside Park, Main Pavilion",
    time: "10:00 AM - 4:00 PM",
  },
  {
    id: 2,
    day: "08",
    month: "Mar",
    title: "Volunteer Orientation Day",
    description: "Join our family of caregivers and make a lasting difference.",
    type: "Volunteer",
    location: "Ocattery Shelter, Training Room",
    time: "2:00 PM - 5:00 PM",
  },
  {
    id: 3,
    day: "15",
    month: "Mar",
    title: "Fundraising Charity Dinner",
    description: "An evening of compassion, stories, and community togetherness.",
    type: "Fundraiser",
    location: "Grand Hotel Ballroom",
    time: "6:00 PM - 10:00 PM",
  },
];

function StatusBadge({ status }) {
  const map = {
    "Ready to Adopt": "bg-emerald-100 text-emerald-700 border-emerald-200",
    "In Rehabilitation": "bg-amber-100 text-amber-700 border-amber-200",
    "Ongoing Care": "bg-sky-100 text-sky-700 border-sky-200",
    "Adopted": "bg-slate-100 text-slate-600 border-slate-200",
  };
  return (
    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${map[status] || "bg-slate-100 text-slate-600"}`}>
      {status}
    </span>
  );
}

function CatFormModal({ cat, onClose, onSave }) {
  const [formData, setFormData] = useState(cat || {
    name: "",
    age: "",
    gender: "Female",
    breed: "Mixed Breed",
    condition: "",
    status: "In Rehabilitation",
    personality: "",
    color: "",
    img: "",
    story: "",
    medicalNeeds: "",
    vaccinated: false,
    vaccinationDetails: "",
    dewormed: false,
    dewormingDate: "",
    spayedNeutered: false,
    microchipped: false,
    microchipNumber: "",
    fleaTreatment: false,
    lastVetVisit: "",
  });
  const [dragActive, setDragActive] = useState(false);
  const [imagePreview, setImagePreview] = useState(cat?.img || "");

  const handleImageChange = (file) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setImagePreview(base64String);
        setFormData({...formData, img: base64String});
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImageChange(e.dataTransfer.files[0]);
    }
  };

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleImageChange(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.img) {
      alert("Please upload a cat photo");
      return;
    }
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8">
        <h2 className="display text-2xl font-bold text-slate-800 mb-6">
          {cat ? "Edit Cat" : "Add New Cat"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-slate-600 uppercase tracking-wide mb-2 block">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 outline-none text-sm"
                required
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-600 uppercase tracking-wide mb-2 block">Breed</label>
              <select
                value={formData.breed}
                onChange={(e) => setFormData({...formData, breed: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 outline-none text-sm"
              >
                <option>Mixed Breed</option>
                <option>Domestic Shorthair</option>
                <option>Domestic Longhair</option>
                <option>Siamese</option>
                <option>Persian</option>
                <option>Maine Coon</option>
                <option>Bengal</option>
                <option>Ragdoll</option>
                <option>British Shorthair</option>
                <option>Sphynx</option>
                <option>Scottish Fold</option>
                <option>Tabby</option>
                <option>Calico</option>
                <option>Tuxedo</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-600 uppercase tracking-wide mb-2 block">Age</label>
              <input
                type="text"
                value={formData.age}
                onChange={(e) => setFormData({...formData, age: e.target.value})}
                placeholder="e.g., 2 yrs"
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 outline-none text-sm"
                required
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-600 uppercase tracking-wide mb-2 block">Gender</label>
              <select
                value={formData.gender}
                onChange={(e) => setFormData({...formData, gender: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 outline-none text-sm"
              >
                <option>Female</option>
                <option>Male</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-600 uppercase tracking-wide mb-2 block">Status</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({...formData, status: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 outline-none text-sm"
              >
                <option>In Rehabilitation</option>
                <option>Ready to Adopt</option>
                <option>Ongoing Care</option>
                <option>Adopted</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-600 uppercase tracking-wide mb-2 block">Condition</label>
              <input
                type="text"
                value={formData.condition}
                onChange={(e) => setFormData({...formData, condition: e.target.value})}
                placeholder="e.g., Three-legged"
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 outline-none text-sm"
                required
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-600 uppercase tracking-wide mb-2 block">Color</label>
              <input
                type="text"
                value={formData.color}
                onChange={(e) => setFormData({...formData, color: e.target.value})}
                placeholder="e.g., Orange tabby"
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 outline-none text-sm"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wide mb-2 block">Personality</label>
            <input
              type="text"
              value={formData.personality}
              onChange={(e) => setFormData({...formData, personality: e.target.value})}
              placeholder="e.g., Playful & curious"
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 outline-none text-sm"
              required
            />
          </div>

          <div>
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wide mb-2 block">Their Story</label>
            <textarea
              value={formData.story}
              onChange={(e) => setFormData({...formData, story: e.target.value})}
              placeholder="Tell the cat's story - how they came to the shelter, their journey, what makes them special..."
              rows="4"
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 outline-none text-sm resize-none"
              required
            />
            <p className="text-xs text-slate-400 mt-1">This will be displayed on the adoption page</p>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wide mb-2 block">Medical Needs</label>
            <textarea
              value={formData.medicalNeeds}
              onChange={(e) => setFormData({...formData, medicalNeeds: e.target.value})}
              placeholder="e.g., Monthly check-in with vet, no medications required. Mobility is excellent."
              rows="3"
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 outline-none text-sm resize-none"
              required
            />
            <p className="text-xs text-slate-400 mt-1">Describe any special care or medical requirements</p>
          </div>

          {/* Medical Records Section */}
          <div className="border-t-2 border-slate-200 pt-6 mt-2">
            <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wide mb-4 flex items-center gap-2">
              <ShieldCheck size={16} className="text-blue-600" />
              Medical Records & Vaccinations
            </h3>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              {/* Checkboxes */}
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={formData.vaccinated}
                    onChange={(e) => setFormData({...formData, vaccinated: e.target.checked})}
                    className="w-5 h-5 rounded border-2 border-slate-300 text-blue-600 focus:ring-2 focus:ring-blue-500 cursor-pointer"
                  />
                  <span className="text-sm font-medium text-slate-700 group-hover:text-blue-600 transition-colors">
                    Vaccinated (FVRCP, Rabies)
                  </span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={formData.dewormed}
                    onChange={(e) => setFormData({...formData, dewormed: e.target.checked})}
                    className="w-5 h-5 rounded border-2 border-slate-300 text-blue-600 focus:ring-2 focus:ring-blue-500 cursor-pointer"
                  />
                  <span className="text-sm font-medium text-slate-700 group-hover:text-blue-600 transition-colors">
                    Dewormed
                  </span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={formData.spayedNeutered}
                    onChange={(e) => setFormData({...formData, spayedNeutered: e.target.checked})}
                    className="w-5 h-5 rounded border-2 border-slate-300 text-blue-600 focus:ring-2 focus:ring-blue-500 cursor-pointer"
                  />
                  <span className="text-sm font-medium text-slate-700 group-hover:text-blue-600 transition-colors">
                    Spayed/Neutered
                  </span>
                </label>
              </div>

              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={formData.microchipped}
                    onChange={(e) => setFormData({...formData, microchipped: e.target.checked})}
                    className="w-5 h-5 rounded border-2 border-slate-300 text-blue-600 focus:ring-2 focus:ring-blue-500 cursor-pointer"
                  />
                  <span className="text-sm font-medium text-slate-700 group-hover:text-blue-600 transition-colors">
                    Microchipped
                  </span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={formData.fleaTreatment}
                    onChange={(e) => setFormData({...formData, fleaTreatment: e.target.checked})}
                    className="w-5 h-5 rounded border-2 border-slate-300 text-blue-600 focus:ring-2 focus:ring-blue-500 cursor-pointer"
                  />
                  <span className="text-sm font-medium text-slate-700 group-hover:text-blue-600 transition-colors">
                    Flea/Tick Treatment
                  </span>
                </label>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {formData.vaccinated && (
                <div>
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wide mb-2 block">
                    Vaccination Details
                  </label>
                  <textarea
                    value={formData.vaccinationDetails}
                    onChange={(e) => setFormData({...formData, vaccinationDetails: e.target.value})}
                    placeholder="e.g., FVRCP (12/15/2024), Rabies (12/15/2024), Next due: 12/15/2025"
                    rows="2"
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 outline-none text-sm resize-none"
                  />
                </div>
              )}

              {formData.dewormed && (
                <div>
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wide mb-2 block">
                    Last Deworming Date
                  </label>
                  <input
                    type="date"
                    value={formData.dewormingDate}
                    onChange={(e) => setFormData({...formData, dewormingDate: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 outline-none text-sm"
                  />
                </div>
              )}

              {formData.microchipped && (
                <div>
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wide mb-2 block">
                    Microchip Number
                  </label>
                  <input
                    type="text"
                    value={formData.microchipNumber}
                    onChange={(e) => setFormData({...formData, microchipNumber: e.target.value})}
                    placeholder="e.g., 985112345678901"
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 outline-none text-sm"
                  />
                </div>
              )}

              <div>
                <label className="text-xs font-bold text-slate-600 uppercase tracking-wide mb-2 block">
                  Last Vet Visit
                </label>
                <input
                  type="date"
                  value={formData.lastVetVisit}
                  onChange={(e) => setFormData({...formData, lastVetVisit: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 outline-none text-sm"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wide mb-2 block">Cat Photo</label>
            
            {/* Image Preview */}
            {imagePreview && (
              <div className="mb-4 relative">
                <img 
                  src={imagePreview} 
                  alt="Preview" 
                  className="w-full h-48 object-cover rounded-xl border-2 border-slate-200"
                />
                <button
                  type="button"
                  onClick={() => {
                    setImagePreview("");
                    setFormData({...formData, img: ""});
                  }}
                  className="absolute top-2 right-2 bg-rose-500 text-white p-2 rounded-lg hover:bg-rose-600 transition-colors"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            )}

            {/* Drag and Drop Area */}
            <div
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
                dragActive 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-slate-300 bg-slate-50 hover:border-blue-400'
              }`}
            >
              <input
                type="file"
                accept="image/*"
                onChange={handleFileInput}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Upload className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-700 mb-1">
                    Drop your image here, or <span className="text-blue-600">browse</span>
                  </p>
                  <p className="text-xs text-slate-400">
                    Supports: JPG, PNG, GIF (Max 5MB)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-bold text-sm hover:bg-blue-700 transition-colors"
            >
              {cat ? "Update Cat" : "Add Cat"}
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

function EventTypeBadge({ type }) {
  const map = {
    "Adoption": "bg-emerald-100 text-emerald-700 border-emerald-200",
    "Volunteer": "bg-sky-100 text-sky-700 border-sky-200",
    "Fundraiser": "bg-amber-100 text-amber-700 border-amber-200",
  };
  return (
    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${map[type] || "bg-slate-100 text-slate-600"}`}>
      {type}
    </span>
  );
}

function EventFormModal({ event, onClose, onSave }) {
  const [formData, setFormData] = useState(event || {
    day: "",
    month: "",
    title: "",
    description: "",
    type: "Adoption",
    location: "",
    time: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8">
        <h2 className="display text-2xl font-bold text-slate-800 mb-6">
          {event ? "Edit Event" : "Add New Event"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-slate-600 uppercase tracking-wide mb-2 block">Day</label>
              <input
                type="text"
                value={formData.day}
                onChange={(e) => setFormData({...formData, day: e.target.value})}
                placeholder="e.g., 22"
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 outline-none text-sm"
                required
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-600 uppercase tracking-wide mb-2 block">Month</label>
              <input
                type="text"
                value={formData.month}
                onChange={(e) => setFormData({...formData, month: e.target.value})}
                placeholder="e.g., Feb"
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 outline-none text-sm"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wide mb-2 block">Event Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              placeholder="e.g., Adoption Fair at Riverside Park"
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 outline-none text-sm"
              required
            />
          </div>

          <div>
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wide mb-2 block">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              placeholder="Brief description of the event..."
              rows="3"
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 outline-none text-sm resize-none"
              required
            />
          </div>

          <div>
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wide mb-2 block">Event Type</label>
            <select
              value={formData.type}
              onChange={(e) => setFormData({...formData, type: e.target.value})}
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 outline-none text-sm"
            >
              <option>Adoption</option>
              <option>Volunteer</option>
              <option>Fundraiser</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wide mb-2 block">Location</label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({...formData, location: e.target.value})}
              placeholder="e.g., Riverside Park, Main Pavilion"
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 outline-none text-sm"
              required
            />
          </div>

          <div>
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wide mb-2 block">Time</label>
            <input
              type="text"
              value={formData.time}
              onChange={(e) => setFormData({...formData, time: e.target.value})}
              placeholder="e.g., 10:00 AM - 4:00 PM"
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 outline-none text-sm"
              required
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-bold text-sm hover:bg-blue-700 transition-colors"
            >
              {event ? "Update Event" : "Add Event"}
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

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("cats");
  const [cats, setCats] = useState(INITIAL_CATS);
  const [events, setEvents] = useState(INITIAL_EVENTS);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterEventType, setFilterEventType] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [showEventModal, setShowEventModal] = useState(false);
  const [editingCat, setEditingCat] = useState(null);
  const [editingEvent, setEditingEvent] = useState(null);

  const handleAddCat = () => {
    setEditingCat(null);
    setShowModal(true);
  };

  const handleEditCat = (cat) => {
    setEditingCat(cat);
    setShowModal(true);
  };

  const handleDeleteCat = (id) => {
    if (window.confirm("Are you sure you want to delete this cat?")) {
      setCats(cats.filter(c => c.id !== id));
    }
  };

  const handleSaveCat = (catData) => {
    if (editingCat) {
      setCats(cats.map(c => c.id === editingCat.id ? {...catData, id: editingCat.id} : c));
    } else {
      setCats([...cats, {...catData, id: Date.now()}]);
    }
    setShowModal(false);
  };

  const handleAddEvent = () => {
    setEditingEvent(null);
    setShowEventModal(true);
  };

  const handleEditEvent = (event) => {
    setEditingEvent(event);
    setShowEventModal(true);
  };

  const handleDeleteEvent = (id) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      setEvents(events.filter(e => e.id !== id));
    }
  };

  const handleSaveEvent = (eventData) => {
    if (editingEvent) {
      setEvents(events.map(e => e.id === editingEvent.id ? {...eventData, id: editingEvent.id} : e));
    } else {
      setEvents([...events, {...eventData, id: Date.now()}]);
    }
    setShowEventModal(false);
  };

  const filteredCats = cats.filter(cat => {
    const matchSearch = cat.name.toLowerCase().includes(search.toLowerCase()) ||
                       cat.condition.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filterStatus === "all" || cat.status === filterStatus;
    return matchSearch && matchStatus;
  });

  const filteredEvents = events.filter(event => {
    const matchSearch = event.title.toLowerCase().includes(search.toLowerCase()) ||
                       event.description.toLowerCase().includes(search.toLowerCase());
    const matchType = filterEventType === "all" || event.type === filterEventType;
    return matchSearch && matchType;
  });

  return (
    <div className="min-h-screen bg-slate-50" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@400;500;700&display=swap');
        .display { font-family: 'Playfair Display', serif; }
      `}</style>

      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Ocattery Logo" className="h-12 w-auto object-contain" />
          </div>

          <div className="text-xs text-slate-400 font-medium">
            Admin Dashboard
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Tabs */}
        <div className="flex gap-2 mb-8">
          <button
            onClick={() => setActiveTab("cats")}
            className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${
              activeTab === "cats"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                : "bg-white text-slate-600 border border-slate-200 hover:border-blue-300"
            }`}
          >
            <div className="flex items-center gap-2">
              <PawPrint size={16} />
              Cats Management
            </div>
          </button>
          <button
            onClick={() => setActiveTab("events")}
            className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${
              activeTab === "events"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                : "bg-white text-slate-600 border border-slate-200 hover:border-blue-300"
            }`}
          >
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              Events Management
            </div>
          </button>
        </div>

        {/* Stats */}
        {activeTab === "cats" && (
          <div className="grid md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Cats", value: cats.length, icon: PawPrint, color: "bg-blue-100 text-blue-600" },
            { label: "Ready to Adopt", value: cats.filter(c => c.status === "Ready to Adopt").length, icon: Home, color: "bg-emerald-100 text-emerald-600" },
            { label: "In Rehabilitation", value: cats.filter(c => c.status === "In Rehabilitation").length, icon: Activity, color: "bg-amber-100 text-amber-600" },
            { label: "Adopted", value: cats.filter(c => c.status === "Adopted").length, icon: ShieldCheck, color: "bg-slate-100 text-slate-600" },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <div className={`w-10 h-10 ${stat.color} rounded-xl flex items-center justify-center mb-3`}>
                <stat.icon size={20} />
              </div>
              <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
              <p className="text-xs text-slate-400 font-medium">{stat.label}</p>
            </div>
          ))}
          </div>
        )}

        {activeTab === "events" && (
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {[
              { label: "Total Events", value: events.length, icon: Calendar, color: "bg-blue-100 text-blue-600" },
              { label: "Adoption Events", value: events.filter(e => e.type === "Adoption").length, icon: PawPrint, color: "bg-emerald-100 text-emerald-600" },
              { label: "Volunteer Events", value: events.filter(e => e.type === "Volunteer").length, icon: Users, color: "bg-sky-100 text-sky-600" },
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <div className={`w-10 h-10 ${stat.color} rounded-xl flex items-center justify-center mb-3`}>
                  <stat.icon size={20} />
                </div>
                <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
                <p className="text-xs text-slate-400 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        )}

        {/* Controls */}
        {activeTab === "cats" && (
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm mb-6">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="flex-1 flex gap-3 w-full md:w-auto">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search cats..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-blue-500 transition-colors"
              >
                <option value="all">All Status</option>
                <option value="Ready to Adopt">Ready to Adopt</option>
                <option value="In Rehabilitation">In Rehabilitation</option>
                <option value="Ongoing Care">Ongoing Care</option>
                <option value="Adopted">Adopted</option>
              </select>
            </div>

            <button
              onClick={handleAddCat}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
            >
              <Plus size={16} />
              Add New Cat
            </button>
          </div>
          </div>
        )}

        {activeTab === "events" && (
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm mb-6">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="flex-1 flex gap-3 w-full md:w-auto">
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

                <select
                  value={filterEventType}
                  onChange={(e) => setFilterEventType(e.target.value)}
                  className="px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-blue-500 transition-colors"
                >
                  <option value="all">All Types</option>
                  <option value="Adoption">Adoption</option>
                  <option value="Volunteer">Volunteer</option>
                  <option value="Fundraiser">Fundraiser</option>
                </select>
              </div>

              <button
                onClick={handleAddEvent}
                className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
              >
                <Plus size={16} />
                Add New Event
              </button>
            </div>
          </div>
        )}

        {/* Cats Grid */}
        {activeTab === "cats" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCats.map((cat) => (
            <div key={cat.id} className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img src={cat.img} alt={cat.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="display text-lg font-bold text-slate-800">{cat.name}</h3>
                    <p className="text-xs text-blue-600 font-semibold">{cat.condition} · {cat.age}</p>
                  </div>
                  <StatusBadge status={cat.status} />
                </div>
                <p className="text-xs text-slate-400 mb-4">{cat.personality}</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEditCat(cat)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                  >
                    <Edit2 size={14} />
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteCat(cat.id)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-rose-50 text-rose-600 hover:bg-rose-100 transition-colors"
                  >
                    <Trash2 size={14} />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
          </div>
        )}

        {activeTab === "cats" && filteredCats.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <PawPrint className="w-7 h-7 text-slate-300" />
            </div>
            <p className="text-slate-500 font-semibold">No cats found</p>
            <p className="text-slate-400 text-sm">Try adjusting your search or filters</p>
          </div>
        )}

        {/* Events List */}
        {activeTab === "events" && (
          <div className="space-y-4">
            {filteredEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex flex-col items-center justify-center">
                      <p className="text-2xl font-bold text-blue-600">{event.day}</p>
                      <p className="text-xs font-semibold text-blue-400 uppercase">{event.month}</p>
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="display text-lg font-bold text-slate-800 mb-1">{event.title}</h3>
                        <p className="text-sm text-slate-500 mb-3">{event.description}</p>
                      </div>
                      <EventTypeBadge type={event.type} />
                    </div>

                    <div className="flex flex-wrap gap-4 text-xs text-slate-400 mb-4">
                      <div className="flex items-center gap-1.5">
                        <MapPin size={14} />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock size={14} />
                        {event.time}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEditEvent(event)}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                      >
                        <Edit2 size={14} />
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteEvent(event.id)}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-rose-50 text-rose-600 hover:bg-rose-100 transition-colors"
                      >
                        <Trash2 size={14} />
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "events" && filteredEvents.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-7 h-7 text-slate-300" />
            </div>
            <p className="text-slate-500 font-semibold">No events found</p>
            <p className="text-slate-400 text-sm">Try adjusting your search or filters</p>
          </div>
        )}
      </main>

      {showModal && (
        <CatFormModal
          cat={editingCat}
          onClose={() => setShowModal(false)}
          onSave={handleSaveCat}
        />
      )}

      {showEventModal && (
        <EventFormModal
          event={editingEvent}
          onClose={() => setShowEventModal(false)}
          onSave={handleSaveEvent}
        />
      )}
    </div>
  );
}
