import React, { useState } from "react";
import { PostCard } from "../../../utils/interfacePosts";
import { BiDislike, BiLike } from "react-icons/bi";
import { PiBookmarkSimple } from "react-icons/pi";
import { MdMoreHoriz } from "react-icons/md";
import "./ViewPost.css";

const ViewPost = ({ date, title, text, image }: PostCard) => {
  const [countBiLike, setCountBiLike] = useState(0);
  const [countDisLike, setCountDisLike] = useState(0);

  const changeClickBiLike = () => {
    setCountBiLike(countBiLike + 1);
  };

  const changeClickDisLike = () => {
    setCountDisLike(countDisLike + 1);
  };

  return (
    <div className="wrapper_viewPost">
        <div className="viewPost_card">
            <div className="viewPost_content">
                <p className="viewPost_date">{date}</p>
                <h2 className="viewPost_title">{title}</h2>
                    <div className="viewPost_icon">
                        <img src={image} alt="img" />
                    </div>
                    <p className="viewPost_text">{text}</p>
            </div>
            <div className="viewPost_reaction">
                <div className="reaction_element_viewList">
                    <div className="reaction_element_biLike">
                        <button className="btn_biLike" type="button" onClick={changeClickBiLike} > Like </button>
                        <p className="count_like">{countBiLike}</p>
                    </div>
                    <div className="reaction_element_disLike">
                        <button className="btn_disLike" type="button" onClick={changeClickDisLike} > disLike </button>
                        <p className="count_like">{countDisLike}</p>
                    </div>
                </div>
                <div className="markandmore_element">
                    <div className="bookmark_element">
                        <button className="btn_bookmark"> Add to favorites </button>
                    </div>
                </div>
            </div>
        </div>
        <div className="paggination_element">
            <div className="paggination_element_list">
                <button type="button" className="btn_paggination">Last</button>
                <button type="button" className="btn_paggination">Next</button>
            </div>
        </div>
    </div>
  );
};

export default ViewPost;
