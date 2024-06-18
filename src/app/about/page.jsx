import { Headland_One } from 'next/font/google';
import React from 'react';
export const metadata = {
    title: "About | Hero Next JS ",
    description: "About Page",
    keywords: ['about', 'about page']
  };
const headland = Headland_One({weight:['400'], subsets:['latin']})
const AboutPage = () => {
    return (
        <div className={`${headland.className}min-h-screen px-12 py-24`}>
            <h6 className='text-3xl'>About Page</h6>
        </div>
    );
};

export default AboutPage;