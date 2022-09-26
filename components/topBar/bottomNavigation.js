import styles from '../../styles/BottomNavigation.module.css';
import { TbDiscount2 } from 'react-icons/tb';
import { IoIosArrowDown } from 'react-icons/io';

const BottomNavigation = () => {
    return (
        <div className={styles.bottomNavItemWrapper}>
            <ul className='d-flex align-items-center ps-0 mb-0'>
                <li>
                    <a className='ps-0' href="#">
                        <select >
                            <option value="USD" >Exclusive  Deals</option>
                            <option value="BDT">More</option>
                        </select>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <select >
                            <option value="USD" >Smart Watches</option>
                            <option value="BDT">More</option>
                        </select>
                    </a>
                </li>
                <li>
                    <a href="#">Cell Phone</a>
                </li>
                <li>
                    <a className={styles.lastItem} href="#">Headphones</a>
                </li>
            </ul>

            <div className={styles.discountWrapper}>
                <TbDiscount2 className={styles.discountIcon} />
                <div className="d-flex flex-column align-items-start me-2">
                    <span>Only this weekend</span>
                    <h5 className='mb-0'>Super Discount</h5>
                </div>
                <IoIosArrowDown />
            </div>
        </div>
    );
};

export default BottomNavigation;