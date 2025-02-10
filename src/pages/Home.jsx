import React from 'react'
import "../styles/home.css"
import useUserStore from '../Store'

export default function Home() {
  const {name,email}=useUserStore();

  return (
    <>
    {name && email && (
        <div className='display'>
          <p>You have logged into Flipkart with <b>{name}</b> using <b>{email}</b> successfully!!</p>
        </div>
      )}
    <div className='home'>
      <p>Flipkart offers a comprehensive online shopping experience, featuring a vast array of products across multiple categories. Customers can explore sections dedicated to electronics, fashion, home essentials, appliances, and more. The platform highlights top deals, new arrivals, and exclusive offers, ensuring users have access to the latest products and promotions. Additionally, We provides personalized recommendations based on user preferences and browsing history, enhancing the shopping experience. We also offers easy navigation to customer support, order tracking, and account management features, ensuring a seamless and user-friendly experience. 
      </p>
    </div>
    </>
  )
}
