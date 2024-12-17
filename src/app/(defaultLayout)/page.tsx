import { Products } from '#/services/product/gadgets/products';
import Link from 'next/link';

const MainPage = () => {
  return (
    <div>
      <Link href='favourites'> favorites </Link>
      <Products></Products>
    </div>
  )
}

export default MainPage
