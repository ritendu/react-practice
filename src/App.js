import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import data from './components/data'


function App() {
    const [people,setPeople] = useState(data)
    console.log(people,"<-----------")
   return (
<section className='section'>
<div className="title">
<h2>
    <span>/</span>reviews
</h2>
</div>
<div className='section-center'>
    {people.map((person,personIndex)=>{
        const {id,image,name,title,quote} = person
        return <article key={id}>
<img src={image} alt={name} className="person-img"/>
<h4>{name}</h4>
<p className='title'>{title}</p>
<p className='text'>{quote}</p>
<FaQuoteRight />
        </article>
    })}
    <button className='prev'><FiChevronLeft></FiChevronLeft></button>
    <button className='next'><FiChevronRight></FiChevronRight></button>
</div>
</section>   
   )
 }

export default App;
