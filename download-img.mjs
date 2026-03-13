import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(dir)){ fs.mkdirSync(dir, { recursive: true }); }

const imagesToDl = {
  // Hero Banners
  'hero1.jpg': 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&q=80',
  'hero2.jpg': 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=1200&q=80',
  'hero3.jpg': 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=1200&q=80',
  // Laptops
  'lap1.jpg': 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80',
  'lap2.jpg': 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80',
  'lap3.jpg': 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800&q=80',
  // Desktops
  'desk1.jpg': 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=800&q=80',
  'desk2.jpg': 'https://images.unsplash.com/photo-1624704725350-1c39ab87c126?w=800&q=80',
  // Components
  'comp1.jpg': 'https://images.unsplash.com/photo-1591462002131-7e822e11a14a?w=800&q=80',
  'comp2.jpg': 'https://images.unsplash.com/photo-1541029071515-84cc54f84dc5?w=800&q=80',
  'comp3.jpg': 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
  // Peripherals
  'per1.jpg': 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&q=80',
  'per2.jpg': 'https://images.unsplash.com/photo-1605773527852-c546a8584ea3?w=800&q=80',
  'per3.jpg': 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=800&q=80',
  // Monitors
  'mon1.jpg': 'https://images.unsplash.com/photo-1527443195645-1133f7f28990?w=800&q=80',
  'mon2.jpg': 'https://images.unsplash.com/photo-1542385151-5120a1db4b23?w=800&q=80',
  'mon3.jpg': 'https://images.unsplash.com/photo-1588702545922-7fcf1e0582d9?w=800&q=80',
  // Networking
  'net1.jpg': 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80',
  'net2.jpg': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
  // Accessories
  'acc1.jpg': 'https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=800&q=80',
  'acc2.jpg': 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80'
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
    for (const [name, url] of Object.entries(imagesToDl)) {
        promises.push(dl(name, url));
    }
    await Promise.all(promises);
    console.log("All extra images downloaded!");
};

run();
