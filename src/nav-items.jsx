import { Home, Info, Boat, Wrench, MessageCircle, FileText, Phone } from "lucide-react";
import Index from "./pages/Index.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "About Us",
    to: "/about",
    icon: <Info className="h-4 w-4" />,
    page: <div>About Us Page</div>,
  },
  {
    title: "Inventory",
    to: "/inventory",
    icon: <Boat className="h-4 w-4" />,
    page: <div>Inventory Page</div>,
  },
  {
    title: "Services",
    to: "/services",
    icon: <Wrench className="h-4 w-4" />,
    page: <div>Services Page</div>,
  },
  {
    title: "Testimonials",
    to: "/testimonials",
    icon: <MessageCircle className="h-4 w-4" />,
    page: <div>Testimonials Page</div>,
  },
  {
    title: "Blog",
    to: "/blog",
    icon: <FileText className="h-4 w-4" />,
    page: <div>Blog Page</div>,
  },
  {
    title: "Contact",
    to: "/contact",
    icon: <Phone className="h-4 w-4" />,
    page: <div>Contact Page</div>,
  },
];