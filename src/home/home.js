import React from 'react';
import Header from "../components/header/header";
import Main from '../components/home-main-section/main';
import SaleItem from "../components/sale-item/sale-item";
import CardComponent from "../components/cards/card";
import Footer from '../components/footer/footer';;


function Home() {
  const saleItems = [
    {
      imageSrc: 'product1.jpg',
      labels: ['Product Name 1', 'Condition: New', 'Location: City'],
      price: 'Rs. 1000',
    },
    {
      imageSrc: 'product2.jpg',
      labels: ['Product Name 2', 'Condition: Used', 'Location: Another City'],
      price: 'Rs. 1500',
    },
  ];

  return (
    <>
     <Header/>
     <Main/>
    <div className="app">
      {saleItems.map((item, index) => (
        <SaleItem
          key={index}
          imageSrc={item.imageSrc}
          labels={item.labels}
          price={item.price}
        />
      ))}
    </div>
  
    <div className='card-container'>
    <CardComponent
        title="Sell Your Car"
        description="Are you looking to sell your car? We can help you find the right buyer quickly and hassle-free."
        features={[
          "Competitive prices offered",
          "Wide network of potential buyers",
          "Easy and secure transaction"
        ]}
        buttonText="Sell A Car"
      />

      <CardComponent
        title="Buy A Car"
        description="Ready to buy a new car? Explore our vast selection of vehicles to find the perfect match for your needs."
        features={[
          "Diverse range of makes and models",
          "Certified pre-owned options",
          "Flexible financing available"
        ]}
        buttonText="Buy A Car"
      />
      </div>
      <Footer/>
    </>
  );
}

export default Home;
