
'use client'
import TrackVisibility from 'react-on-screen';
import img from '@/public/contact-img.png'
import './contact.css'
import 'animate.css';
import React, { useState  } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import MyModal from '../ui/modal';
import Image from 'next/image';
import { InputForm } from './form/form';

function Connect(){

     const [isOpen, setIsOpen] = useState(false)
 

    return(
        <div id='coonect' style={{}} className='pb-' >
           <MyModal setIsOpen={setIsOpen} isOpen={isOpen} />
            <div className="d-flex justify-content-center flex-wrap  gap-4 p-1 align-items-center container">
                <div className='col-xs-12 col-lg-5 p-3 col-md-5' >
                    <TrackVisibility>
                    {
                        ({isVisible})=>(
                        <div className={ `${ isVisible && ' animate__animated animate__zoomIn'}`}>
                            <Image src={img} alt='img' className='w-100 h-100'/>
                        </div>
                        )
                    }
                    </TrackVisibility>
                </div>
                <div className="col-xs-12 col-md-7 col-lg-6 row  flex-wrap justify-content-center gap-2 mb-5 p-3">
                    <h1 className='w-100 text-light text-capitalize p-3'> get in touch</h1>
                    <InputForm />
                </div>
            </div>
        </div>
    )
}
export default Connect;