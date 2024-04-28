import React, { useEffect, useState } from 'react'
import { listEmployees } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom';

const ListEmployeeComponent = () => {
    // const dummyData = [
    //     {
    //         "id" : 1,
    //         "firstName" : "Randika",
    //         "lastName" :  "Mahadurage",
    //         "email" : "randikaisuru@gmail.com"
    //     },
    //     {
    //         "id" : 2,
    //         "firstName" : "Isuru",
    //         "lastName" :  "Vijayanga",
    //         "email" : "randikaisuru.research@gmail.com"
    //     },
    //     {
    //         "id" : 3,
    //         "firstName" : "Chamindri",
    //         "lastName" :  "Witharanage",
    //         "email" : "chamindri95@gmail.com"
    //     }
    // ]

    const navigator = useNavigate()

    const[employees, setEmployees] = useState([]);

    useEffect(() => {
        listEmployees()
        .then((response) => {
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        })
    }, []);

    const addNewEmployee = () => {
        navigator('/add-employee');
    }

  return (
    <div className='container'>
        <h2 className='text-center'>List of Employees</h2>
        <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(employee =>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent