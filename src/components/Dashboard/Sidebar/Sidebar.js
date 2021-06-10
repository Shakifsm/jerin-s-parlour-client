import React from 'react';
import "./Sidebar.css"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripHorizontal, faHome, faCalendar, faCommentAlt, faUserPlus, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 p-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard" className="link">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="link">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                <div>
                    <li>
                        <Link to="/addService" className="link" >
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Add Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addtestimonial" className="link">
                            <FontAwesomeIcon icon={faCommentAlt} /> <span>Review</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/allAppointmets" className="link">
                            <FontAwesomeIcon icon={faCalendar} /> <span>Appointments</span>
                        </Link>
                    </li>
                </div>
            </ul>
            <div>
                <Link to="/" className="link"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;