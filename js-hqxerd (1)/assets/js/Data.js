const femaleClothes = [
    // Festive
    { id: 1, name: "Elegant Festive Dress", category: "festive", price: 99.99, imageUrl: "https://placehold.co/600x400?text=Festive+Dress" },
    { id: 2, name: "Festive Embroidered Lehenga", category: "festive", price: 199.99, imageUrl: "https://placehold.co/600x400?text=Festive+Embroidered+Lehenga" },
    { id: 3, name: "Festive Anarkali Suit", category: "festive", price: 149.99, imageUrl: "https://placehold.co/600x400?text=Festive+Anarkali+Suit" },
    { id: 4, name: "Festive Kurta Set", category: "festive", price: 89.99, imageUrl: "https://placehold.co/600x400?text=Festive+Kurta+Set" },
    { id: 5, name: "Festive Saree", category: "festive", price: 129.99, imageUrl: "https://placehold.co/600x400?text=Festive+Saree" },
    { id: 6, name: "Festive Gown", category: "festive", price: 179.99, imageUrl: "https://placehold.co/600x400?text=Festive+Gown" },
    { id: 7, name: "Festive Sharara Suit", category: "festive", price: 159.99, imageUrl: "https://placehold.co/600x400?text=Festive+Sharara+Suit" },
    { id: 8, name: "Festive Palazzo Set", category: "festive", price: 119.99, imageUrl: "https://placehold.co/600x400?text=Festive+Palazzo+Set" },
    { id: 9, name: "Festive Churidar Suit", category: "festive", price: 109.99, imageUrl: "https://placehold.co/600x400?text=Festive+Churidar+Suit" },
    { id: 10, name: "Festive Salwar Kameez", category: "festive", price: 139.99, imageUrl: "https://placehold.co/600x400?text=Festive+Salwar+Kameez" },
    
    // Dupatta
    { id: 11, name: "Chic Dupatta", category: "dupatta", price: 29.99, imageUrl: "https://placehold.co/600x400?text=Chic+Dupatta" },
    { id: 12, name: "Elegant Silk Dupatta", category: "dupatta", price: 49.99, imageUrl: "https://placehold.co/600x400?text=Elegant+Silk+Dupatta" },
    { id: 13, name: "Traditional Cotton Dupatta", category: "dupatta", price: 19.99, imageUrl: "https://placehold.co/600x400?text=Cotton+Dupatta" },
    { id: 14, name: "Designer Net Dupatta", category: "dupatta", price: 39.99, imageUrl: "https://placehold.co/600x400?text=Net+Dupatta" },
    { id: 15, name: "Fancy Embroidered Dupatta", category: "dupatta", price: 59.99, imageUrl: "https://placehold.co/600x400?text=Embroidered+Dupatta" },
    { id: 16, name: "Georgette Dupatta", category: "dupatta", price: 34.99, imageUrl: "https://placehold.co/600x400?text=Georgette+Dupatta" },
    { id: 17, name: "Chiffon Dupatta", category: "dupatta", price: 24.99, imageUrl: "https://placehold.co/600x400?text=Chiffon+Dupatta" },
    { id: 18, name: "Velvet Dupatta", category: "dupatta", price: 69.99, imageUrl: "https://placehold.co/600x400?text=Velvet+Dupatta" },
    { id: 19, name: "Printed Dupatta", category: "dupatta", price: 14.99, imageUrl: "https://placehold.co/600x400?text=Printed+Dupatta" },
    { id: 20, name: "Silk Blend Dupatta", category: "dupatta", price: 44.99, imageUrl: "https://placehold.co/600x400?text=Silk+Blend+Dupatta" },
    
    // New Arrivals
    { id: 21, name: "Trendy New Arrivals Top", category: "new-arrivals", price: 49.99, imageUrl: "https://placehold.co/600x400?text=New+Arrivals+Top" },
    { id: 22, name: "Modern New Arrivals Blouse", category: "new-arrivals", price: 69.99, imageUrl: "https://placehold.co/600x400?text=New+Arrivals+Blouse" },
    { id: 23, name: "Stylish New Arrivals Dress", category: "new-arrivals", price: 99.99, imageUrl: "https://placehold.co/600x400?text=New+Arrivals+Dress" },
    { id: 24, name: "Casual New Arrivals Shirt", category: "new-arrivals", price: 39.99, imageUrl: "https://placehold.co/600x400?text=New+Arrivals+Shirt" },
    { id: 25, name: "Elegant New Arrivals Skirt", category: "new-arrivals", price: 79.99, imageUrl: "https://placehold.co/600x400?text=New+Arrivals+Skirt" },
    { id: 26, name: "Comfortable New Arrivals Pants", category: "new-arrivals", price: 59.99, imageUrl: "https://placehold.co/600x400?text=New+Arrivals+Pants" },
    { id: 27, name: "Formal New Arrivals Coat", category: "new-arrivals", price: 119.99, imageUrl: "https://placehold.co/600x400?text=New+Arrivals+Coat" },
    { id: 28, name: "Chic New Arrivals Jacket", category: "new-arrivals", price: 89.99, imageUrl: "https://placehold.co/600x400?text=New+Arrivals+Jacket" },
    { id: 29, name: "Fashionable New Arrivals Tunic", category: "new-arrivals", price: 74.99, imageUrl: "https://placehold.co/600x400?text=New+Arrivals+Tunic" },
    { id: 30, name: "New Arrivals Evening Gown", category: "new-arrivals", price: 149.99, imageUrl: "https://placehold.co/600x400?text=New+Arrivals+Evening+Gown" },
    
    // Casuals
    { id: 31, name: "Casual Summer Dress", category: "casuals", price: 39.99, imageUrl: "https://placehold.co/600x400?text=Casual+Summer+Dress" },
    { id: 32, name: "Relaxed Casual Pants", category: "casuals", price: 35.99, imageUrl: "https://placehold.co/600x400?text=Casual+Pants" },
    { id: 33, name: "Casual T-Shirt", category: "casuals", price: 19.99, imageUrl: "https://placehold.co/600x400?text=Casual+T-Shirt" },
    { id: 34, name: "Casual Hoodie", category: "casuals", price: 49.99, imageUrl: "https://placehold.co/600x400?text=Casual+Hoodie" },
    { id: 35, name: "Casual Skirt", category: "casuals", price: 29.99, imageUrl: "https://placehold.co/600x400?text=Casual+Skirt" },
    { id: 36, name: "Casual Jeans", category: "casuals", price: 59.99, imageUrl: "https://placehold.co/600x400?text=Casual+Jeans" },
    { id: 37, name: "Casual Blazer", category: "casuals", price: 79.99, imageUrl: "https://placehold.co/600x400?text=Casual+Blazer" },
    { id: 38, name: "Casual Cardigan", category: "casuals", price: 39.99, imageUrl: "https://placehold.co/600x400?text=Casual+Cardigan" },
    { id: 39, name: "Casual Shorts", category: "casuals", price: 24.99, imageUrl: "https://placehold.co/600x400?text=Casual+Shorts" },
    { id: 40, name: "Casual Tank Top", category: "casuals", price: 14.99, imageUrl: "https://placehold.co/600x400?text=Casual+Tank+Top" },
    
    // Shop
    { id: 41, name: "Shop Trendy Top", category: "shop", price: 49.99, imageUrl: "https://placehold.co/600x400?text=Shop+Trendy+Top" },
    { id: 42, name: "Shop Modern Blouse", category: "shop", price: 69.99, imageUrl: "https://placehold.co/600x400?text=Shop+Modern+Blouse" },
    { id: 43, name: "Shop Stylish Dress", category: "shop", price: 99.99, imageUrl: "https://placehold.co/600x400?text=Shop+Stylish+Dress" },
    { id: 44, name: "Shop Casual Shirt", category: "shop", price: 39.99, imageUrl: "https://placehold.co/600x400?text=Shop+Casual+Shirt" },
    { id: 45, name: "Shop Elegant Skirt", category: "shop", price: 79.99, imageUrl: "https://placehold.co/600x400?text=Shop+Elegant+Skirt" },
    { id: 46, name: "Shop Comfortable Pants", category: "shop", price: 59.99, imageUrl: "https://placehold.co/600x400?text=Shop+Comfortable+Pants" },
    { id: 47, name: "Shop Formal Coat", category: "shop", price: 119.99, imageUrl: "https://placehold.co/600x400?text=Shop+Formal+Coat" },
    { id: 48, name: "Shop Chic Jacket", category: "shop", price: 89.99, imageUrl: "https://placehold.co/600x400?text=Shop+Chic+Jacket" },
    { id: 49, name: "Shop Fashionable Tunic", category: "shop", price: 74.99, imageUrl: "https://placehold.co/600x400?text=Shop+Fashionable+Tunic" },
    { id: 50, name: "Shop Evening Gown", category: "shop", price: 149.99, imageUrl: "https://placehold.co/600x400?text=Shop+Evening+Gown" },
    
    // Summer Sale
    { id: 51, name: "Summer Sale Dress", category: "summer-sale", price: 29.99, imageUrl: "https://placehold.co/600x400?text=Summer+Sale+Dress" },
    { id: 52, name: "Summer Sale T-Shirt", category: "summer-sale", price: 19.99, imageUrl: "https://placehold.co/600x400?text=Summer+Sale+T-Shirt" },
    { id: 53, name: "Summer Sale Shorts", category: "summer-sale", price: 14.99, imageUrl: "https://placehold.co/600x400?text=Summer+Sale+Shorts" },
    { id: 54, name: "Summer Sale Tank Top", category: "summer-sale", price: 12.99, imageUrl: "https://placehold.co/600x400?text=Summer+Sale+Tank+Top" },
    { id: 55, name: "Summer Sale Skirt", category: "summer-sale", price: 24.99, imageUrl: "https://placehold.co/600x400?text=Summer+Sale+Skirt" },
    { id: 56, name: "Summer Sale Sandals", category: "summer-sale", price: 29.99, imageUrl: "https://placehold.co/600x400?text=Summer+Sale+Sandals" },
    { id: 57, name: "Summer Sale Sunglasses", category: "summer-sale", price: 9.99, imageUrl: "https://placehold.co/600x400?text=Summer+Sale+Sunglasses" },
    { id: 58, name: "Summer Sale Hat", category: "summer-sale", price: 14.99, imageUrl: "https://placehold.co/600x400?text=Summer+Sale+Hat" },
    { id: 59, name: "Summer Sale Beach Dress", category: "summer-sale", price: 34.99, imageUrl: "https://placehold.co/600x400?text=Summer+Sale+Beach+Dress" },
    { id: 60, name: "Summer Sale Bikini", category: "summer-sale", price: 19.99, imageUrl: "https://placehold.co/600x400?text=Summer+Sale+Bikini" }
];
export default femaleClothes;