import React from 'react'
import "../css/Home.css"
import backGroundImage1 from "../assets/1D.jpg"
import backGroundImage2 from "../assets/1C.jpg"
import mercury from "../assets/mercury.png"
import venus from "../assets/venus.png"
import earth from "../assets/earth.png"
import mars from "../assets/mars.png"
import jupiter from "../assets/jupiter.png"
import neptune from "../assets/neptune.png"
import uranus from "../assets/uranus.png"
import aac from "../assets/fake/aac.png"
import mp3 from "../assets/fake/mp3.png"
import H264 from "../assets/fake/H264.png"
import H265 from "../assets/fake/H.264.png"
import Opus from "../assets/fake/Opus.png"
import speedx from "../assets/fake/speedx.png"
import VP8 from "../assets/fake/VP8.png"
import codec from "../assets/fake/codec.png"
import GOP from "../assets/fake/GOP.png"
import VP9 from "../assets/fake/VP9.png"
import kk from "../assets/fake/kk.jpg"
import G711 from "../assets/fake/G.711.png"



const Options = () => {
  return (
    <div id='support' className=' optionsDiv relative text-gray-200 font-semibold'>
       <div className='fixed w-screen h-screen top-0 left-0 -z-50'>
            {/* <img className='w-screen' src={backGroundImage1} alt="" /> */}
            <img className=' h-full hidden lg:block w-full' src={backGroundImage2} alt="" />
            <img className=' h-full w-full lg:hidden' src={backGroundImage1} alt="" />
        </div>
        <div className='flex justify-center mb-7 -mt-16 lg:-mt-10 lg:mb-16'>
        <h1 data-aos="flip-up" data-aos-duration="2000" className='heading font-semibold text-3xl lg:text-5xl mb-5 lg:mb-10'>Supported Formats</h1>
        </div>
        <div className="">
        <div className='flex flex-col lg:flex-row z-50 w-full justify-between px-5  text-center lg:text-left lg:px-14 mb-16 lg:mb-28 items-center'>
        <div className='lg:w-2/5 lg:hidden flex items-center justify-center'>
                <img data-aos="fade-left"  data-aos-duration="1000" src={H264} alt="" />
            </div>
            <div className='lg:w-3/5'>
            <div className='w-full flex flex-col lg:items-start justify-center items-center lg:justify-start mt-5 lg:mt-0'>
                <h1 data-aos="fade-right"  data-aos-duration="1000" className='lg:text-3xl text-xl font-semibold heading mb-3 lg:mb-5'>
                H.264
                </h1>
                <p className='lg:text-lg text-sm textLine' data-aos="fade-up"  data-aos-duration="1000">
                H.264 is a widely adopted video compression standard known for its high compression efficiency and good video quality. It supports hardware decoding on various devices, making it versatile for different use cases such as streaming, video conferencing and video storage. H.264 provides good video quality at low bitrates, making it a popular choice for internet video streaming.
                </p>
            </div>
            </div>
                  <img data-aos="fade-up-left" data-aos-duration="2000"  data-aos-delay="50" className='lg:hidden absolute -z-10 -top-36 left-44 w-72 ' src={mercury} alt="" />
            <img data-aos="fade-up-right" data-aos-duration="2000"  data-aos-delay="50" className='lg:block hidden absolute -z-10 -top-20' src={mercury} alt="" />
            <div className='lg:w-2/5 hidden optionsDiv1 lg:flex items-center justify-center'>
                <img data-aos="fade-left"  data-aos-duration="1000" src={H264} alt="" />
            </div>
        </div>

        <div className='flex flex-col lg:flex-row z-50 justify-between px-5  text-center lg:text-left lg:px-14 mb-16 lg:mb-28 items-center'>
        <div className='lg:w-2/5 flex items-center optionsDiv2 justify-center'>
                <img data-aos="fade-right"  data-aos-duration="1000" src={H265} alt="" />
            </div>
            <div className='lg:w-3/5'>
            <div className='w-full flex flex-col lg:items-start justify-center items-center lg:justify-start mt-5 lg:mt-0'>
                <h1 data-aos="fade-left"  data-aos-duration="1000" className='lg:text-3xl text-xl font-semibold heading mb-3 lg:mb-5'>
                H.265
                </h1>
                <p className='lg:text-lg text-sm textLine' data-aos="fade-up"  data-aos-duration="1000">
                H.265 (HEVC) is a video compression standard that offers improved compression efficiency over H.264. It can encode high-quality video into smaller file sizes while maintaining good video quality, reducing bandwidth and storage requirements. H.265 is also efficient for encoding and decoding, and is capable of handling 4K and 8K video.
                </p>
            </div>
            </div>

        </div>
        
        <div className='flex flex-col lg:flex-row z-50 justify-between px-5  text-center lg:text-left lg:px-14 mb-16 lg:mb-28 items-center'>
        <div className='lg:w-2/5 lg:hidden flex items-center justify-center'>
                <img data-aos="fade-left"  data-aos-duration="1000" src={aac} alt="" />
            </div>
            <img data-aos="fade-up-left" data-aos-duration="2000"  data-aos-delay="50" className='lg:hidden absolute left-48 -z-10' src={venus} alt="" />
            
            <div className='lg:w-3/5'>
            <div className='w-full flex flex-col lg:items-start justify-center items-center lg:justify-start mt-5 lg:mt-0'>
                <h1 data-aos="fade-right"  data-aos-duration="1000" className='lg:text-3xl text-xl font-semibold heading mb-3 lg:mb-5'>
                AAC
                </h1>
                <p className='lg:text-lg text-sm textLine' data-aos="fade-up"  data-aos-duration="1000">
                AAC (Advanced Audio Coding) is a widely used audio compression standard designed for high-quality audio at lower bitrates. It is commonly used for audio streaming, digital broadcasting, and music distribution and is widely supported by various audio players and devices.

                </p>
            </div>
            <img data-aos="fade-up-left" data-aos-duration="2000"  data-aos-delay="50" className='lg:block hidden absolute right-10 -z-10' src={venus} alt="" />

            </div>
            <div className='lg:w-2/5 hidden optionsDiv1 lg:flex items-center justify-center'>
                <img data-aos="fade-left"  data-aos-duration="1000" src={aac} alt="" />
            </div>
        </div>
        
        <div className='flex flex-col lg:flex-row z-50 justify-between px-5  text-center lg:text-left lg:px-14 mb-16 lg:mb-28 items-center'>
        <div className='lg:w-2/5 flex items-center optionsDiv2 justify-center'>
                <img data-aos="fade-right"  data-aos-duration="1000" src={mp3} alt="" />
            </div>
                  <img data-aos="fade-up-right" data-aos-duration="2000"  data-aos-delay="50" className='lg:hidden h-80 absolute right-64 -z-10' src={neptune} alt="" />
            <img data-aos="fade-up-right" data-aos-duration="2000"  data-aos-delay="50" className='lg:block hidden h-80 absolute right-64 -z-10' src={neptune} alt="" />

            <div className='lg:w-3/5'>
            <div className='w-full flex flex-col lg:items-start justify-center items-center lg:justify-start mt-5 lg:mt-0'>
                <h1 data-aos="fade-left"  data-aos-duration="1000" className='lg:text-3xl text-xl font-semibold heading mb-3 lg:mb-5'>
                MP3
                </h1>
                <p className='lg:text-lg text-sm textLine' data-aos="fade-up"  data-aos-duration="1000">
                MP3 (MPEG-1 Audio Layer III) is a popular audio compression standard widely used for digital music playback. It reduces the file size of audio by removing redundant and irrelevant data, while maintaining sound quality that is often indistinguishable from the original source.                </p>
            </div>
            </div>
           
        </div>
        
        <div className='flex flex-col lg:flex-row z-50 justify-between px-5  text-center lg:text-left lg:px-14 mb-16 lg:mb-28 items-center'>
        <div className='lg:w-2/5 lg:hidden flex items-center justify-center'>
                <img data-aos="fade-left"  data-aos-duration="1000" src={speedx} alt="" />
            </div>
            <div className='lg:w-3/5'>
            <div className='w-full flex flex-col lg:items-start justify-center items-center lg:justify-start mt-5 lg:mt-0'>
                <h1 data-aos="fade-right"  data-aos-duration="1000" className='lg:text-3xl text-xl font-semibold heading mb-3 lg:mb-5'>
                SPEEX
                </h1>
                <p className='lg:text-lg text-sm textLine' data-aos="fade-up"  data-aos-duration="1000">
                Speex is an open-source, royalty-free audio compression format designed for speech. It uses variable bitrate encoding and offers low latency, making it suitable for real-time voice communication applications, such as VoIP and teleconferencing.
                </p>
            </div>
            </div>
            <div className='lg:w-2/5 hidden optionsDiv1 lg:flex items-center justify-center'>
                <img data-aos="fade-left"  data-aos-duration="1000" src={speedx} alt="" />
            </div>
        </div>
        
        
        <div className='flex flex-col lg:flex-row z-50 justify-between px-5  text-center lg:text-left lg:px-14 mb-16 lg:mb-28 items-center'>
        <div className='lg:w-2/5 flex items-center optionsDiv2 justify-center'>
                <img data-aos="fade-right"  data-aos-duration="1000" src={kk} alt="" />
            </div>
            <div className='lg:w-3/5'>
                
            <div className='w-full flex flex-col lg:items-start justify-center items-center lg:justify-start mt-5 lg:mt-0'>
                <h1 data-aos="fade-left"  data-aos-duration="1000" className='lg:text-3xl text-xl font-semibold heading mb-3 lg:mb-5'>
                Nellymoser
                </h1>
                <p className='lg:text-lg text-sm textLine' data-aos="fade-up"  data-aos-duration="1000">
                Nellymoser is a proprietary audio compression format designed specifically for the compression of speech and other audio signals. It provides good quality audio at low bitrates, making it a popular choice for online applications such as VoIP, teleconferencing, and other real-time voice communication applications.
                </p>
            </div>
            <img data-aos="fade-up" data-aos-duration="2000"  data-aos-delay="50" className='lg:hidden absolute right-64 -z-10' src={mars} alt="" />
            <img data-aos="fade-up" data-aos-duration="2000"  data-aos-delay="50" className='lg:block hidden absolute right-50 -z-10' src={mars} alt="" />
           
            </div>
            
        </div>
        
        <div className='flex flex-col lg:flex-row z-50 justify-between px-5  text-center lg:text-left lg:px-14 mb-16 lg:mb-28 items-center'>
        <div className='lg:w-2/5 lg:hidden flex items-center justify-center'>
                <img data-aos="fade-left"  data-aos-duration="1000" src={G711} alt="" />
            </div>
            <div className='lg:w-3/5'>
            <div className='w-full flex flex-col lg:items-start justify-center items-center lg:justify-start mt-5 lg:mt-0'>
                <h1 data-aos="fade-right"  data-aos-duration="1000" className='lg:text-3xl text-xl font-semibold heading mb-3 lg:mb-5'>
                G.711
                </h1>
                <p className='lg:text-lg text-sm textLine' data-aos="fade-up"  data-aos-duration="1000">
                G.711 is a widely used audio compression standard for voice communication. It uses pulse-code modulation (PCM) to encode voice signals, providing high-quality audio that is suitable for voice communication applications, including traditional telephone systems and VoIP networks.
                </p>
            </div>
            </div>
            <div className='lg:w-2/5 hidden optionsDiv1 lg:flex items-center justify-center'>
                <img data-aos="fade-left"  data-aos-duration="1000" src={G711} alt="" />
            </div>

        </div>
        
        <div className='flex flex-col lg:flex-row z-50 justify-between px-5  text-center lg:text-left lg:px-14 mb-16 lg:mb-28 items-center'>
        <div className='lg:w-2/5 flex items-center optionsDiv2 justify-center'>
                <img data-aos="fade-right"  data-aos-duration="1000" src={VP8} alt="" />
            </div>
            <div className='lg:w-3/5'>
            <div className='w-full flex flex-col lg:items-start justify-center items-center lg:justify-start mt-5 lg:mt-0'>
                <h1 data-aos="fade-left"  data-aos-duration="1000" className='lg:text-3xl text-xl font-semibold heading mb-3 lg:mb-5'>
                VP8
                </h1>

                <p className='lg:text-lg text-sm textLine' data-aos="fade-up"  data-aos-duration="1000">
                VP8 is a traditional block-based transform coding format. It has much in common with H. 264, e.g. some prediction modes. At the time of first presentation of VP8, according to On2 the in-loop filter and the Golden Frames were among the novelties of this iteration.
                </p>
            </div>
            </div>
            
        </div>
        
        <div className='flex flex-col lg:flex-row z-50 justify-between px-5  text-center lg:text-left lg:px-14 mb-16 lg:mb-28 items-center'>
        <div className='lg:w-2/5 lg:hidden flex items-center justify-center'>
                <img data-aos="fade-left"  data-aos-duration="1000" src={VP9} alt="" />
            </div>
            <div className='lg:w-3/5'>
            <div className='w-full flex flex-col lg:items-start justify-center items-center lg:justify-start mt-5 lg:mt-0'>
                <h1 data-aos="fade-right"  data-aos-duration="1000" className='lg:text-3xl text-xl font-semibold heading mb-3 lg:mb-5'>
                VP9
                </h1>
                <p className='lg:text-lg text-sm textLine' data-aos="fade-up"  data-aos-duration="1000">
               
The VP9 codec is similar to the HEVC (H. 265) codec and supports parallel processing. It is capable of reducing the bit rate to half of the original figure without affecting the video quality and enables better streaming for low-end devices like smartphones.
                </p>
            </div>
            </div>
            <div className='lg:w-2/5 hidden optionsDiv1 lg:flex items-center justify-center'>
                <img data-aos="fade-left"  data-aos-duration="1000" src={VP9} alt="" />
            </div>
                  <img data-aos="fade-up-left" data-aos-duration="2000"  data-aos-delay="50" className='lg:hidden  absolute left-48 h-40 -bottom-14 -z-10' src={uranus} alt="" />
            <img data-aos="fade-up-right" data-aos-duration="2000"  data-aos-delay="50" className='lg:block hidden -bottom-20 absolute right-50 -z-10' src={uranus} alt="" />

        </div>
        
        <div className='flex flex-col lg:flex-row z-50 justify-between px-5  text-center lg:text-left lg:px-14 mb-16 lg:mb-28 items-center'>
        <div className='lg:w-2/5 flex items-center optionsDiv2 justify-center'>
                <img data-aos="fade-right"  data-aos-duration="1000" src={Opus} alt="" />
            </div>
            <div className='lg:w-3/5'>
            <div className='w-full flex flex-col lg:items-start justify-center items-center lg:justify-start mt-5 lg:mt-0'>
                <h1 data-aos="fade-left"  data-aos-duration="1000" className='lg:text-3xl text-xl font-semibold heading mb-3 lg:mb-5'>
                OPUS
                </h1>
                <p className='lg:text-lg text-sm textLine' data-aos="fade-up"  data-aos-duration="1000">
                OPUS is an audio format that was developed for streaming audio over the internet. OPUS files are commonly used for streaming voiceovers, WhatsApp and Skype recordings. Unfortunately, very few media players recognise the OPUS format.
                </p>
            </div>
            </div>
            
        </div>
        
        <div className='flex flex-col lg:flex-row z-50 justify-between px-5  text-center lg:text-left lg:px-14 mb-16 lg:mb-28 items-center'>
        <div className='lg:w-2/5 lg:hidden flex items-center justify-center'>
                <img data-aos="fade-left"  data-aos-duration="1000" src={GOP} alt="" />
            </div>
            <div className='lg:w-3/5'>
            <div className='w-full flex flex-col lg:items-start justify-center items-center lg:justify-start mt-5 lg:mt-0'>
                <h1 data-aos="fade-right"  data-aos-duration="1000" className='lg:text-3xl text-xl font-semibold heading mb-3 lg:mb-5'>
                GOP cache
                </h1>
                <p className='lg:text-lg text-sm textLine' data-aos="fade-up"  data-aos-duration="1000">
                GOP is the distance between two keyframes, measured in the number of frames, or the amount of time between keyframes. For example, if a keyframe is inserted every 1 second into a video at 30 frames per second, the GOP length is 30 frames, or 1 second.
                </p>
            </div>
            </div>
            <div className='lg:w-2/5 hidden optionsDiv1 lg:flex items-center justify-center'>
                <img data-aos="fade-left"  data-aos-duration="1000" src={GOP} alt="" />
            </div>
        </div>
        

        </div>
      
        
       
        
    </div>
  )
}

export default Options