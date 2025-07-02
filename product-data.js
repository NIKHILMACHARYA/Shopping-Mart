const products = [
  {
    name: "SHOES",
    price: "$5.00",
    description: "These shoes are lightweight, durable, and designed for comfort and performance. Ideal for casual and athletic wear.",
    specs: [
      "Size: Available in all sizes",
      "Color: Black / White",
      "Material: Synthetic Leather",
      "Brand: SpeedMax"
    ],
    image: "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    name: "MEN'S T-SHIRT",
    price: "$6.34",
    description: "Premium quality cotton T-shirt with modern fit. Perfect for everyday wear.",
    specs: [
      "Size: S, M, L, XL",
      "Color: Multiple",
      "Material: 100% Cotton",
      "Brand: UrbanTrend"
    ],
    image: "https://images.pexels.com/photos/3649765/pexels-photo-3649765.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    name: "JEANS",
    price: "$9.00",
    description: "Stylish and durable jeans for all-day comfort. Perfect for casual wear.",
    specs: [
      "Waist: 30\" to 38\"",
      "Color: Blue, Black",
      "Material: Denim",
      "Brand: DenimFlex"
    ],
    image: "https://media.istockphoto.com/photos/folded-blue-jeans-on-a-white-background-modern-casual-clothing-flat-picture-id1281304280"
  },
  {
    name: "SUNGLASSES",
    price: "$4.20",
    description: "Trendy unisex sunglasses with UV protection and durable frame.",
    specs: [
      "UV Protection: Yes",
      "Color: Black / Brown",
      "Material: Polycarbonate",
      "Brand: EyeShield"
    ],
    image: "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    name: "BACKPACK",
    price: "$12.00",
    description: "Spacious and durable backpack ideal for school, travel, or work.",
    specs: [
      "Capacity: 30L",
      "Color: Red / Grey",
      "Material: Nylon",
      "Brand: PackPro"
    ],
    image: "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    name: "HEADPHONES",
    price: "$15.50",
    description: "High-fidelity wireless headphones with noise cancellation.",
    specs: [
      "Battery Life: 20 hours",
      "Color: Black",
      "Connectivity: Bluetooth",
      "Brand: SoundWave"
    ],
    image: "https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  }
];

const container = document.getElementById("product-container");

products.forEach(product => {
  const productDiv = document.createElement("div");
  productDiv.classList.add("product-detail-container");

  productDiv.innerHTML = `
    <div class="product-images">
      <img src="${product.image}" alt="${product.name}">
    </div>
    <div class="product-info">
      <h1>${product.name}</h1>
      <p class="price">${product.price}</p>
      <p class="description">${product.description}</p>
      <ul class="specs">
        ${product.specs.map(spec => `<li>${spec}</li>`).join('')}
      </ul>
      <button class="add-to-cart">Add to Cart</button>
    </div>
  `;

  container.appendChild(productDiv);
});
