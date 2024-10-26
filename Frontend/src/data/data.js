// import hero//img from "../assets_dump/hero.png";
import logo from "../assets/landing/logo.svg";
import heroBg from "../assets/landing/heroBg.png";
import service1 from '../assets/landing/service1.svg';
import service2 from '../assets/landing/service2.svg';
import service3 from '../assets/landing/service3.svg';
import service4 from '../assets/landing/service4.svg';
import medicine from '../assets/Dashboard/medicine.svg';
import complete from '../assets/Dashboard/complete.png';
import pending from '../assets/Dashboard/pending.png';

// import hightlight//img from "../assets_dump/hightlight//img.png";
// import sneakershoe from "../assets_dump/sneaker.png";

// import clip from "../assets_dump/video/clip.mp4";
// import vcover1 from "../assets_dump/video/vcover1.png";
// import vcover2 from "../assets_dump/video/vcover2.png";
// import vcover3 from "../assets_dump/video/vcover3.png";

// import psale1 from "../assets_dump/nike-air-red.png";
// import psale2 from "../assets_dump/nike-adapt-bb.png";
// import psale3 from "../assets_dump/nike-adapt-bb-smart.png";

// import product1 from "../assets_dump/product1.png";
// import product2 from "../assets_dump/product2.png";
// import product3 from "../assets_dump/product3.png";
// import product4 from "../assets_dump/product4.png";
// import product5 from "../assets_dump/product5.png";
// import product6 from "../assets_dump/product6.png";
// import product7 from "../assets_dump/product7.png";
// import product8 from "../assets_dump/product8.png";
// import product9 from "../assets_dump/product9.png";
// import product10 from "../assets_dump/product10.png";
// import product11 from "../assets_dump/product11.png";
// import product12 from "../assets_dump/product12.png";

// import card1 from '../assests/priceCard1.webp';
// import card2  from '../assests/card2.webp';
// import card3  from '../assests/card3.webp';
// import card4  from '../assests/card4.webp';

// import searchCard1  from '../assests/assets (1)/searchCard1.jpg';
// import searchCard2  from '../assests/assets (1)/searchCard2.jpg';
// import searchCard3  from '../assests/assets (1)/searchCard3.jpg';
// import searchCard4  from '../assests/assets (1)/searchCard4.jpg';
// import searchCard5  from '../assests/assets (1)/searchCard5.jpg';
// import searchCard6  from '../assests/assets (1)/searchcard6.jpg';

// import streetSmart1  from '../assests/assets (1)/streetSmart1.jpg';
// import streetSmart2  from '../assests/assets (1)/streetSmart2.jpg';
// import streetSmart3  from '../assests/assets (1)/streetSmart3.jpg';
// import streetSmart4  from '../assests/assets (1)/streetSmart4.jpg';
// import streetSmart5  from '../assests/assets (1)/streetSmart5.jpg';
// import streetSmart6  from '../assests/assets (1)/streetSmart6.jpg';
// import streetSmart7  from '../assests/assets (1)/streetSmart7.jpg';


// import facebook from "../assets_dump/facebook.svg";
// import instagram from "../assets_dump/instagram.svg";
// import twitter from "../assets_dump/twitter.svg";
// import youtube from "../assets_dump/youtube.svg";
// import messenger from "../assets_dump/messenger.svg";

// import about from '../assets/about.png'

