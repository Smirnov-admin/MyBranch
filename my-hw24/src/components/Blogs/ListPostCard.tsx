import React from "react";
import './ListPostCard.css'
import LargePosts from "./LargePost/LargePosts";
import LittlePost from "./LittlePost/LittlePosts";
import MiddlePosts from "./MiddlePost/MiddlePosts";
import { PostCard } from "../../utils/interfacePosts";




const ListPostCard = ({date, title, text, image}: PostCard) => {

    return (
        <div className="wrapper_viewlistpost">
            <div className="post_list">
                <LargePosts date = {date} title = {title} text = {text} image = {image} />
                <div className="littlepost_list">
                    <LittlePost date={date} title={title} image={image} />
                    <LittlePost date={date} title={title} image={image} />
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