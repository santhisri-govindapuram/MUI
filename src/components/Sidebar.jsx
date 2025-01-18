import React from "react";
import { Box, Switch } from "@mui/material";
import { Group, Home, ModeNight, Pages, Settings, Storefront } from "@mui/icons-material";
import { ListItem, ListItemIcon, ListItemButton, List, ListItemText } from "@mui/material";

const Sidebar = ({mode,setMode}) => {
    return (
        <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
            <Box position="fixed">
            <List>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#home">
                        <ListItemIcon>
                            <Home />
                        </ListItemIcon>
                        <ListItemText primary="Homepage" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#Pages">
                        <ListItemIcon>
                            <Pages />
                        </ListItemIcon>
                        <ListItemText primary="Pages" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#grp">
                        <ListItemIcon>
                            <Group />
                        </ListItemIcon>
                        <ListItemText primary="Groups" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#">
                        <ListItemIcon>
                            <Storefront />
                        </ListItemIcon>
                        <ListItemText primary="MarketPlace" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#settins">
                        <ListItemIcon>
                            <Settings />
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#dark-mode">
                        <ListItemIcon>
                            <ModeNight />
                        </ListItemIcon>
                        <Switch onChange={e=>setMode(mode === "light" ? "dark":"light" )} />
                    </ListItemButton>
                </ListItem>
            </List>
            </Box>
            
        </Box>
    )
}

export default Sidebar