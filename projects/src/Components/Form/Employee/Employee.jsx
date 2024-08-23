import React, { useEffect, useState } from 'react'
import employeeImage from './employee_img.jpg'

function Employee({employeeList}) {

    const [employee, setEmployee] = useState('')
    const [isSelected, setIseSelected] = useState(false)

    useEffect(() => {
        //check props is working
    }, [])


    const selectEmployee = (index) =>{
        console.log(employeeList[index])
        console.log(employeeList[index].email)
        setEmployee(employeeList[index])
        setIseSelected(true)
    }


  return (
            <div className="card mb-3" style={{maxwidth: "540px"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={employeeImage} alt=""  className="img-fluid rounded-start" style={{maxHeight: '200px'}}/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{employee.firstname} {employee.lastname}</h5>
                        <p className="card-text">The following employee has been hired as a "to be dited". Please review contract application for starting date.</p>
                        {isSelected ? (
                            <ul>
                                <li><strong>Email:</strong> {employee.email}</li>
                                <li><strong>Phone:</strong> {employee.phone}</li>
                                <li><strong>Country:</strong> {employee.address.country}</li>
                            </ul>
                        ) : (
                            <p></p>
                        )}

                        <div className="dropdown mt-3">
                            <button className="btn btn-primary dropdown-toggle me-5" data-bs-toggle="dropdown">Employee</button>
                            <ul className="dropdown-menu" >
                                {employeeList.map((employee, index) => (
                                    <React.Fragment key={employee.id}>
                                        <li className="dropdown-item" onClick={() => selectEmployee(index)}>
                                        <strong>{employee.id}</strong> - {employee.firstname}
                                        
                                        </li>
                                        {index < employeeList.length - 1 &&
                                            <li><hr className='dropdown-divider'/></li>}
                                    </React.Fragment>
                                ))}
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }

export default Employee
