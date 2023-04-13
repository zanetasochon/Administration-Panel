import { pages } from "@/utils/routing";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { StyledLink, SidebarInnerStyled } from "./navbar.styled";
interface SidebarProps {
  handleDrawerToggle?: () => void;
  isMobileOpen: boolean;
  drawerWidth: number;
}

interface MenuItemProps {
  url: string;
  name: string;
  onClickEvt?: () => void;
  sxProps?: {
    display: {
      xs: string;
      sm: string;
    };
  };
}

const MenuItem = ({ url, name, onClickEvt, sxProps }: MenuItemProps) => {
  return (
    <ListItem disablePadding sx={sxProps}>
      <StyledLink href={url}>
        <ListItemButton onClick={onClickEvt}>
          <ListItemText
            primary={name}
            sx={{ whiteSpace: "nowrap", textTransform: "uppercase" }}
          />
        </ListItemButton>
      </StyledLink>
    </ListItem>
  );
};

export const SidebarInner = ({ onNavbar }) => {
  return (
    <SidebarInnerStyled>
      <Divider />
      <List
        sx={{ textDecoration: "none", display: onNavbar ? "flex" : "block" }}
      >
        {Object.values(pages).map(({ name, url }) => (
          <MenuItem
            key={url}
            sxProps={undefined}
            url={url}
            name={name}
            onClickEvt={undefined}
          />
        ))}
      </List>
    </SidebarInnerStyled>
  );
};

const Sidebar = (props: SidebarProps) => {
  const { drawerWidth, handleDrawerToggle, isMobileOpen } = props;

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
          display: { xs: "none", sm: "none" },
        }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={isMobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <SidebarInner onNavbar={false}/>
        </Drawer>
      </Box>
    </Box>
  );
};

export { Sidebar };
