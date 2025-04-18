import bullsEye from '../assets/bulls-eye.webp'
import thumbsUp from '../assets/thumbs-up.webp'
import meh from '../assets/meh.webp'
import { Image, ImageProps } from '@chakra-ui/react';

interface Props {
    rating: number;
}

const Emoji = ({rating}: Props) => {

    const emojiMap: { [key: number]: ImageProps } = {
        3: {src: meh, alt: 'meh', boxSize: '26px'},
        4: {src: thumbsUp, alt: 'recommended', boxSize: '25px'},
        5: {src: bullsEye, alt: 'exceptional', boxSize: '32px'},
    }

  return (
    <Image {...emojiMap[rating]} marginTop={3} />
  )
}

export default Emoji