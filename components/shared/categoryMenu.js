
import { Dropdown } from 'rsuite';
import "rsuite/dist/rsuite.css";
import styles from '../../styles/CategoryMenu.module.css';
import { TbSofa, TbBook2 } from 'react-icons/tb';
import { AiOutlineLaptop } from 'react-icons/ai';
import { HiOutlineHome } from 'react-icons/hi';
import { MdOutlinePhoneIphone, MdOutlineFastfood } from 'react-icons/md';

const CategoryMenu = () => {

    const multiMenu = (title, icon) => (<div className='d-flex align-items-center'>
        {icon}
        <span className="ms-3">{title}</span>
    </div>)

    return (
        <Dropdown.Menu className={styles.categoryMenu}>

            <Dropdown.Menu title={multiMenu('Laptop and Desktop', <AiOutlineLaptop />)}>
                <Dropdown.Item>Laptop and Desktop</Dropdown.Item>
                <Dropdown.Item>Home Living</Dropdown.Item>

                <Dropdown.Menu title="Book and Stationary">
                    <Dropdown.Item>Laptop and Desktop</Dropdown.Item>
                    <Dropdown.Item >Home Living</Dropdown.Item>
                    <Dropdown.Item>Book and Stationary</Dropdown.Item>
                    <Dropdown.Item>Home Appliances</Dropdown.Item>
                </Dropdown.Menu>
                <Dropdown.Item>Home Appliances </Dropdown.Item>
                <Dropdown.Item>Book and Stationary</Dropdown.Item>
                <Dropdown.Item>Electronics Appliances</Dropdown.Item>
                <Dropdown.Item>Fast Food and Snacks</Dropdown.Item>
                <Dropdown.Item>More Categories</Dropdown.Item>
            </Dropdown.Menu>

            <Dropdown.Item className={styles.categoryItem}>
                <div className='d-flex align-items-center'>
                    <TbSofa />
                    <span className="ms-3">Home Living</span>
                </div>
            </Dropdown.Item>


            <Dropdown.Menu title={multiMenu('Book and Stationary', <TbBook2 />)} >
                <Dropdown.Item>Laptop and Desktop</Dropdown.Item>
                <Dropdown.Item>Home Living</Dropdown.Item>

                <Dropdown.Menu title="Book and Stationary">
                    <Dropdown.Item>Laptop and Desktop</Dropdown.Item>
                    <Dropdown.Item >Home Living</Dropdown.Item>
                    <Dropdown.Item>Book and Stationary</Dropdown.Item>
                    <Dropdown.Item>Home Appliances</Dropdown.Item>
                </Dropdown.Menu>
                <Dropdown.Item>Home Appliances </Dropdown.Item>
                <Dropdown.Item>Book and Stationary</Dropdown.Item>
                <Dropdown.Item>Electronics Appliances</Dropdown.Item>
                <Dropdown.Item>Fast Food and Snacks</Dropdown.Item>
                <Dropdown.Item>More Categories</Dropdown.Item>
            </Dropdown.Menu>

            <Dropdown.Menu title={multiMenu('Home Appliances', <HiOutlineHome />)}>
                <Dropdown.Item>Laptop and Desktop</Dropdown.Item>
                <Dropdown.Item>Home Living</Dropdown.Item>

                <Dropdown.Menu title="Book and Stationary">
                    <Dropdown.Item>Laptop and Desktop</Dropdown.Item>
                    <Dropdown.Item >Home Living</Dropdown.Item>
                    <Dropdown.Item>Book and Stationary</Dropdown.Item>
                    <Dropdown.Item>Home Appliances</Dropdown.Item>
                </Dropdown.Menu>
                <Dropdown.Item>Home Appliances </Dropdown.Item>
                <Dropdown.Item>Book and Stationary</Dropdown.Item>
                <Dropdown.Item>Electronics Appliances</Dropdown.Item>
                <Dropdown.Item>Fast Food and Snacks</Dropdown.Item>
                <Dropdown.Item>More Categories</Dropdown.Item>
            </Dropdown.Menu>

            <Dropdown.Item className={styles.categoryItem}>
                <div className='d-flex align-items-center'>
                    <TbSofa />
                    <span className="ms-3">Book and Stationary</span>
                </div>
            </Dropdown.Item>

            <Dropdown.Menu title={multiMenu('Electronics Appliances', <MdOutlinePhoneIphone />)}>
                <Dropdown.Item>Laptop and Desktop</Dropdown.Item>
                <Dropdown.Item>Home Living</Dropdown.Item>

                <Dropdown.Menu title="Book and Stationary">
                    <Dropdown.Item>Laptop and Desktop</Dropdown.Item>
                    <Dropdown.Item >Home Living</Dropdown.Item>
                    <Dropdown.Item>Book and Stationary</Dropdown.Item>
                    <Dropdown.Item>Home Appliances</Dropdown.Item>
                </Dropdown.Menu>
                <Dropdown.Item>Home Appliances </Dropdown.Item>
                <Dropdown.Item>Book and Stationary</Dropdown.Item>
                <Dropdown.Item>Electronics Appliances</Dropdown.Item>
                <Dropdown.Item>Fast Food and Snacks</Dropdown.Item>
                <Dropdown.Item>More Categories</Dropdown.Item>
            </Dropdown.Menu>

            <Dropdown.Item className={styles.categoryItem}>
                <div className='d-flex align-items-center'>
                    <MdOutlineFastfood />
                    <span className="ms-3">Fast Food and Snacks</span>
                </div>
            </Dropdown.Item>

            <Dropdown.Menu title="More Categories">
                <Dropdown.Item>Laptop and Desktop</Dropdown.Item>
                <Dropdown.Item>Home Living</Dropdown.Item>

                <Dropdown.Menu title="Book and Stationary">
                    <Dropdown.Item>Laptop and Desktop</Dropdown.Item>
                    <Dropdown.Item >Home Living</Dropdown.Item>
                    <Dropdown.Item>Book and Stationary</Dropdown.Item>
                    <Dropdown.Item>Home Appliances</Dropdown.Item>
                </Dropdown.Menu>
                <Dropdown.Item>Home Appliances </Dropdown.Item>
                <Dropdown.Item>Book and Stationary</Dropdown.Item>
                <Dropdown.Item>Electronics Appliances</Dropdown.Item>
                <Dropdown.Item>Fast Food and Snacks</Dropdown.Item>
                <Dropdown.Item>More Categories</Dropdown.Item>
            </Dropdown.Menu>

        </Dropdown.Menu>
    );
};

export default CategoryMenu;