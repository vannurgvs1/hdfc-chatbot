import {
    AppstoreOutlined,
    ShopOutlined,
    ShoppingCartOutlined,
    UserOutlined,
} from "@ant-design/icons";
import {Menu, SubMenuProps} from "antd";
import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";

function SideMenu() {
    const location = useLocation();
    const [selectedKeys, setSelectedKeys] = useState("/");
    const [activePath, setActivePath] = useState();

    useEffect(() => {
        const pathName = location.pathname;
        const activeArr = pathName.split("/");
        setSelectedKeys(pathName);
        setActivePath(activeArr[1]);
    }, [location.pathname]);
    console.log(activePath)
    const navigate = useNavigate();
    return (
        <div className="SideMenu">
            {activePath === "dashboard" && (<Menu
                className="SideMenuVertical"
                mode="vertical"
                onClick={(item) => {
                    //item.key
                    navigate(item.key);
                }}
                selectedKeys={[selectedKeys]}
                items={[
                    {
                        label: "Account Summary",
                        icon: <AppstoreOutlined/>,
                        key: "/dashboard/account",
                    }
               ]}
            ></Menu>)}
        </div>
    );
}

export default SideMenu;
