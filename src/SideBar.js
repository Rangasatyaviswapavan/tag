import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import DataSaverOnOutlinedIcon from '@mui/icons-material/DataSaverOnOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';

function SideBar() {
  const { collapseSidebar } = useProSidebar();

  return (
    <div id="app" style={({ height: "100vh" }, { display: "flex" })}>
      <Sidebar style={{ height: "100vh" }}>
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: "center" }}
          >
            {" "}
            <h2>TAG</h2>
          </MenuItem>

          <MenuItem icon={<HomeOutlinedIcon />}>Home</MenuItem>
          <MenuItem icon={<AccountBalanceOutlinedIcon />}><Link to="/ta">Trading Account</Link></MenuItem>
          <MenuItem icon={<LocalAtmOutlinedIcon />}><Link to="/sub.html">Subscriptions</Link></MenuItem>
          <MenuItem icon={<DataSaverOnOutlinedIcon />}>Watch Lists</MenuItem>
          <MenuItem icon={<InsertChartOutlinedIcon />}>Markets</MenuItem>
          <MenuItem icon={<ContactMailOutlinedIcon />}>Contact Us</MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default SideBar;
