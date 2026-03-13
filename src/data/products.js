// Curated local tech-specific image URLs for 100% reliable rendering
const lapIds = [
  "asus_rog.jpg", "lenovo_legion.jpg", "acer_nitro.jpg",
  "hp_omen.jpg", "msi_katana.jpg", "dell_xps.jpg",
  "macbook_pro.jpg", "asus_zenbook.jpg", "lenovo_thinkpad.jpg"
];

const deskIds = ["pc_i9.jpg", "pc_i7.jpg"];

const compIds = [
  "cpu_intel.jpg", "cpu_amd.jpg", "mb_asus.jpg",
  "mb_msi.jpg", "ram_16.jpg", "ram_32.jpg",
  "ssd_1tb.jpg", "hdd_2tb.jpg", "gpu_4060.jpg",
  "gpu_7800.jpg", "psu_750.jpg", "cooler.jpg"
];

const periphIds = [
  "mouse_razer.jpg", "mouse_g102.jpg", "kb_hyperx.jpg",
  "hs_logi.jpg", "pad_steel.jpg", "webcam.jpg",
  "mic.jpg", "gamepad.jpg"
];

const monIds = [
  "lg_27.jpg", "sam_g5.jpg", "aoc_24.jpg",
  "asus_tuf.jpg", "dell_24.jpg", "benq_24.jpg"
];

const netIds = [
  "router_tp.jpg", "router_keen.jpg", "switch_dl.jpg",
  "mesh.jpg", "adapter.jpg", "router_xiaomi.jpg"
];

const accIds = [
  "flash.jpg", "bag.jpg", "hdmi.jpg", "power.jpg",
  "stand.jpg", "paste.jpg", "ext_hdd.jpg", "patch.jpg"
];

// Actual local mapped images mapped directly to specific products
const imgMap = {
  // Laptops
  "ASUS ROG Strix": "/images/products/asus_rog.jpg",
  "Lenovo Legion 5": "/images/products/lenovo_legion.jpg",
  "Acer Nitro 5": "/images/products/acer_nitro.jpg",
  "HP Omen": "/images/products/hp_omen.jpg",
  "MSI Katana": "/images/products/msi_katana.jpg",
  "Dell XPS 15": "/images/products/dell_xps.jpg",
  "Apple MacBook Pro": "/images/products/macbook_pro.jpg",
  "ASUS ZenBook": "/images/products/asus_zenbook.jpg",
  "Lenovo ThinkPad X1": "/images/products/lenovo_thinkpad.jpg",
  "HP Envy": "/images/products/hp_envy.jpg",
  // Desktops
  "Gaming PC Core i9": "/images/products/pc_i9.jpg",
  "Gaming PC Core i7": "/images/products/pc_i7.jpg",
  // Components
  "Intel Core": "/images/products/cpu_intel.jpg",
  "AMD Ryzen": "/images/products/cpu_amd.jpg",
  "MB ASUS": "/images/products/mb_asus.jpg",
  "MB MSI": "/images/products/mb_msi.jpg",
  "RAM 16GB": "/images/products/ram_16.jpg",
  "RAM 32GB": "/images/products/ram_32.jpg",
  "SSD 1TB": "/images/products/ssd_1tb.jpg",
  "HDD 2TB": "/images/products/hdd_2tb.jpg",
  "RTX 4060": "/images/products/gpu_4060.jpg",
  "RX 7800 XT": "/images/products/gpu_7800.jpg",
  "PSU 750W": "/images/products/psu_750.jpg",
  "Cooler": "/images/products/cooler.jpg",
  // Peripherals
  "Mouse Razer": "/images/products/mouse_razer.jpg",
  "Mouse G102": "/images/products/mouse_g102.jpg",
  "KB HyperX": "/images/products/kb_hyperx.jpg",
  "Headset Logi": "/images/products/hs_logi.jpg",
  "Pad SteelSeries": "/images/products/pad_steel.jpg",
  "Webcam Havit": "/images/products/webcam.jpg",
  "Mic Fifine": "/images/products/mic.jpg",
  "Gamepad": "/images/products/gamepad.jpg",
  // Monitors
  "LG 27\"": "/images/products/lg_27.jpg",
  "Samsung G5": "/images/products/sam_g5.jpg",
  "AOC 24\"": "/images/products/aoc_24.jpg",
  "ASUS TUF 27\"": "/images/products/asus_tuf.jpg",
  "Dell 24\"": "/images/products/dell_24.jpg",
  "BenQ 24\"": "/images/products/benq_24.jpg",
  // Networking
  "Router TP-Link": "/images/products/router_tp.jpg",
  "Router Keenetic": "/images/products/router_keen.jpg",
  "Switch D-Link": "/images/products/switch_dl.jpg",
  "Mesh Deco": "/images/products/mesh.jpg",
  "Adapter TP-Link": "/images/products/adapter.jpg",
  "Router Xiaomi": "/images/products/router_xiaomi.jpg",
  // Accessories
  "Flash 64GB": "/images/products/flash.jpg",
  "Bag 15.6\"": "/images/products/bag.jpg",
  "HDMI 2m": "/images/products/hdmi.jpg",
  "Power Strip": "/images/products/power.jpg",
  "Laptop Stand": "/images/products/stand.jpg",
  "Thermal Paste": "/images/products/paste.jpg",
  "Ext HDD": "/images/products/ext_hdd.jpg",
  "Patch Cord": "/images/products/patch.jpg"
};

