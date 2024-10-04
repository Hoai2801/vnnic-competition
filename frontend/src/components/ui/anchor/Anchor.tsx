import React from "react";
import styles from "./Anchor.module.css";

type AnchorProps = {
  href?: string;
  text: string;
  className?: string;
  newtab?: boolean;
};

const Anchor: React.FC<AnchorProps> = ({
  href: additonalHref,
  text,
  className: additionalClassNames,
  newtab = false,
}) => {
  const classNames = additionalClassNames ? ` ${additionalClassNames}` : "";
  const href = additonalHref ? `${additonalHref}` : "javascript:void(0)";

  return (
    <a
      href={href}
      rel="noreferrer noopener"
      target={newtab ? "_blank" : "_self"}
      // thêm class after:bg-[] set màu underline
      className={`${styles.links} ${classNames} relative inline-block`}
    >
      {text}
    </a>
  );
};

export default Anchor;
