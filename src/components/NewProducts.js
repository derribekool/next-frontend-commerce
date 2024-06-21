import React from 'react'
import ProductCard from './ProductCard'

const productsData = [
  {
    img: "/jacket-1.jpg",
    title: "Jacket",
    desc: "Man Jacket",
    rating: 4,
    price: "450.000",
  },
  {
    img: "/skirt-1.jpg",
    title: "Skirt",
    desc: "Woman Skirt",
    rating: 5,
    price: "550.000",
  },
  {
    img: "/party-wear-1.jpg",
    title: "Party Wear",
    desc: "Women's Party Wear",
    rating: 3,
    price: "250.000",
  },
  {
    img: "/shirt-1.jpg",
    title: "Shirt",
    desc: "Pure Garment Dyed Cotton Shirt",
    rating: 3,
    price: "250.000",
  },
  {
    img: "/sports-1.jpg",
    title: "Sports",
    desc: "Running Shoes",
    rating: 3,
    price: "500.000",
  },
  {
    img: "/watch-1.jpg",
    title: "Man Wristwatch",
    desc: "Stylist Man Wristwatch",
    rating: 3,
    price: "750.000",
  },
  {
    img: "/party-wear-1.jpg",
    title: "Party Wear",
    desc: "Women's Party Wear",
    rating: 3,
    price: "250.000",
  },
]

const NewProducts = () => {
  return (
    <div>
      <div className="container pt-16">
        <h2 className="font-medium text-21xl pb-4">New Products</h2>
        <div className="grid gridl-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
          {
          productsData.map((item, index) => {
            return (
              <ProductCard
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              rating={item.rating}
              price={item.price}
              />
            )
            })
            }
        </div>
      </div>
    </div>
  )
}

export default NewProducts