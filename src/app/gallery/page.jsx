import Image from 'next/image';
import React from 'react';
const getTime = async () => {
    // const res = await fetch('http://localhost:3000/time', {cache:'no-store'})
    const res = await fetch('http://localhost:3000/time', {
        next: { revalidate: 5 }})
    const data = await res.json();
    return data.currentTime;
}

const GalleryPage = async() => {
    const currentTime =await getTime();
    return (
        <div className='min-h-screen px-12 py-24'>
            <h3 className='text-3xl text-red-400 mt-12'>Time :{ currentTime}</h3>
            <h6 className='text-3xl
            mb-12'>Gallery Page</h6>
            <div>
                {
                    [1, 2, 3, 4, 5]?.map((img) => (
                        <Image key={img} src={`/images/${img}.jpg`} alt="" height='1080' width='1920' />
                    ))
                }
            </div>
            {/* <Image src="/images/1.jpg" alt="" height='1080' width='1920' /> */}
        </div>
    );
};

export default GalleryPage;