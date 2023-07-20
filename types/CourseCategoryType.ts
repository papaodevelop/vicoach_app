export interface CourseCategoryType {
  id: number;
  name: {
    en: string;
    vi: string;
  };
  description: {
    en: string;
    vi: string;
  };
  position_order: number;
  status: string;
  icon: {
    id: number;
    url: string;
    path: string;
    fileName: string;
  };
  parent_category: {
    id: number;
    name: {
      en: string;
      vi: string;
    };
  };
  thumbnail_image: {
    id: number;
    url: string;
    path: string;
    fileName: string;
  };
  children_category: [
    {
      id: number;
      name: {
        en: string;
        vi: string;
      };
    },
  ];
  children: [
    {
      id: number;
      name: {
        en: string;
        vi: string;
      };
      children: [
        {
          id: number;
          name: {
            en: string;
            vi: string;
          };
        },
      ];
    },
  ];
  number_of_course: number;
  title: {
    en: string;
    vi: string;
  };
  duration: number;
  price: number;
  created_at: string;
  updated_at: string;
  discount: number;
  category: {
    name: {
      en: string;
      vi: string;
    };
  };
  thumbnail: {
    id: number;
    url: string;
    path: string;
    fileName: string;
    key: string;
    type: string;
  };
  assign_instructor: {
    name: string;
    image: {
      id: number;
      url: string;
      path: string;
      fileName: string;
      key: number;
      type: string;
    };
  };
  avg_review: string;
  address: {
    id: number;
    street: string;
    state: string;
    city: string;
    country: string;
    zip_code: number;
  };
  image: {
    id: number;
    url: string;
    path: string;
    fileName: string;
  };
  subscription: null;
}
