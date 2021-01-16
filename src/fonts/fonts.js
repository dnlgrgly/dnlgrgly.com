import { createGlobalStyle } from 'styled-components';

import CircularStdBold from './CircularStd-Bold.woff2';
import CircularStdBoldItalic from './CircularStd-BoldItalic.woff2';
import CircularStdBook from './CircularStd-Book.woff2';
import CircularStdBookItalic from './CircularStd-BookItalic.woff2';
import d0GBYTe from './d0GBYTe.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'Circular Std';
        src: local('Circular Std'), url(${CircularStdBold}) format('woff2'),
        font-weight: bold;
        font-style: normal;
    }

    @font-face {
        font-family: 'Circular Std';
        src: local('Circular Std'), url(${CircularStdBoldItalic}) format('woff2'),
        font-weight: bold;
        font-style: italic;
    }

    @font-face {
        font-family: 'Circular Std';
        src: local('Circular Std'), url(${CircularStdBook}) format('woff2'),
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Circular Std';
        src: local('Circular Std'), url(${CircularStdBookItalic}) format('woff2'),
        font-weight: normal;
        font-style: italic;
    }

    @font-face {
        font-family: 'd0GBYTe';
        src: local('d0GBYTe'), url(${d0GBYTe}) format('woff2'),
        font-weight: normal;
        font-style: normal;
    }
`;