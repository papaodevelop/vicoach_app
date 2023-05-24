interface ClassCourse {
  id: number;
  thumbnail: string;
  required_type: string;
  title: {
    en: string;
    vi: string;
  };
  duration: number;
  category: {
    en: string;
    vi: string;
  };
  instructor: string;
  progress: number;
  reviews: string;
  start_date: string;
  end_date: string;
  lesson: number;
  quiz: number;
  type: string;
  live_class: 1;
  delivery_mode: string;
}
