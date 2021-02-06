import React from 'react';

// import '../styles/index.scss';
import layoutStyle from './layout-sub.module.scss';


const LayoutSub = ({ title, subTitle, subId, children }) => {
    return <section className={layoutStyle.component} id={subId}>
        <h5 className="mt-5" >&nbsp;</h5>
        <h2 className="mb-5">{title}</h2>
        {children}
    </section>;
};

export default LayoutSub;