import styles from '../../styles/PopularProduct.module.css';
import PopularProductCard from '../shared/popularProductCard';
import icon0 from '../../public/images/icon-0.png';
import icon1 from '../../public/images/icon-1.png';
import icon2 from '../../public/images/icon-2.png';
import icon3 from '../../public/images/icon-3.png';
import icon4 from '../../public/images/icon-4.png';
import icon5 from '../../public/images/icon-5.png';
import icon6 from '../../public/images/icon-6.png';

const popularProductData = [
    {
        title: 'Electronics Appliances',
        icon: icon0
    },
    {
        title: 'Electronics Appliances',
        icon: icon1
    },
    {
        title: 'Electronics Appliances',
        icon: icon2
    },
    {
        title: 'Electronics Appliances',
        icon: icon0
    },
    {
        title: 'Electronics Appliances',
        icon: icon3
    },
    {
        title: 'Electronics Appliances',
        icon: icon4
    },
    {
        title: 'Electronics Appliances',
        icon: icon5
    },
    {
        title: 'Electronics Appliances',
        icon: icon6
    },

]

const PopularProduct = () => {
    return (
        <div className={styles.popularProduct}>
            <h1>Popular Product Categories</h1>
            <div className="row g-3">
                {
                    popularProductData.map((product, i) => <div key={i} className="col-md-3">
                        <PopularProductCard product={product} />
                    </div>)
                }
            </div>
        </div>
    );
};

export default PopularProduct;