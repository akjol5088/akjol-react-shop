import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

const images = {
  'laptop.jpg': 'https://images.unsplash.com/photo-1531297172868-9f1d1fbce505?w=800&q=80',
  'desktop.jpg': 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=800&q=80',
  'component.jpg': 'https://images.unsplash.com/photo-1591462002131-7e822e11a14a?w=800&q=80',
  'peripheral.jpg': 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&q=80',
  'monitor.jpg': 'https://images.unsplash.com/photo-1527443195645-1133f7f28990?w=800&q=80',
  'networking.jpg': 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80',
  'accessory.jpg': 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80'
};

Object.entries(images).forEach(([name, url]) => {
  const file = fs.createWriteStream(path.join(dir, name));
  const request = https.get(url, function(response) {
    if (response.statusCode === 302) {
      https.get(response.headers.location, (res) => res.pipe(file));
    } else {
      response.pipe(file);
    }
  });
});
console.log('Downloading complete context...');
