import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='decriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An e-commerce platform is a software that enables the buying and selling 
            of products and services over the internet. It's a content management system 
            (CMS) and commerce engine that websites use to manage products, register 
            purchases, and manage user relationships. An e-commerce website allows people 
            to buy and sell physical goods, services, and digital products over the internet.
            It also allows businesses to process orders, accept payments, manage shipping and
            logistics, and provide customer service.</p>
         <p>
            E-commerce relies on technology and digital platforms, including websites, 
            mobile apps, and social media to make buying and selling possible. 
            Examples of e-commerce websites include: Amazon, Alibaba, eBay, Etsy.
         </p>
      </div>
    </div>
  )
}

export default DescriptionBox
