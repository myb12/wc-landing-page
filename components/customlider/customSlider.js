import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import banner1 from '../../public/images/banner-1.png';
import Image from 'next/future/image';
import styles from '../../styles/CustomSlder.module.css';


const CustomSlider = () => {
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
                    [...new Array(5)].map((_, i) => <div key={i}>
                        <Image
                            className={styles.bannerImage}
                            src={banner1}
                            alt="Picture of the logo"
                        />
                    </div>)
                }

            </Slider>
        </div>
    );
};

export default CustomSlider;