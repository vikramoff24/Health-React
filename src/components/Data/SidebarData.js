import appointment from "../../assets/Icons/appoinment.svg";
import dashboard from "../../assets/Icons/dashboard.svg";
import doctor from "../../assets/Icons/doctor.svg";
import patient from "../../assets/Icons/patient.svg";

import logout from "../../assets/Icons/logout.svg";

const menuItems = [
  {
    icon: dashboard,
    path: "/dashboard",
    name: "Dashboard",
  },
  {
    icon: doctor,
    path: "/doctor",
    name: "Doctor",
  },
  {
    icon: patient,
    path: "/patient",
    name: "Patient",
  },
  {
    icon: appointment,
    path: "/appoinment",
    name: "Appointment",
  },
];

const logOut = [
  {
    icon: logout,
    path: "/",
    name: "Logout",
  },
];

export { menuItems, logOut };
