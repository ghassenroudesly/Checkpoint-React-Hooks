import React from 'react'
import { Form } from 'react-bootstrap'

import './FilterByTitle.css'

const FilterByTitle = ({ title, setTitle }) => {


    const handleChangeSearch = (e) => {
        setTitle(e.target.value)
    }

    return (
        <div>
            <Form.Control type="text"
                className="inputFilter"
                onChange={handleChangeSearch}
                value={title}
                placeholder="Enter movie title ..." />

        </div>
    )
}

export default FilterByTitle
