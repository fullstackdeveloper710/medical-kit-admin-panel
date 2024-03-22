import * as Yup from "yup";

// phone number regex
const phonenumberRegex =
  /^[+]?[0-9]{1,3}?[-.\\s]?[(]?[0-9]{1,4}[)]?[-.\\s]?[0-9]{1,4}[-.\\s]?[0-9]{1,9}$/;

// Define validation schema for login using Yup
const loginSchema = Yup.object().shape({
  email: Yup.string().email().required("*Email is required"),
  password: Yup.string().required("*Password is required"),
});

// Define validation schema for distributorinformation using Yup
const distributorInfoSchema = Yup.object().shape({
  distributor_name: Yup.string().required("*Distribution name is required"),
  street: Yup.string().required("*Street is required"),
  county: Yup.string().required("*County is required"),
  country: Yup.string().required("*Country is required"),
  email: Yup.string().email().required("*Email is required"),
  postal_code: Yup.string().required("*Postal code is required"),
  country_code: Yup.string().required("*Country code is required"),
  contact_number: Yup.string()
    .matches(phonenumberRegex, "*Enter a valid phone number")
    .required("*Phone number is required"),
  company_logo: Yup.string().required("*Company logo is required"),
  company_white_logo: Yup.string().required("*Company white logo is required"),
  alternate_distributor_name: Yup.string().required(
    "*Alternate distributor is required"
  ),
  role: Yup.string().required("*Role is required"),
});

// Define validation schema for create new user using Yup
const createNewUserSchema = Yup.object().shape({
  first_name: Yup.string().required("*First name is required"),
  last_name: Yup.string().required("*Last name is required"),
  location_id: Yup.string().required("*Office location is required"),
  contact_number: Yup.string()
    .matches(phonenumberRegex, "*Enter a valid phone number")
    .required("*Phone number is required"),
  country_code: Yup.string().required("*Country code is required"),
  employee_id: Yup.string().required("*Employee id is required"),
  job_title: Yup.string().required("*Job title is required"),
  assigned_role: Yup.string().required("*Role is required"),
  permissions: Yup.array().required("*Permissions is required"),
  email: Yup.string()
    .email("*Invalid email format")
    .required("*Business email is required"),
});
// Define validation schema for create location using Yup
const createLocationSchema = Yup.object().shape({
  location_name: Yup.string().required("*Location name is required"),
  street: Yup.string().required("*Street is required"),
  city: Yup.string().required("*City is required"),
  county: Yup.string().required("*County is required"),
  country: Yup.string().required("*Country is required"),
  zip_code: Yup.string().required("*Zip code is required"),
  business_email: Yup.string()
    .email("*Invalid email format")
    .required("*Business email is required"),
  country_code: Yup.string().required("*Country code is required"),
  contact_number: Yup.string()
    .matches(phonenumberRegex, "*Enter a valid phone pumber")
    .required("*Phone number is required"),
  assigned_admin_id: Yup.string().required("*Asign admin is required"),
  assigned_approver_id: Yup.string().required("*Asign approver is required"),
});

// Define validation schema for create report group using Yup
const createGroupReportSchema = {};

const ValidationSchema = {
  login: loginSchema,
  distributorinformation: distributorInfoSchema,
  createnewuser: createNewUserSchema,
  createlocation: createLocationSchema,
  creategroupreport: createGroupReportSchema,
};

export default ValidationSchema;
