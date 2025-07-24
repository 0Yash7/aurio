import React, { useState, useEffect } from "react";
import styles from "./Body.module.css";

const categories = [
  { id: "bakery", name: "Bakery & Pastries" },
  { id: "breakfast", name: "Breakfast" },
  { id: "main_course", name: "Main Course" },
  { id: "snacks", name: "Snacks & Sides" },
  { id: "desserts", name: "Desserts" },
  { id: "beverages", name: "Beverages" },
];

const menuItems = {
  bakery: [
    {
      title: "Artisan Sourdough",
      price: "₹180",
      description: "Traditional sourdough bread made with organic flour",
    },
    {
      title: "Multigrain Loaf",
      price: "₹200",
      description: "Healthy bread with seeds and grains",
    },
    {
      title: "French Baguette",
      price: "₹150",
      description: "Crispy crust, soft interior",
    },
    {
      title: "Croissants",
      price: "₹90",
      description: "Buttery, flaky - plain, chocolate, or almond",
    },
    {
      title: "Danish Pastries",
      price: "₹120",
      description: "Fruit-filled or custard-filled pastries",
    },
    {
      title: "Muffins",
      price: "₹100",
      description: "Blueberry, chocolate chip, or bran",
    },
    {
      title: "Cinnamon Rolls",
      price: "₹110",
      description: "Freshly baked with cream cheese frosting",
    },
    {
      title: "Bagels",
      price: "₹80",
      description: "Plain, sesame, or everything bagels",
    },
    {
      title: "Focaccia",
      price: "₹160",
      description: "Herb-infused Italian flatbread",
    },
    {
      title: "Bread Rolls",
      price: "₹60",
      description: "Soft dinner rolls and specialty bread rolls",
    },
    {
      title: "Chocolate Chip Cookies",
      price: "₹70",
      description: "Classic cookies with chocolate chips",
    },
    {
      title: "Brownies",
      price: "₹90",
      description: "Rich chocolate brownies with walnuts",
    },
    {
      title: "Apple Pie",
      price: "₹140",
      description: "Traditional apple pie with cinnamon",
    },
    {
      title: "Cheese Cake",
      price: "₹160",
      description: "New York style with berry compote",
    },
    {
      title: "Donuts",
      price: "₹80",
      description: "Glazed, chocolate, or filled donuts",
    },
  ],
  breakfast: [
    {
      title: "Full English Breakfast",
      price: "₹450",
      description: "Eggs, bacon, sausages, beans, mushrooms, and toast",
    },
    {
      title: "Avocado Toast",
      price: "₹280",
      description: "Smashed avocado on sourdough with poached egg",
    },
    {
      title: "Eggs Benedict",
      price: "₹320",
      description: "Poached eggs with hollandaise sauce on English muffin",
    },
    {
      title: "Pancakes Stack",
      price: "₹250",
      description: "Fluffy pancakes with maple syrup and fresh fruits",
    },
    {
      title: "Omelette",
      price: "₹220",
      description: "Three-egg omelette with choice of fillings",
    },
    {
      title: "Breakfast Burrito",
      price: "₹280",
      description: "Eggs, cheese, potatoes, and salsa wrapped in tortilla",
    },
    {
      title: "Granola Bowl",
      price: "₹200",
      description: "House-made granola with yogurt and seasonal fruits",
    },
    {
      title: "French Toast",
      price: "₹240",
      description: "Brioche French toast with cinnamon and maple syrup",
    },
    {
      title: "Breakfast Sandwich",
      price: "₹220",
      description: "Egg, cheese, and bacon on croissant",
    },
    {
      title: "Waffles",
      price: "₹260",
      description: "Belgian waffles with maple syrup and berries",
    },
    {
      title: "Breakfast Pizza",
      price: "₹300",
      description: "Eggs, bacon, and cheese on flatbread",
    },
    {
      title: "Shakshuka",
      price: "₹280",
      description: "Eggs poached in spiced tomato sauce",
    },
  ],
  main_course: [
    {
      title: "Grilled Salmon",
      price: "₹650",
      description: "Fresh salmon with lemon butter sauce",
    },
    {
      title: "Beef Steak",
      price: "₹750",
      description: "Premium cut with wine reduction sauce",
    },
    {
      title: "Chicken Marsala",
      price: "₹450",
      description: "Chicken in Marsala wine sauce with mushrooms",
    },
    {
      title: "Vegetable Curry",
      price: "₹350",
      description: "Seasonal vegetables in aromatic spices",
    },
    {
      title: "Grilled Fish",
      price: "₹480",
      description: "Fresh catch of the day with herbs",
    },
    {
      title: "Lamb Chops",
      price: "₹680",
      description: "Herb-crusted lamb chops with mint sauce",
    },
    {
      title: "Vegetable Lasagna",
      price: "₹380",
      description: "Layers of pasta, cheese, and vegetables",
    },
    {
      title: "Spaghetti Carbonara",
      price: "₹320",
      description: "Creamy pasta with bacon and parmesan",
    },
    {
      title: "Margherita Pizza",
      price: "₹350",
      description: "Classic tomato and mozzarella",
    },
    {
      title: "Chicken Burger",
      price: "₹250",
      description: "Grilled chicken with special sauce",
    },
    {
      title: "Club Sandwich",
      price: "₹280",
      description: "Triple-decker with chicken, bacon, and vegetables",
    },
    {
      title: "Seafood Pasta",
      price: "₹420",
      description: "Fresh seafood in white wine sauce",
    },
    {
      title: "Mushroom Risotto",
      price: "₹350",
      description: "Creamy arborio rice with wild mushrooms",
    },
    {
      title: "BBQ Chicken Pizza",
      price: "₹400",
      description: "BBQ sauce, chicken, and red onions",
    },
    {
      title: "Veggie Burger",
      price: "₹220",
      description: "Plant-based patty with fresh vegetables",
    },
  ],
  snacks: [
    {
      title: "Bruschetta",
      price: "₹180",
      description: "Toasted bread with fresh tomatoes and basil",
    },
    {
      title: "Calamari",
      price: "₹280",
      description: "Crispy fried calamari with marinara sauce",
    },
    {
      title: "Spring Rolls",
      price: "₹200",
      description: "Vegetable spring rolls with sweet chili sauce",
    },
    {
      title: "Garlic Bread",
      price: "₹150",
      description: "Toasted bread with garlic butter and herbs",
    },
    {
      title: "Nachos",
      price: "₹250",
      description: "Loaded with cheese, jalapeños, and salsa",
    },
    {
      title: "Mozzarella Sticks",
      price: "₹220",
      description: "Breaded and fried with marinara sauce",
    },
    {
      title: "Hummus Platter",
      price: "₹200",
      description: "House-made hummus with pita bread",
    },
    {
      title: "French Fries",
      price: "₹150",
      description: "Crispy seasoned fries",
    },
    {
      title: "Onion Rings",
      price: "₹180",
      description: "Crispy battered onion rings",
    },
    {
      title: "Chicken Wings",
      price: "₹300",
      description: "Spicy or BBQ glazed wings",
    },
    {
      title: "Potato Wedges",
      price: "₹160",
      description: "Seasoned potato wedges with dip",
    },
    {
      title: "Cheese Platter",
      price: "₹350",
      description: "Selection of artisanal cheeses",
    },
  ],
  desserts: [
    {
      title: "Tiramisu",
      price: "₹220",
      description: "Classic Italian dessert with coffee and mascarpone",
    },
    {
      title: "Chocolate Cake",
      price: "₹200",
      description: "Rich chocolate cake with ganache",
    },
    {
      title: "Cheesecake",
      price: "₹240",
      description: "New York style with berry compote",
    },
    {
      title: "Crème Brûlée",
      price: "₹260",
      description: "Classic French vanilla custard",
    },
    {
      title: "Ice Cream",
      price: "₹180",
      description: "Selection of house-made ice creams",
    },
    {
      title: "Apple Pie",
      price: "₹220",
      description: "Warm apple pie with vanilla ice cream",
    },
    {
      title: "Chocolate Mousse",
      price: "₹200",
      description: "Rich chocolate mousse with berries",
    },
    {
      title: "Fruit Tart",
      price: "₹240",
      description: "Pastry with custard and fresh fruits",
    },
    {
      title: "Panna Cotta",
      price: "₹220",
      description: "Italian cream dessert with berry sauce",
    },
    {
      title: "Chocolate Fondant",
      price: "₹260",
      description: "Warm chocolate cake with molten center",
    },
  ],
  beverages: [
    {
      title: "Specialty Coffee",
      price: "₹120",
      description: "Espresso, cappuccino, latte, or americano",
    },
    {
      title: "Fresh Juices",
      price: "₹150",
      description: "Orange, watermelon, or mixed fruit",
    },
    {
      title: "Smoothies",
      price: "₹180",
      description: "Berry blast, tropical, or green smoothie",
    },
    {
      title: "Milkshakes",
      price: "₹200",
      description: "Chocolate, vanilla, or strawberry",
    },
    {
      title: "Hot Chocolate",
      price: "₹160",
      description: "Rich chocolate with whipped cream",
    },
    {
      title: "Iced Tea",
      price: "₹100",
      description: "Fresh brewed with lemon",
    },
    {
      title: "Fresh Lemonade",
      price: "₹120",
      description: "House-made with mint",
    },
    {
      title: "Mocktails",
      price: "₹180",
      description: "Virgin mojito, pina colada, or fruit punch",
    },
    { title: "Mineral Water", price: "₹60", description: "Sparkling or still" },
    {
      title: "Fresh Coconut Water",
      price: "₹100",
      description: "Served in coconut shell",
    },
  ],
};

