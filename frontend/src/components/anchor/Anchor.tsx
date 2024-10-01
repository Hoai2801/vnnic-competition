import React, { FC } from "react";
import styles from "./Anchor.module.css";

type AnchorProps = {
  href?: string;
  text: string;
  className?: string;
};

const Anchor: FC<AnchorProps> = ({
  href: additonalHref,
  text,
  className: additionalClassNames,
}) => {
  const classNames = additionalClassNames ? ` ${additionalClassNames}` : "";
  const href = additonalHref ? `${additonalHref}` : "javascript:void(0)";

  return (
    <a
      href={href}
      rel="noreferrer noopener"
      target="_blank"
      className={`${styles.links} ${classNames} relative inline-block after:bg-black`}
    >
      {text}
    </a>
  );
};

export default Anchor;
