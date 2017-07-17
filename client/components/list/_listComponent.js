import React from 'react';

const PropertiesList = ({properties,_bgStyle,_addToSaved, type}) => {
    return (
        <ul className='properites-list'>
            {
                properties.data ? properties.data.map(p =>
                    <li key={'li-' + type + p.id}>
                        { (type === 'p') ? <button  id={p.id} className='centered-btn add' onClick={_addToSaved}>Add</button> :
                        <button  id={p.id} className='centered-btn delete' onClick={_addToSaved}>Delete</button> }

                        <span className="agency" style={_bgStyle(p.agency.brandingColors.primary)}>
                            <img src={p.agency.logo} alt='' />
                        </span>
                        <span className="property-img" >
                            <img src={p.mainImage} alt=''/>
                        </span>
                        <span className="price">
                            Price: {p.price}
                        </span>
                    </li>) : 
                    <li className='empty'>
                        <span>No saved properties yet</span>
                    </li>
            }
        </ul>
    )
}

export default PropertiesList;