const heroapi = {
  title1: 'Your Wellness,',
  title2: 'Our Mission',
  subtitle: "we are committed to providing comprehensive healthcare services tailored to the unique needs of our campus community.We believe that a healthy body and mind are the foundation of academic success, and we strive to make healthcare accessible, inclusive, and responsive for all our students. Your health is not just our duty it’s our mission.",
  img: heroBg,
  logo: logo,
  btntext: "Learn More",
  videos: [
    // { //imgsrc: vcover1, clip: clip },
    // { //imgsrc: vcover2, clip: clip },
    // { //imgsrc: vcover3, clip: clip },
  ],
  sociallinks: [
    // { icon: facebook },
    // { icon: messenger },
    // { icon: instagram },
    // { icon: twitter },
    // { icon: youtube },
  ],
};
const aboutData = {
  title: "About",
  text: "Thrifty is the community-powered fashion ecosystem that’s kinder on the planet and kinder to people. We want to build the world’s most progressive and diverse home for fashion – a place to explore unique fashion and be part of a community-driven zeitgeist that’s shaping culture for the better. This is a place where anyone should feel safe to show up as their full selves and feel good about the style choices they make.",
  // //img: about,
};
const servicesData = [
  {
    id: 1,
    title: 'Ambulance Tracking',
    description: 'Stay informed with our real-time ambulance tracking system. Whether it’s an emergency or a scheduled transport, you can monitor the ambulance location and arrival time to ensure prompt medical attention.',
    icon: service1, 
    w:125
  },
  {
    id: 2,
    title: 'Pharmacy Delivery',
    description: 'Get your prescriptions delivered right to your doorstep. Our pharmacy delivery service ensures you have access to the medications you need without leaving the comfort of your hostel.',
    icon: service2,
    w:125
  },
  {
    id: 3,
    title: 'Isolation Alerts',
    description: 'In the event of illness, our isolation alert system keeps you informed of necessary precautions and support services, ensuring your safety and the well-being of the entire campus.',
    icon: service4,
    w:125
  },
  {
    id: 4,
    title: 'Patient Information Sharing',
    description: 'We are committed to making healthcare accessible to everyone, including those with impairments. Our services are designed to be inclusive, ensuring that all students receive the care they deserve.',
    icon: service3,
    w:125
  },
];

const homePopular = {
  title: "Popular on Thrifty",
  items:[
    {
      id: "14",
      //img: card1,
      url: "#",
      name: "Bags"
    },
    {
      id: "12",
      //img: card2,
      url: "#",
      name: "Sneakers"
    },
    {
      id: "4",
      //img: card3,
      url: "#",
      name: "Sets"
    },
    {
      id: "2",
      //img: card4,
      url: "#",
      name: "bottoms"
    },
    {
      id: "10",
      //img: streetSmart4,
      url: "#",
      name: "Jackets"
    },
  ]
}
const homeStreatSmart = {
  title: "You would also like",
  items:[
    {
      id: "ss_1",
      //img: streetSmart1,
      url: "#",
      price: "40.75"
    },
    {
      id: "ss_2",
      //img: streetSmart2,
      url: "#",
      price: "₹202.00"
    },
    {
      id: "ss_3",
      //img: streetSmart3,
      url: "#",
      price: "₹60.00"
    },
    {
      id: "ss_4",
      //img: streetSmart4,
      url: "#",
      price: "₹85.50"
    },
    {
      id: "ss_5",
      //img: streetSmart5,
      url: "#",
      price: "₹900.00"
    },
    {
      id: "ss_6",
      //img: streetSmart6,
      url: "#",
      price: "₹200.00"
    },
    {
      id: "ss_7",
      //img: streetSmart7,
      url: "#",
      price: "₹145.90"
    },
    {
      id: "ss_3",
      //img: streetSmart3,
      url: "#",
      price: "₹60.00"
    },
  ]
}
const homeTopSearches = {
  title: "Top Searches",
  items:[
    {
      id: "ts_1",
      //img: searchCard1,
      url: "#",
      name: "Overalls"
    },
    {
      id: "ts_2",
      //img: searchCard2,
      url: "#",
      name: "Skims"
    },
    {
      id: "ts_3",
      //img: searchCard3,
      url: "#",
      name: "Reformation"
    },
    {
      id: "ts_4",
      //img: searchCard4,
      url: "#",
      name: "Baggy jeans"
    },
    {
      id: "ts_5",
      //img: searchCard5,
      url: "#",
      name: "Vintage"
    },
    {
      id: "ts_6",
      //img: searchCard6,
      url: "#",
      name: "Midi Skirt"
    },
  ]
}

const popularsales = {
  title: "Popular Sales",
  items: [
    {
      id: "0p0x1",
      title: "Nike Addapt BB 2.0",
      text: "MEN Running Shoes",
      rating: "4.9",
      btn: "Buy Now",
      //img: psale2,
      price: "200",
      color: "from-blue-600 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0p0x2",
      title: "Nike Martine Rose",
      text: "MEN Running Shoes",
      rating: "4.5",
      btn: "Buy Now",
      //img: psale1,
      price: "200",
      color: "from-red-500 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
    },
    {
      id: "0p0x3",
      title: "Nike Smart Shoe 2.0",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      //img: psale3,
      price: "200",
      color: "from-violet-500 to-indigo-500",
      shadow: "shadow-lg shadow-violet-500",
    },
  ],
};

