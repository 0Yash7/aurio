import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

const generateMenuPDF = () => {
  const doc = new jsPDF();
  
  // Add logo and title
  doc.setFontSize(24);
  doc.setTextColor(11, 27, 60); // #0b1b3c
  doc.text('Aureo Menu', 105, 20, { align: 'center' });
  
  // Add subtitle
  doc.setFontSize(14);
  doc.setTextColor(192, 138, 100); // #c08a64
  doc.text('Culinary Excellence in Every Bite', 105, 30, { align: 'center' });
  
  // Menu categories and items
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
      { title: "Artisan Sourdough", price: "₹180", description: "Traditional sourdough bread made with organic flour" },
      { title: "Multigrain Loaf", price: "₹200", description: "Healthy bread with seeds and grains" },
      { title: "French Baguette", price: "₹150", description: "Crispy crust, soft interior" },
      { title: "Croissants", price: "₹90", description: "Buttery, flaky - plain, chocolate, or almond" },
      { title: "Danish Pastries", price: "₹120", description: "Fruit-filled or custard-filled pastries" },
      { title: "Muffins", price: "₹100", description: "Blueberry, chocolate chip, or bran" },
      { title: "Cinnamon Rolls", price: "₹110", description: "Freshly baked with cream cheese frosting" },
      { title: "Bagels", price: "₹80", description: "Plain, sesame, or everything bagels" },
      { title: "Focaccia", price: "₹160", description: "Herb-infused Italian flatbread" },
      { title: "Bread Rolls", price: "₹60", description: "Soft dinner rolls and specialty bread rolls" },
      { title: "Chocolate Chip Cookies", price: "₹70", description: "Classic cookies with chocolate chips" },
      { title: "Brownies", price: "₹90", description: "Rich chocolate brownies with walnuts" },
      { title: "Apple Pie", price: "₹140", description: "Traditional apple pie with cinnamon" },
      { title: "Cheese Cake", price: "₹160", description: "New York style with berry compote" },
      { title: "Donuts", price: "₹80", description: "Glazed, chocolate, or filled donuts" },
    ],
    breakfast: [
      { title: "Full English Breakfast", price: "₹450", description: "Eggs, bacon, sausages, beans, mushrooms, and toast" },
      { title: "Avocado Toast", price: "₹280", description: "Smashed avocado on sourdough with poached egg" },
      { title: "Eggs Benedict", price: "₹320", description: "Poached eggs with hollandaise sauce on English muffin" },
      { title: "Pancakes Stack", price: "₹250", description: "Fluffy pancakes with maple syrup and fresh fruits" },
      { title: "Omelette", price: "₹220", description: "Three-egg omelette with choice of fillings" },
      { title: "Breakfast Burrito", price: "₹280", description: "Eggs, cheese, potatoes, and salsa wrapped in tortilla" },
      { title: "Granola Bowl", price: "₹200", description: "House-made granola with yogurt and seasonal fruits" },
      { title: "French Toast", price: "₹240", description: "Brioche French toast with cinnamon and maple syrup" },
      { title: "Breakfast Sandwich", price: "₹220", description: "Egg, cheese, and bacon on croissant" },
      { title: "Waffles", price: "₹260", description: "Belgian waffles with maple syrup and berries" },
      { title: "Breakfast Pizza", price: "₹300", description: "Eggs, bacon, and cheese on flatbread" },
      { title: "Shakshuka", price: "₹280", description: "Eggs poached in spiced tomato sauce" },
    ],
    main_course: [
      { title: "Grilled Salmon", price: "₹650", description: "Fresh salmon with lemon butter sauce" },
      { title: "Beef Steak", price: "₹750", description: "Premium cut with wine reduction sauce" },
      { title: "Chicken Marsala", price: "₹450", description: "Chicken in Marsala wine sauce with mushrooms" },
      { title: "Vegetable Curry", price: "₹350", description: "Seasonal vegetables in aromatic spices" },
      { title: "Grilled Fish", price: "₹480", description: "Fresh catch of the day with herbs" },
      { title: "Lamb Chops", price: "₹680", description: "Herb-crusted lamb chops with mint sauce" },
      { title: "Vegetable Lasagna", price: "₹380", description: "Layers of pasta, cheese, and vegetables" },
      { title: "Spaghetti Carbonara", price: "₹320", description: "Creamy pasta with bacon and parmesan" },
      { title: "Margherita Pizza", price: "₹350", description: "Classic tomato and mozzarella" },
      { title: "Chicken Burger", price: "₹250", description: "Grilled chicken with special sauce" },
      { title: "Club Sandwich", price: "₹280", description: "Triple-decker with chicken, bacon, and vegetables" },
      { title: "Seafood Pasta", price: "₹420", description: "Fresh seafood in white wine sauce" },
      { title: "Mushroom Risotto", price: "₹350", description: "Creamy arborio rice with wild mushrooms" },
      { title: "BBQ Chicken Pizza", price: "₹400", description: "BBQ sauce, chicken, and red onions" },
      { title: "Veggie Burger", price: "₹220", description: "Plant-based patty with fresh vegetables" },
    ],
    snacks: [
      { title: "Bruschetta", price: "₹180", description: "Toasted bread with fresh tomatoes and basil" },
      { title: "Calamari", price: "₹280", description: "Crispy fried calamari with marinara sauce" },
      { title: "Spring Rolls", price: "₹200", description: "Vegetable spring rolls with sweet chili sauce" },
      { title: "Garlic Bread", price: "₹150", description: "Toasted bread with garlic butter and herbs" },
      { title: "Nachos", price: "₹250", description: "Loaded with cheese, jalapeños, and salsa" },
      { title: "Mozzarella Sticks", price: "₹220", description: "Breaded and fried with marinara sauce" },
      { title: "Hummus Platter", price: "₹200", description: "House-made hummus with pita bread" },
      { title: "French Fries", price: "₹150", description: "Crispy seasoned fries" },
      { title: "Onion Rings", price: "₹180", description: "Crispy battered onion rings" },
      { title: "Chicken Wings", price: "₹300", description: "Spicy or BBQ glazed wings" },
      { title: "Potato Wedges", price: "₹160", description: "Seasoned potato wedges with dip" },
      { title: "Cheese Platter", price: "₹350", description: "Selection of artisanal cheeses" },
    ],
    desserts: [
      { title: "Tiramisu", price: "₹220", description: "Classic Italian dessert with coffee and mascarpone" },
      { title: "Chocolate Cake", price: "₹200", description: "Rich chocolate cake with ganache" },
      { title: "Cheesecake", price: "₹240", description: "New York style with berry compote" },
      { title: "Crème Brûlée", price: "₹260", description: "Classic French vanilla custard" },
      { title: "Ice Cream", price: "₹180", description: "Selection of house-made ice creams" },
      { title: "Apple Pie", price: "₹220", description: "Warm apple pie with vanilla ice cream" },
      { title: "Chocolate Mousse", price: "₹200", description: "Rich chocolate mousse with berries" },
      { title: "Fruit Tart", price: "₹240", description: "Pastry with custard and fresh fruits" },
      { title: "Panna Cotta", price: "₹220", description: "Italian cream dessert with berry sauce" },
      { title: "Chocolate Fondant", price: "₹260", description: "Warm chocolate cake with molten center" },
    ],
    beverages: [
      { title: "Specialty Coffee", price: "₹120", description: "Espresso, cappuccino, latte, or americano" },
      { title: "Fresh Juices", price: "₹150", description: "Orange, watermelon, or mixed fruit" },
      { title: "Smoothies", price: "₹180", description: "Berry blast, tropical, or green smoothie" },
      { title: "Milkshakes", price: "₹200", description: "Chocolate, vanilla, or strawberry" },
      { title: "Hot Chocolate", price: "₹160", description: "Rich chocolate with whipped cream" },
      { title: "Iced Tea", price: "₹100", description: "Fresh brewed with lemon" },
      { title: "Fresh Lemonade", price: "₹120", description: "House-made with mint" },
      { title: "Mocktails", price: "₹180", description: "Virgin mojito, pina colada, or fruit punch" },
      { title: "Mineral Water", price: "₹60", description: "Sparkling or still" },
      { title: "Fresh Coconut Water", price: "₹100", description: "Served in coconut shell" },
    ],
  };

  let yPosition = 40;

  // Add each category and its items
  categories.forEach((category) => {
    // Add category title
    doc.setFontSize(16);
    doc.setTextColor(11, 27, 60); // #0b1b3c
    doc.text(category.name, 14, yPosition);
    yPosition += 10;

    // Add items table
    const items = menuItems[category.id];
    const tableData = items.map(item => [
      item.title,
      item.description,
      item.price
    ]);

    doc.autoTable({
      startY: yPosition,
      head: [['Item', 'Description', 'Price']],
      body: tableData,
      theme: 'grid',
      headStyles: {
        fillColor: [192, 138, 100], // #c08a64
        textColor: [255, 255, 255],
        fontStyle: 'bold'
      },
      styles: {
        fontSize: 10,
        cellPadding: 5,
      },
      columnStyles: {
        0: { cellWidth: 60 },
        1: { cellWidth: 100 },
        2: { cellWidth: 30, halign: 'right' }
      }
    });

    yPosition = doc.lastAutoTable.finalY + 10;

    // Add new page if needed
    if (yPosition > 250) {
      doc.addPage();
      yPosition = 20;
    }
  });

  // Add footer
  const pageCount = doc.internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(10);
    doc.setTextColor(128, 128, 128);
    doc.text(
      'Aureo - Culinary Excellence',
      doc.internal.pageSize.width / 2,
      doc.internal.pageSize.height - 10,
      { align: 'center' }
    );
  }

  // Save the PDF
  doc.save('aureo-menu.pdf');
};

export default generateMenuPDF; 