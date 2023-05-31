interface CourseListType {
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
  language: number;
  duration: number;
  view_scope: string;
  price: number;
  status: string;
  created_at: string;
  updated_at: string;
  course_type: string;
  requirements: {};
  outcomes: {};
  delivery_mode: string;
  meta_keyword: string;
  meta_description: string;
  drip_content: boolean;
  complete_course_sequence: boolean;
  show_overview_media: boolean;
  host: string;
  youtube_link: string;
  chapter_list: [
    {
      id: number;
      name: string;
      status: string;

      lesson_list: [
        {
          id: number;
          privacy: string;
          status: string;
          name: string;
          description: string;
          duration: number;
          material: {
            id: number;
            title: string;
            type: string;
            status: string;
            created_at: string;
            updated_at: string;

            active_file: {
              id: number;
              version: number;
              file_size: number;
              created_at: string;
              updated_at: string;
              path: string;
              fileName: string;
              videoEmbebUrl: string;
              videoId: string;
              videoLibraryId: number;
              collectionId: string | number;
              status: number;
            };
          };
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
        },
      ];
    },
  ];
}
interface MaterialType {
  id: number;
  privacy: string;
  status: string;
  name: string;
  description: string;
  duration: number;
  material: {
    id: number;
    title: string;
    type: string;
    status: string;
    created_at: string;
    updated_at: string;

    active_file: {
      id: number;
      version: number;
      file_size: number;
      created_at: string;
      updated_at: string;
      path: string;
      fileName: string;
      videoEmbebUrl: string;
      videoId: string;
      videoLibraryId: number;
      collectionId: string | number;
      status: number;
    };
  };
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
interface DocumentType {
  id: number;
  privacy: string;
  status: string;
  name: string;
  description: string;
  duration: number;
  material: {
    id: number;
    title: string;
    type: string;
    status: string;
    created_at: string;
    updated_at: string;

    active_file: {
      id: number;
      version: number;
      file_size: number;
      created_at: string;
      updated_at: string;
      path: string;
      fileName: string;
      videoEmbebUrl: string;
      videoId: string;
      videoLibraryId: number;
      collectionId: string | number;
      status: number;
    };
  };
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
