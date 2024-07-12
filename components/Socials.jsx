"use client";
import {
  RiLinkedinFill,
  RiGithubFill,
  RiGoogleFill,
  RiTelegramFill,
  RiWhatsappFill,
} from "react-icons/ri";
import Link from "next/link";

const icons = [
  {
    path: "https://api.whatsapp.com/send?phone=09078769622",
    name: <RiWhatsappFill />,
  },
  { path: "https://t.me/Jobinson33", name: <RiTelegramFill /> },
  { path: "mailto:joblawal33@gmail.com", name: <RiGoogleFill /> },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} target="_blank" key={index}>
            <div className={`${iconStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
