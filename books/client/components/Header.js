import {
  AddShoppingCart,
  Dashboard,
  ExpandLess,
  ExpandMore,
  Home,
  People,
  PeopleAlt,
  Receipt,
  ReceiptLong,
  ShoppingBag,
  ShoppingCart,
  StarBorder,
} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { Collapse, Link, ListItemButton } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import SettingsApplicationsSharpIcon from '@mui/icons-material/SettingsApplicationsSharp';
import HelpCenterSharpIcon from '@mui/icons-material/HelpCenterSharp';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import PaymentIcon from '@mui/icons-material/Payment';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import Button from '@mui/material/Button';
import { useRouter } from "next/router";


import {signout} from '../services/Auth'
import * as React from "react";

const drawerWidth = 200;

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [openItem, setOpenItem] = React.useState(false);
  const [openSales, setOpenSales] = React.useState(false);
  const [openPurchases, setOpenPurchases] = React.useState(false);
  const router = useRouter()


  const handleClose = () => {
    signout(()=>{
      router.push('/')
    })
  };

  const handleClickItems = () => {
    setOpenItem(!openItem);
  };
  const handleClickSales = () => {
    setOpenSales(!openSales);
  };
  const handleClickPurchases = () => {
    setOpenPurchases(!openPurchases);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem button component={Link} href="/dashboard">
          <ListItemIcon>
            <Dashboard />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItemButton onClick={handleClickItems}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Items" />
          {openItem ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openItem} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }} component={Link} href="/items">
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Items" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
      <ListItem button component={Link} href="/banking">
        <ListItemIcon>
          <Home />
        </ListItemIcon>
        <ListItemText primary="Banking" />
      </ListItem>
      <Divider />
      <List>
        <ListItemButton onClick={handleClickSales}>
          <ListItemIcon>
            <ShoppingCart />
          </ListItemIcon>
          <ListItemText primary="Sales" />
          {openSales ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openSales} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }} component={Link} href="/customer">
              <ListItemIcon>
                <PeopleAlt />
              </ListItemIcon>
              <ListItemText primary="Customers" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} component={Link} href="/estimate">
              <ListItemIcon>
                <Receipt />
              </ListItemIcon>
              <ListItemText primary="Estimates" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} component={Link} href="/sales">
              <ListItemIcon>
                <AddShoppingCart />
              </ListItemIcon>
              <ListItemText primary="Sale Orders" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} component={Link} href="/invoices">
              <ListItemIcon>
                <ReceiptLong />
              </ListItemIcon>
              <ListItemText primary="Invoices" />
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              component={Link}
              href="/paymentrecived"
            >
            <PaymentIcon />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ListItemText primary=" Payment Recived" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton onClick={handleClickPurchases}>
          <ListItemIcon>
            <ShoppingBag />
          </ListItemIcon>
          <ListItemText primary="Purchases" />
          {openPurchases ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openPurchases} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }} component={Link} href="/vendor">
              <ListItemIcon>
                <People />
              </ListItemIcon>
              <ListItemText primary="Vendors" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} component={Link} href="/purchase">
              <ListItemIcon>
                <Receipt />
              </ListItemIcon>
              <ListItemText primary="Purchase Orders" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} component={Link} href="/paymentmade">
            <LocalAtmIcon/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ListItemText primary="Payment Made" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;







  return (
    

  <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        style={{ backgroundColor: "#f7f7f7" }}
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          height: "60px",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon style={{ color: "black" }}/>
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            style={{ color: "black" }}
          >
            Zoho Books
          </Typography>
        
        
      <div class="input-group rounded" style={{width:"35%",marginLeft:"20px"}}>
  <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
  aria-describedby="search-addon" />
  <span class="input-group-text ">
    <SearchOutlinedIcon style={{ color: "black",height:"16px",width:"18px"}} />
  </span>
</div>
          <Typography
            variant="h6"
            noWrap
            component="div"
            style={{ color: "black",marginLeft:"100px",fontSize:"18px",fontFamily:"fantasy"}}
      >
           Trial expires in 8 days
          </Typography>
          &nbsp;&nbsp;
           <CircleNotificationsIcon style={{ color: "black" ,marginLeft:"60px"}}/>
           &nbsp;&nbsp;
          <SettingsApplicationsSharpIcon style={{ color: "black" }}/>
          &nbsp;&nbsp;
          <HelpCenterSharpIcon style={{ color: "black" }}/>
          &nbsp;&nbsp;
          <PersonSharpIcon style={{ color: "black" }}/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button onClick={handleClose} href="" style={{padding:'2px 10px', borderRadius:'6px', textTransform:'none', background:'#008ae6', color:'#ffffff'}}>
            <b>LogOut</b>
          </Button>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
      <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 150,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
        </Box> 


       
  );
}

export default Header;