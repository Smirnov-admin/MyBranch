import React, { useState } from "react";
import './LittlePosts.css'
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { PiBookmarkSimple } from "react-icons/pi";
import { MdMoreHoriz } from "react-icons/md";
import { PostCard } from "../../../utils/interfacePosts";


const LittlePost = ({date, title, image}: PostCard) => {

    const [countBiLike, setCountBiLike] = useState(0);
    const [countDisLike, setCountDisLike] = useState(0);

    const changeClickBiLike = () => {
        setCountBiLike(countBiLike + 1);
    };

    const changeClickDisLike = () => {
        setCountDisLike(countDisLike + 1);
    };


    return (
        <div className="wrapper_littlePost">
            <div className="littlePost_card">
                <div className="littlePost_element">
                    <div className="littlePost_content">
                        <p className="littlePost_date">{date}</p>
                        <h2 className="littlePost_title">{title}</h2>
                    </div>
                    <div className="littlePost_icon">
                        <img src={image} alt="img" />
                    </div>
                </div>
                <div className="littlePost_reaction">
                    <div className="reaction_element_littleList">
                        <div className="reaction_element_biLike">
                        <button className="btn_reaction" onClick={changeClickBiLike} > <BiLike /> </button>
                            <p className="count_like">{countBiLike}</p>
                        </div>
                        <div className="reaction_element_disLike">
                        <button className="btn_reaction" onClick={changeClickDisLike} > <BiDislike /> </button>
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

export default LittlePost; 