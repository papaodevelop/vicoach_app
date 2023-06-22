interface ProfileType {
  data: [];
  id: number;
  name: string;
  username: string;
  email: string;
  isEmailConfirmed: boolean;
  dob: string;
  gender: string;
  short_description: string;
  description: string;
  roles: string[];
  phone_number: string;
  currency: string;
  language: string;
  start_working_date: string;
  employee_id: null;
  facebook: string;
  twitter: string;
  linkedin: string;
  instagram: string;
  isTwoFactorAuthenticationEnabled: boolean;
  isRegisteredWithGoogle: boolean;
  created_at: string;
  updated_at: string;
  status: string;
  group_policy: null;
  enrollments: [];
  department: {
    id: 26;
    name: string;
    code: string;
  };
  position: null;
  image: {
    url: string;
    path: string;
    fileName: string;
    id: number;
  };
  address: {
    id: number;
    street: string;
    country: string;
    zip_code: number;
    city: {
      code: string;
      name: string;
      name_en: string;
      full_name: string;
      full_name_en: string;
      code_name: string;
    };
    state: {
      code: string;
      name: string;
      name_en: string;
      full_name: string;
      full_name_en: string;
      code_name: string;
    };
  };
  subscription: null;
}
