import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        // console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories(categ => [inputValue, ...categ]);
            // console.log('Submit hecho');
            setInputValue('');
        }


    }

    return (
        <form onSubmit={handleSubmit}>
            {/* <h2>Add Category</h2> */}
            {/* <h1> { inputValue } </h1> */}
            <input
                type='text'
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
