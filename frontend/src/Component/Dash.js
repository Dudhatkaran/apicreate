import React from 'react'
import { Link } from 'react-router-dom'

const Dash = () => {
    return (
        <div>
            <Link to={ '/add' }>
                <button className='btn btn-primary m-5'>Add Data</button>
            </Link>
            <Link to={ '/list' }>
                <button className='btn btn-info m-5'>List Data</button>
            </Link>
        </div>
    )
}

export default Dash