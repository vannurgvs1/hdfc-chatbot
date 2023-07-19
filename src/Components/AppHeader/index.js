import {Badge, Radio, Button, Divider, Drawer, Image, List, Row, Space, Tabs, Typography} from "antd";
import {useEffect, useRef, useState} from "react";
import logo from "../../assets/images/logo.png"
import {useNavigate} from "react-router-dom";
import "./styles.css";
import {Link} from "react-router-dom";
import {
    UserOutlined,
} from "@ant-design/icons";
import Modal from 'react-bootstrap/Modal';

const AppHeader = ({isLogin, setLogin}) => {

    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const onClick = () => setIsActive(!isActive)
    const [size, setSize] = useState('large'); // default is 'middle'
    // const [useRoleH, setUserRoleH] = useState("");

    const navigate = useNavigate();

    const logout = (e) => {
        setLogin(false);
        localStorage.removeItem("userRole");
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        localStorage.removeItem("closBalance");
        localStorage.removeItem("accNumber");
        navigate("/");
    };

    // useEffect(() => {
    //     let role = localStorage.getItem("userRole");
    //     setUserRoleH(role);
    // }, []);
    // console.log(useRoleH)
    return (
        <div className="AppHeader">
            <Image
                width="15%"
                height="40"
                src={logo}
            ></Image>
            {isLogin ? (
                <>
                    {" "}
                    <Space>
                        <div className="menu-container">
                            <button onClick={onClick} className="menu-trigger">
                                <span>{localStorage.getItem("userRole")}</span>
                                <UserOutlined style={{fontSize: '30px', color: '#08c'}}/>
                            </button>
                            <nav
                                ref={dropdownRef}
                                className={`menu ${isActive ? "active" : "inactive"}`}
                            >
                                <ul>
                                    <li>
                                        <a key={1} href="#" onClick={() => setModalShow(true)}>Profile</a>
                                    </li>
                                    <li>
                                        <a key={2} href="#" onClick={logout}>Logout</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                    </Space>
                </>
            ) : null}
        </div>

    );
}

function MyVerticallyCenteredModal(props) {
    const userDetails = JSON.parse(localStorage.getItem("userDetails"));
    console.log(userDetails, "userDetails");
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Profile
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="container emp-profile">
                    <form method="post">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="profile-img">
                                    {/*<a href="https://pixlok.com/images/default-user-profile-icon-png-image-free-download/">House photo created by Search png - www.pixlok.com</a>*/}
                                    <img
                                        src="https://pixlok.com/wp-content/uploads/2021/03/default-user-profile-picture.jpg"
                                        alt=""/>
                                    {/*<div className="file btn btn-lg btn-primary">*/}
                                    {/*    Change Photo*/}
                                    {/*    <input type="file" name="file"/>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="profile-head">
                                    {/* <h5>
                                        {localStorage.getItem("userRole")}
                                    </h5>
                                    <h6>
                                        {userDetails.user.accessType}
                                    </h6> */}
                                    {/*<p className="proile-rating">RANKINGS : <span>8/10</span></p>*/}
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home"
                                               role="tab" aria-controls="home" aria-selected="true">About</a>
                                        </li>
                                        {/*<li className="nav-item">*/}
                                        {/*    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile"*/}
                                        {/*       role="tab" aria-controls="profile" aria-selected="false">Timeline</a>*/}
                                        {/*</li>*/}
                                    </ul>
                                </div>
                            </div>
                            {/*<div className="col-md-2">*/}
                            {/*    <input type="submit" className="profile-edit-btn" name="btnAddMore"*/}
                            {/*           value="Edit Profile"/>*/}
                            {/*</div>*/}
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="profile-work">
                                    {/*<p>Welcome</p>*/}
                                    {/*<a href="">Website Link</a><br/>*/}
                                    {/*<a href="">Bootsnipp Profile</a><br/>*/}
                                    {/*<a href="">Bootply Profile</a>*/}
                                    {/*<p>SKILLS</p>*/}
                                    {/*<a href="">Web Designer</a><br/>*/}
                                    {/*<a href="">Web Developer</a><br/>*/}
                                    {/*<a href="">WordPress</a><br/>*/}
                                    {/*<a href="">WooCommerce</a><br/>*/}
                                    {/*<a href="">PHP, .Net</a><br/>*/}
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="tab-content profile-tab" id="myTabContent">
                                    <div className="tab-pane fade show active" id="home" role="tabpanel"
                                         aria-labelledby="home-tab">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>User Id</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p> : {userDetails.user.id}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Name</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p> : {userDetails.user.firstName}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Branch</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p> : {userDetails.user.branch}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p> : {userDetails.user.email}</p>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Phone</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p> : {userDetails.user.mobile}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>City</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p> : {userDetails.user.city}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>State</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p> : {userDetails.user.state}</p>
                                            </div>
                                        </div>



                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Nominee Name</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p> : {userDetails.user.nomineeName}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Nominee DOB</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p> : {userDetails.user.unomineBirDat}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Nominee is Minor</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p> : {userDetails.user.nomineeIsMinor}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Nominee Address</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p> : {userDetails.user.nominAddres}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Relationship</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p> : {userDetails.user.relationship}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AppHeader;