const highlight = {
  heading: "HIGHLIGHTS",
  title: "NIKE AIR WITH LIMITLESS CHOICES",
  text: "Our Purpose is to move the world forward. We take action by building community, protecting our planet and increasing access to sport.",
  btn: "Explore More",
  url: "https://www.nike.com/launch/t/nocta-hot-step-black-gold",
  //img: hightlight//img,
};

const sneaker = {
  heading: "FEATURED",
  title: "NIKE SNEAKERS AIR LANCING SHOES",
  text: "The radiance lives on Nike Sneakers Air Lancing Shoes, the basket ball OG that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.",
  btn: "Explore More",
  url: "https://sneakernews.com/2022/03/21/nike-lebron-2-retro-white-midnight-navy-varsity-crimson-dr0826-100/",
  //img: sneakershoe,
};

const toprateslaes = {
  title: "Top Rated Sales",
  items: [
    {
      id: "0M0x1",
      title: "Nike Air Low Premium",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      //img: product7,
      price: "150",
      color: "from-sky-600 to-indigo-600",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0M0x2",
      title: "Nike Air Force Green",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      //img: product2,
      price: "150",
      color: "from-green-500 to-emerald-500",
      shadow: "shadow-lg shadow-green-500",
    },
    {
      id: "0M0x3",
      title: "Nike Addapt BB Rose",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      //img: product3,
      price: "150",
      color: "from-red-500 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
    },
    {
      id: "0M0x4",
      title: "Nike Air Premium",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      //img: product4,
      price: "150",
      color: "from-orange-500 to-amber-500",
      shadow: "shadow-lg shadow-orange-500",
    },
    {
      id: "0M0x5",
      title: "Nike Adapt BB Pro",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      //img: product5,
      price: "150",
      color: "from-gray-900 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      id: "0M0x6",
      title: "Air Jordan PR3",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      //img: product6,
      price: "150",
      color: "from-blue-500 to-cyan-500",
      shadow: "shadow-lg shadow-cyan-500",
    },
    {
      id: "0M0x7",
      title: "Nike Multi Smart Shoe",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      //img: product1,
      price: "150",
      color: "from-yellow-500 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      id: "0M0x8",
      title: "Nike Jordan Air Max",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      //img: product9,
      price: "150",
      color: "from-[#936550] to-orange-900",
      shadow: "shadow-lg shadow-orange-800",
    },
    {
      id: "0M0x9",
      title: "Nike Old Max-x",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      //img: product10,
      price: "150",
      color: "from-indigo-700 to-indigo-700",
      shadow: "shadow-lg shadow-indigo-500",
    },
    {
      id: "0M0x10",
      title: "Nike Lime Jordan 11",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      //img: product12,
      price: "150",
      color: "from-green-600 to-lime-500",
      shadow: "shadow-lg shadow-lime-500",
    },
    {
      id: "0M0x11",
      title: "Nike Air Black Max",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      //img: product11,
      price: "150",
      color: "from-slate-900 to-black",
      shadow: "shadow-lg shadow-black",
    },
    {
      id: "0M0x12",
      title: "Nike Zoom Max",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      //img: product8,
      price: "150",
      color: "from-blue-900 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
  ],
};


const story = {
  title: "Top Stories",
  news: [
    {
      title: "Jayson Tatum Debuts",
      text: "Jordan Brands signature model for the past few years, Jayson Tatum will be dawning the Air Jordan 37 this season before attaining potentially his first signature sneaker with Jumpman, which he rumored to be in the works recently via his Twitter.",
      //img: "https://sneakernews.com/wp-content/uploads/2022/09/air-jordan-37-low.jpg?w=540&h=380&crop=1",
      url: "https://sneakernews.com/2022/09/14/air-jordan-37-low/",
      like: "3/5",
      time: "11 Mins",
      by: "Jared Ebanks",
      btn: "Read More"
    },
    {
      title: "Bro’s Nike Zoom Freak 4",
      text: "Arriving right time for the Fall, this upcoming take on the Zoom Freak 4 seemingly draws inspiration from Thanksgiving. Orange and brown, two staples of the holiday, are used throughout the upper, dressing the parts not bathed in shades of grey.",
      //img: "https://sneakernews.com/wp-content/uploads/2022/09/nike-zoom-freak-4-ironstone-orange-trance-cobblestone-sail-dj6149-003-2.jpg?w=540&h=380&crop=1",
      time: "41 Mins",
      like: "5/5",
      url: "https://sneakernews.com/2022/09/14/nike-zoom-freak-4-ironstone-orange-trance-cobblestone-sail-dj6149-003/",
      by: "Michael Le",
      btn: "Read More"
    },
    {
      title: "Nike Air Max Plus",
      text: "The Nike Air Max Plus has enjoyed the reveal of several colorways these last few of months. And as we officially embark on the Fall season, an additional set have been added to the calendar, including this newly-revealed grey and orange colorway.",
      //img: "https://sneakernews.com/wp-content/uploads/2022/09/Nike-Air-Max-Plus-FB3358-001-2.jpg?w=540&h=380&crop=1",
      time: "2 Hours",
      url: "https://sneakernews.com/2022/09/14/nike-air-max-plus-grey-orange-black-fb3358-001/",
      like: "5/5",
      by: "Michael Le",
      btn: "Read More"
    },
    {
      title: "Air Jordan Retro High OG",
      text: "Air Jordan Retro High OG popular series of AJ1s with the popular color-blocking with the original Yellow Toe flavor. The colorway was revealed back PE by musician Zach Myers, nearly four years later, Jordan fanatics will finally get their shot a GR release.",
      //img: "https://sneakernews.com/wp-content/uploads/2022/03/yellow-toe-jordan-1-release-date-2.jpg",
      time: "7 Months",
      url: "https://sneakernews.com/2022/03/09/air-jordan-1-retro-high-og-yellow-toe-555088-711/",
      like: "5/5",
      by: "Sneaker News",
      btn: "Read More"
    },
    {
      title: "Nike Air Zoom GT Cut 2",
      text: "The Bred coloryway of Zoom GT Cut 2 will be first to release this Friday, For Nike Members Nation World Wide while Sabrina Ionescus colorway is set for an October 13th release date. In the meantime, enjoy official images of both colorways below.",
      //img: "https://sneakernews.com/wp-content/uploads/2022/09/nike-zoom-gt-cut-2-release-date.jpg?w=540&h=380&crop=1",
      time: "1 Months",
      url: "https://sneakernews.com/2022/09/13/nike-zoom-gt-cut-2-officially-unveiled/",
      like: "3/5",
      by: "Jared Ebanks",
      btn: "Read More"
    },
    {
      title: "Puma Announces Breanna",
      text: "For the first time in over a decade, a signature basketball silhouette is being made for one of the WNBA’s best and brightest stars, Olympic Gold Medalist and Seattle Storm superstar Breanna Stewart. Puma Stewie 1 Quiet Fire will be available this Friday.",
      //img: "https://sneakernews.com/wp-content/uploads/2022/09/puma-stewie-1-quiet-fire-breanna-stewart-release-date-lead.jpg?w=540&h=380&crop=1",
      time: "25 Days",
      url: "https://sneakernews.com/2022/09/13/nike-zoom-gt-cut-2-officially-unveiled/",
      like: "3/5",
      by: "Jared Ebanks",
      btn: "Read More"
    },
    {
      title: "Nike Air Force Orange Color",
      text: "From lace toggles to city-inspired makeovers, the Nike Air Force 1 has delivered a number of unique modifications. Here though, the brand is taking things down quite a few notches, opting for a simple colorway helmed primarily by black and Laser Orange.",
      //img: "https://sneakernews.com/wp-content/uploads/2022/09/Nike-Air-Force-1-Black-Yellow-FB7162-081-8.jpg?w=540&h=380&crop=1",
      url: "https://sneakernews.com/2022/09/09/nike-air-force-1-black-laser-orange-fb7162-081/",
      time: "6 Days",
      like: "4/5",
      by: "Micael Le",
      btn: "Read More"
    },
    {
      title: "Hello Kitty and Adidas",
      text: "The world of Sanrio is vast and replete with many an iconic character. Few among the family, though, rival the immense influence of Hello Kitty, who’s played mascot for everything from Pringles merchandise to sneaker collaborations.",
      //img: "https://sneakernews.com/wp-content/uploads/2022/09/hello-kitty-adidas-superstar-GW7168-2.jpg?w=540&h=380&crop=1",
      url: "https://sneakernews.com/2022/09/08/hello-kitty-adidas-originals-gw7166-gw7167-gw7168/",
      time: "5 Days",
      like: "4/5",
      by: "Micael Le",
      btn: "Read More"
    },
    {
      title: "Air Force 1 Low Expands",
      text: "The nighttime aesthetic seen here is applied to the tumbled black leather panels of the upper and perforated mesh construction of the tongue while Royal trim and forefoot Swooshes provide additional intrigue to the darkened palette.",
      //img: "https://sneakernews.com/wp-content/uploads/2022/09/nike-air-force-1-low-worldwide-black-royal-fb1840-001-lead.jpg?w=540&h=380&crop=1",
      url: "https://sneakernews.com/2022/09/08/nike-air-force-1-low-worldwide-black-royal-fb1840-001/",
      time: "5 Days",
      like: "4/5",
      by: "Micael Le",
      btn: "Read More"
    },
  ],
};


const footerAPI = {
  titles: [ {title: "About Nike"},{title: "Get Help"},{title: "Company"} ],
  links: [
    [
      {link: "News"},
      {link: "Careers"},
      {link: "Investors"},
      {link: "Prupose"},
      {link: "Sustainability"},
    ],
    [
      {link: "Order Status"},
      {link: "Shipping & Delivery"},
      {link: "Payment Options"},
      {link: "Gift Card Balance"},
      {link: "Contact Us"},
      {link: "FAQ"},
      {link: "Blog"},
    ],
    [
      {link: "Gift Cards"},
      {link: "Promotions"},
      {link: "Find A Store"},
      {link: "Signup"},
      {link: "Nike Jouneral"},
      {link: "Send Us Feeback"},
    ],
  ]
};


const user = {
  name: 'Tanvi Kinjale',
  role: 'Student',
  profilePicture: 'profile_url_here'
};

const healthData = {
  heartRate: 80,
  bloodPressure: '100 mmHg',
  isolationStatus: 'Safe'
};

const recentRecords = [
  { date: '2024-08-15', checkUpType: 'Blood Test', doctorFacility: 'Dr. Jane Smith', results: 'Normal' },
  { date: '2024-07-28', checkUpType: 'Vision Test', doctorFacility: 'University Lab', results: '20/20 Vision' },
  { date: '2024-07-10', checkUpType: 'Dental Check-Up', doctorFacility: 'Dr. Emily Davis', results: 'No cavities' },
  { date: '2024-06-25', checkUpType: 'General Health Check-Up', doctorFacility: 'Dr. Robert Clark', results: 'Normal' }
];

const currentTreatments = [
  {
    img: medicine,
    name: 'Paracetamol 500mg',
    weeksLeft: 3,
    weeksDone: 1
  },
  {
    img: medicine,
    name: 'Paracetamol 500mg',
    weeksLeft: 3,
    weeksDone: 1
  },
  {
    img: medicine,
    name: 'Paracetamol 500mg',
    weeksLeft: 3,
    weeksDone: 1
  },
];

const deliveryInfo = {
  time: '5:00 PM'
};

const orderHistory = {
  date: '10/04/2024'
};

const trackingInfo = [
  { status: 'Order Placed.', time: '24/10/2024 02:00 PM', statusImg: complete },
  { status: 'Order Acknowledged', time: '24/10/2024 02:30 PM', statusImg: complete},
  { status: 'Batch Ordered', time: '24/10/2024 08:00 PM', statusImg: complete },
  { status: 'Batch Received', time: '25/10/2024 04:00 PM', statusImg: complete },
  { status: 'Ready to Collect', time: '25/10/2024 05:00 PM', statusImg: complete }
];

const quickLinks = [
  { label: 'Acknowledge Delivery', href: '/acknowledge' },
  { label: 'Request Support', href: '/support' },
  { label: 'View History', href: '/history' }
];




export { user, healthData, recentRecords, currentTreatments, deliveryInfo, orderHistory,trackingInfo, quickLinks, heroapi, servicesData, footerAPI, story, sneaker, highlight, toprateslaes, popularsales, aboutData, homePopular, homeTopSearches, homeStreatSmart };
