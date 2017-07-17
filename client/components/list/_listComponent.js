import React from 'react';

const PropertiesList = ({properties,_bgStyle,_addToSaved}) => {
    return (
        <ul className='properites-list'>
            {
                properties.data ? properties.data.map(p =>
                    <li key={'li-' + p.id}>
                        <span className="agency" style={_bgStyle(p.agency.brandingColors.primary)}>
                            <img src={p.agency.logo} alt='' />
                        </span>
                        <span className="property-img" >
                            <img src={p.mainImage} alt='' id={p.id} onClick={_addToSaved} />
                        </span>
                        <span className="price">
                            Price: {p.price}
                        </span>
                    </li>) : 
                    <li className='Empty'></li>
            }
        </ul>
    )
}

export default PropertiesList;



