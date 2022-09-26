import { BiMenu } from 'react-icons/bi';
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from 'react-icons/md';
import styles from '../../styles/ButtonCategories.module.css';

const ButtonCategory = ({ categoryMenuVisible }) => {
    return (
        <button className={styles.btnCategories}>
            <BiMenu />
            Top Categories
            {
                categoryMenuVisible ? <MdOutlineArrowDropDown /> : <MdOutlineArrowDropUp />
            }
        </button>
    );
};

export default ButtonCategory;