/**
 * Grabbing the elements' prop values if needed.
 */

import { ImageProps } from "next/image";

type Div = React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>;

type Meta = React.DetailedHTMLProps<
    React.MetaHTMLAttributes<HTMLMetaElement>,
    HTMLMetaElement
>;

type H1 = React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
>;

type NextImage = ImageProps;

export type { Div, Meta, NextImage, H1 };
