export const itemCategories = [
  "Wallet",
  "ID Card",
  "Keys",
  "Bag",
  "Book",
  "Phone",
  "Laptop",
  "Charger",
  "Earphones",
  "Documents",
  "Other",
];

export const lostItems = [
  {
    id: 1,
    title: "Black Wallet",
    description: "Lost black leather wallet near library reading room.",
    category: "Wallet",
    color: "Black",
    location: "Library",
    lostDate: "2026-07-02",
    imageUrl:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800",
    status: "OPEN",
    reportedBy: "Normal User",
  },
  {
    id: 2,
    title: "College ID Card",
    description: "Lost blue college ID card near canteen.",
    category: "ID Card",
    color: "Blue",
    location: "Canteen",
    lostDate: "2026-07-01",
    imageUrl:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800",
    status: "MATCHED",
    reportedBy: "Normal User",
  },
];

export const foundItems = [
  {
    id: 1,
    title: "Blue College ID Card",
    description: "Found blue college ID card near canteen table.",
    category: "ID Card",
    color: "Blue",
    location: "Canteen",
    foundDate: "2026-07-02",
    imageUrl:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800",
    status: "OPEN",
    reportedBy: "Normal User",
  },
  {
    id: 2,
    title: "Phone Charger",
    description: "Found black phone charger in computer lab.",
    category: "Charger",
    color: "Black",
    location: "Computer Lab",
    foundDate: "2026-07-01",
    imageUrl:
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800",
    status: "OPEN",
    reportedBy: "Normal User",
  },
  {
    id: 3,
    title: "Black Wallet Found",
    description: "Found black leather wallet near library reading room.",
    category: "Wallet",
    color: "Black",
    location: "Library",
    foundDate: "2026-07-02",
    imageUrl:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800",
    status: "MATCHED",
    reportedBy: "Normal User",
  },
];

export const matches = [
  {
    id: 1,
    lostItem: {
      id: 1,
      title: "Black Wallet",
      category: "Wallet",
      color: "Black",
      location: "Library",
      lostDate: "2026-07-02",
      imageUrl:
        "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800",
    },
    foundItem: {
      id: 3,
      title: "Black Wallet Found",
      category: "Wallet",
      color: "Black",
      location: "Library",
      foundDate: "2026-07-02",
      imageUrl:
        "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800",
    },
    matchScore: 90,
    status: "POSSIBLE",
    createdAt: "2026-07-02",
  },
  {
    id: 2,
    lostItem: {
      id: 2,
      title: "College ID Card",
      category: "ID Card",
      color: "Blue",
      location: "Canteen",
      lostDate: "2026-07-01",
      imageUrl:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800",
    },
    foundItem: {
      id: 1,
      title: "Blue College ID Card",
      category: "ID Card",
      color: "Blue",
      location: "Canteen",
      foundDate: "2026-07-02",
      imageUrl:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800",
    },
    matchScore: 85,
    status: "POSSIBLE",
    createdAt: "2026-07-02",
  },
];

export const claims = [
  {
    id: 1,
    matchId: 2,
    lostItemTitle: "College ID Card",
    foundItemTitle: "Blue College ID Card",
    message: "This looks like my lost ID card.",
    proofDescription: "It has my name and college roll number printed on it.",
    status: "PENDING",
    createdAt: "2026-07-02",
  },
];