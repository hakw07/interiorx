import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

const Topbar = () => {
    return (
        <div className="topbar bg-primary">
            <div className="container text-white py-3 d-flex flex-wrap justify-content-center justify-content-lg-between">
                <div className="d-flex flex-wrap justify-content-center justify-content-lg-between">
                    <div className="d-flex align-items-center">
                        <FaPhoneAlt className="icon"/>
                        <p className="my-0 ms-2">+88 01234-567899, +88 01298-765431</p>
                    </div>
                    <div className="ms-3 d-flex align-items-center">
                        <IoMdMail className="icon fs-5"/>
                        <p className="my-0 ms-2">interiorx@example.com</p>
                    </div>
                </div>
                <div className="ms-3 d-flex align-items-center">
                    <p className="my-0">North Tower(3rd floor), Dhaka, Bangladesh</p>
                </div>
            </div>
        </div>
    );
}

export default Topbar;