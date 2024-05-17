import Image from 'next/image';
import webicon from '../favicon.ico';

const WebIcon: React.FC = () => {
	return <Image src={webicon} alt='Web Icon' className='webicon w-8' width={30} height={30}/>;
};

export default WebIcon;
