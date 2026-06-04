import img1 from "./smarttv1.jpeg"
import img2 from "./tv1.png"
import img3 from "./smarttv2.jpeg"
import img4 from "./tv2.jpeg"
import img5 from "./tv11.jpeg"
import img6 from "./tv22.jpeg"

export const products = [
  {
    id: "1",
    name: "UltraVision 55\" 4K OLED TV",
    slug: "ultravision-55-oled",
    category: "OLED",
    screenSize: 55,
    resolution: "4K UHD (3840 x 2160)",
    display: "OLED, HDR10+, Dolby Vision",
    smartTV: "webOS 23",
    connectivity: "Wi-Fi 6, Bluetooth 5.2, 4x HDMI 2.1, 3x USB",
    audio: "40W, Dolby Atmos",
    dimensions: "1228 x 708 x 45.9 mm (without stand)",
    weight: "18.9 kg",
    priceRange: "$1,200 - $1,500",
    features: [
      "AI Picture Pro for real-time optimization",
      "G-Sync & FreeSync for gaming",
      "Built-in voice assistant",
    ],
    images: [
      img1,
      img3,
      img1,
    ],
    isFeatured: true,
  },
  {
    id: "2",
    name: "CrystalView 65\" 4K QLED TV",
    slug: "crystalview-65-qled",
    category: "QLED",
    screenSize: 65,
    resolution: "4K UHD (3840 x 2160)",
    display: "QLED, HDR10+, 100% Color Volume",
    smartTV: "Tizen OS",
    connectivity: "Wi-Fi 5, Bluetooth 5.0, 4x HDMI 2.0, 2x USB",
    audio: "20W, Dolby Digital Plus",
    dimensions: "1450 x 830 x 58 mm (without stand)",
    weight: "24.2 kg",
    priceRange: "$900 - $1,100",
    features: [
      "Quantum Dot technology for brilliant colors",
      "Adaptive Picture for optimal brightness",
      "Multiple voice assistants supported",
    ],
    images: [
      img2,
      img5,
      img2,
    ],
    isFeatured: true,
  },
  {
    id: "3",
    name: "SmartHome 43\" Full HD LED TV",
    slug: "smarthome-43-led",
    category: "LED",
    screenSize: 43,
    resolution: "Full HD (1920 x 1080)",
    display: "LED, HDR10",
    smartTV: "Android TV 11",
    connectivity: "Wi-Fi 5, Bluetooth 5.0, 3x HDMI, 2x USB",
    audio: "16W, Dolby Audio",
    dimensions: "970 x 565 x 80 mm (with stand)",
    weight: "7.8 kg",
    priceRange: "$250 - $350",
    features: [
      "Google Assistant & Chromecast built-in",
      "Slim design with narrow bezel",
      "Energy-efficient operation",
    ],
    images: [
      img4,
      img6,
    ],
    isFeatured: false,
  },
  // Add more products as needed...
];