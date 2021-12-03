import { 
  Home, Phone, Globe, SignInAlt, 
  BookReader, AddressBook, PenNib, 
  Ad, MobileAlt, LaptopCode
} from '@styled-icons/fa-solid';

export const navlinks = [ // Top navigation links----------------------------
  { title: "Home", url: "/", icon: <Home size="12" className="mr-1 mb-1" /> },
  { title: "Our Services", url: "/service", icon: <BookReader size="12" className="mr-1 mb-1" /> },
  { title: "Updates", url: "/updates", icon: <PenNib size="12" className="mr-1 mb-1" /> },
  { title: "About Us", url: "/about", icon: <AddressBook size="12" className="mr-1 mb-1" /> },
  { title: "Contact Us", url: "/contact", icon: <Phone size="12" className="mr-1 mb-1" /> },
];

export const boxes = {
  heading: " How can we help your business grow online ",
  content: [
    {
      icon: <Globe size="27" className="pb-2" /> , 
      title: " We Build Website's ", 
      text:" Your clients are online, they need to reach you from the comfort of their homes, get a website for your business today."
    },
    {
      icon:  <Ad size="27" className="pb-2" />, 
      title: " Advertise Online ", 
      text:" We can help you run successful online ad campaigns, reach your clients where they hang out using social media ad targetting and google ads. "
    },
    {
      icon:  <MobileAlt size="27" className="pb-2" />, 
      title: " Create a Mobile App ", 
      text:" Become part of your client's life by having them install your app on their phones and connect to your business seamlessly. You can always send out notifications and promotions anytime."
    },
    {
      icon:  <LaptopCode size="27" className="pb-2" />, 
      title: " Custom Business Software ", 
      text:"There is no reason why your business should not have custom software to help your manage things in your own specific way. We can build the software your business needs."
    },
  ]
}