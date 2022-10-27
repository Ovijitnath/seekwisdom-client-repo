import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Courses = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/catagories')
        .then(res => res.json())
        .then(data=>setCategories(data));
    },[])


    return (
        <div>
            <h1>Total Courses:{categories.length} </h1>

            <div>
            {
                categories.map(category=><p key={category.id}>
                    <Link to={`/category/${category.id}`}> {category.name}</Link></p>)
            }
            </div>
        </div>
    );
};

export default Courses;