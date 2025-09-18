import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Bali",
    location: "Indonesia",
    rating: 4.7,
    price: 499,
    description: "Beautiful beaches and vibrant culture in Bali.",
    image: "https://picsum.photos/id/1018/600/400",
  },
  {
    id: 2,
    name: "Paris",
    location: "France",
    rating: 4.8,
    price: 899,
    description: "Romantic city with the Eiffel Tower and rich history.",
    image: "https://picsum.photos/id/1015/600/400",
  },
  {
    id: 3,
    name: "Tokyo",
    location: "Japan",
    rating: 4.6,
    price: 799,
    description: "Modern city with ancient traditions and great food.",
    image: "https://picsum.photos/id/1019/600/400",
  },
  {
    id: 4,
    name: "New York",
    location: "USA",
    rating: 4.5,
    price: 699,
    description: "The city that never sleeps with iconic landmarks.",
    image: "https://picsum.photos/id/1022/600/400",
  },
  {
    id: 5,
    name: "Rome",
    location: "Italy",
    rating: 4.7,
    price: 749,
    description: "Ancient ruins and rich history in the Eternal City.",
    image: "https://picsum.photos/id/1024/600/400",
  },
  {
    id: 6,
    name: "Sydney",
    location: "Australia",
    rating: 4.8,
    price: 999,
    description: "Opera House, beaches, and amazing culture.",
    image: "https://picsum.photos/id/1025/600/400",
  },
  {
    id: 7,
    name: "Dubai",
    location: "UAE",
    rating: 4.6,
    price: 599,
    description: "Luxury shopping, skyscrapers, and desert adventures.",
    image: "https://picsum.photos/id/1031/600/400",
  },
  {
    id: 8,
    name: "Cape Town",
    location: "South Africa",
    rating: 4.4,
    price: 549,
    description: "Mountains, beaches, and rich cultural diversity.",
    image: "https://picsum.photos/id/1032/600/400",
  },
];

const destinationsSlice = createSlice({
  name: "destinations",
  initialState,
  reducers: {},
});

export default destinationsSlice.reducer;
