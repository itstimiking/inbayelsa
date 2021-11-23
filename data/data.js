import { Home, Phone, BookOpen, SignInAlt, BookReader, AddressBook, ShoppingBag, 
  Atlas, Bicycle, Boxes, Bomb
} from '@styled-icons/fa-solid';

export const navlinks = [ // Top navigation links----------------------------
  { title: "Home", url: "/", icon: <Home size="12" className="mr-1 mb-1" /> },
  { title: "Our Services", url: "/courses", icon: <BookReader size="12" className="mr-1 mb-1" /> },
  { title: "Updates", url: "/updates", icon: <ShoppingBag size="12" className="mr-1 mb-1" /> },
  { title: "About Us", url: "/about", icon: <AddressBook size="12" className="mr-1 mb-1" /> },
  { title: "Contact Us", url: "/contact", icon: <Phone size="12" className="mr-1 mb-1" /> },
];

export const boxes = {
  heading: " Why you should choose us ",
  content: [
    {icon: <Atlas size="27" className="pb-2" /> , title: " We provide quality ", text:" A lot more text to display that will take a lot of space and be very long. thank you.."},
    {icon:  <Bicycle size="27" className="pb-2" />, title: " We have the experience ", text:" A lot more text to display that will take a lot of space and be very long. thank you.."},
    {icon:  <Boxes size="27" className="pb-2" />, title: " On time delivery", text:" A lot more text to display that will take a lot of space and be very long. thank you.."},
    {icon:  <Bomb size="27" className="pb-2" />, title: " Support and mentainans", text:" A lot more text to display that will take a lot of space and be very long. thank you.."},
  ]
}