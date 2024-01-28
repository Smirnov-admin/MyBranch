import React, { useState } from "react";
import './LargePosts.css'
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { PiBookmarkSimple } from "react-icons/pi";
import { MdMoreHoriz } from "react-icons/md";
import { PostCard } from "../interfacePosts";

const LargePost = ({date, title, text, image}: PostCard) => {

    const [countBiLike, setCountBiLike] = useState(0);
    const [countDisLike, setCountDisLike] = useState(0);

    const changeClickBiLike = () => {
        setCountBiLike(countBiLike + 1);
    };

    const changeClickDisLike = () => {
        setCountDisLike(countDisLike + 1);
    };


    return (
        <div className="wrapper_largePost">
            <div className="largePost_card">
                <div className="largePost_element">
                    <div className="largePost_content">
                        <p className="largePost_date">{date}</p>
                        <h2 className="largePost_title">{title}</h2>
                        <p className="largePost_text">{text}</p>
                    </div>
                    <div className="largePost_icon">
                        <img src={image} alt="image" className="view_largeImage"/>
                    </div>
                </div>
                <div className="largePost_reaction">
                    <div className="reaction_element_list">
                        <div className="reaction_element_biLike">
                            <BiLike onClick={changeClickBiLike} />
                            <p className="count_like">{countBiLike}</p>
                        </div>
                        <div className="reaction_element_disLike">
                            <BiDislike onClick={changeClickDisLike} />
                            <p className="count_like">{countDisLike}</p>
                        </div>
                    </div>
                    <div className="markandmore_element">
                        <div className="bookmark_element">
                            <PiBookmarkSimple />
                        </div>
                        <div className="other_element">
                            <MdMoreHoriz />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

}

export default LargePost; 