import villaImg from "../assets/images/banner.jpg";
import villaImg2 from "../assets/images/villaImg1.jpg";
// 👈 better to convert mkv → mp4 for web

const properties = [
  {
    _id: "1",
    title: "Luxury Villa in Kochi",
    description: "A beautiful luxury villa with modern amenities.",
    price: 15000000,
    sqft: 3200,
    bedrooms: 4,
    bathrooms: 3,
    primaryImage: villaImg,
    images: [villaImg2],
      videoTourLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", 
    locationLink: "https://maps.google.com/?q=Kochi", // 👈 Google Maps link
    createdAt: "2025-09-01T10:00:00Z",
  },
];

export default properties;
