import { Pets, Mail, Notifications,} from "@mui/icons-material";
import { AppBar, Toolbar, Typography, styled, Box, InputBase, Avatar } from "@mui/material";
import imageSrc from "./Aliya photo.jpg"
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { React, useState } from "react";

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}));

const Icons = styled(Box)(({ theme }) => ({
    // backgroundColor: "white",
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "flex",
    }
}));

const UserBox = styled(Box)(({ theme }) => ({
    // backgroundColor: "white",
    display: "flex",
    gap: "10px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "none",
    }

}));
const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>Santhi</Typography>
                <Pets sx={{ display: { xs: "block", sm: "none" } }}></Pets>
                <Search><InputBase placeholder="Search..." /></Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={2} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar sx={{ width: 30, height: 30 }} src={imageSrc} onClick={e => setOpen(true)} />

                </Icons>
                <UserBox onClick={e => setOpen(true)}>
                    <Avatar sx={{ width: 30, height: 30 }} src={imageSrc} />
                    <Typography variant="span">john</Typography>
                </UserBox>
                <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    open={open}
                    onClose={e => setOpen(false)}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >
                    <MenuItem >Profile</MenuItem>
                    <MenuItem >My account</MenuItem>
                    <MenuItem >Logout</MenuItem>
                </Menu>
            </StyledToolbar>
        </AppBar>
    );
};

export default Navbar