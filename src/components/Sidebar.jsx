import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Login from './Login';
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Dashboard from './Dashboard';


export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(true);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Login'].map((text) => (
          <ListItem key={Login} disablePadding>
              <Login>
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
              </Login>
          </ListItem>
        ))}
      </List>
      {/* <Divider /> */}
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Click Here to Login</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}


// export default function Sidebar() {
//   return (
//     <>
//     <Login />
//     </>
//   )
// }