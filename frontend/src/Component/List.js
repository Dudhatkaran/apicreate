import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const List = () => {
    const [allData, setAllData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            fetch('http://localhost:1111/api/list-data')
                .then(res => res.json())
                .then((data) => {
                    setAllData(data)
                })
                .catch(err => console.log('err::: ', err))
        }
        getData()
    }, [])

    const deleteData = async (id) => {
        fetch(`http://localhost:1111/api/delete-data${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then((data) => {
                if (data.message === "The data was removed") {
                    setAllData(allData.filter((ele, index) => ele._id !== id))
                }
            })
            .catch(err => console.log('err::: ', err))
        console.log('allData::: ', allData);
    }

    return (
        <>
            <div className="container-md w-50 card mt-4">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            allData.map((ele, index) => (
                                <tr key={ ele._id }>
                                    <th scope="row">{ index + 1 }</th>
                                    <td>{ ele.name }</td>
                                    <td>{ ele.email }</td>
                                    <td>{ ele.password }</td>
                                    <td>
                                        <div>
                                            <Link to={ `/edit/${ele._id}` }>
                                                <button className='btn btn-info me-2'>Edit</button>
                                            </Link>
                                            <button onClick={ () => deleteData(ele._id) } className='btn btn-danger'>Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>

                </table>
            </div>
        </>
    )
}

export default List