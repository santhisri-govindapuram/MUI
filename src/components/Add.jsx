import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography, styled } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from "react";
import { DateRange, EmojiEmotions, PersonAdd, VideoCameraBack } from "@mui/icons-material";


const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
})

const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
})

const Add = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <Tooltip onClick={e => setOpen(true)} title="Delete" sx={{ position: "fixed", bottom: 20 }}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={e => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box bgcolor={"background.default"} color={"text.primary"} width={400} height={280} p={3} borderRadius={5}>
                    <Typography variant="h6" color="gray" textAlign="center">Create Post</Typography>
                    <UserBox>
                        <Avatar sx={{ width: 30, height: 30 }}
                            src="https://mui.com/static/images/avatar/3.jpg"
                            alt="Cindy Baker" />
                        <Typography variant="span" >madhu</Typography>
                    </UserBox>
                    <TextField sx={{ width: "100%" }}
                        id="standard-multiline-static"
                        multiline
                        rows={3}
                        placeholder="what's on your mind?"
                        variant="standard"
                    />
                    <Stack direction="row" gap={1} mt={2} mb={2}>
                        <EmojiEmotions color="primar" />
                        <PersonAdd color="secondary" />
                        <VideoCameraBack color="success" />
                    </Stack>
                    <ButtonGroup fullWidth variant="contained" aria-label="Basic button group">
                        <Button>Post</Button>
                        <Button sx={{width:"100px"}}><DateRange/></Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </div>
    )
}

export default Add;