function createImgUrl(pid) {
  return `https://res.cloudinary.com/de0llaul4/image/upload/v1708862610/${pid}.jpg`;
}

export class Constants {
  static carouselData = [
    {
      key: "slide1",
      title: "Deepali Hotel",
      description: `
      Hotel Deepali is a heritage property promising world-class
      services and exceptional hospitality in Madhya Pradesh’s Sagar.
      The hotel offers complimentary WiFi, valet parking, daily
      housekeeping, 24-hour room service, and round the clock front desk
      for the convenience of guests. Doorman to greet the guests and
      security at the entrance make the stay safe for guests There is a
      spacious conference room where business travellers can conduct
      meetings smoothly
      `,
      src: "/assets/carousel/carousel1.JPG",
    },
    {
      key: "slide2",
      title: "Deepali Hotel",
      description: `
      Hotel Deepali is a heritage property promising world-class
      services and exceptional hospitality in Madhya Pradesh’s Sagar.
      The hotel offers complimentary WiFi, valet parking, daily
      housekeeping, 24-hour room service, and round the clock front desk
      for the convenience of guests. Doorman to greet the guests and
      security at the entrance make the stay safe for guests There is a
      spacious conference room where business travellers can conduct
      meetings smoothly
      `,
      src: "/assets/carousel/carousel2.jpg",
    },
    {
      key: "slide3",
      title: "Deepali Hotel",
      description: `
      Hotel Deepali is a heritage property promising world-class
      services and exceptional hospitality in Madhya Pradesh’s Sagar.
      The hotel offers complimentary WiFi, valet parking, daily
      housekeeping, 24-hour room service, and round the clock front desk
      for the convenience of guests. Doorman to greet the guests and
      security at the entrance make the stay safe for guests There is a
      spacious conference room where business travellers can conduct
      meetings smoothly
      `,
      src: "/assets/carousel/carousel3.jpg",
    },
    {
      key: "slide4",
      title: "Deepali Hotel",
      description: `
      Hotel Deepali is a heritage property promising world-class
      services and exceptional hospitality in Madhya Pradesh’s Sagar.
      The hotel offers complimentary WiFi, valet parking, daily
      housekeeping, 24-hour room service, and round the clock front desk
      for the convenience of guests. Doorman to greet the guests and
      security at the entrance make the stay safe for guests There is a
      spacious conference room where business travellers can conduct
      meetings smoothly
      `,
      src: "/assets/carousel/carousel4.jpg",
    },
    {
      key: "slide5",
      title: "Deepali Hotel",
      description: `
      Hotel Deepali is a heritage property promising world-class
      services and exceptional hospitality in Madhya Pradesh’s Sagar.
      The hotel offers complimentary WiFi, valet parking, daily
      housekeeping, 24-hour room service, and round the clock front desk
      for the convenience of guests. Doorman to greet the guests and
      security at the entrance make the stay safe for guests There is a
      spacious conference room where business travellers can conduct
      meetings smoothly
      `,
      src: "/assets/carousel/carousel5.jpg",
    },
    {
      key: "slide6",
      title: "Deepali Hotel",
      description: `
      Hotel Deepali is a heritage property promising world-class
      services and exceptional hospitality in Madhya Pradesh’s Sagar.
      The hotel offers complimentary WiFi, valet parking, daily
      housekeeping, 24-hour room service, and round the clock front desk
      for the convenience of guests. Doorman to greet the guests and
      security at the entrance make the stay safe for guests There is a
      spacious conference room where business travellers can conduct
      meetings smoothly
      `,
      src: "/assets/carousel/carousel6.jpg",
    },
  ];

  static Rooms = [
    {
      img: "/assets/room/room1.jpg",
      type: "Standard",
      rating: 4,
      description:
        "Comfort and affordability meet in our Standard Rooms, providing essential amenities for a pleasant stay.",
      price: "500",
      link: "/book/standard",
    },
    {
      img: "/assets/room/room2.jpg",
      type: "Duplex",
      rating: 5,
      description:
        "Experience the luxury of space and style with our Duplex rooms, offering a sophisticated two-level layout for ultimate relaxation.",
      price: "1000",
      link: "/book/duplex",
    },
    {
      img: "/assets/room/room3.jpg",
      type: "Suite",
      rating: 5,
      description:
        "Indulge in luxury and refinement with our Suites, offering spacious accommodations and elevated amenities for an unforgettable stay.",
      price: "1500",
      link: "/book/suite",
    },
  ];

  static ParallaxImgURL = [
    createImgUrl("Hotel/parallax/xrbb9ttwthiaqoit2rik"),
    createImgUrl("Hotel/parallax/de2grlpoawmolo6klxse"),
    createImgUrl("Hotel/parallax/zdeurpkvinvp5omnnoka"),
    createImgUrl("Hotel/parallax/stfcvqvaocqefizfal6y"),
    createImgUrl("Hotel/parallax/msytomzjspizcxuxrogl"),
    createImgUrl("Hotel/parallax/w7e9m3h3qmxeu3auppro"),
    createImgUrl("Hotel/parallax/egyppnrlghuo0zt17qm0"),
    createImgUrl("Hotel/parallax/upwnssaaks3drqunjqbv"),
    createImgUrl("Hotel/parallax/ejgbhldp4bi8stogm608"),
    createImgUrl("Hotel/parallax/euxqizxd0k8lyqeswk3g"),
    createImgUrl("Hotel/parallax/izktfiyudwsr2vj38kpe"),
    createImgUrl("Hotel/parallax/i8v5s4b0kbguv4byvxy1"),
  ];
}
