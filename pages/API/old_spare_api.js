let old_products = [
  // Mercedes pieces
  {
    product_id: 0,
    carName: "Mercedes",
    piece_Rechange: "Old Direction",
    image: "../../assets/old_spare_parts_images/Mercedes/direction.jpeg",
    otherImages: [
      "../../assets/old_spare_parts_images/Mercedes/direction.jpeg",
      "../../assets/old_spare_parts_images/Mercedes/direction.jpeg",
      "../../assets/old_spare_parts_images/Mercedes/direction.jpeg",
    ],
    description:
      "High-precision steering component designed for maximum comfort and stability. Ensures instant steering response and excellent control even at high speed.",
    keyFeatures: [
      "Ventilated high-performance discs",
      "Short stopping distance",
      "Long-lasting ceramic brake pads",
      "Designed for heavy braking conditions",
    ],
    price: 222,
  },
  {
    product_id: 1,
    carName: "Mercedes",
    piece_Rechange: "Old Braking system",
    image: "../../assets/old_spare_parts_images/Mercedes/Système de freinage.jpeg",
    otherImages: [
      "../../assets/old_spare_parts_images/Mercedes/Système de freinage1.jpeg",
      "../../assets/old_spare_parts_images/Mercedes/Système de freinage2.jpeg",
      "../../assets/old_spare_parts_images/Mercedes/Système de freinage3.jpeg",
    ],
    description:
      "High-performance brake discs and pads designed for minimal stopping distance. Excellent heat dissipation—ideal for city and highway driving.",
    keyFeatures: [
      "Noise-reduction rubber technology",
      "High grip on wet & dry roads",
      "Reinforced sidewalls",
      "Fuel-efficiency optimized",
    ],
    price: 777,
  },
  {
    product_id: 2,
    carName: "Mercedes",
    piece_Rechange: "Old Tires",
    image: "../../assets/old_spare_parts_images/Mercedes/Tires.jpeg",
    otherImages: [
      "../../assets/old_spare_parts_images/Mercedes/Tires1.jpeg",
      "../../assets/old_spare_parts_images/Mercedes/Tires2.jpeg",
      "../../assets/old_spare_parts_images/Mercedes/Tires3.jpeg",
    ],
    description:
      "High-performance tires optimized for silence, stability, and comfort. Perfect for S-Class, E-Class, and C-Class.",
    keyFeatures: [
      "Premium Nappa leather finishing",
      "Heat and wear resistant",
      "Breathable material",
      "Soft-touch cushioning foam",
    ],
    price: 777,
  },
  {
    product_id: 3,
    carName: "Mercedes",
    piece_Rechange: "Seats & Leather",
    image: "../../assets/old_spare_parts_images/Mercedes/Saddlery.jpeg",
    otherImages: [
      "../../assets/old_spare_parts_images/Mercedes/Saddlery1.jpeg",
      "../../assets/old_spare_parts_images/Mercedes/Saddlery2.jpeg",
      "../../assets/old_spare_parts_images/Mercedes/Saddlery3.jpeg",
    ],
    description:
      "Nappa or Artico leather seats, soft and durable. Offer premium comfort and a refined, high-end finish.",
    keyFeatures: [
      "Premium finishing materials",
      "Scratch-resistant coating",
      "Enhances luxury look",
      "Easy installation",
    ],
    price: 777,
  },
  {
    product_id: 4,
    carName: "Mercedes",
    piece_Rechange: "Interior Trim",
    image: "../../assets/old_spare_parts_images/Mercedes/Finishing.jpeg",
    otherImages: [
      "../../assets/old_spare_parts_images/Mercedes/Finishing1.jpeg",
      "../../assets/old_spare_parts_images/Mercedes/Finishing2.jpeg",
      "../../assets/old_spare_parts_images/Mercedes/Finishing3.jpeg",
    ],
    description:
      "Decorative wood, brushed aluminum, or carbon-fiber inserts. Add a sophisticated and modern touch.",
    price: 777,
    keyFeatures: [
      "Premium wood, aluminum, or carbon-fiber materials",
      "Scratch-resistant and durable surface finish",
      "Precision-fit OEM design for Mercedes interiors",
      "Noise-reduction padding for better cabin comfort",
      "Easy installation with secure mounting clips",
    ],
  },
  {
    product_id: 5,
    carName: "Mercedes",
    piece_Rechange: "Audio system",
    image: "../../assets/old_spare_parts_images/Mercedes/Audio system.jpeg",
    otherImages: [
      "../../assets/old_spare_parts_images/Mercedes/Audio system1.jpeg",
      "../../assets/old_spare_parts_images/Mercedes/Audio system2.jpeg",
      "../../assets/old_spare_parts_images/Mercedes/Audio system3.jpeg",
    ],
    description:
      "High-definition Burmester sound system delivering clear, powerful audio for a premium experience.",
    price: 777,
    keyFeatures: [
      "High-fidelity Burmester sound engineering",
      "Multi-channel surround audio output",
      "Diamond-polished tweeters for crystal clarity",
      "Deep bass subwoofers with noise reduction",
      "Optimized for Mercedes OEM infotainment systems",
    ],
  },
  {
    product_id: 6,
    carName: "Mercedes",
    piece_Rechange: "Body Parts & Lighting & Electronics",
    image:
      "../../assets/old_spare_parts_images/Mercedes/Body Parts & Lighting & Electronics.jpeg",
    otherImages: [
      "../../assets/old_spare_parts_images/Mercedes/Body Parts & Lighting & Electronics1.jpeg",
      "../../assets/old_spare_parts_images/Mercedes/Body Parts & Lighting & Electronics2.jpeg",
      "../../assets/old_spare_parts_images/Mercedes/Body Parts & Lighting & Electronics3.jpeg",
    ],
    description:
      "Elegant bumpers, fenders, and hoods with smooth design. High-power LED headlights with Intelligent Light System technology, plus advanced sensors, cameras, ESP modules, and ECU systems.",
    price: 777,
    keyFeatures: [
      "OEM-grade bumpers, fenders, and hoods",
      "High-power LED headlights with ILS technology",
      "Adaptive beam and cornering light support",
      "Integrated parking sensors and HD cameras",
      "ESP, ABS, and ECU electronic modules included",
    ],
  },

  // BMW pieces
  {
    product_id: 7,
    carName: "Bmw",
    piece_Rechange: "Direction",
    image: "../../assets/old_spare_parts_images/Bmw/direction.jpeg",
    otherImages: [
      "../../assets/old_spare_parts_images/Bmw/direction1.jpeg",
      "../../assets/old_spare_parts_images/Bmw/direction2.jpeg",
      "../../assets/old_spare_parts_images/Bmw/direction3.jpeg",
    ],
    description:
      "Sport-tuned steering system offering firmness and dynamic response. Ideal for restoring BMW M Series performance.",
    price: 222,
    keyFeatures: [
      "High-precision electric power steering module",
      "Dynamic response optimized for M Series driving",
      "Durable steering rack designed for high-performance handling",
      "Enhanced road feedback and improved stability",
      "OEM-fit installation with factory-grade components",
    ],
  },
  {
    product_id: 8,
    carName: "Bmw",
    piece_Rechange: "Braking system",
    image: "../../assets/old_spare_parts_images/Bmw/Système de freinage.jpeg",
    otherImages: [
      "../../assets/old_spare_parts_images/Bmw/Système de freinage1.jpeg",
      "../../assets/old_spare_parts_images/Bmw/Système de freinage2.jpeg",
      "../../assets/old_spare_parts_images/Bmw/Système de freinage3.jpeg",
    ],
    description:
      "High-performance sport brakes used in M Performance models. Provide immediate stopping power and withstand high temperatures.",
    price: 777,
    keyFeatures: [
      "Drilled and ventilated sport brake discs",
      "High-temperature ceramic or performance brake pads",
      "Fast heat dissipation for aggressive driving",
      "Enhanced stopping power at high speeds",
      "Perfect compatibility with BMW M Sport models",
    ],
  },
  {
    product_id: 9,
    carName: "Bmw",
    piece_Rechange: "Tires",
    image: "../../assets/old_spare_parts_images/Bmw/Tires.jpeg",
    otherImages: [
      "../../assets/old_spare_parts_images/Bmw/Tires1.jpeg",
      "../../assets/old_spare_parts_images/Bmw/Tires2.jpeg",
      "../../assets/old_spare_parts_images/Bmw/Tires3.jpeg",
    ],
    description:
      "Sport run-flat tires offering excellent grip—ideal for high-speed driving and aggressive cornering.",
    price: 777,
    keyFeatures: [
      "Run-flat technology for increased safety",
      "Optimized tread design for maximum traction",
      "High-speed rating suitable for performance driving",
      "Reinforced sidewalls for stability during cornering",
      "Engineered for BMW performance models",
    ],
  },
  {
    product_id: 10,
    carName: "Bmw",
    piece_Rechange: "Seats & Leather",
    image: "../../assets/old_spare_parts_images/Bmw/Saddlery.jpeg",
    otherImages: [
      "../../assets/old_spare_parts_images/Bmw/Saddlery1.jpeg",
      "../../assets/old_spare_parts_images/Bmw/Saddlery2.jpeg",
      "../../assets/old_spare_parts_images/Bmw/Saddlery3.jpeg",
    ],
    description:
      "Vernasca or Merino leather sport seats with reinforced side supports for dynamic driving.",
    price: 777,
    keyFeatures: [
      "Premium Vernasca or Merino leather upholstery",
      "Enhanced lateral support for sport driving",
      "Breathable and wear-resistant material",
      "Ergonomic design with adjustable lumbar support",
      "OEM specifications ensuring perfect BMW interior fit",
    ],
  },
  {
    product_id: 11,
    carName: "Bmw",
    piece_Rechange: "Interior Trim",
    image: "../../assets/old_spare_parts_images/Bmw/Finishing.jpeg",
    otherImages: [
      "../../assets/old_spare_parts_images/Bmw/Finishing1.jpeg",
      "../../assets/old_spare_parts_images/Bmw/Finishing2.jpeg",
      "../../assets/old_spare_parts_images/Bmw/Finishing3.jpeg",
    ],
    description:
      "Aluminum or carbon-fiber sporty trims for a dynamic interior look.",
    price: 777,
    keyFeatures: [
      "Real brushed aluminum or carbon-fiber materials",
      "Sport-inspired finish with premium texture",
      "Fade-resistant and scratch-resistant surface",
      "Perfect OEM alignment for BMW dashboards and consoles",
      "Enhances interior aesthetics with a performance feel",
    ],
  },
  {
    product_id: 12,
    carName: "Bmw",
    piece_Rechange: "Audio system",
    image: "../../assets/old_spare_parts_images/Bmw/Audio system.jpeg",
    otherImages: [
      "../../assets/old_spare_parts_images/Bmw/Audio system1.jpeg",
      "../../assets/old_spare_parts_images/Bmw/Audio system2.jpeg",
      "../../assets/old_spare_parts_images/Bmw/Audio system3.jpeg",
    ],
    description:
      "Harman Kardon or Bowers & Wilkins premium audio systems for full immersion.",
    price: 777,
    keyFeatures: [
      "High-definition sound from Harman Kardon or B&W",
      "Crystal-clear treble with deep, powerful bass",
      "3D audio processing for immersive cabin sound",
      "Optimized for BMW iDrive and OEM wiring",
      "Premium materials like stainless-steel speaker grilles",
    ],
  },
  {
    product_id: 13,
    carName: "Bmw",
    piece_Rechange: "Body Parts & Lighting & Electronics",
    image: "../../assets/old_spare_parts_images/Bmw/Body Parts & Lighting & Electronics.jpeg",
    otherImages: [
      "../../assets/old_spare_parts_images/Bmw/Body Parts & Lighting & Electronics1.jpeg",
      "../../assets/old_spare_parts_images/Bmw/Body Parts & Lighting & Electronics2.jpeg",
      "../../assets/old_spare_parts_images/Bmw/Body Parts & Lighting & Electronics3.jpeg",
    ],
    description:
      "Sporty and aggressive exterior components for M Series. BMW Laser headlights with extended range and performance electronic components (ABS, Sport ECU, sensors).",
    price: 777,
    keyFeatures: [
      "BMW Laserlight headlights with long-range projection",
      "Aerodynamic M-style bumpers, fenders, and diffusers",
      "High-precision ABS and traction-control sensors",
      "Sport-tuned ECU modules for enhanced performance",
      "OEM body panels ensuring perfect alignment and fit",
    ],
  },

  // Audi pieces
  {
    product_id: 14,
    carName: "Audi",
    piece_Rechange: "Direction",
    image: "../../assets/old_spare_parts_images/Audi/direction.jpeg",
    otherImages: [
      "../../assets/old_spare_parts_images/Audi/direction1.jpeg",
      "../../assets/old_spare_parts_images/Audi/direction2.jpeg",
      "../../assets/old_spare_parts_images/Audi/direction3.jpeg",
    ],
    description:
      "Electronically assisted steering offering smooth maneuverability. Automatically adjusts resistance based on speed.",
    price: 222,
    keyFeatures: [
      "Electronic Power Steering (EPS) with dynamic adjustment",
      "Speed-sensitive steering resistance",
      "Smooth and precise wheel control",
      "Improved stability for Quattro models",
      "OEM-grade components with long durability",
    ],
  },
  {
    product_id: 15,
    carName: "Audi",
    piece_Rechange: "Braking system",
    image: "../../assets/old_spare_parts_images/Audi/Système de freinage.jpeg",
    otherImages: [
      "../../assets/old_spare_parts_images/Audi/Système de freinage1.jpeg",
      "../../assets/old_spare_parts_images/Audi/Système de freinage2.jpeg",
      "../../assets/old_spare_parts_images/Audi/Système de freinage3.jpeg",
    ],
    description:
      "Ventilated brake system optimized for Quattro models. Offers stable braking in harsh conditions.",
    price: 777,
    keyFeatures: [
      "Ventilated high-performance brake discs",
      "Improved cooling for long braking sessions",
      "Quattro-optimized stopping stability",
      "Ceramic or metallic pad compatibility",
      "Enhanced safety in wet and icy conditions",
    ],
  },
  {
    product_id: 16,
    carName: "Audi",
    piece_Rechange: "Tires",
    image: "../../assets/old_spare_parts_images/Audi/Tires.jpeg",
    otherImages: [
      "../../assets/old_spare_parts_images/Audi/Tires1.jpeg",
      "../../assets/old_spare_parts_images/Audi/Tires2.jpeg",
      "../../assets/old_spare_parts_images/Audi/Tires3.jpeg",
    ],
    description:
      "Tires designed for Quattro traction with enhanced wet-road grip and excellent force distribution.",
    price: 777,
    keyFeatures: [
      "Engineered for Quattro all-wheel drive systems",
      "High-performance wet-grip tread design",
      "Reinforced sidewalls for precise cornering",
      "Optimized traction on all surfaces",
      "Low noise levels for Audi cabin comfort",
    ],
  },
  {
    product_id: 17,
    carName: "Audi",
    piece_Rechange: "Seats & Leather",
    image: "../../assets/old_spare_parts_images/Audi/Saddlery.jpeg",
    otherImages: [
      "../../assets/old_spare_parts_images/Audi/Saddlery1.jpeg",
      "../../assets/old_spare_parts_images/Audi/Saddlery2.jpeg",
      "../../assets/old_spare_parts_images/Audi/Saddlery3.jpeg",
    ],
    description:
      "Perforated fine leather seats with elegant stitching, offering long-lasting comfort.",
    price: 777,
    keyFeatures: [
      "Premium perforated leather upholstery",
      "Hand-stitched detailing with Audi design",
      "Breathable material for temperature control",
      "Ergonomic padding for long trips",
      "Durable and easy to maintain finish",
    ],
  },
  {
    product_id: 18,
    carName: "Audi",
    piece_Rechange: "Interior Trim",
    image: "../../assets/old_spare_parts_images/Audi/Finishing.jpeg",
    otherImages: [
      "../../assets/old_spare_parts_images/Audi/Finishing1.jpeg",
      "../../assets/old_spare_parts_images/Audi/Finishing2.jpeg",
      "../../assets/old_spare_parts_images/Audi/Finishing3.jpeg",
    ],
    description:
      "Interior trim with integrated ambient LED lines for a clean and modern Audi look.",
    price: 777,
    keyFeatures: [
      "Ambient LED lighting lines built into trim",
      "Premium brushed aluminum or piano-black finish",
      "Scratch-resistant and dust-free surface",
      "Perfect OEM fitting for Audi cabins",
      "Enhances modern luxury interior design",
    ],
  },
  {
    product_id: 19,
    carName: "Audi",
    piece_Rechange: "Audio system",
    image: "../../assets/old_spare_parts_images/Audi/Audio system.jpeg",
    otherImages: [
      "../../assets/old_spare_parts_images/Audi/Audio system1.jpeg",
      "../../assets/old_spare_parts_images/Audi/Audio system2.jpeg",
      "../../assets/old_spare_parts_images/Audi/Audio system3.jpeg",
    ],
    description:
      "Bang & Olufsen 3D Sound system providing exceptional clarity and depth.",
    price: 777,
    keyFeatures: [
      "Bang & Olufsen 3D high-definition audio",
      "Acoustic lenses for precise sound projection",
      "Premium subwoofers delivering deep bass",
      "360° surround sound tuning for Audi interiors",
      "OEM compatibility with Audi MMI system",
    ],
  },
  {
    product_id: 20,
    carName: "Audi",
    piece_Rechange: "Body Parts & Lighting & Electronics",
    image: "../../assets/old_spare_parts_images/Audi/Body Parts & Lighting & Electronics.jpeg",
    otherImages: [
      "../../assets/old_spare_parts_images/Audi/Body Parts & Lighting & Electronics1.jpeg",
      "../../assets/old_spare_parts_images/Audi/Body Parts & Lighting & Electronics2.jpeg",
      "../../assets/old_spare_parts_images/Audi/Body Parts & Lighting & Electronics3.jpeg",
    ],
    description:
      "Sharp, modern body panels. Matrix LED headlights with precise beam control. Advanced Quattro modules, 360° cameras, and intelligent radar systems.",
    price: 777,
    keyFeatures: [
      "Audi Matrix LED headlights with precision beam",
      "Aerodynamic and lightweight body panels",
      "Advanced Quattro control modules",
      "360° surround cameras for parking assistance",
      "Intelligent radar sensors for driver safety systems",
    ],
  },

  // Jaguar pieces
  {
    product_id: 21,
    carName: "Jaguar",
    piece_Rechange: "Direction",
    image: "../../assets/old_spare_parts_images/Jaguar/direction.jpeg",
    otherImages: [
      "../../assets/old_spare_parts_images/Jaguar/direction1.jpeg",
      "../../assets/old_spare_parts_images/Jaguar/direction2.jpeg",
      "../../assets/old_spare_parts_images/Jaguar/direction3.jpeg",
    ],
    description:
      "Premium steering component offering smooth, elegant handling with precise control.",
    price: 222,
    keyFeatures: [
      "High-precision electronic steering assist",
      "Refined steering response for luxury driving",
      "Smooth turning with reduced vibration",
      "Built for Jaguar’s signature elegant handling",
      "OEM-quality materials for long-term durability",
    ],
  },
  {
    product_id: 22,
    carName: "Jaguar",
    piece_Rechange: "Braking system",
    image: "../../assets/old_spare_parts_images/Jaguar/Système de freinage.jpeg",
    otherImages: [
      "../../assets/old_spare_parts_images/Jaguar/Système de freinage1.jpeg",
      "../../assets/old_spare_parts_images/Jaguar/Système de freinage2.jpeg",
      "../../assets/old_spare_parts_images/Jaguar/Système de freinage3.jpeg",
    ],
    description:
      "Luxury braking system offering smooth, progressive stopping power.",
    price: 777,
    keyFeatures: [
      "Progressive and smooth braking feel",
      "Ventilated discs for improved cooling",
      "Optimized for Jaguar’s luxury driving style",
      "Consistent performance in all weather",
      "Premium brake pads with reduced noise",
    ],
  },
  {
    product_id: 23,
    carName: "Jaguar",
    piece_Rechange: "Tires",
    image: "../../assets/old_spare_parts_images/Jaguar/Tires.jpeg",
    otherImages: [
      "../../assets/old_spare_parts_images/Jaguar/Tires1.jpeg",
      "../../assets/old_spare_parts_images/Jaguar/Tires2.jpeg",
      "../../assets/old_spare_parts_images/Jaguar/Tires3.jpeg",
    ],
    description:
      "Luxury tires offering quiet driving, excellent grip, and superior shock absorption.",
    price: 777,
    keyFeatures: [
      "Low-noise luxury touring tire design",
      "Enhanced wet and dry traction",
      "Superior shock absorption for comfort",
      "Optimized for Jaguar suspension systems",
      "Reinforced sidewalls for stability",
    ],
  },
  {
    product_id: 24,
    carName: "Jaguar",
    piece_Rechange: "Seats & Leather",
    image: "../../assets/old_spare_parts_images/Jaguar/Saddlery.jpeg",
    otherImages: [
      "../../assets/old_spare_parts_images/Jaguar/Saddlery1.jpeg",
      "../../assets/old_spare_parts_images/Jaguar/Saddlery2.jpeg",
      "../../assets/old_spare_parts_images/Jaguar/Saddlery3.jpeg",
    ],
    description:
      "Windsor premium leather known for softness and elegance. Creates a refined atmosphere.",
    price: 777,
    keyFeatures: [
      "Windsor premium soft-grain leather",
      "Elegant stitching and classic luxury details",
      "High-density ergonomic seat padding",
      "Breathable and long-lasting upholstery",
      "OEM-fit design for Jaguar interior harmony",
    ],
  },
  {
    product_id: 25,
    carName: "Jaguar",
    piece_Rechange: "Interior Trim",
    image: "../../assets/old_spare_parts_images/Jaguar/Finishing.jpeg",
    otherImages: [
      "../../assets/old_spare_parts_images/Jaguar/Finishing1.jpeg",
      "../../assets/old_spare_parts_images/Jaguar/Finishing2.jpeg",
      "../../assets/old_spare_parts_images/Jaguar/Finishing3.jpeg",
    ],
    description:
      "Premium wood and chrome trims for a classic British luxury style.",
    price: 777,
    keyFeatures: [
      "High-quality walnut or oak wood veneers",
      "Chrome accents for premium British styling",
      "Smooth polished surfaces with scratch resistance",
      "Perfect alignment for Jaguar dashboards",
      "Enhances classic luxury cabin feel",
    ],
  },
  {
    product_id: 26,
    carName: "Jaguar",
    piece_Rechange: "Audio system",
    image: "../../assets/old_spare_parts_images/Jaguar/Audio system.jpeg",
    otherImages: [
      "../../assets/old_spare_parts_images/Jaguar/Audio system1.jpeg",
      "../../assets/old_spare_parts_images/Jaguar/Audio system2.jpeg",
      "../../assets/old_spare_parts_images/Jaguar/Audio system3.jpeg",
    ],
    description:
      "Meridian audio system delivering rich, balanced sound quality.",
    price: 777,
    keyFeatures: [
      "Meridian signature balanced sound",
      "High-fidelity midrange and detailed treble",
      "Powerful subwoofer for deep bass",
      "Surround-sound optimization for Jaguar interiors",
      "OEM compatibility with Jaguar infotainment systems",
    ],
  },
  {
    product_id: 27,
    carName: "Jaguar",
    piece_Rechange: "Body Parts & Lighting & Electronics",
    image: "../../assets/old_spare_parts_images/Jaguar/Body Parts & Lighting & Electronics.jpeg",
    otherImages: [
      "../../assets/old_spare_parts_images/Jaguar/Body Parts & Lighting & Electronics1.jpeg",
      "../../assets/old_spare_parts_images/Jaguar/Body Parts & Lighting & Electronics2.jpeg",
      "../../assets/old_spare_parts_images/Jaguar/Body Parts & Lighting & Electronics3.jpeg",
    ],
    description:
      "Elegant body panels with smooth curves, refined LED lighting, and premium electronic modules.",
    price: 777,
    keyFeatures: [
      "Aerodynamic and elegant body-panel design",
      "Refined LED headlights with adaptive lighting",
      "High-precision sensors for safety systems",
      "OEM electronic modules for full functionality",
      "Premium-quality materials for long-term durability",
    ],
  },

  // Range Rover pieces
  {
    product_id: 28,
    carName: "Range Rover",
    piece_Rechange: "Direction",
    image: "../../assets/old_spare_parts_images/Range Rover/direction.jpeg",
    otherImages: [
      "../../assets/old_spare_parts_images/Range Rover/direction1.jpeg",
      "../../assets/old_spare_parts_images/Range Rover/direction2.jpeg",
      "../../assets/old_spare_parts_images/Range Rover/direction3.jpeg",
    ],
    description:
      "Heavy-duty steering system designed for off-road conditions. Ensures stability on challenging terrains.",
    price: 222,
    keyFeatures: [
      "Reinforced off-road steering components",
      "High torque response for rocky and uneven terrain",
      "Advanced electronic steering assist",
      "Extra-stable control for large SUVs",
      "OEM durability for long-distance adventure driving",
    ],
  },
  {
    product_id: 29,
    carName: "Range Rover",
    piece_Rechange: "Braking system",
    image: "../../assets/old_spare_parts_images/Range Rover/Système de freinage.jpeg",
    otherImages: [
      "../../assets/old_spare_parts_images/Range Rover/Système de freinage1.jpeg",
      "../../assets/old_spare_parts_images/Range Rover/Système de freinage2.jpeg",
      "../../assets/old_spare_parts_images/Range Rover/Système de freinage3.jpeg",
    ],
    description:
      "Reinforced brakes made for heavy SUVs. Designed to resist overheating, dust, and mud.",
    price: 777,
    keyFeatures: [
      "Oversized brake discs for heavy SUV weight",
      "Heat-resistant design for steep descents",
      "Improved braking on mud, sand, and gravel",
      "High-performance calipers for towing stability",
      "Dust and water-resistant construction",
    ],
  },
  {
    product_id: 30,
    carName: "Range Rover",
    piece_Rechange: "Tires",
    image: "../../assets/old_spare_parts_images/Range Rover/Tires.jpeg",
    otherImages: [
      "../../assets/old_spare_parts_images/Range Rover/Tires1.jpeg",
      "../../assets/old_spare_parts_images/Range Rover/Tires2.jpeg",
      "../../assets/old_spare_parts_images/Range Rover/Tires3.jpeg",
    ],
    description:
      "All-terrain tires suitable for sand, mud, snow, and asphalt. Ideal for Range Rover, Discovery, and Defender.",
    price: 777,
    keyFeatures: [
      "All-terrain tread design for multiple surfaces",
      "Mud and snow optimized grip",
      "Reinforced sidewalls for off-road resistance",
      "Low-road noise despite rugged design",
      "Perfect for Range Rover, Discovery, and Defender",
    ],
  },
  {
    product_id: 31,
    carName: "Range Rover",
    piece_Rechange: "Seats & Leather",
    image: "../../assets/old_spare_parts_images/Range Rover/Saddlery.jpeg",
    otherImages: [
      "../../assets/old_spare_parts_images/Range Rover/Saddlery1.jpeg",
      "../../assets/old_spare_parts_images/Range Rover/Saddlery2.jpeg",
      "../../assets/old_spare_parts_images/Range Rover/Saddlery3.jpeg",
    ],
    description:
      "Oxford leather seats offering durability and comfort for premium SUVs.",
    price: 777,
    keyFeatures: [
      "Oxford premium leather upholstery",
      "Thick padding for long-distance comfort",
      "Scratch-resistant and easy to clean material",
      "Elegant stitching reflecting Land Rover luxury",
      "Designed for heated and ventilated seat options",
    ],
  },
  {
    product_id: 32,
    carName: "Range Rover",
    piece_Rechange: "Interior Trim",
    image: "../../assets/old_spare_parts_images/Range Rover/Finishing.jpeg",
    otherImages: [
      "../../assets/old_spare_parts_images/Range Rover/Finishing1.jpeg",
      "../../assets/old_spare_parts_images/Range Rover/Finishing2.jpeg",
      "../../assets/old_spare_parts_images/Range Rover/Finishing3.jpeg",
    ],
    description:
      "Luxury SUV trims including dark wood, aluminum, and carbon fiber.",
    price: 777,
    keyFeatures: [
      "Dark wood, brushed aluminum, or carbon fiber options",
      "High-end finish for luxury SUV cabins",
      "Durable and scratch-resistant surfaces",
      "Perfect OEM fit for Range Rover interiors",
      "Enhances premium and rugged design style",
    ],
  },
  {
    product_id: 33,
    carName: "Range Rover",
    piece_Rechange: "Audio system",
    image: "../../assets/old_spare_parts_images/Range Rover/Audio system.jpeg",
    otherImages: [
      "../../assets/old_spare_parts_images/Range Rover/Audio system1.jpeg",
      "../../assets/old_spare_parts_images/Range Rover/Audio system2.jpeg",
      "../../assets/old_spare_parts_images/Range Rover/Audio system3.jpeg",
    ],
    description:
      "Reinforced Meridian speakers delivering high-quality sound in large SUV cabins.",
    price: 777,
    keyFeatures: [
      "Meridian high-performance audio engineering",
      "360° surround system for large cabins",
      "Deep bass and crisp treble balance",
      "Noise-compensation technology for SUVs",
      "OEM compatibility with Touch Pro Duo system",
    ],
  },
  {
    product_id: 34,
    carName: "Range Rover",
    piece_Rechange: "Body Parts & Lighting & Electronics",
    image:
      "../../assets/old_spare_parts_images/Range Rover/Body Parts & Lighting & Electronics.jpeg",
    otherImages: [
      "../../assets/old_spare_parts_images/Range Rover/Body Parts & Lighting & Electronics1.jpeg",
      "../../assets/old_spare_parts_images/Range Rover/Body Parts & Lighting & Electronics2.jpeg",
      "../../assets/old_spare_parts_images/Range Rover/Body Parts & Lighting & Electronics3.jpeg",
    ],
    description:
      "Heavy-duty body parts for off-road conditions, durable LED headlights, and rugged electronic modules such as terrain sensors and reinforced ECUs.",
    price: 777,
    keyFeatures: [
      "Reinforced body panels for rocky terrain",
      "High-durability LED headlights with long range",
      "Terrain Response sensors and off-road modules",
      "Waterproof and dustproof electronic units",
      "Heavy-duty ECUs for extreme conditions",
    ],
  },
];

export default old_products