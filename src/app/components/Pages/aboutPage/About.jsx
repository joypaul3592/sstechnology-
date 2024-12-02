'use client'
import Image from 'next/image'
import TitleBox from '../../uiKit/TitleBox';
import { TbCheckbox } from "react-icons/tb";
import { usePathname } from 'next/navigation';
import aboutImg from '../../../assets/image/about/about4.png'
// import aboutImg2 from '../../../assets/image/about/about2.png'

export default function About() {
    const pathname = usePathname();
    const benefitsArray = [
        { id: 1, name: "Innovation & Technology Mastery" },
        { id: 2, name: "User-Centric Design" },
        { id: 3, name: "Agile Development" },
        { id: 4, name: "Cross-Platform Compatibility" },
        { id: 5, name: "Security and Authentication" },
        { id: 6, name: "AWS Integration for Scalability" },
        { id: 7, name: "Stylish UI with Tailwind" },
        { id: 8, name: "Transparent Communication" },
        { id: 9, name: "Customized Solutions" },
        { id: 10, name: "Proactive Problem Solving" },
    ];
    return (
        <div className=" pb-12 pt-32 z-[10] relative">
            {
                pathname !== '/about' && <TitleBox tag='About Us' title1='Decoding BrongoBrain' title2='About Your Tech Company' />
            }
            <div className='xl:flex 2xl:items-start items-center gap-10 py-10 mt-16'>
                <div className=' relative xl:w-1/2 px-6'>
                    <Image data-aos="fade-up" src={aboutImg} alt='aboutImg' className=' w-full' />
                </div>
                <div className='xl:w-1/2 mt-10 xl:mt-0 md:px-12 xl:px-0'>
                    <h1 data-aos="fade-down" className=' text-3xl font-medium text-primary'>What is BrongoBrain ?</h1>
                    <p data-aos="zoom-in-up" className=' text-gray-300 mt-2 text-justify'>
                        BrongoBrain is a cutting-edge <span className=' text-primary font-medium'>software company</span> dedicated to delivering innovative and tailored digital solutions. Specializing in <span className=' text-primary font-medium'>full-stack development</span>, we harness the power of technologies such as React, Node.js, and MongoDB to craft seamless applications. Our passion lies in transforming concepts into exceptional, user-centric <span className=' text-primary font-medium'>software experiences</span>.</p>

                    <div data-aos="fade-up" className=' text-white grid sm:grid-cols-2 2xl:gap-x-12 gap-x-2 gap-y-3 mt-7'>
                        {
                            benefitsArray?.map(benefit => <div className='flex items-center gap-2' key={benefit?.id}>
                                <TbCheckbox className=' text-primary' /> <p className=' hover:text-primary cursor-pointer'>{benefit?.name}</p>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}