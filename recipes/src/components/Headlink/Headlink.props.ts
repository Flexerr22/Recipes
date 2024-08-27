import { HTMLAttributes, ReactNode } from "react";

export interface Headlink extends HTMLAttributes<HTMLHeadingElement> {
    children: ReactNode;
}