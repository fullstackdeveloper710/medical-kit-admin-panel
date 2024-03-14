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

const ValidationSchema = {
  login: loginSchema,
  distributorinformation: distributorInfoSchema,
};

export default ValidationSchema;
