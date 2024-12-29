import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faUser , faHeart} from '@fortawesome/free-solid-svg-icons';

let product = [
  {
      id: '1',
      title: ' HAIRY sofa',
      price: 190,
      image: 'https://s3-alpha-sig.figma.com/img/2084/99f3/7c62fb49f7d4a1a6a5dc5959b40150ed?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I0U5L-4zeEY0jnX0F0nLAWM6pjc67qz~n3AO5ukq-JLKoPH12XjK~jGfN~yzwupPKqXMwpupS4VshzBr2ckyQnpWduC4Z56Co27wrrfbx0XvYT0x~td2jimu-J~yvVaOHd~nIIbl~W5r25LhjriPNtyhG-pTG3im7iz~ikhRQLYIafHyjC5ba7KQwKfUtlFVYjxqAgpdJYG1rc3DmJxpsosc9mmej384xipZYu4wYE6kTG2BAZejEHQNtj59S-4rUySR1jrcEeMQwhKSzo46j04iVCmmt6RH~01THcxzyTkxeSNku5JdIggOeG7K-wJZTIBUdhtiPCFoILoK2PcSgg__',
      description: 'This is the first product. It is amazing!',
    },
    {
      id: '2',
      title: 'Potty Table',
      price: 1560,
      image: 'https://s3-alpha-sig.figma.com/img/4491/a0ea/43eebd52ea72d60650f31030ec4bf7e6?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fmdwckpPPa3KTp0c1-QKHlIwHf2F6M5YMptKWHb2VObA0k~61jHdOvwjeNPvSP~ed69ixGsg-0wHNQj08fH3VKtNqSXKZFimx73JtvbKEGrpb8xxv0LR-9m~58SzaG86HoJJApjo6gTx-039SDkHCavJ2zJ4QmZJmFoHGFLeilO-P~-LYpl613Bq00mPVBs65a7X8~z-BK4tVrgbW~1nJ5gStmw4EF37RihH26pF0KiKYq3dGAkrCxYec9TiL0xKXvMAfuBYAzO2o0etmWRI-6NwRFk34f3nR2pZeiPguhOeaaO2zAvlOl-hbg8D0ISz3DZmaQjlDI20Nk2NujhVTg__',
      description: 'This is the second product. It is amazing!',
    },
    {
      id: '3',
      title: 'Pookie bed',
      price: 10050,
      image: 'https://s3-alpha-sig.figma.com/img/3ed3/53ed/bdb0310fb379a6b1828809d2c0652533?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WIGHdJhDHivWF-neN6zYGCZtHG6oqtdlN0i-OkhrQsOGwSRxXqkwftzlEm0y62FtL3KpZNrADikLZDxrDR3C9DktQQaoT0dNn~TIqR5vckWNopIhisDODjZMz4~CYbY1FJxQ6TjSfrkMj76EYB0wtHK1EIFdxA-dj1DPkBu1-UI-hiXkQLuD-gSnG6DgRtjITz7XO2sMsrww1lhCP3T3KdVC1CF8ZJaHPjSm2gRVu0rA~kPSe2~yWDdGIIMyCc1vVM-G-A2915m~xv2ejO-DYJkXcGL2zmkp7K0Iu3QFry0OdJ6X-OohUdNaEtRMyHqLkK3g3zk1QfB22NEPTGG83A__',
      description: 'This is the first product. It is amazing!',
    },
    {
      id: '4',
      title: 'Brown Table',
      price: 50000,
      image: 'https://s3-alpha-sig.figma.com/img/1f73/e563/4a5dbc0c29efbae1beca6ab40dd9b598?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Uigqi8Sshc4BjDXoo8WsK0iYQvCtlwUIfldzLhyTtiS-a~9OLtvZKdta~fXzE4ZAfcAlgQi5aMb1kq8Jqz5JqZXu6nFKQ-rafC9uSjC7Hy4fUD4cS7BstLvbtUb4-z8ZsiiNugMa3xNa7eaUZRBnsmCnAcJ~xELOU2ISD5-xNVzORoKgDKMsdAs7QVIyuuJTArHsrLaDEhBNRDvwLTX2hYAr0I2es3aLoTtrG~hdILGiw6mZ45wtGiN7EHfCv~464-61lSgUh50cS23C4eieveOFVR5VhQozCwnK-HIvVnG5zYCnZeomdgMeyYeMmyeI9YtA3Ay7PmpfZs20iRoYKA__',
      description: 'This is the first product. It is amazing! jdnh nhf emkdu huk.',
    },
    {
      id: '5',
      title: ' HAIRY sofa',
      price: 190,
      image: 'https://s3-alpha-sig.figma.com/img/2084/99f3/7c62fb49f7d4a1a6a5dc5959b40150ed?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I0U5L-4zeEY0jnX0F0nLAWM6pjc67qz~n3AO5ukq-JLKoPH12XjK~jGfN~yzwupPKqXMwpupS4VshzBr2ckyQnpWduC4Z56Co27wrrfbx0XvYT0x~td2jimu-J~yvVaOHd~nIIbl~W5r25LhjriPNtyhG-pTG3im7iz~ikhRQLYIafHyjC5ba7KQwKfUtlFVYjxqAgpdJYG1rc3DmJxpsosc9mmej384xipZYu4wYE6kTG2BAZejEHQNtj59S-4rUySR1jrcEeMQwhKSzo46j04iVCmmt6RH~01THcxzyTkxeSNku5JdIggOeG7K-wJZTIBUdhtiPCFoILoK2PcSgg__',
      description: 'This is the first product. It is amazing!',
    },
    {
      id: '6',
      title: 'Potty Table',
      price: 1560,
      image: 'https://s3-alpha-sig.figma.com/img/4491/a0ea/43eebd52ea72d60650f31030ec4bf7e6?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fmdwckpPPa3KTp0c1-QKHlIwHf2F6M5YMptKWHb2VObA0k~61jHdOvwjeNPvSP~ed69ixGsg-0wHNQj08fH3VKtNqSXKZFimx73JtvbKEGrpb8xxv0LR-9m~58SzaG86HoJJApjo6gTx-039SDkHCavJ2zJ4QmZJmFoHGFLeilO-P~-LYpl613Bq00mPVBs65a7X8~z-BK4tVrgbW~1nJ5gStmw4EF37RihH26pF0KiKYq3dGAkrCxYec9TiL0xKXvMAfuBYAzO2o0etmWRI-6NwRFk34f3nR2pZeiPguhOeaaO2zAvlOl-hbg8D0ISz3DZmaQjlDI20Nk2NujhVTg__',
      description: 'This is the second product. It is amazing!',
    },
    {
      id: '7',
      title: 'Pookie bed',
      price: 10050,
      image: 'https://s3-alpha-sig.figma.com/img/3ed3/53ed/bdb0310fb379a6b1828809d2c0652533?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WIGHdJhDHivWF-neN6zYGCZtHG6oqtdlN0i-OkhrQsOGwSRxXqkwftzlEm0y62FtL3KpZNrADikLZDxrDR3C9DktQQaoT0dNn~TIqR5vckWNopIhisDODjZMz4~CYbY1FJxQ6TjSfrkMj76EYB0wtHK1EIFdxA-dj1DPkBu1-UI-hiXkQLuD-gSnG6DgRtjITz7XO2sMsrww1lhCP3T3KdVC1CF8ZJaHPjSm2gRVu0rA~kPSe2~yWDdGIIMyCc1vVM-G-A2915m~xv2ejO-DYJkXcGL2zmkp7K0Iu3QFry0OdJ6X-OohUdNaEtRMyHqLkK3g3zk1QfB22NEPTGG83A__',
      description: 'This is the first product. It is amazing!',
    },
    {
      id: '8',
      title: 'Brown Table',
      price: 50000,
      image: 'https://s3-alpha-sig.figma.com/img/1f73/e563/4a5dbc0c29efbae1beca6ab40dd9b598?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Uigqi8Sshc4BjDXoo8WsK0iYQvCtlwUIfldzLhyTtiS-a~9OLtvZKdta~fXzE4ZAfcAlgQi5aMb1kq8Jqz5JqZXu6nFKQ-rafC9uSjC7Hy4fUD4cS7BstLvbtUb4-z8ZsiiNugMa3xNa7eaUZRBnsmCnAcJ~xELOU2ISD5-xNVzORoKgDKMsdAs7QVIyuuJTArHsrLaDEhBNRDvwLTX2hYAr0I2es3aLoTtrG~hdILGiw6mZ45wtGiN7EHfCv~464-61lSgUh50cS23C4eieveOFVR5VhQozCwnK-HIvVnG5zYCnZeomdgMeyYeMmyeI9YtA3Ay7PmpfZs20iRoYKA__',
      description: 'This is the first product. It is amazing! jdnh nhf emkdu huk.',
    },
    {
      id: '9',
      title: ' HAIRY sofa',
      price: 190,
      image: 'https://s3-alpha-sig.figma.com/img/2084/99f3/7c62fb49f7d4a1a6a5dc5959b40150ed?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I0U5L-4zeEY0jnX0F0nLAWM6pjc67qz~n3AO5ukq-JLKoPH12XjK~jGfN~yzwupPKqXMwpupS4VshzBr2ckyQnpWduC4Z56Co27wrrfbx0XvYT0x~td2jimu-J~yvVaOHd~nIIbl~W5r25LhjriPNtyhG-pTG3im7iz~ikhRQLYIafHyjC5ba7KQwKfUtlFVYjxqAgpdJYG1rc3DmJxpsosc9mmej384xipZYu4wYE6kTG2BAZejEHQNtj59S-4rUySR1jrcEeMQwhKSzo46j04iVCmmt6RH~01THcxzyTkxeSNku5JdIggOeG7K-wJZTIBUdhtiPCFoILoK2PcSgg__',
      description: 'This is the first product. It is amazing!',
    },
    {
      id: '2',
      title: 'Potty Table',
      price: 1560,
      image: 'https://s3-alpha-sig.figma.com/img/4491/a0ea/43eebd52ea72d60650f31030ec4bf7e6?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fmdwckpPPa3KTp0c1-QKHlIwHf2F6M5YMptKWHb2VObA0k~61jHdOvwjeNPvSP~ed69ixGsg-0wHNQj08fH3VKtNqSXKZFimx73JtvbKEGrpb8xxv0LR-9m~58SzaG86HoJJApjo6gTx-039SDkHCavJ2zJ4QmZJmFoHGFLeilO-P~-LYpl613Bq00mPVBs65a7X8~z-BK4tVrgbW~1nJ5gStmw4EF37RihH26pF0KiKYq3dGAkrCxYec9TiL0xKXvMAfuBYAzO2o0etmWRI-6NwRFk34f3nR2pZeiPguhOeaaO2zAvlOl-hbg8D0ISz3DZmaQjlDI20Nk2NujhVTg__',
      description: 'This is the second product. It is amazing!',
    },
    {
      id: '3',
      title: 'Pookie bed',
      price: 10050,
      image: 'https://s3-alpha-sig.figma.com/img/3ed3/53ed/bdb0310fb379a6b1828809d2c0652533?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WIGHdJhDHivWF-neN6zYGCZtHG6oqtdlN0i-OkhrQsOGwSRxXqkwftzlEm0y62FtL3KpZNrADikLZDxrDR3C9DktQQaoT0dNn~TIqR5vckWNopIhisDODjZMz4~CYbY1FJxQ6TjSfrkMj76EYB0wtHK1EIFdxA-dj1DPkBu1-UI-hiXkQLuD-gSnG6DgRtjITz7XO2sMsrww1lhCP3T3KdVC1CF8ZJaHPjSm2gRVu0rA~kPSe2~yWDdGIIMyCc1vVM-G-A2915m~xv2ejO-DYJkXcGL2zmkp7K0Iu3QFry0OdJ6X-OohUdNaEtRMyHqLkK3g3zk1QfB22NEPTGG83A__',
      description: 'This is the first product. It is amazing!',
    },
    {
      id: '4',
      title: 'Brown Table',
      price: 50000,
      image: 'https://s3-alpha-sig.figma.com/img/1f73/e563/4a5dbc0c29efbae1beca6ab40dd9b598?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Uigqi8Sshc4BjDXoo8WsK0iYQvCtlwUIfldzLhyTtiS-a~9OLtvZKdta~fXzE4ZAfcAlgQi5aMb1kq8Jqz5JqZXu6nFKQ-rafC9uSjC7Hy4fUD4cS7BstLvbtUb4-z8ZsiiNugMa3xNa7eaUZRBnsmCnAcJ~xELOU2ISD5-xNVzORoKgDKMsdAs7QVIyuuJTArHsrLaDEhBNRDvwLTX2hYAr0I2es3aLoTtrG~hdILGiw6mZ45wtGiN7EHfCv~464-61lSgUh50cS23C4eieveOFVR5VhQozCwnK-HIvVnG5zYCnZeomdgMeyYeMmyeI9YtA3Ay7PmpfZs20iRoYKA__',
      description: 'This is the first product. It is amazing! jdnh nhf emkdu huk.',
    },
    {
      id: '1',
      title: ' HAIRY sofa',
      price: 190,
      image: 'https://s3-alpha-sig.figma.com/img/2084/99f3/7c62fb49f7d4a1a6a5dc5959b40150ed?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I0U5L-4zeEY0jnX0F0nLAWM6pjc67qz~n3AO5ukq-JLKoPH12XjK~jGfN~yzwupPKqXMwpupS4VshzBr2ckyQnpWduC4Z56Co27wrrfbx0XvYT0x~td2jimu-J~yvVaOHd~nIIbl~W5r25LhjriPNtyhG-pTG3im7iz~ikhRQLYIafHyjC5ba7KQwKfUtlFVYjxqAgpdJYG1rc3DmJxpsosc9mmej384xipZYu4wYE6kTG2BAZejEHQNtj59S-4rUySR1jrcEeMQwhKSzo46j04iVCmmt6RH~01THcxzyTkxeSNku5JdIggOeG7K-wJZTIBUdhtiPCFoILoK2PcSgg__',
      description: 'This is the first product. It is amazing!',
    },
    {
      id: '2',
      title: 'Potty Table',
      price: 1560,
      image: 'https://s3-alpha-sig.figma.com/img/4491/a0ea/43eebd52ea72d60650f31030ec4bf7e6?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fmdwckpPPa3KTp0c1-QKHlIwHf2F6M5YMptKWHb2VObA0k~61jHdOvwjeNPvSP~ed69ixGsg-0wHNQj08fH3VKtNqSXKZFimx73JtvbKEGrpb8xxv0LR-9m~58SzaG86HoJJApjo6gTx-039SDkHCavJ2zJ4QmZJmFoHGFLeilO-P~-LYpl613Bq00mPVBs65a7X8~z-BK4tVrgbW~1nJ5gStmw4EF37RihH26pF0KiKYq3dGAkrCxYec9TiL0xKXvMAfuBYAzO2o0etmWRI-6NwRFk34f3nR2pZeiPguhOeaaO2zAvlOl-hbg8D0ISz3DZmaQjlDI20Nk2NujhVTg__',
      description: 'This is the second product. It is amazing!',
    },
    {
      id: '3',
      title: 'Pookie bed',
      price: 10050,
      image: 'https://s3-alpha-sig.figma.com/img/3ed3/53ed/bdb0310fb379a6b1828809d2c0652533?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WIGHdJhDHivWF-neN6zYGCZtHG6oqtdlN0i-OkhrQsOGwSRxXqkwftzlEm0y62FtL3KpZNrADikLZDxrDR3C9DktQQaoT0dNn~TIqR5vckWNopIhisDODjZMz4~CYbY1FJxQ6TjSfrkMj76EYB0wtHK1EIFdxA-dj1DPkBu1-UI-hiXkQLuD-gSnG6DgRtjITz7XO2sMsrww1lhCP3T3KdVC1CF8ZJaHPjSm2gRVu0rA~kPSe2~yWDdGIIMyCc1vVM-G-A2915m~xv2ejO-DYJkXcGL2zmkp7K0Iu3QFry0OdJ6X-OohUdNaEtRMyHqLkK3g3zk1QfB22NEPTGG83A__',
      description: 'This is the first product. It is amazing!',
    },
    {
      id: '4',
      title: 'Brown Table',
      price: 50000,
      image: 'https://s3-alpha-sig.figma.com/img/1f73/e563/4a5dbc0c29efbae1beca6ab40dd9b598?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Uigqi8Sshc4BjDXoo8WsK0iYQvCtlwUIfldzLhyTtiS-a~9OLtvZKdta~fXzE4ZAfcAlgQi5aMb1kq8Jqz5JqZXu6nFKQ-rafC9uSjC7Hy4fUD4cS7BstLvbtUb4-z8ZsiiNugMa3xNa7eaUZRBnsmCnAcJ~xELOU2ISD5-xNVzORoKgDKMsdAs7QVIyuuJTArHsrLaDEhBNRDvwLTX2hYAr0I2es3aLoTtrG~hdILGiw6mZ45wtGiN7EHfCv~464-61lSgUh50cS23C4eieveOFVR5VhQozCwnK-HIvVnG5zYCnZeomdgMeyYeMmyeI9YtA3Ay7PmpfZs20iRoYKA__',
      description: 'This is the first product. It is amazing! jdnh nhf emkdu huk.',
    },
]


const ProductDetails = ({params}: {params : any}) => {
  // const router = useRouter();
  // const { id } = router.query;
  const p = product.find((prod) => prod.id === params.id);

  if (!p) return <p>Product not found</p>;

  return (
    <div>
      <div className='idProduct'>
    <img className='idProImg' src={p.image}  />
    <div className='idProduct2'>
    <h1 className='idProName'>{p.title}</h1>
    <p className='idProPrice'>Price: ${p.price}</p>
    <p className='idProDescription'>Description: {p.description}</p>
    <Link className="cart" href="/carts">Add to Cart</Link>
    <FontAwesomeIcon className='font fontid' icon={faHeart} size="sm" />
    </div>
  </div>
    </div>
  );
};

export default ProductDetails;
