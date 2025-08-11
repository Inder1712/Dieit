import Image from 'next/image';
import { getImagePrefix } from '@/utils/util';

const Hero = () => {
    return (
        <section id="home-section" className='bg-slateGray'>
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-20">
                <div className='grid grid-cols-1 lg:grid-cols-12 items-center gap-6'>
                    
                    {/* Image first on mobile (order-1), second on desktop (lg:order-2) */}
                    <div className='col-span-6 flex justify-center order-1 lg:order-2'>
                        <img
                            src={`${getImagePrefix()}images/banner/mahila.png`}
                            alt="nothing"
                            width={1000}
                            height={805}
                        />
                    </div>

                    {/* Text second on mobile (order-2), first on desktop (lg:order-1) */}
                    <div className='col-span-6 flex flex-col gap-8 order-2 lg:order-1'>
                        <h1 className='text-midnight_text text-4xl sm:text-5xl font-semibold pt-5 lg:pt-0'>
                            Advance your skills with us.
                        </h1>
                        <h3 className='text-black/70 text-lg'>100+ YEAR OF EXPERIENCE</h3>
                        <h3 className='text-black/70 text-lg'>15+ COURSES</h3>
                        <h3 className='text-black/70 text-lg'>1000+ STUDENTS</h3>

                        <div className='flex items-center justify-between pt-6'>
                            <div className='flex gap-2'>
                                <Image src={`${getImagePrefix()}images/banner/check-circle.svg`} alt="check" width={30} height={30} />
                                <p className='text-sm sm:text-lg text-black'>Flexible</p>
                            </div>
                            <div className='flex gap-2'>
                                <Image src={`${getImagePrefix()}images/banner/check-circle.svg`} alt="check" width={30} height={30} />
                                <p className='text-sm sm:text-lg text-black'>Learning path</p>
                            </div>
                            <div className='flex gap-2'>
                                <Image src={`${getImagePrefix()}images/banner/check-circle.svg`} alt="check" width={30} height={30} />
                                <p className='text-sm sm:text-lg text-black'>Community</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
