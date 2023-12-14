import React from 'react';
import BlogCard from './BlogCard';
import LatestImg from '../../images/blog-1.jpg';

const BlogSection = ({ scroll }) => {

    const blogCard = [
        {
            Img: LatestImg,
            date: Date.now(),
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, at.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor at saepe quibusdam numquam voluptates sapiente ducimus voluptas dolorem dicta autem?"
        },
        {
            Img: LatestImg,
            date: Date.now(),
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, at.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor at saepe quibusdam numquam voluptates sapiente ducimus voluptas dolorem dicta autem?"
        },
        {
            Img: LatestImg,
            date: Date.now(),
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, at.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor at saepe quibusdam numquam voluptates sapiente ducimus voluptas dolorem dicta autem?"
        },
        {
            Img: LatestImg,
            date: Date.now(),
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, at.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor at saepe quibusdam numquam voluptates sapiente ducimus voluptas dolorem dicta autem?"
        },
        {
            Img: LatestImg,
            date: Date.now(),
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, at.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor at saepe quibusdam numquam voluptates sapiente ducimus voluptas dolorem dicta autem?"
        },
        {
            Img: LatestImg,
            date: Date.now(),
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, at.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor at saepe quibusdam numquam voluptates sapiente ducimus voluptas dolorem dicta autem?"
        },
        {
            Img: LatestImg,
            date: Date.now(),
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, at.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor at saepe quibusdam numquam voluptates sapiente ducimus voluptas dolorem dicta autem?"
        },
        {
            Img: LatestImg,
            date: Date.now(),
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, at.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor at saepe quibusdam numquam voluptates sapiente ducimus voluptas dolorem dicta autem?"
        },
        {
            Img: LatestImg,
            date: Date.now(),
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, at.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor at saepe quibusdam numquam voluptates sapiente ducimus voluptas dolorem dicta autem?"
        }
    ];

    return (
        <div>
            <div className={`flex flex-row gap-2 ${scroll ? "overflow-x-scroll scroll-smooth overflow-hidden horizontal-scroll" : "flex-wrap"} pb-4`}>
                {
                    blogCard.map((card, index) => {
                        return (
                            <BlogCard
                                key={index}
                                Img={card.Img}
                                date={card.date}
                                title={card.title}
                                description={card.description}
                            />
                        );
                    })
                }
            </div>

        </div>
    );
};

export default BlogSection;