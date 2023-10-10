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
interface QuizzType {
  id: number;
  privacy: string;
  status: string;
  quiz: {
    id: number;
    title: {
      en: string;
      vi: string;
    };
    instruction: {
      en: string;
      vi: string;
    };
    time: number;
  };
}

interface getQuizType {
  id: number;
  result: string;
  start_time: string;
  finish_time: string;
  focus_lost: number;
  obtain_marks: number;
  status: string;
  created_at: string;
  updated_at: string;
  quiz: {
    id: number;
    title: {
      en: string;
      vi: string;
    };
    instruction: {
      en: string;
      vi: string;
    };
    percentage: number;
    change_default_setting: boolean;
    question_time_type: string;
    time: number;
    question_review: boolean;
    show_result_each_submit: boolean;
    random_question: boolean;
    multiple_attend: boolean;
    show_ans_with_explanation: boolean;
    show_ans_sheet: boolean;
    losing_focus_acceptance: boolean;
    losing_type: string;
    losing_focus_acceptance_number: number;
    status: string;
    created_at: string;
    updated_at: string;
    question_list: [
      {
        id: number;
        question: string;
        question_type: string;
        mark: number;
        image: null;
        status: string;
        number_of_options: number;
        explanation: string;
        choice_list: [
          {
            id: number;
            answer: string;
          },
        ];
      },
    ];
  };
}
interface Id {
  idCourse: number;
  idItem: number;
}
interface question_list {
  id: number;
  question: string;
  question_type: string;
  mark: number;
  image: null;
  status: string;
  number_of_options: number | undefined;
  explanation: string;
  choice_list: [
    {
      id: number;
      answer: string;
    },
  ];
}
interface DetailClassify {
  id: number;
  title: {
    en: string;
    vi: string;
  };
  duration: number;
  price: number;
  created_at: string;
  updated_at: string;
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
    key: null;
    type: string;
  };
  assign_instructor: {
    name: string;
    image: null;
  };
  reviews: string;
}
interface Provinces {
  code: string;
  name: string;
}
interface Blog {
  data: [];
  items: [];

  id: number;
  title: string;
  content: string;
  slug: string;
  author: {
    id: number;
    name: string;
    image: {
      id: number;
      url: string;
      path: string;
      fileName: string;
    };
    address: string;
    subscription: string;
  };
  status: string;
  postCategory: {
    id: number;
    name: {
      en: string;
      vi: string;
    };
    description: {
      en: string;
      vi: string;
    };
    status: string;
  };
  banner: {
    url: string;
  };
  comments: [
    {
      id: number;
      content: string;
    },
  ];
  create_at: string;
}
interface Comment {
  id: number;
  content: string;
  author: {
    id: number;
    name: string;
    image: {
      url: string;
    };
  };
  parent_comment: null;
  children_comment: [
    {
      id: number;
      content: string;
      created_at: string;
      author: {
        id: number;
        name: string;
        image: {
          url: string;
        };
      };
    },
  ];
  post: {
    id: number;
  };
  create_at: string;
}
interface ChildrenComment {
  id: number;
  content: string;
  created_at: string;
  author: {
    id: number;
    name: string;
    image: {
      url: string;
    };
  };
}
interface postComment {
  postId?: number;
  content?: string;
  parent_id?: number;
}
interface Notification {
  id: number;
  title: string;
  body: string;
  topic: string;
  status: string;
  created_at: string;
  updated_at: string;
}
interface TermsPage {
  data: [];
  items: [];
  id: number;
  title: {
    en: string;
    vi: string;
  };
  content: {
    en: string;
    vi: string;
  };
  status: string;
  created_at: string;
  updated_at: string;
}
interface StoreInfo {
  id: number;
  title: string;
  subtitle: string;
  email: string;
  phone_number: string;
  code: string;
  icon: string;
  street: string;
  status: string;
}
interface Contact {
  email: string;
  message: string;
  name: string;
  phone_number: string;
}
