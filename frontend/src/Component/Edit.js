/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Edit = () => {
    const { id } = useParams()
    const [getEdit, setGetEdit] = useState([])

    useEffect(() => {
        const getEditData = async () => {
            fetch(`http://localhost:1111/api/get-edit-data${id}`)
                .then(res => res.json())
                .then((data) => {
                    console.log(data);
                    setGetEdit(data.getdata)
                    // console.log('data.getdata::: ', data.getdata);
                })
                .catch(err => console.log('err::: ', err))
        }
        getEditData()
    }, [])

    const clickToUpdate = async (e) => {
        e.preventDefault()
        fetch(`http://localhost:1111/api/update-data${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                __v: 0,
                _id: id,
                name: e.target.name.value,
                email: e.target.email.value,
                password: e.target.password.value,
            })
        })
            .then(res => res.json())
            .then((data) => {
                console.log('data::: ', data)
            })
            .catch(err => console.log('err::: ', err))
    }

    return (
        <>
            <div className="container-md w-50 card mt-3">
                <form onSubmit={ clickToUpdate }>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input
                            defaultValue={ getEdit.name }
                            name='name'
                            type="text"
                            class="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input
                            defaultValue={ getEdit.email }
                            name='email'
                            type="email"
                            class="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input
                            defaultValue={ getEdit.password }
                            name='password'
                            type="password"
                            class="form-control" required />
                    </div>
                    <button type="submit" class="btn btn-primary mb-3 w-100">Submit</button>
                </form>
                <Link to={ '/' }>
                    <button className='btn btn-secondary w-100'>Cancel</button>
                </Link>
            </div>
        </>
    )
}

export default Edit