import React from 'react'
import"./css/Featured.css";

export const Articles = ({image, heading , subheading , maindesc , desc , btn_name , playbtn}) => {
    return (
            <div className="card">
                <img src={image} className="card-img-top" alt="umage" />
                <div className="line"></div>
                <div className="cardhead">
                <div className="card_heading">{heading}</div>
                <div className="card_subheading">{subheading}</div>
                </div>
                <div className ="card-body">
                <p className ="card-text main_text">{maindesc}</p>
                </div>
                <div className ="card-body">
                <p className ="card-text main_desc">{desc}</p>
                </div>
                {btn_name?<div className="card_btn">
                            {btn_name} <span><i class="fas fa-greater-than"></i></span>
                        </div>: ""}

                        {playbtn?<div className="play_btn">
                            {playbtn}
                        </div>: ""}
            </div>
    )
}
