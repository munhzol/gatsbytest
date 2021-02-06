import scrollTo from 'gatsby-plugin-smoothscroll';

export const aClick = (e,theID) => {
    e.preventDefault();
    scrollTo(`#${theID}`);
};

