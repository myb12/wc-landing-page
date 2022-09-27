import Image from 'next/future/image';
import React from 'react';
import banner1 from '../../public/images/v2-banner1.png';
import banner2 from '../../public/images/v2-banner2.png';
import banner3 from '../../public/images/v2-banner3.png';
import CustomSlider from '../customlider/customSlider';

const VersionTwoSection = () => {
    return (
        <div className="row g-3">
            <div className="col-md-8">
                <CustomSlider image={banner1} version2 />
            </div>
            <div className="col-md-4">
                <div className="row g-3">
                    <div className="col-12">
                        <Image
                            src={banner2}
                            alt="Picture of the logo"
                        />
                    </div>
                    <div className="col-12">
                        <Image
                            src={banner3}
                            alt="Picture of the logo"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VersionTwoSection;