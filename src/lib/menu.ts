
export type MenuItem = {
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  rating: number;
  ratingsCount: number;
};

export type MenuCategory = {
  name: string;
  items: MenuItem[];
};

export const menuData: MenuCategory[] = [
  {
    name: 'Veg Dishes',
    items: [
      { name: 'Chana Masala', price: 80, description: 'A classic North Indian curry with chickpeas in a spicy, tangy tomato-based sauce.', rating: 5, ratingsCount: 120 },
      { name: 'Mixed Veg', price: 80, originalPrice: 100, description: 'A medley of seasonal vegetables cooked in a rich and aromatic gravy.', rating: 4, ratingsCount: 95 },
      { name: 'Chana Paneer', price: 120, description: 'A delightful combination of chickpeas and soft paneer cubes in a flavorful curry.', rating: 5, ratingsCount: 150 },
      { name: 'Veg Tarka', price: 80, description: 'Yellow lentils tempered with aromatic spices, a comforting and hearty dish.', rating: 4, ratingsCount: 88 },
      { name: 'Paneer Masala', price: 140, originalPrice: 160, description: 'Soft paneer cubes simmered in a spiced tomato and onion gravy.', rating: 5, ratingsCount: 210 },
      { name: 'Paneer Butter Masala', price: 150, description: 'A crowd favorite! Creamy and rich curry with paneer in a buttery tomato sauce.', rating: 5, ratingsCount: 350 },
      { name: 'Dal Makhani', price: 90, description: 'Black lentils and kidney beans slow-cooked to perfection in a creamy, buttery sauce.', rating: 5, ratingsCount: 180 },
      { name: 'Matar Paneer', price: 150, description: 'A wholesome curry of paneer and green peas in a tomato-based gravy.', rating: 4, ratingsCount: 140 },
      { name: 'Paneer Do Pyaza', price: 160, description: 'A unique dish where paneer is cooked with a generous amount of onions.', rating: 4, ratingsCount: 110 },
      { name: 'Kadai Paneer', price: 170, originalPrice: 190, description: 'Paneer and bell peppers cooked in a spicy masala in a traditional Indian wok.', rating: 5, ratingsCount: 250 },
      { name: 'Paneer Jhal Fry', price: 180, description: 'Spicy and tangy stir-fried paneer with a mix of vibrant vegetables.', rating: 4, ratingsCount: 75 },
      { name: 'Paneer Bharta', price: 190, description: 'Mashed paneer cooked with onions, tomatoes, and spices. A flavorful scramble.', rating: 4, ratingsCount: 60 },
      { name: 'Paneer Malai Kofta', price: 220, description: 'Deep-fried paneer and vegetable balls in a rich, creamy, and mildly sweet gravy.', rating: 5, ratingsCount: 280 },
      { name: 'Paneer Chilli', price: 140, description: 'An Indo-Chinese classic. Crispy paneer tossed in a spicy and tangy chili sauce.', rating: 5, ratingsCount: 190 },
      { name: 'Mushroom Chilli', price: 180, description: 'Crispy mushrooms stir-fried with bell peppers and onions in a spicy sauce.', rating: 4, ratingsCount: 130 },
      { name: 'Mushroom Masala', price: 190, description: 'Button mushrooms cooked in a savory and spiced onion-tomato gravy.', rating: 4, ratingsCount: 100 },
      { name: 'Mushroom Do Pyaza', price: 200, originalPrice: 220, description: 'A flavorful mushroom curry with a prominent taste of sweet, crunchy onions.', rating: 4, ratingsCount: 90 },
      { name: 'Mushroom Butter Masala', price: 210, description: 'Succulent mushrooms in a rich, creamy, and buttery tomato-based gravy.', rating: 5, ratingsCount: 160 },
    ],
  },
  {
    name: 'Rolls',
    items: [
      { name: 'Egg Roll', price: 50, description: 'A warm paratha wrapped around a savory egg filling with onions and sauces.', rating: 4, ratingsCount: 250 },
      { name: 'Paneer Roll', price: 60, originalPrice: 70, description: 'Spiced paneer filling wrapped in a soft paratha. A perfect vegetarian snack.', rating: 5, ratingsCount: 180 },
      { name: 'Chicken Roll', price: 70, description: 'Juicy chicken chunks with sauces and onions, all rolled up in a paratha.', rating: 5, ratingsCount: 300 },
      { name: 'Egg Chicken Roll', price: 80, description: 'The best of both worlds! A delicious roll with egg and chicken filling.', rating: 5, ratingsCount: 220 },
      { name: 'Laccha Paratha', price: 30, description: 'Flaky, layered, and crispy flatbread, perfect to accompany any curry.', rating: 4, ratingsCount: 400 },
    ],
  },
  {
    name: 'Noodles',
    items: [
      { name: 'Veg Chowmein', price: 70, description: 'Stir-fried noodles packed with a variety of fresh vegetables and sauces.', rating: 4, ratingsCount: 150 },
      { name: 'Egg Chowmein', price: 80, description: 'Classic chowmein with the added goodness of scrambled eggs.', rating: 4, ratingsCount: 120 },
      { name: 'Chicken Chowmein', price: 100, originalPrice: 120, description: 'A satisfying bowl of noodles stir-fried with tender chicken pieces.', rating: 5, ratingsCount: 200 },
      { name: 'Egg Chicken Chowmein', price: 120, description: 'A hearty combination of chicken and egg tossed with noodles and veggies.', rating: 5, ratingsCount: 180 },
      { name: 'Mixed Chowmein', price: 140, description: 'The ultimate noodle dish with a mix of chicken, egg, and fresh vegetables.', rating: 5, ratingsCount: 250 },
    ],
  },
  {
    name: 'Rice',
    items: [
      { name: 'Veg Fried Rice', price: 80, description: 'Fragrant rice stir-fried with a colorful assortment of vegetables.', rating: 4, ratingsCount: 130 },
      { name: 'Jeera Rice', price: 80, description: 'Basmati rice tempered with cumin seeds, a simple yet aromatic side dish.', rating: 4, ratingsCount: 110 },
      { name: 'Veg Pulao', price: 90, description: 'Aromatic basmati rice cooked with mixed vegetables and mild spices.', rating: 4, ratingsCount: 100 },
      { name: 'Egg Fried Rice', price: 90, description: 'A simple and delicious fried rice with scrambled eggs and seasonings.', rating: 4, ratingsCount: 90 },
      { name: 'Chicken Fried Rice', price: 100, originalPrice: 110, description: 'Flavorful fried rice loaded with tender chicken and vegetables.', rating: 5, ratingsCount: 180 },
      { name: 'Egg Chicken Fried Rice', price: 120, description: 'A complete meal with chicken, egg, and vegetables tossed in fragrant rice.', rating: 5, ratingsCount: 160 },
      { name: 'Mixed Fried Rice', price: 140, description: 'A loaded fried rice with chicken, egg, and shrimp for a fulfilling meal.', rating: 5, ratingsCount: 220 },
      { name: 'Hong Kong Rice', price: 150, description: 'A spicy and savory fried rice variation with a unique Hong Kong-style flavor.', rating: 4, ratingsCount: 70 },
      { name: 'Chicken Biryani', price: 130, description: 'Aromatic and flavorful rice dish with marinated chicken, cooked to perfection.', rating: 5, ratingsCount: 350 },
    ],
  },
  {
    name: 'Breakfast',
    items: [
      { name: 'Puri Sabji', price: 50, description: 'Fluffy deep-fried bread served with a savory potato curry. A breakfast classic.', rating: 5, ratingsCount: 200 },
      { name: 'Cholla Batora', price: 80, description: 'Spicy chickpea curry served with large, fluffy fried bread.', rating: 5, ratingsCount: 180 },
      { name: 'Butter Toast', price: 50, description: 'Crispy toasted bread slices generously slathered with butter.', rating: 4, ratingsCount: 150 },
      { name: 'Egg Toast', price: 60, description: 'Toasted bread topped with a perfectly cooked egg, your way.', rating: 4, ratingsCount: 130 },
      { name: 'Omelet', price: 50, description: 'A fluffy two-egg omelet with your choice of simple seasonings.', rating: 4, ratingsCount: 160 },
      { name: 'Egg Boiled (2 pcs)', price: 40, description: 'Two perfectly hard-boiled eggs, a simple and protein-packed choice.', rating: 4, ratingsCount: 100 },
      { name: 'Oil Poach', price: 40, description: 'A delicately poached egg, perfect on its own or with a side of toast.', rating: 4, ratingsCount: 80 },
      { name: 'Tea', price: 20, description: 'A hot, refreshing cup of classic Indian tea to start your day.', rating: 5, ratingsCount: 500 },
      { name: 'Coffee', price: 30, description: 'A freshly brewed cup of coffee to kickstart your morning.', rating: 4, ratingsCount: 300 },
    ],
  },
  {
    name: 'Chicken Dishes',
    items: [
      { name: 'Chicken Kasa', price: 150, description: 'A slow-cooked, spicy chicken curry with a thick, rich gravy.', rating: 5, ratingsCount: 220 },
      { name: 'Chicken Do Pyaza', price: 160, description: 'Tender chicken cooked with a generous amount of onions in a savory gravy.', rating: 4, ratingsCount: 180 },
      { name: 'Kadai Chicken', price: 170, description: 'A popular North Indian dish of chicken and bell peppers in a spicy tomato gravy.', rating: 5, ratingsCount: 300 },
      { name: 'Chicken Jhal Fry', price: 180, description: 'A fiery and tangy chicken stir-fry with a mix of spices and vegetables.', rating: 4, ratingsCount: 150 },
      { name: 'Chicken Masala', price: 190, description: 'A classic chicken curry with a perfectly balanced blend of aromatic spices.', rating: 5, ratingsCount: 280 },
      { name: 'Chicken Handi', price: 190, description: 'Chicken cooked in a traditional earthen pot, resulting in a unique, earthy flavor.', rating: 5, ratingsCount: 260 },
      { name: 'Chicken Hyderabadi', price: 200, description: 'A rich and aromatic chicken curry from the royal kitchens of Hyderabad.', rating: 5, ratingsCount: 240 },
      { name: 'Butter Chicken', price: 200, originalPrice: 220, description: 'Our signature dish! Grilled chicken in a creamy, buttery tomato sauce.', rating: 5, ratingsCount: 500 },
      { name: 'Kurma Chicken', price: 200, description: 'A mild and creamy chicken curry cooked with yogurt, nuts, and spices.', rating: 4, ratingsCount: 190 },
      { name: 'Chicken Bharta', price: 200, description: 'Shredded chicken cooked in a rich and flavorful tomato and onion gravy.', rating: 4, ratingsCount: 170 },
      { name: 'Chicken Manchurian', price: 160, description: 'An Indo-Chinese favorite featuring crispy chicken in a tangy manchurian sauce.', rating: 4, ratingsCount: 210 },
    ],
  },
  {
    name: 'Mutton Dishes',
    items: [
      { name: 'Mutton Kasa', price: 220, description: 'A hearty and spicy slow-cooked mutton curry with a thick, flavorful gravy.', rating: 5, ratingsCount: 190 },
      { name: 'Mutton Masala', price: 240, description: 'Tender mutton pieces cooked in a rich and aromatic spiced gravy.', rating: 5, ratingsCount: 220 },
      { name: 'Mutton Do Pyaza', price: 230, description: 'A delicious mutton curry loaded with sweet and savory onions.', rating: 4, ratingsCount: 150 },
      { name: 'Mutton Kurma', price: 260, description: 'A royal and creamy mutton curry made with yogurt, nuts, and fragrant spices.', rating: 5, ratingsCount: 180 },
      { name: 'Mutton Handi', price: 250, description: 'Succulent mutton cooked in a traditional handi for a deep, rustic flavor.', rating: 5, ratingsCount: 200 },
      { name: 'Mutton Bhona', price: 250, description: 'A traditional Bengali dish where mutton is slow-cooked with spices until tender.', rating: 4, ratingsCount: 130 },
    ],
  },
  {
    name: 'Soups',
    items: [
      { name: 'Tomato Soup', price: 80, description: 'A creamy and comforting soup made from fresh, ripe tomatoes.', rating: 4, ratingsCount: 110 },
      { name: 'Veg Clear Soup', price: 80, description: 'A light and healthy soup with a mix of fresh vegetables in a clear broth.', rating: 4, ratingsCount: 90 },
      { name: 'Veg Sweet Corn Soup', price: 100, description: 'A classic Indo-Chinese soup that is both sweet and savory.', rating: 4, ratingsCount: 140 },
      { name: 'Veg Hot & Sour Soup', price: 90, description: 'A spicy and tangy soup loaded with shredded vegetables.', rating: 4, ratingsCount: 120 },
      { name: 'Chicken Clear Soup', price: 100, description: 'A light and nourishing clear broth with tender pieces of chicken.', rating: 4, ratingsCount: 100 },
      { name: 'Chicken Sweet Corn Soup', price: 130, description: 'A creamy and comforting soup with chicken and sweet corn kernels.', rating: 5, ratingsCount: 180 },
      { name: 'Chicken Hot & Sour Soup', price: 120, description: 'A zesty and spicy soup with chicken, mushrooms, and other vegetables.', rating: 5, ratingsCount: 160 },
    ],
  },
  {
    name: 'Tandoor & Breads',
    items: [
      { name: 'Tandoori Roti', price: 15, description: 'Whole wheat flatbread cooked in a traditional clay tandoor.', rating: 5, ratingsCount: 600 },
      { name: 'Tandoori Butter Roti', price: 20, description: 'A classic tandoori roti brushed with a generous amount of butter.', rating: 5, ratingsCount: 550 },
      { name: 'Butter Naan', price: 40, description: 'Soft and fluffy leavened bread cooked in a tandoor and brushed with butter.', rating: 5, ratingsCount: 700 },
      { name: 'Garlic Naan', price: 50, originalPrice: 60, description: 'A flavorful naan topped with chopped garlic and herbs, cooked to perfection.', rating: 5, ratingsCount: 650 },
      { name: 'Kabuli Naan', price: 50, description: 'A slightly sweet naan stuffed with nuts and raisins. A delightful treat.', rating: 4, ratingsCount: 250 },
      { name: 'Paneer Kulcha', price: 60, description: 'A soft, fluffy bread stuffed with a delicious spiced paneer filling.', rating: 4, ratingsCount: 300 },
      { name: 'Masala Kulcha', price: 50, description: 'A flavorful bread stuffed with a mix of spiced vegetables and potatoes.', rating: 4, ratingsCount: 280 },
      { name: 'Chicken Tandoori', price: 350, description: 'The king of kababs! Chicken marinated in yogurt and spices, roasted in a tandoor.', rating: 5, ratingsCount: 450 },
      { name: 'Chicken Tikka (6 pcs)', price: 160, description: 'Boneless chicken chunks marinated in spices and yogurt, grilled to perfection.', rating: 5, ratingsCount: 400 },
      { name: 'Chicken Hariyali Kabab (6 pcs)', price: 180, description: 'Chicken kababs marinated in a fresh green paste of mint, cilantro, and spices.', rating: 5, ratingsCount: 350 },
      { name: 'Chicken Tikka Tawa Masala (6 pcs)', price: 180, description: 'Grilled chicken tikka pieces pan-fried in a spicy and tangy masala.', rating: 4, ratingsCount: 200 },
      { name: 'Tandoori Butter Chicken', price: 450, description: 'A whole tandoori chicken served in our signature creamy butter chicken gravy.', rating: 5, ratingsCount: 500 },
      { name: 'Paneer Tikka (6 pcs)', price: 180, originalPrice: 200, description: 'Cubes of paneer marinated in spices and grilled in a tandoor. A veggie delight.', rating: 5, ratingsCount: 380 },
    ],
  },
];
