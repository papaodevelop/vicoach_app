interface ProfileType {
  id: number;
  name: string;
  username: string;
  email: string;
  isEmailConfirmed: boolean;
  dob: string;
  gender: null;
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
  image: null;
  address: {
    id: number;
    street: null;
    state: null;
    city: null;
    country: null;
    zip_code: null;
  };
  subscription: null;
}
