import * as Yup from "yup";
// Define validation schema for login using Yup
const loginSchema = Yup.object().shape({
  email: Yup.string().email().required("*Email is required"),
  password: Yup.string().required("*Password is required"),
});

// Define validation schema for distributorinformation using Yup
const distributorInfoSchema = Yup.object().shape({
  first_name: Yup.string().required("First name is required"),
  distributor_name: Yup.string().required("Distribution name is required"),
  street: Yup.string().required("Street is required"),
  county: Yup.string().required("county is required"),
  country: Yup.string().required("country is required"),
  email: Yup.string().email().required("*Email is required"),
  postal_code: Yup.string().required("*Postal code is required"),
  country_code: Yup.string().required("Country code is required"),
  contact_number: Yup.number().required("Contact number is required"),
  company_logo: Yup.string().required("Company logo is required"),
  company_white_logo: Yup.string().required("Company white logo is required"),
  alternate_distributor_name: Yup.string().required(
    "Alternate distributor is required"
  ),
  role: Yup.string().required("Role is required"),
});

const phonenumberRegex =
  /^[+]?[0-9]{1,3}?[-.\\s]?[(]?[0-9]{1,4}[)]?[-.\\s]?[0-9]{1,4}[-.\\s]?[0-9]{1,9}$/;

const createNewUserSchema = Yup.object().shape({
  first_name: Yup.string().required("First Name is required"),
  last_name: Yup.string().required("Last Name is required"),
  location_id: Yup.string().required("Office Location is required"),
  contact_number: Yup.string()
    .matches(phonenumberRegex, "*Enter a valid Phone Number")
    .required("*Enter a valid Phone Number"),
  country_code: Yup.string().required("Country Code is required"),
  employee_id: Yup.string().required("Employee ID is required"),
  job_title: Yup.string().required("Job Title is required"),
  assigned_role: Yup.string().required("Role is required"),
  permissions: Yup.array().required("Permissions is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Business Email is required"),
});

const ValidationSchema = {
  login: loginSchema,
  distributorinformation: distributorInfoSchema,
  createnewuser: createNewUserSchema,
};

export default ValidationSchema;
