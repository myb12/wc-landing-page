import { BiMenu } from 'react-icons/bi';
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from 'react-icons/md';
import { useSelector } from 'react-redux';
import styles from '../../styles/ButtonCategories.module.css';

const ButtonCategory = () => {
    const { isVisible } = useSelector(state => state.categoryMenuVisible)
    return (
        <button className={styles.btnCategories}>
            <BiMenu />
            Top Categories
            {
                isVisible ? <MdOutlineArrowDropDown /> : <MdOutlineArrowDropUp />
            }
        </button>
    );
};

export default ButtonCategory;