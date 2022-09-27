import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from 'next/future/image';
import styles from '../../styles/CustomSlder.module.css';
import ButtonShop from '../shared/buttonShop';


const CustomSlider = ({ image, version2 }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div>
            <Slider {...settings}>
                {
                    [...new Array(5)].map((_, i) => <div className='position-relative' key={i}>
                        <Image
                            className={styles.bannerImage}
                            src={image}
                            alt="Picture of the logo"
                        />
                        {
                            version2 && <div className={styles.sliderBody}>
                                <div className={styles.weekend}>
                                    Weekend Discount
                                </div>
                                <h3>Shop what</h3>
                                <h2>you desire</h2>
                                <p className='mb-2'>Big screens in incredibly slim designs...</p>
                                <ButtonShop>
                                    Shop Now
                                </ButtonShop>
                            </div>
                        }
                    </div>)
                }

            </Slider >
        </div >
    );
};

export default CustomSlider;