import { Home, Phone, BookOpen, SignInAlt, BookReader, AddressBook, ShoppingBag, 
  Atlas, Bicycle, Boxes, Bomb
} from '@styled-icons/fa-solid';

export const navlinks = [ // Top navigation links----------------------------
  { title: "Home", url: "/", icon: <Home size="12" className="mr-1 mb-1" /> },
  { title: "Courses", url: "/courses", icon: <BookReader size="12" className="mr-1 mb-1" /> },
  { title: "Updates", url: "/updates", icon: <ShoppingBag size="12" className="mr-1 mb-1" /> },
  { title: "About", url: "/about", icon: <AddressBook size="12" className="mr-1 mb-1" /> },
  { title: "Contact", url: "/contact", icon: <Phone size="12" className="mr-1 mb-1" /> },
];

export const boxes = {
  heading: " A better way to learn about tech ",
  content: [
    {icon: <Atlas size="27" className="pb-2" /> , title: "This is the heading", text:" A lot more text to display that will take a lot of space and be very long. thank you.."},
    {icon:  <Bicycle size="27" className="pb-2" />, title: "This is the heading", text:" A lot more text to display that will take a lot of space and be very long. thank you.."},
    {icon:  <Boxes size="27" className="pb-2" />, title: "This is the heading", text:" A lot more text to display that will take a lot of space and be very long. thank you.."},
    {icon:  <Bomb size="27" className="pb-2" />, title: "This is the heading", text:" A lot more text to display that will take a lot of space and be very long. thank you.."},
  ]
}