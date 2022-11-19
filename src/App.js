
import { useState } from 'react';
import './App.css';
import Menu from './components/Menu';
import Categories from './components/Categories';
import data  from './components/data';

const allCategories = ['all',...new Set(data.map((item)=>item.category))]
console.log(allCategories,"allCategories")

function App() {
const [menuItems,setMenuItems] = useState(data)
const [categories,setCategories]=useState(allCategories);

const filterItems = (category)=>{
  
    if(category ==='all'){
        setMenuItems(data);
        return;
    }
const newItems = data.filter(item=>item.category===category);
setMenuItems(newItems)
}
return (
<div>
<main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>    
</div>
)

}

export default App;
