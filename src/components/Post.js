import React from "react";

import {
  Paper,
  Typography,
  Grid,
  Container,
  Box,
  IconButton,
  Menu,
  MenuItem
} from "@mui/material";
import MoreVertSharpIcon from "@mui/icons-material/MoreVertSharp";

const Post = ({ title, topic, content, comments }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container sx={{ mb: 1, padding: 0 }}>
      <Box as="a" href="/post" sx={{ padding: 0, textDecoration: "none" }}>
        <Paper variant="outlined" sx={{ padding: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={16}>
              <Box
                sx={{ display: "flex", height: "100%" }}
                alignItems="center"
                justifyContent="center"
              >
                <Typography variant="h6" align="center">
                  {title}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{ display: "flex", height: "100%" }}
                alignItems="center"
                justifyContent="center"
              >
                <Typography align="center">{topic}</Typography>
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box
                sx={{ display: "flex", height: "100%" }}
                alignItems="center"
                justifyContent="center"
              >
                <IconButton onClick={handleClick}>
                  <MoreVertSharpIcon sx={{ verticalAlign: "middle" }} />
                </IconButton>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Excluir postagem</MenuItem>
                  {/* <MenuItem onClick={handleClose}>Excluir postagem</MenuItem> */}
                </Menu>
              </Box>
            </Grid>
            <Grid item xs={24}>
              <Typography align="justify">{content}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography align="left">Comentários: {comments}</Typography>
            </Grid>
            <Grid item xs={12} align="right">
              <Typography as="a" href="/">
                Comentar
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
};

export default Post;
