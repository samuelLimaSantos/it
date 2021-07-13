import image1 from '../assets/img-1.png';
import image2 from '../assets/img-2.png';
import image3 from '../assets/img-3.png';
import image4 from '../assets/img-4.png';
import image5 from '../assets/img-5.png';
import image6 from '../assets/img-6.png';

export function returnImage(image: string) {
  switch(image) {
    case 'img-1.png':
      return image1
    case 'img-2.png':
      return image2
    case 'img-3.png':
        return image3
    case 'img-4.png':
      return image4
    case 'img-5.png':
      return image5
    case 'img-6.png':
      return image6
  }
}

