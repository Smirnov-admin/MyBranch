import React, { useState } from "react";
import './MiddlePosts.css'
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { PiBookmarkSimple } from "react-icons/pi";
import { MdMoreHoriz } from "react-icons/md";
import { PostCard } from "../interfacePosts";


const MiddlePosts = ({date, title, image}: PostCard) => {

    const [countBiLike, setCountBiLike] = useState(0);
    const [countDisLike, setCountDisLike] = useState(0);

    const changeClickBiLike = () => {
        setCountBiLike(countBiLike + 1);
    };

    const changeClickDisLike = () => {
        setCountDisLike(countDisLike + 1);
    };


    return (
        <div className="wrapper_middlePost">
            <div className="middlPost_card">
                <div className="middlePost_element">
                    <div className="middlePost_icon">
                        <img src={image} alt="image" className="view_middleImage" />
                    </div>
                    <div className="middlePost_content">
                        <p className="middlePost_date">{date}</p>
                        <h2 className="middlePost_title">{title}</h2>
                    </div>
                </div>
                <div className="middlePost_reaction">
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

export default MiddlePosts; 