const getTechImg = (arr, isSpecific = false) => {
  const file = arr[Math.floor(Math.random() * arr.length)];
  return `/images/products/${file}`;
};

const generateProducts = () => {
  const products = [];
  let id = 1;

  // 1. Computers & Laptops
  const laptops = ["ASUS ROG Strix", "Lenovo Legion 5", "Acer Nitro 5", "HP Omen", "MSI Katana", "Dell XPS 15", "Apple MacBook Pro", "ASUS ZenBook", "Lenovo ThinkPad X1", "HP Envy"];
  for (let i = 0; i < 15; i++) {
    const baseName = laptops[Math.floor(Math.random() * laptops.length)];
    products.push({
      id: id++,
      name: `${baseName} ${Math.floor(Math.random() * 9000)}`,
      category: "comp_laptops",
      price: Math.floor(Math.random() * (180000 - 40000) + 40000),
      image: imgMap[baseName] || getSpecificImg("laptop", i),
      isNew: Math.random() > 0.7
    });
  }
  for (let i = 0; i < 5; i++) {
    const isI9 = Math.random() > 0.5;
    const baseName = `Gaming PC Core i${isI9 ? '9' : '7'}`;
    products.push({
      id: id++,
      name: baseName,
      category: "comp_laptops",
      price: Math.floor(Math.random() * (300000 - 70000) + 70000),
      image: imgMap[baseName],
      isNew: Math.random() > 0.7
    });
  }

  // 2. PC Components
  const components = ["Intel Core", "AMD Ryzen", "MB ASUS", "MB MSI", "RAM 16GB", "RAM 32GB", "SSD 1TB", "HDD 2TB", "RTX 4060", "RX 7800 XT", "PSU 750W", "Cooler"];
  for (let i = 0; i < 20; i++) {
    const baseName = components[Math.floor(Math.random() * components.length)];
    products.push({
      id: id++,
      name: `${baseName} ${Math.floor(Math.random() * 900)}`,
      category: "components",
      price: Math.floor(Math.random() * (70000 - 3000) + 3000),
      image: imgMap[baseName] || getSpecificImg("component", i),
      isNew: Math.random() > 0.8
    });
  }

  // 3. Peripherals
  const peripherals = ["Mouse Razer", "KB HyperX", "Headset Logi", "Pad SteelSeries", "Webcam Havit", "Mic Fifine", "Gamepad", "Mouse G102"];
  for (let i = 0; i < 15; i++) {
    const baseName = peripherals[Math.floor(Math.random() * peripherals.length)];
    products.push({
      id: id++,
      name: baseName,
      category: "peripherals",
      price: Math.floor(Math.random() * (15000 - 1000) + 1000),
      image: imgMap[baseName] || getSpecificImg("peripheral", i),
      isNew: Math.random() > 0.7
    });
  }

  // 4. Monitors
  const monitors = ["LG 27\"", "Samsung G5", "AOC 24\"", "ASUS TUF 27\"", "Dell 24\"", "BenQ 24\""];
  for (let i = 0; i < 10; i++) {
    const baseName = monitors[Math.floor(Math.random() * monitors.length)];
    products.push({
      id: id++,
      name: baseName,
      category: "monitors",
      price: Math.floor(Math.random() * (45000 - 10000) + 10000),
      image: imgMap[baseName] || getSpecificImg("monitor", i),
      isNew: Math.random() > 0.6
    });
  }

  // 5. Networking
  const networking = ["Router TP-Link", "Router Keenetic", "Switch D-Link", "Mesh Deco", "Adapter TP-Link", "Router Xiaomi"];
  for (let i = 0; i < 10; i++) {
    const baseName = networking[Math.floor(Math.random() * networking.length)];
    products.push({
      id: id++,
      name: baseName,
      category: "networking",
      price: Math.floor(Math.random() * (12000 - 1500) + 1500),
      image: imgMap[baseName] || getSpecificImg("networking", i),
      isNew: Math.random() > 0.8
    });
  }

  // 6. Accessories
  const accessories = ["Flash 64GB", "Bag 15.6\"", "HDMI 2m", "Power Strip", "Laptop Stand", "Thermal Paste", "Ext HDD", "Patch Cord"];
  for (let i = 0; i < 10; i++) {
    const baseName = accessories[Math.floor(Math.random() * accessories.length)];
    products.push({
      id: id++,
      name: baseName,
      category: "accessories",
      price: Math.floor(Math.random() * (5000 - 300) + 300),
      image: imgMap[baseName] || getSpecificImg("accessory", i),
      isNew: Math.random() > 0.9
    });
  }

  return products;
};

const products = generateProducts();
export default products;
