
const artistsData = [
  // ₹10,000 - ₹20,000
  { id: 1, name: "Nisha Sharma", category: "Dancer", location: "Pune", priceRange: "₹10,000 - ₹20,000", languages: ["Hindi"], imageUrl: "https://images.unsplash.com/photo-1515165562835-c4f6f03d8b19" },
  { id: 2, name: "Priya Dance Troupe", category: "Dancer", location: "Jaipur", priceRange: "₹10,000 - ₹20,000", languages: ["Hindi"], imageUrl: "https://images.unsplash.com/photo-1521747116042-5a810fda9664" },
  { id: 3, name: "Standup Suraj", category: "Comedian", location: "Lucknow", priceRange: "₹10,000 - ₹20,000", languages: ["Hindi"], imageUrl: "https://images.unsplash.com/photo-1524503033411-c9566986fc8f" },
  { id: 4, name: "Fusion Moves", category: "Dancer", location: "Goa", priceRange: "₹10,000 - ₹20,000", languages: ["Hindi", "English"], imageUrl: "https://images.unsplash.com/photo-1533113351817-84c5e43357b2" },
  { id: 5, name: "Anaya Sings", category: "Singer", location: "Lucknow", priceRange: "₹10,000 - ₹20,000", languages: ["Hindi", "English"], imageUrl: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2" },
  { id: 6, name: "Laughing Manish", category: "Comedian", location: "Pune", priceRange: "₹10,000 - ₹20,000", languages: ["Hindi"], imageUrl: "https://images.unsplash.com/photo-1524503033411-c9566986fc8f" },
  { id: 7, name: "Melody Mita", category: "Singer", location: "Jaipur", priceRange: "₹10,000 - ₹20,000", languages: ["Hindi"], imageUrl: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2" },
  { id: 8, name: "Funny Aakash", category: "Comedian", location: "Ahmedabad", priceRange: "₹10,000 - ₹20,000", languages: ["Gujarati", "Hindi"], imageUrl: "https://images.unsplash.com/photo-1524503033411-c9566986fc8f" },

  // ₹20,000 - ₹40,000
  { id: 9, name: "Aarav Kapoor", category: "Singer", location: "Mumbai", priceRange: "₹20,000 - ₹40,000", languages: ["Hindi", "English"], imageUrl: "https://images.unsplash.com/photo-1521336575829-47d46d12d2fc" },
  { id: 10, name: "Comedy King Ravi", category: "Comedian", location: "Chennai", priceRange: "₹20,000 - ₹40,000", languages: ["Tamil", "English"], imageUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1" },
  { id: 11, name: "Jolly Jokes", category: "Comedian", location: "Mumbai", priceRange: "₹20,000 - ₹40,000", languages: ["Hindi", "English"], imageUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1" },
  { id: 12, name: "Vocal Vaani", category: "Singer", location: "Hyderabad", priceRange: "₹20,000 - ₹40,000", languages: ["Telugu", "Hindi"], imageUrl: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2" },
  { id: 13, name: "Rhythm Troupe", category: "Dancer", location: "Delhi", priceRange: "₹20,000 - ₹40,000", languages: ["Hindi"], imageUrl: "https://images.unsplash.com/photo-1533113351817-84c5e43357b2" },
  { id: 14, name: "The Dance Crew", category: "Dancer", location: "Chandigarh", priceRange: "₹20,000 - ₹40,000", languages: ["Hindi"], imageUrl: "https://images.unsplash.com/photo-1533113351817-84c5e43357b2" },
  { id: 15, name: "Harmony Voices", category: "Singer", location: "Delhi", priceRange: "₹20,000 - ₹40,000", languages: ["Hindi", "English"], imageUrl: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2" },

  // ₹40,000 - ₹60,000
  { id: 16, name: "DJ Rockstar", category: "DJ", location: "Bengaluru", priceRange: "₹40,000 - ₹60,000", languages: ["English"], imageUrl: "https://images.unsplash.com/photo-1521334884684-d80222895322" },
  { id: 17, name: "Magic Raj", category: "Magician", location: "Hyderabad", priceRange: "₹40,000 - ₹60,000", languages: ["Hindi", "Telugu"], imageUrl: "https://images.unsplash.com/photo-1589396574543-c66c2f9c94b2" },
  { id: 18, name: "Mystic Magician", category: "Magician", location: "Surat", priceRange: "₹40,000 - ₹60,000", languages: ["Hindi"], imageUrl: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7" },
  { id: 19, name: "Magic Mind", category: "Magician", location: "Chennai", priceRange: "₹40,000 - ₹60,000", languages: ["Tamil", "English"], imageUrl: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7" },
  { id: 20, name: "DJ ElectroVibe", category: "DJ", location: "Kolkata", priceRange: "₹40,000 - ₹60,000", languages: ["English"], imageUrl: "https://images.unsplash.com/photo-1521334884684-d80222895322" },
  { id: 21, name: "DJ Nightstorm", category: "DJ", location: "Pune", priceRange: "₹40,000 - ₹60,000", languages: ["English"], imageUrl: "https://images.unsplash.com/photo-1581276879432-15a57f1f4b1c" },

  // ₹60,000 - ₹1,00,000
  { id: 22, name: "The Melody Makers", category: "Band", location: "Delhi", priceRange: "₹60,000 - ₹1,00,000", languages: ["Hindi", "English"], imageUrl: "https://images.unsplash.com/photo-1511376777868-611b54f68947" },
  { id: 23, name: "Soul Beats Band", category: "Band", location: "Kolkata", priceRange: "₹60,000 - ₹1,00,000", languages: ["Hindi", "Bengali"], imageUrl: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f" },
  { id: 24, name: "Bollywood Beats Band", category: "Band", location: "Delhi", priceRange: "₹60,000 - ₹1,00,000", languages: ["Hindi"], imageUrl: "https://images.unsplash.com/photo-1516822003754-cca485356ecb" },
  { id: 25, name: "Stage Stars Band", category: "Band", location: "Bengaluru", priceRange: "₹60,000 - ₹1,00,000", languages: ["Hindi", "English"], imageUrl: "https://images.unsplash.com/photo-1516822003754-cca485356ecb" },
  { id: 26, name: "Bollywood Bandits", category: "Band", location: "Ahmedabad", priceRange: "₹60,000 - ₹1,00,000", languages: ["Hindi"], imageUrl: "https://images.unsplash.com/photo-1516822003754-cca485356ecb" },
  { id: 27, name: "DJ Fusion", category: "DJ", location: "Goa", priceRange: "₹60,000 - ₹1,00,000", languages: ["English"], imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4" },
  { id: 28, name: "DJ Spinmaster", category: "DJ", location: "Chandigarh", priceRange: "₹60,000 - ₹1,00,000", languages: ["English"], imageUrl: "https://images.unsplash.com/photo-1581276879432-15a57f1f4b1c" },
  { id: 29, name: "Magic Maestro", category: "Magician", location: "Surat", priceRange: "₹60,000 - ₹1,00,000", languages: ["Hindi"], imageUrl: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7" },
  { id: 30, name: "Groove Squad", category: "Dancer", location: "Mumbai", priceRange: "₹60,000 - ₹1,00,000", languages: ["Hindi"], imageUrl: "https://images.unsplash.com/photo-1533113351817-84c5e43357b2" }
];

export default artistsData;

