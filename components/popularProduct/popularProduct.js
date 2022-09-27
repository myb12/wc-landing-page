import styles from '../../styles/PopularProduct.module.css';
import PopularProductCard from '../shared/popularProductCard';

const PopularProduct = () => {
    return (
        <div className={styles.popularProduct}>
            <h1>Popular Product Categories</h1>
            <div className="row g-3">
                {
                    [...new Array(8)].map((_, i) => <div key={i} className="col-md-3">
                        <PopularProductCard />
                    </div>)
                }
            </div>
        </div>
    );
};

export default PopularProduct;