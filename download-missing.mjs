import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dir = path.join(__dirname, 'public', 'images', 'products');
if (!fs.existsSync(dir)){ fs.mkdirSync(dir, { recursive: true }); }
const headers = { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' };

const productImgs = {
  // Found missing/broken 29-byte images
  "acer_nitro.jpg": "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=600&q=80",
  "adapter.jpg": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80",
  "aoc_24.jpg": "https://images.unsplash.com/photo-1527443195645-1133f7f28990?w=600&q=80",
  "asus_tuf.jpg": "https://images.unsplash.com/photo-1588702545922-7fcf1e0582d9?w=600&q=80",
  "cooler.jpg": "https://images.unsplash.com/photo-1591462002131-7e822e11a14a?w=600&q=80",
  "cpu_intel.jpg": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
  "dell_xps.jpg": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80",
  "dell_24.jpg": "https://images.unsplash.com/photo-1527443195645-1133f7f28990?w=600&q=80",
  "ext_hdd.jpg": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
  "flash.jpg": "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=600&q=80",
  "gpu_4060.jpg": "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&q=80",
  "hdd_2tb.jpg": "https://images.unsplash.com/photo-1597123985799-7a09abaf0274?w=600&q=80",
  "hdmi.jpg": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80",
  "hp_envy.jpg": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600&q=80",
  "lenovo_thinkpad.jpg": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80",
  "mb_msi.jpg": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
  "msi_katana.jpg": "https://images.unsplash.com/photo-1593642702821-c823b2808229?w=600&q=80",
  "pad_steel.jpg": "https://images.unsplash.com/photo-1527814050087-3793815479db?w=600&q=80",
  "pc_i7.jpg": "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=600&q=80",
  "power.jpg": "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&q=80",
  "psu_750.jpg": "https://images.unsplash.com/photo-1587202372616-98dc41aa1d4d?w=600&q=80",
  "ram_16.jpg": "https://images.unsplash.com/photo-1541029071515-84cc54f84dc5?w=600&q=80",
  "ram_32.jpg": "https://images.unsplash.com/photo-1591462002131-7e822e11a14a?w=600&q=80",
  "router_xiaomi.jpg": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80",
  "sam_g5.jpg": "https://images.unsplash.com/photo-1588702545922-7fcf1e0582d9?w=600&q=80",
  "ssd_1tb.jpg": "https://images.unsplash.com/photo-1536411396596-afced9fa3ca4?w=600&q=80",
  "switch_dl.jpg": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
  "webcam.jpg": "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=600&q=80",
  // Ensure hero banners
  "hero1.jpg": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&q=80",
  "hero2.jpg": "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=1200&q=80",
  "hero3.jpg": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=1200&q=80"
};

const dl = (name, url) => {
  return new Promise((resolve) => {
    const file = fs.createWriteStream(path.join(dir, name));
    https.get(url, { headers }, (res) => {
      if(res.statusCode === 302 || res.statusCode === 301) {
        https.get(res.headers.location, { headers }, (res2) => {
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
    console.log("Missing images downloaded!");
};

run();
