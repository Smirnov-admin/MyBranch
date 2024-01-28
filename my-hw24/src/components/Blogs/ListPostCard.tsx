import React from "react";
import './ListPostCard.css'
import { PostCard } from "./interfacePosts";
import LargePosts from "./LargePost/LargePosts";
import LittlePost from "./LittlePost/LittlePosts";
import MiddlePosts from "./MiddlePost/MiddlePosts";




const ListPostCard = ({id, date, title, text, image}: PostCard) => {

    return (
        <div className="wrapper_viewlistpost">
            <div className="post_list">
                <div className="view_large"><LargePosts date = {date} title = {title} text = {text} image = {image}/></div>
                <div className="littlepost_list">
                    <div className="view_little"><LittlePost date={date} title={title} image={image} /></div>
                    <div className="view_little"><LittlePost date={date} title={title} image={image} /></div>
                </div>
            </div>

            <div className="post_list">
                <div className="view_large"><MiddlePosts image={image} date={date} title={title} /></div>
                <div className="view_large"><MiddlePosts image={image} date={date} title={title} /></div>
                <div className="littlepost_list">
                    <div className="view_little"><LittlePost date={date} title={title} image={image} /></div>
                    <div className="view_little"><LittlePost date={date} title={title} image={image} /></div>
                </div>
            </div>

            <div className="post_list">
                <div className="view_large"><MiddlePosts image={image} date={date} title={title} /></div>
                <div className="view_large"><MiddlePosts image={image} date={date} title={title} /></div>
                <div className="littlepost_list">
                    <div className="view_little"><LittlePost date={date} title={title} image={image} /></div>
                    <div className="view_little"><LittlePost date={date} title={title} image={image} /></div>
                </div>
            </div>
        </div>
    )

}

export default ListPostCard; 