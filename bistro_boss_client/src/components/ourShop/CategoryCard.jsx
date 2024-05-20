import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";
import OrderTab from "../../pages/shared/OrderTab";
import { useParams } from "react-router-dom";

const CategoryCard = () => {
  const categories = ["salad", "dessert", "pizza", "soup", "drinks"];
  const [menu] = useMenu();
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const dessert = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <main className="flex items-center justify-center">
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="flex items-center justify-center gap-8 mb-4 ">
          <Tab className="uppercase font-cinzel hover:cursor-pointer text-xl font-bold text-black">
            Salad
          </Tab>
          <Tab className="uppercase font-cinzel hover:cursor-pointer text-xl font-bold text-black">
            Dessert
          </Tab>
          <Tab className="uppercase font-cinzel hover:cursor-pointer text-xl font-bold text-black">
            Pizza
          </Tab>
          <Tab className="uppercase font-cinzel hover:cursor-pointer text-xl font-bold text-black">
            Soup
          </Tab>
          <Tab className="uppercase font-cinzel hover:cursor-pointer text-xl font-bold text-black">
            Drinks
          </Tab>
        </TabList>

        <TabPanel>
          <OrderTab items={salad} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={dessert} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks} />
        </TabPanel>
      </Tabs>
    </main>
  );
};

export default CategoryCard;
