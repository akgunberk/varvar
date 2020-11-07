import React from "react";
import bike from "../../pngs/motobike.png";
import gift from "../../pngs/gift.png";
import paperclip from "../../pngs/paperclip.png";

import "../styles/Campaigns.scss";

interface CampaignProps {
  img: string;
  text: string;
  pill: string;
}
const campaignDetails = [
  {
    img: bike,
    text: "75 TL Üzerine Teslimat Ücreti Bizden",
    pill: "Detaylı Bilgi",
  },
  {
    img: gift,
    text: "Hediye Kategorisi için Sepette %15 İndirim",
    pill: "Hediye Ürünleri",
  },
  {
    img: paperclip,
    text: "Kırtasiye Kategorisi için Sepette %15 İndirim",
    pill: "Detaylı Bilgi",
  },
];

const Campaing: React.FC<CampaignProps> = ({ img, text, pill }) => {
  return (
    <div className="campaigns__campaign">
      <img className="campaigns__image" src={img} alt={text} />
      <div className="campaigns__details">
        <div>{text}</div>
        <button className="campaigns__button-pill">{pill} </button>
      </div>
    </div>
  );
};

export const Campaigns: React.FC = () => {
  return (
    <div className="campaigns">
      {campaignDetails.map((campaign, index) => (
        <Campaing key={index} {...campaign} />
      ))}
    </div>
  );
};
