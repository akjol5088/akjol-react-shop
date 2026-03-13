import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dir = path.join(__dirname, 'public', 'images', 'products');
if (!fs.existsSync(dir)){ fs.mkdirSync(dir, { recursive: true }); }

const productImgs = {
  // Laptops
  "asus_rog.jpg": "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=600&q=80",
  "lenovo_legion.jpg": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600&q=80",
  "acer_nitro.jpg": "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600&q=80",
  "hp_omen.jpg": "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&q=80",
  "msi_katana.jpg": "https://images.unsplash.com/photo-1588872657578-7df11b4de657?w=600&q=80",
  "dell_xps.jpg": "https://images.unsplash.com/photo-1593642702821-c823b2808229?w=600&q=80",
  "macbook_pro.jpg": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80",
  "asus_zenbook.jpg": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80",
  "lenovo_thinkpad.jpg": "https://images.unsplash.com/photo-1593642702749-b7d2a5507339?w=600&q=80",
  "hp_envy.jpg": "https://images.unsplash.com/photo-1515347619252-64f6ac065b20?w=600&q=80",
  
  // Desktops
  "pc_i9.jpg": "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=600&q=80",
  "pc_i7.jpg": "https://images.unsplash.com/photo-1624704725350-1c39ab87c126?w=600&q=80",
  
  // Components
  "cpu_intel.jpg": "https://images.unsplash.com/photo-1591462002131-7e822e11a14a?w=600&q=80",
  "cpu_amd.jpg": "https://images.unsplash.com/photo-1541029071515-84cc54f84dc5?w=600&q=80",
  "mb_asus.jpg": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
  "mb_msi.jpg": "https://images.unsplash.com/photo-1555617781-bc582d2c1257?w=600&q=80",
  "ram_16.jpg": "https://images.unsplash.com/photo-1562408590-e891b2bf5e0c?w=600&q=80",
  "ram_32.jpg": "https://images.unsplash.com/photo-1591994843349-f415893b0a6b?w=600&q=80",
  "ssd_1tb.jpg": "https://images.unsplash.com/photo-1597123985799-7a09abaf0274?w=600&q=80",
  "hdd_2tb.jpg": "https://images.unsplash.com/photo-1536411396596-afced9fa3ca4?w=600&q=80",
  "gpu_4060.jpg": "https://images.unsplash.com/photo-1587202372616-98dc41aa1d4d?w=600&q=80",
  "gpu_7800.jpg": "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&q=80",
  "psu_750.jpg": "https://images.unsplash.com/photo-1588872657578-7df11b4de657?w=600&q=80",
  "cooler.jpg": "https://images.unsplash.com/photo-1555617781-bc582d2c1257?w=600&q=80",
  
  // Peripherals
  "mouse_razer.jpg": "https://images.unsplash.com/photo-1527814050087-3793815479db?w=600&q=80",
  "mouse_g102.jpg": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600&q=80",
  "kb_hyperx.jpg": "https://images.unsplash.com/photo-1595225476474-87563907a212?w=600&q=80",
  "hs_logi.jpg": "https://images.unsplash.com/photo-1605773527852-c546a8584ea3?w=600&q=80",
  "pad_steel.jpg": "https://images.unsplash.com/photo-1552831388-6a0b35077328?w=600&q=80",
  "webcam.jpg": "https://images.unsplash.com/photo-1588701987590-d44a2aa2a84a?w=600&q=80",
  "mic.jpg": "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=600&q=80",
  "gamepad.jpg": "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=600&q=80",
  
  // Monitors
  "lg_27.jpg": "https://images.unsplash.com/photo-1527443195645-1133f7f28990?w=600&q=80",
  "sam_g5.jpg": "https://images.unsplash.com/photo-1542385151-5120a1db4b23?w=600&q=80",
  "aoc_24.jpg": "https://images.unsplash.com/photo-1588702545922-7fcf1e0582d9?w=600&q=80",
  "asus_tuf.jpg": "https://images.unsplash.com/photo-1611462985358-6c8469cbdd32?w=600&q=80",
  "dell_24.jpg": "https://images.unsplash.com/photo-1593640498305-b3e1fb3c490d?w=600&q=80",
  "benq_24.jpg": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80",
  
  // Networking
  "router_tp.jpg": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80",
  "router_keen.jpg": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
  "switch_dl.jpg": "https://images.unsplash.com/photo-1580828369019-ea909bcff57f?w=600&q=80",
  "mesh.jpg": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80",
  "adapter.jpg": "https://images.unsplash.com/photo-1610465299993-e6675c9f9fac?w=600&q=80",
  "router_xiaomi.jpg": "https://images.unsplash.com/photo-1584988775264-77a82b9dc31d?w=600&q=80",
  
  // Accessories
  "flash.jpg": "https://images.unsplash.com/photo-1615563820986-e8e0303ba6d1?w=600&q=80",
  "bag.jpg": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80",
  "hdmi.jpg": "https://images.unsplash.com/photo-1528643323083-d3434dbd1810?w=600&q=80",
  "power.jpg": "https://images.unsplash.com/photo-1620825937374-811cce66eb55?w=600&q=80",
  "stand.jpg": "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&q=80",
  "paste.jpg": "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?w=600&q=80",
  "ext_hdd.jpg": "https://images.unsplash.com/photo-1626019342417-af9ea4cceba5?w=600&q=80",
  "patch.jpg": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80"
};

const dl = (name, url) => {
  return new Promise((resolve) => {
    const file = fs.createWriteStream(path.join(dir, name));
    https.get(url, (res) => {
      if(res.statusCode === 302) {
        https.get(res.headers.location, (res2) => {
          res2.pipe(file);
          file.on('finish', () => resolve());
        });
      } else {
        res.pipe(file);
        file.on('finish', () => resolve());
      }
    });
  });
};

const run = async () => {
    const promises = [];
    for (const [name, url] of Object.entries(productImgs)) {
        promises.push(dl(name, url));
    }
    await Promise.all(promises);
    console.log("All bulletproof local contextual images downloaded successfully to /public/images/products!");
};

run();
