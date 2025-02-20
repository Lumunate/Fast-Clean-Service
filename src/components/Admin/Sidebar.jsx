import {Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import EventIcon from "@mui/icons-material/Event";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import StoreIcon from "@mui/icons-material/Store";
import LogoutIcon from "@mui/icons-material/Logout";
import PackageIcon from "@mui/icons-material/Category";
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import {useState} from 'react';
import { useRouter } from "next/navigation";

const Sidebar = ({ drawerOpen, handleSignOut }) => {
  const [selectedTab, setSelectedTab] = useState("Dashboard");

  const router = useRouter();
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    let route;
    switch (tab) {
      case "Dashboard":
        route = "/en/admin/dashboard";
        break;
      case "Bookings":
        route = "/en/admin/booking";
        break;
      case "FleetCare Pro":
        route = "/en/admin/fleetpro";
        break;
      case "Other Vehicles Management":
        route = "/en/admin/othervehicles";
        break;
      case "Shop Management":
        route = "/en/admin/shop";
        break;
      case "Package Management":
        route = "/en/admin/package-management";
        break;
      case "Coupon Management":
        route = "/en/admin/coupons";
        break;
      default:
        route = "/en/admin";
        break;
    }

    router.push(route);
  };

  return (
      <Drawer
          variant="permanent"
          open={drawerOpen}
          sx={{
            width: drawerOpen ? 240 : 60,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerOpen ? 240 : 60,
              boxSizing: "border-box",
              transition: "width 0.3s ease",
              overflowX: "hidden",
              zIndex: 1101,
            },
          }}
      >
        <Toolbar />
        <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
          <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
            <List>
              {[
                { text: "Dashboard", icon: <HomeIcon /> },
                { text: "Bookings", icon: <EventIcon /> },
                { text: "FleetCare Pro", icon: <DirectionsCarIcon /> },
                { text: "Other Vehicles Management", icon: <DirectionsBoatIcon /> },
                { text: "Shop Management", icon: <StoreIcon /> },
                { text: "Package Management", icon: <PackageIcon /> },
                { text: "Coupon Management", icon: <LocalActivityIcon /> },
              ].map((item) => (
                  <ListItem
                      button
                      key={item.text}
                      onClick={() => handleTabClick(item.text)}
                      sx={{
                        borderRadius: "8px",
                        backgroundColor: selectedTab === item.text ? "rgba(0, 0, 255, 0.1)" : "transparent",
                        "&:hover": {
                          backgroundColor: "rgba(0, 0, 255, 0.1)",
                        },
                        borderLeft: selectedTab === item.text ? "4px solid blue" : "none",
                        marginBottom: 1,
                        justifyContent: drawerOpen ? "flex-start" : "center",
                      }}
                  >
                    <ListItemIcon
                        sx={{
                          color: selectedTab === item.text ? "blue" : "inherit",
                          justifyContent: "center",
                          minWidth: drawerOpen ? "auto" : "unset",
                          marginRight: drawerOpen ? 2 : 0,
                        }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    {drawerOpen && <ListItemText primary={item.text} sx={{ fontSize: "1.2rem", fontWeight: 600 }} />}
                  </ListItem>
              ))}
            </List>
          </Box>
          <Divider sx={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }} />
          <Box sx={{ mt: 2 }}>
            <ListItem
                button
                onClick={() => handleSignOut()}
                sx={{
                  borderRadius: "8px",
                  backgroundColor: selectedTab === "Logout" ? "rgba(0, 0, 255, 0.1)" : "transparent",
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 255, 0.1)",
                  },
                  justifyContent: drawerOpen ? "flex-start" : "center",
                }}
            >
              <ListItemIcon
                  sx={{
                    color: selectedTab === "Logout" ? "blue" : "inherit",
                    justifyContent: "center",
                    minWidth: drawerOpen ? "auto" : "unset",
                    marginRight: drawerOpen ? 2 : 0,
                  }}
              >
                <LogoutIcon />
              </ListItemIcon>
              {drawerOpen && <ListItemText primary="Logout" sx={{ fontSize: "1.2rem", fontWeight: 600 }} />}
            </ListItem>
          </Box>
        </Box>
      </Drawer>
  );
};

export default Sidebar;