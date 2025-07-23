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
import { useTranslations } from "next-intl";

const Sidebar = ({ drawerOpen, handleSignOut }) => {
  const [selectedTab, setSelectedTab] = useState("Dashboard");

  const  t = useTranslations("admin_dashboard.sidebar")

  const router = useRouter();
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    let route;
    switch (tab) {
      case t("0"):
        route = "/admin/dashboard";
        break;
      case t("1"):
        route = "/admin/booking";
        break;
      case t("2"):
        route = "/admin/fleetpro";
        break;
      case t("3"):
        route = "/admin/othervehicles";
        break;
      case t("4"):
        route = "/admin/shop";
        break;
      case t("5"):
        route = "/admin/package-management";
        break;
      case t("6"):
        route = "/admin/coupons";
        break;
      default:
        route = "/admin";
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
                { text: t("0"), icon: <HomeIcon /> },
                { text: t("1"), icon: <EventIcon /> },
                { text: t("2"), icon: <DirectionsCarIcon /> },
                { text: t("3"), icon: <DirectionsBoatIcon /> },
                { text: t("4"), icon: <StoreIcon /> },
                { text: t("5"), icon: <PackageIcon /> },
                { text: t("6"), icon: <LocalActivityIcon /> },
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