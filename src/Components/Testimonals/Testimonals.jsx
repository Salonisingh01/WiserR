import React from 'react'
import pic1 from '../../assets/pic1.jpg'
import pic2 from '../../assets/pic2.jpg'
import pic3 from '../../assets/pic3.jpg'
import pic4 from '../../assets/pic4.jpg'
import pic5 from '../../assets/pic5.jpg'
import pic6 from '../../assets/pic6.jpg'

import Slider from 'react-slick'
// npm install react-slick --save
// npm install slick-carousel


const TestimonialsData = [
    {
        id: 1,
        name: "John Doe",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum eius exercitationem, placeat dolor amet saepe voluptates quasi itaque veniam animi voluptas, et consectetur.",
        img: pic1,
        delay: 0.2,
    },
    {
        id: 2,
        name: "Steve smith",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum eius exercitationem, placeat dolor amet saepe voluptates quasi itaque veniam animi voluptas, et consectetur.",
        img: pic2,
        delay: 0.5,
    },
    {
        id: 3,
        name: "Kristen",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum eius exercitationem, placeat dolor amet saepe voluptates quasi itaque veniam animi voluptas, et consectetur.",
        img: pic3,
        delay: 0.8,
    },
    {
        id: 4,
        name: "Lucifer",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum eius exercitationem, placeat dolor amet saepe voluptates quasi itaque veniam animi voluptas, et consectetur. ",
        img: pic4,
        delay: 1.1,
    },
    {
        id:5,
        name:"Jenny",
        text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum eius exercitationem, placeat dolor amet saepe voluptates quasi itaque veniam animi voluptas, et consectetur. ",
        img:pic5,
        delay:0.2,
    },
    {
        id:6,
        name:"Ariana",
        text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum eius exercitationem, placeat dolor amet saepe voluptates quasi itaque veniam animi voluptas, et consectetur.",
        img:pic6,
        delay:0.2,
    },

]


const Testimonals = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };
    return (
        <div className="py-14 mb-10 bg-gray-50 overflow-x-hidden">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="space-y-4 text-center max-w-3xl mx-auto mb-10">
                    <h3 className="uppercase font-semibold text-orange-500">OUR TESTIMONIALS</h3>
                    <h2 className="text-3xl font-semibold">What Our Students Say About Us</h2>
                </div>

                {/* Testimonial Cards Section */}
                <div className="px-4 ">
                    <Slider {...settings} style={{ width: '100%', overflow: 'hidden' }}>
                        {TestimonialsData.map((item) => (
                            <div key={item.id} className="px-2">
                                <div className="bg-blue-100 rounded-lg p-6 h-full shadow-lg">
                                    {/* User Info */}
                                    <div className="flex items-center mb-4">
                                        <img 
                                            src={item.img}
                                            alt={`${item.name} profile`}
                                            className="w-16 h-16 rounded-full mr-4"
                                        />
                                        <div>
                                            <h4 className="text-lg font-semibold">{item.name}</h4>
                                            <p className="text-gray-600">{item.name}</p>
                                        </div>
                                    </div>
                                    
                                    {/* Testimonial Text */}
                                    <div>
                                        <p className="text-gray-600 mb-4">{item.text}</p>
                                        <div className="flex text-yellow-400">
                                            <span>★</span>
                                            <span>★</span>
                                            <span>★</span>
                                            <span>★</span>
                                            <span>★</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Testimonals