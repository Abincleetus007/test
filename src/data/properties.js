// src/data/properties.js

const properties = [
  {
    _id:"1",
    title: "Luxury Villa in Kochi",
    description: "A beautiful luxury villa with modern amenities.",
    price: 15000000,
    sqft: 3200,
    bedrooms: 4,
    bathrooms: 3,
    primaryImage: "https://res.cloudinary.com/djhpllutc/image/upload/v1758115717/de4e2aa1-1ed6-428f-8bda-50e6465c87b4_u5blwi.jpg",
    images: [
      "https://res.cloudinary.com/djhpllutc/image/upload/v1758115717/3dcf5f3f-19fb-4f4c-afe5-d4b9a4bc29e7_eo0imc.jpg",
      "https://res.cloudinary.com/djhpllutc/image/upload/v1758115717/%E0%B4%88_design_%E0%B4%A8%E0%B5%86_%E0%B4%B5%E0%B5%80%E0%B4%9F%E0%B4%BE%E0%B4%95%E0%B5%8D%E0%B4%95%E0%B4%BF%E0%B4%AF%E0%B4%BE%E0%B4%B2%E0%B5%8B__A_4BHK_home_with_bold_dqnxez.jpg",
      "https://res.cloudinary.com/djhpllutc/image/upload/v1758115718/21d725d9-0502-4059-8404-78914106be95_xvo1vw.jpg"
    ],
    videoTourLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    locationLink: "https://maps.google.com/?q=Kochi",
    createdAt: "2025-09-01T10:00:00Z",
    testimonials: [
      {
        name: "John Doe",
        role: "Homeowner",
        message: "The Builder team delivered my dream home on time with amazing quality and attention to detail.",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 5,
      }
    ],
  },

  {
    _id: "2",
    title: "Modern Apartment in Mumbai",
    description: "A modern apartment with city views and premium amenities.",
    price: 8500000,
    sqft: 1800,
    bedrooms: 3,
    bathrooms: 2,
    primaryImage: "https://res.cloudinary.com/djhpllutc/image/upload/v1758115717/3dcf5f3f-19fb-4f4c-afe5-d4b9a4bc29e7_eo0imc.jpg",
    images: [
      "https://res.cloudinary.com/djhpllutc/image/upload/v1758115612/Kerala_house_design_kw5obm.jpg",
      "https://res.cloudinary.com/djhpllutc/image/upload/v1758115612/91407cc0-a238-4b80-b7ac-d8892384438f_fyoymd.jpg",
      "https://res.cloudinary.com/djhpllutc/image/upload/v1758115612/84660b08-d861-4756-a27e-e9d442a7de2f_smwiql.jpg"
    ],
    videoTourLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    locationLink: "https://maps.google.com/?q=Mumbai",
    createdAt: "2025-08-20T10:00:00Z",
    testimonials: [
      {
        name: "Alice Johnson",
        role: "Tenant",
        message: "Comfortable living with amazing city views. Highly recommend this apartment.",
        avatar: "https://randomuser.me/api/portraits/women/55.jpg",
        rating: 5,
      },
    ],
  },

  // ======= NEW PROPERTIES =======

  {
    _id: "3",
    title: "Beachside Villa in Goa",
    description: "A luxurious villa with private beach access and sea views.",
    price: 22000000,
    sqft: 4000,
    bedrooms: 5,
    bathrooms: 4,
    primaryImage: "https://res.cloudinary.com/djhpllutc/image/upload/v1758115717/de4e2aa1-1ed6-428f-8bda-50e6465c87b4_u5blwi.jpg",
    images: [
      "https://res.cloudinary.com/djhpllutc/image/upload/v1758115720/goa_villa_1.jpg",
      "https://res.cloudinary.com/djhpllutc/image/upload/v1758115720/goa_villa_2.jpg",
      "https://res.cloudinary.com/djhpllutc/image/upload/v1758115720/goa_villa_3.jpg"
    ],
    videoTourLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    locationLink: "https://maps.google.com/?q=Goa",
    createdAt: "2025-09-05T10:00:00Z",
    testimonials: [
      {
        name: "Ravi Kumar",
        role: "Homeowner",
        message: "Amazing property! Perfect location and outstanding service from the team.",
        avatar: "https://randomuser.me/api/portraits/men/44.jpg",
        rating: 5,
      }
    ],
  },

  {
    _id: "4",
    title: "Penthouse in Bangalore",
    description: "A modern penthouse with skyline views and premium interiors.",
    price: 18000000,
    sqft: 2500,
    bedrooms: 3,
    bathrooms: 3,
    primaryImage: "https://res.cloudinary.com/djhpllutc/image/upload/v1758115613/A_charming_house_with_tiled_roof_and_wooden_nl5ykt.jpg",
    images: [
      "https://res.cloudinary.com/djhpllutc/image/upload/v1758115722/bangalore_penthouse_1.jpg",
      "https://res.cloudinary.com/djhpllutc/image/upload/v1758115722/bangalore_penthouse_2.jpg",
      "https://res.cloudinary.com/djhpllutc/image/upload/v1758115722/bangalore_penthouse_3.jpg"
    ],
    videoTourLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    locationLink: "https://maps.google.com/?q=Bangalore",
    createdAt: "2025-09-10T10:00:00Z",
    testimonials: [
      {
        name: "Priya Sharma",
        role: "Tenant",
        message: "Stunning interiors and very comfortable living space. Highly recommended!",
        avatar: "https://randomuser.me/api/portraits/women/65.jpg",
        rating: 5,
      }
    ],
  },

  {
    _id: "5",
    title: "Countryside Cottage in Kerala",
    description: "A serene cottage surrounded by lush greenery and hills.",
    price: 12000000,
    sqft: 2000,
    bedrooms: 3,
    bathrooms: 2,
    primaryImage: "https://res.cloudinary.com/djhpllutc/image/upload/v1758115612/91407cc0-a238-4b80-b7ac-d8892384438f_fyoymd.jpg",
    images: [
      "https://res.cloudinary.com/djhpllutc/image/upload/v1758115724/kerala_cottage_1.jpg",
      "https://res.cloudinary.com/djhpllutc/image/upload/v1758115724/kerala_cottage_2.jpg",
      "https://res.cloudinary.com/djhpllutc/image/upload/v1758115724/kerala_cottage_3.jpg"
    ],
    videoTourLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    locationLink: "https://maps.google.com/?q=Kerala",
    createdAt: "2025-09-15T10:00:00Z",
    testimonials: [
      {
        name: "Anil Menon",
        role: "Homeowner",
        message: "Peaceful environment and beautiful architecture. Loved it!",
        avatar: "https://randomuser.me/api/portraits/men/67.jpg",
        rating: 5,
      }
    ],
  },

  {
    _id: "6",
    title: "Luxury Apartment in Pune",
    description: "A modern apartment with all amenities and city views.",
    price: 9500000,
    sqft: 1700,
    bedrooms: 2,
    bathrooms: 2,
    primaryImage: "https://res.cloudinary.com/djhpllutc/image/upload/v1758115612/84660b08-d861-4756-a27e-e9d442a7de2f_smwiql.jpg",
    images: [
      "https://res.cloudinary.com/djhpllutc/image/upload/v1758115726/pune_apartment_1.jpg",
      "https://res.cloudinary.com/djhpllutc/image/upload/v1758115726/pune_apartment_2.jpg",
      "https://res.cloudinary.com/djhpllutc/image/upload/v1758115726/pune_apartment_3.jpg"
    ],
    videoTourLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    locationLink: "https://maps.google.com/?q=Pune",
    createdAt: "2025-09-18T10:00:00Z",
    testimonials: [
      {
        name: "Sneha Gupta",
        role: "Tenant",
        message: "Comfortable, stylish, and well-located. Great experience!",
        avatar: "https://randomuser.me/api/portraits/women/72.jpg",
        rating: 5,
      }
    ],
  }
];

export default properties;

