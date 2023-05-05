import React from 'react'
import mob from "../assets/mob.png"
import task from "../assets/task.png"
import jupiter from "../assets/jupiter.png"
import mars from "../assets/mars.png"
import uranus from "../assets/uranus.png"
import earth from "../assets/earth.png"

const Extras = () => {
  return (
    <div className='w-screen lg:mt-10 flex justify-center optionsDiv flex-col items-center'>
        <div className='flex px-5 pl-7 lg:px-14 flex-col justify-center items-center my-2 lg:my-5'>
            <h1 data-aos="fade-up"  data-aos-duration="1000" className="text-2xl text-center lg:text-4xl heading">About OneCloud</h1>
            <ul data-aos="fade-up"  data-aos-duration="1000" className='text-sm lg:text-lg font-semibold textLine text-left my-5 lg:my-10'>
                <li className='leading-loose list-[square]'>OneCloud is your go-to destination for reliable and high-quality RTMP/SRT streaming services.</li>
                <li className='leading-loose list-[square]'>Our platform has been designed to provide a seamless and enjoyable streaming experience for all users.</li>
                <li className='leading-loose list-[square]'>Whether you're a content creator, a gamer, or an event organizer, OneCloud has the tools and expertise you need to stream like a pro.
</li>
            </ul>
        </div>
        <div className='flex px-5 pl-7 lg:px-14 flex-col justify-center items-center my-2 lg:my-5'>
            <h1 data-aos="fade-up"  data-aos-duration="1000" className="text-2xl text-center lg:text-4xl heading">Our Promise</h1>
            <ul data-aos="fade-up"  data-aos-duration="1000" className='text-sm lg:text-lg font-semibold textLine text-left my-5 lg:my-10'>
                <li className='leading-loose list-[square]'>We promise to always put our users first and provide them with the highest level of service possible.</li>
                <li className='leading-loose list-[square]'>Our commitment to transparency, reliability, and customer satisfaction is unmatched in the industry.</li>
                <li className='leading-loose list-[square]'>We believe that everyone should have access to the best streaming technology and services, and we're dedicated to making that a reality.</li>
            </ul>
        </div>
        <div className='flex px-5 pl-7 lg:px-14 flex-col justify-center items-center my-2 lg:my-5'>
        <img data-aos="fade-up-right" data-aos-duration="2000"  data-aos-delay="50" className='lg:hidden  absolute  h-40  left-0 -z-10' src={mars} alt="" />
            <img data-aos="fade-up-left" data-aos-duration="2000"  data-aos-delay="50" className='lg:block hidden  absolute right-0 -z-10' src={mars} alt="" />
            <h1 data-aos="fade-up"  data-aos-duration="1000" className="text-2xl text-center lg:text-4xl heading">Powerful Technology and Infrastructure</h1>
            <ul data-aos="fade-up"  data-aos-duration="1000" className='text-sm lg:text-lg font-semibold textLine text-left my-5 lg:my-10'>
                <li className='leading-loose list-[square]'>OneCloud partners with leading data centers to bring you the best in RTMP/SRT streaming technology and infrastructure.</li>
                <li className='leading-loose list-[square]'>Our platform is built on top of the latest hardware and software to ensure that you're always streaming at the highest quality.</li>
                <li className='leading-loose list-[square]'>With 24x7 uptime and support for H.264 and H.265 video formats, you can stream with confidence on OneCloud.</li>
            </ul>
        </div>
        <div className='flex px-5 pl-7 lg:px-14 flex-col justify-center items-center my-2 lg:my-5'>
            <h1 data-aos="fade-up"  data-aos-duration="1000" className="text-2xl text-center lg:text-4xl heading">Expert Team</h1>
            <ul data-aos="fade-up"  data-aos-duration="1000" className='text-sm lg:text-lg font-semibold textLine text-left my-5 lg:my-10'>
                <li className='leading-loose list-[square]'>Our team is made up of experienced professionals who are passionate about streaming and technology.</li>
                <li className='leading-loose list-[square]'>We are always exploring new technologies and developing new tools to help you stream like a pro.</li>
                <li className='leading-loose list-[square]'>Whether you have questions about the platform or just need help with your stream, our team is here to support you.</li>
            </ul>
        </div>
        <div className='flex px-5 pl-7 lg:px-14 flex-col justify-center items-center my-2 lg:my-5'>
            <h1 data-aos="fade-up"  data-aos-duration="1000" className="text-2xl text-center lg:text-4xl heading">Stream with Confidence Today</h1>
            <ul data-aos="fade-up"  data-aos-duration="1000" className='text-sm lg:text-lg font-semibold textLine text-left my-5 lg:my-10'>
                <li className='leading-loose list-[square]'>Sign up for OneCloud and start streaming with confidence today!</li>
                <li className='leading-loose list-[square]'>Our user-friendly platform, powerful technology, and expert team make it easy to stream like a pro.</li>
                <li className='leading-loose list-[square]'>Get started now and experience the future of RTMP streaming!</li>
            </ul>
        </div>
        <div className='flex px-5 pl-7 lg:px-14 flex-col justify-center items-center my-2 lg:my-5'>
            <h1 data-aos="fade-up"  data-aos-duration="1000" className="text-2xl text-center lg:text-4xl heading">RTMP/SRT Server with Client Panel</h1>
            <img className='lg:mt-14 mt-6'  data-aos="fade-up"  data-aos-duration="2000" src={task} alt="" />
            <ul data-aos="fade-up"  data-aos-duration="1000" className='text-sm lg:text-lg font-semibold textLine text-left my-5 lg:my-10'>
                <li className='leading-loose list-[square]'>OneCloud's RTMP/SRT server comes with a comprehensive client panel that gives you complete control over your stream.</li>
                <li className='leading-loose list-[square]'>With the client panel, you can easily keep track of your RTMP/SRT viewer count and get real-time data on your stream key usage.</li>
                <li className='leading-loose list-[square]'>Say goodbye to unexpected bills and get full control over your streaming expenses with the ability to pay online.</li>
            </ul>
        </div>
        <div className='flex px-5 pl-7 lg:px-14 flex-col justify-center items-center my-2 lg:my-5'>
            <h1 data-aos="fade-up"  data-aos-duration="1000" className="text-2xl text-center lg:text-4xl heading">Stream at 8K Quality without any Restrictions</h1>
            <ul data-aos="fade-up"  data-aos-duration="1000" className='text-sm lg:text-lg font-semibold textLine text-left my-5 lg:my-10'>
                <li className='leading-loose list-[square]'>With OneCloud, you can stream at the highest quality without any limitations.</li>
                <li className='leading-loose list-[square]'>Our platform supports 8K streaming, so you can deliver the ultimate viewing experience to your audience.</li>
            </ul>
        </div>
        <div className='flex px-5 pl-7 lg:px-14 flex-col justify-center items-center my-2 lg:my-5'>
            <h1 data-aos="fade-up"  data-aos-duration="1000" className="text-2xl text-center lg:text-4xl heading">Highly Reliable Infrastructure</h1>
            <ul data-aos="fade-up"  data-aos-duration="1000" className='text-sm lg:text-lg font-semibold textLine text-left my-5 lg:my-10'>
                <li className='leading-loose list-[square]'>OneCloud's RTMP/SRT server is installed on three separate data centers and connected together for maximum reliability.</li>
                <li className='leading-loose list-[square]'>Our platform has zero downtime, so you can stream with confidence knowing that your audience will never miss a moment.</li>
            </ul>
            
        </div>
        
        {/* <div className='flex px-5 pl-7 lg:px-14 flex-col justify-center items-center my-2 lg:my-5'>
            <h1 data-aos="fade-up"  data-aos-duration="1000" className="text-2xl text-center lg:text-4xl heading"></h1>
            <ul data-aos="fade-up"  data-aos-duration="1000" className='text-sm lg:text-lg font-semibold textLine text-left my-5 lg:my-10'>
                <li className='leading-loose list-[square]'></li>
                <li className='leading-loose list-[square]'></li>
                <li className='leading-loose list-[square]'></li>
            </ul>
        </div> */}
        <div className='flex px-5 pl-7 lg:px-14 flex-col justify-center items-center my-2 lg:my-5'>
            <h1 data-aos="fade-up"  data-aos-duration="1000" className="text-2xl text-center lg:text-4xl heading">Free Mobile App with Your Design</h1>
            <img className='h-96 lg:h-full'  data-aos="fade-up"  data-aos-duration="2000" src={mob} alt="" />
            <ul data-aos="fade-up"  data-aos-duration="1000" className='text-sm lg:text-lg font-semibold textLine text-left lg:-mt-10 -mt-10 mb-5 lg:mb-10'>
                <li className='leading-loose list-[square]'>OneCloud's mobile app is designed to give you complete control over your stream from anywhere, anytime.</li>
                <li className='leading-loose list-[square]'>With our free mobile app, you can easily manage your stream, check your viewer count, and keep track of your data usage.</li>
                <li className='leading-loose list-[square]'>Best of all, the app can be customized to your liking, so it will look and feel like a part of your brand.</li>
            </ul>
        </div>

        <div className='flex px-5 pl-7 lg:px-14 flex-col justify-center items-center my-2 lg:my-5'>
            <h1 data-aos="fade-up"  data-aos-duration="1000" className="text-2xl text-center lg:text-4xl heading">Track Your Data Usage and Viewers with Ease</h1>
            <ul data-aos="fade-up"  data-aos-duration="1000" className='text-sm lg:text-lg font-semibold textLine text-left my-5 lg:my-10'>
                <li className='leading-loose '>With our RTMP/SRT server and client panel, you can stream with confidence, knowing that you have complete control over your stream. Keep track of your RTMP/SRT viewer count, pay online without expecting others, and measure your stream key data usage with ease. Our platform supports 8K streaming without any restrictions, so you can deliver the ultimate viewing experience to your audience. The client panel provides real-time data usage tracking, so you can monitor your data usage and make adjustments as needed. And with our viewer tracking feature, you can see exactly how many people are tuning in to your stream, helping you to measure your success and adjust your strategy as needed.</li>
            <img data-aos="fade-up-right" data-aos-duration="2000"  data-aos-delay="50" className='lg:block hidden  absolute left-40 -z-10' src={earth} alt="" />
        <img data-aos="fade-up-left" data-aos-duration="2000"  data-aos-delay="50" className='lg:hidden  absolute  h-40  right-0 -z-10' src={earth} alt="" />
                
            </ul>
        </div>
       
    </div>
  )
}

export default Extras