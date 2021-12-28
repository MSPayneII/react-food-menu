import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

// necessary to make the category filter buttons dynamic. The allCategories variable will hold a list of unique categories in the items data. Use "Set" to get unique categories.
const allCategories = ["All", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "All") {
      setMenuItems(items);
      return;
    } else {
      const newItems = items.filter((item) => item.category === category);
      setMenuItems(newItems);
    }
  };

  return (
    <main className="section">
      <section className="menu section">
        <section className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </section>

        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
