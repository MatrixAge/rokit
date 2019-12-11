import React from "react";

interface IProps {
      width?: string,
      height?: string,
      borderRadius?: string,
      src: string,
      alt?: string,
      mode?: "scaleToFill" | "aspectFit" | "aspectFill" | "aspectFillWidth" | "aspectFillHeight" | "widthFix" | "top" | "bottom" | "center" | "left" | "right" | "topLeft" | "topRight" | "bottomLeft" | "bottomRight",
      lazy?: boolean
}

declare const Image: React.FC<IProps>;

export default Image;
