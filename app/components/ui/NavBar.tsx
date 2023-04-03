import { useContext, useState } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Link,
  Toolbar,
  Typography,
  Badge,
  Input,
  InputAdornment,
} from "@mui/material";
import {
  ClearOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { UiContext } from "@/context";

export const NavBar = () => {
  const { asPath } = useRouter();
  const { toggleSidemenu } = useContext(UiContext);
  const [searchInput, setSearchInput] = useState("");
  const [searchBar, toggleSearchBar] = useState(false);
  const router = useRouter();

  const navigateTo = (url: string) => {
    router.push(url);
  };

  const handleSearch = () => {
    if (searchInput.length === 0) return;
    navigateTo(`/search/${searchInput}`);
    setSearchInput("");
    toggleSearchBar(false);
  };

  return (
    <AppBar>
      <Toolbar>
        <NextLink href="/" passHref>
          <Link display={"flex"} alignItems="center">
            <Typography variant="h6">Testa |</Typography>
            <Typography sx={{ marginLeft: 0.5 }}>Shop</Typography>
          </Link>
        </NextLink>

        <Box flex={1} />

        <Box sx={{ display: searchBar ? "none" : { xs: "none", sm: "block" } }}>
          <NextLink href={"/category/men"} passHref>
            <Link>
              <Button color={asPath === "/category/men" ? "primary" : "info"}>
                Men
              </Button>
            </Link>
          </NextLink>
          <NextLink href={"/category/women"} passHref>
            <Link>
              <Button color={asPath === "/category/women" ? "primary" : "info"}>
                Women
              </Button>
            </Link>
          </NextLink>
          <NextLink href={"/category/kids"} passHref>
            <Link>
              <Button color={asPath === "/category/kids" ? "primary" : "info"}>
                Kids
              </Button>
            </Link>
          </NextLink>
        </Box>

        <Box flex={1} />

        <IconButton
          sx={{ display: { xs: "flex", sm: "none" } }}
          onClick={toggleSidemenu}
        >
          <SearchOutlined />
        </IconButton>

        {searchBar ? (
          <Input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyPress={(e) => (e.key === "Enter" ? handleSearch() : null)}
            type="text"
            placeholder="Search..."
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => {
                    toggleSearchBar(false);
                    setSearchInput("");
                  }}
                >
                  <ClearOutlined />
                </IconButton>
              </InputAdornment>
            }
          />
        ) : (
          <IconButton
            sx={{ display: { xs: "none", sm: "flex" } }}
            onClick={() => toggleSearchBar(true)}
          >
            <SearchOutlined />
          </IconButton>
        )}

        <NextLink href={"/cart"} passHref>
          <Link>
            <IconButton>
              <Badge badgeContent={2} color="secondary">
                <ShoppingCartOutlined />
              </Badge>
            </IconButton>
          </Link>
        </NextLink>

        <Button onClick={toggleSidemenu}>Menu</Button>
      </Toolbar>
    </AppBar>
  );
};
