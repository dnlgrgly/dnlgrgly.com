import { createGlobalStyle } from "styled-components";

import CircularStdBold2 from "./CircularStd-Bold.woff2";
import CircularStdBoldItalic2 from "./CircularStd-BoldItalic.woff2";
import CircularStdBook2 from "./CircularStd-Book.woff2";
import CircularStdBookItalic2 from "./CircularStd-BookItalic.woff2";
import d0GBYTe2 from "./d0GBYTe.woff2";

import CircularStdBold from "./CircularStd-Bold.woff";
import CircularStdBoldItalic from "./CircularStd-BoldItalic.woff";
import CircularStdBook from "./CircularStd-Book.woff";
import CircularStdBookItalic from "./CircularStd-BookItalic.woff";
import d0GBYTe from "./d0GBYTe.woff";

export default createGlobalStyle`
    @font-face {
        font-family: 'Circular Std';
        src: local('Circular Std'), url(${CircularStdBold2}) format('woff2'), url(${CircularStdBold}) format('woff');
        font-weight: bold;
        font-style: normal;
    }

    @font-face {
        font-family: 'Circular Std';
        src: local('Circular Std'), url(${CircularStdBoldItalic2}) format('woff2'), url(${CircularStdBoldItalic}) format('woff');
        font-weight: bold;
        font-style: italic;
    }

    @font-face {
        font-family: 'Circular Std';
        src: local('Circular Std'), url(${CircularStdBook2}) format('woff2'), url(${CircularStdBook}) format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Circular Std';
        src: local('Circular Std'), url(${CircularStdBookItalic2}) format('woff2'), url(${CircularStdBookItalic}) format('woff');
        font-weight: normal;
        font-style: italic;
    }

    @font-face {
        font-family: 'd0GBYTe';
        src: local('d0GBYTe'), url(${d0GBYTe2}) format('woff2'), url(${d0GBYTe}) format('woff');
        font-weight: normal;
        font-style: normal;
    }
`;
