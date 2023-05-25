interface CoursesReview {
  id: number;
  rating: number;
  content: string;
  status: string;
  created_at: string;
  updated_at: string;
  user: {
    id: number;
    name: string;
    image: {
      id: number;
      url: string;
      path: string;
      fileName: string;
    };
    address: {
      id: number;
      street: string;
      state: string;
      city: string;
      country: string;
      zip_code: number;
    };

    subscription: string;
  };
}
