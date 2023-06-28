export interface CourseDetail {
  data: [];
  id: number;
  required_type: string;
  title: {
    en: string;
    vi: string;
  };
  description: {
    en: string;
    vi: string;
  };
  language: string;
  duration: number;
  view_scope: string;
  price: number;
  type: string;
  status: string;
  created_at: string;
  updated_at: string;
  course_type: string;
  requirements: {
    vi: string;
  };
  outcomes: {
    vi: string;
  };
  delivery_mode: string;
  meta_keyword: string;
  meta_description: string;
  drip_content: boolean;
  complete_course_sequence: boolean;
  show_overview_media: boolean;
  host: string;
  youtube_link: null;
  category: {
    id: number;
    name: {
      en: string;
      vi: string;
    };
  };
  level: {
    id: number;
    title: string;
  };
  video_overview: {
    id: number;
    url: string;
    path: string;
    fileName: string;
  };
  assign_instructor: {
    id: number;
    name: string;
    short_description: string;
    description: string;
    phone_number: string;
    facebook: string;
    twitter: string;
    linkedin: string;
    instagram: string;
    image: {
      id: number;
      url: string;
      path: string;
      fileName: string;
    };
  };
  assistant_instructor: [
    {
      id: number;
      name: string;
      short_description: string;
      description: string;
      facebook: string;
      twitter: string;
      linkedin: string;
      instagram: string;
      image: {
        id: number;
        url: string;
        path: string;
        fileName: string;
      };
    },
  ];
  thumbnail: {
    id: number;
    url: string;
    path: string;
    fileName: string;
    key: number;
    type: string;
  };
  chapter_list:
    | [
        {
          id: number;
          name: string;
          lesson_list: [];
        },
      ]
    | any;
  has_enroll: boolean;
}
