import { BiMenu } from 'react-icons/bi';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import styles from '../styles/ButtonCategories.module.css';

const ButtonCategory = () => {
    return (
        <button className={styles.btnCategories}>
            <BiMenu />
            Top Categories
            <MdOutlineArrowDropDown />
        </button>
    );
};

export default ButtonCategory;