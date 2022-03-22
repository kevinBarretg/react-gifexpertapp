import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch'])

    // const handleAdd = () => {

    //     // setCategories([...categories, 'Hunter X Hunter']);
    //     setCategories(categ => [...categories, 'Hunter X Hunter']);
    //     console.log(categories);

    //     // categories.push('Hunter X Hunter');
    //     // console.log(categories);
    // }


    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            {/* <button onClick={handleAdd}>Agregar</button> */}

            <ol>
                {
                    // categories.map(category => {
                    //     return <li key={category}> {category} </li>
                    // })
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
    )
}