export default function Body() {
  const [currentPage, setCurrentPage] = useState(0);
  const [allMenuItems, setAllMenuItems] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const itemsPerPage = 8;

  useEffect(() => {
    const combinedItems = categories.flatMap((category) =>
      menuItems[category.id].map((item) => ({
        ...item,
        category: category.id,
        categoryName: category.name,
      })),
    );
    setAllMenuItems(combinedItems);
    setIsLoading(false);
  }, []);

  const totalPages = Math.ceil(allMenuItems.length / itemsPerPage);

  // Function to find the page number for a specific category
  const findCategoryPage = (categoryId) => {
    const categoryItems = allMenuItems.filter(
      (item) => item.category === categoryId,
    );
    const firstItemIndex = allMenuItems.findIndex(
      (item) => item.category === categoryId,
    );
    return Math.floor(firstItemIndex / itemsPerPage);
  };

  // Function to handle category navigation
  const handleCategoryClick = (categoryId) => {
    setCurrentCategory(categoryId);
    const targetPage = findCategoryPage(categoryId);
    setCurrentPage(targetPage);
  };

  const currentItems = allMenuItems.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage,
  );

  // Split items evenly between left and right pages
  const leftPageItems = currentItems.slice(0, itemsPerPage / 2);
  const rightPageItems = currentItems.slice(itemsPerPage / 2);

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      const newPageItems = allMenuItems.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage,
      );
      if (newPageItems.length > 0) {
        setCurrentCategory(newPageItems[0].category);
      }
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
      const newPageItems = allMenuItems.slice(
        (currentPage + 1) * itemsPerPage,
        (currentPage + 2) * itemsPerPage,
      );
      if (newPageItems.length > 0) {
        setCurrentCategory(newPageItems[0].category);
      }
    }
  };

  if (isLoading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.body}>
      <div className={styles.menuContainer}>
        <h1 className={styles.menuTitle}>Our Menu</h1>
        <div className={styles.categories}>
          {categories.map((category) => (
            <div
              key={category.id}
              className={`${styles.category} ${currentCategory === category.id ? styles.active : ""}`}
              onClick={() => handleCategoryClick(category.id)}
            >
              <h2>{category.name}</h2>
            </div>
          ))}
        </div>

        <div className={styles.pageContainer}>
          <div className={styles.pageSpread}>
            {/* Left Page */}
            <div className={`${styles.pageContent} ${styles.leftPage}`}>
              <div className={styles.pageNumber}>{currentPage * 2 + 1}</div>
              <h2 className={styles.categoryTitle}>
                {leftPageItems.length > 0 ? leftPageItems[0].categoryName : ""}
              </h2>
              <div className={styles.menuItems}>
                {leftPageItems.map((item, index) => (
                  <div key={index} className={styles.menuItem}>
                    <div className={styles.menuItemHeader}>
                      <h3>{item.title}</h3>
                      <span className={styles.price}>{item.price}</span>
                    </div>
                    <p className={styles.description}>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Page */}
            <div className={`${styles.pageContent} ${styles.rightPage}`}>
              <div className={styles.pageNumber}>{currentPage * 2 + 2}</div>
              <h2 className={styles.categoryTitle}>
                {rightPageItems.length > 0
                  ? rightPageItems[0].categoryName
                  : ""}
              </h2>
              <div className={styles.menuItems}>
                {rightPageItems.map((item, index) => (
                  <div key={index} className={styles.menuItem}>
                    <div className={styles.menuItemHeader}>
                      <h3>{item.title}</h3>
                      <span className={styles.price}>{item.price}</span>
                    </div>
                    <p className={styles.description}>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.pageControls}>
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 0}
            className={styles.pageButton}
          >
            Previous
          </button>
          <span className={styles.pageNumber}>
            Page {currentPage + 1} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages - 1}
            className={styles.pageButton}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
