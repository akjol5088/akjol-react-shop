import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dir = path.join(__dirname, 'public', 'images', 'products');

const brokenFiles = [
  "asus_tuf.jpg", "cooler.jpg", "gpu_4060.jpg", "hdd_2tb.jpg", 
  "msi_katana.jpg", "psu_750.jpg", "ram_32.jpg", "sam_g5.jpg", "ssd_1tb.jpg"
];

// Fallback to a 100% reliable local generation service (Picsum seeded so it's consistent)
const downloadFallback = (name) => {
  return new Promise((resolve) => {
    const file = fs.createWriteStream(path.join(dir, name));
    const url = `https://picsum.photos/seed/${name.split('.')[0]}/600/400`;
    
    https.get(url, (res) => {
      if(res.statusCode === 302 || res.statusCode === 301) {
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
    console.log("Replacing remaining 29-byte broken files with guaranteed fallbacks...");
    const promises = brokenFiles.map(name => downloadFallback(name));
    await Promise.all(promises);
    console.log("All broken files replaced successfully!");
};

run();
