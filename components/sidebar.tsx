import NextImage from "next/image";
import NextLink from "next/link";
import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  Center,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/layout";
import { usePlaylist } from "../lib/hooks";
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from "react-icons/md";
import { Key, ReactChild, ReactFragment, ReactPortal } from "react";

const navMenu = [
  {
    name: "Home",
    icon: MdHome,
    route: "/",
  },
  {
    name: "Search",
    icon: MdSearch,
    route: "/search",
  },
  {
    name: "Your Library",
    icon: MdLibraryMusic,
    route: "/library",
  },
];

const musicMenu = [
  {
    name: "Create Playlist",
    icon: MdPlaylistAdd,
    route: "/",
  },
  {
    name: "Favorites",
    icon: MdFavorite,
    route: "/favorites",
  },
];

// const playlists = new Array(30).fill(1).map((_, i) => `Playlist ${i + 1}`);

const Sidebar = () => {
  const { playlists } = usePlaylist();

  return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      bg="black"
      paddingX="5px"
      color="gray"
    >
      <Box paddingY="20px" height="100%">
        <Box width="120xpx" marginBottom="20px" paddingX="20px" paddingY="20px">
          <NextImage src="/logo.jpeg" height={120} width={120} />
        </Box>
        <Box>
          <List spacing={2}>
            {navMenu.map((menu) => (
              <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
                <LinkBox>
                  <NextLink href={menu.route} passHref>
                    <LinkOverlay>
                      <ListIcon
                        as={menu.icon}
                        color="white"
                        marginRight="20px"
                      />
                      {menu.name}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box marginY="20px">
          <List spacing={2}>
            {musicMenu.map((menu) => (
              <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
                <LinkBox>
                  <NextLink href={menu.route} passHref>
                    <LinkOverlay>
                      <ListIcon
                        as={menu.icon}
                        color="white"
                        marginRight="20px"
                      />
                      {menu.name}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Divider color="gray.800" />
        <Box height="40%" overflowY="auto" paddingY="20px">
          <List spacing={2}>
            {playlists?.map(
              (playlist: {
                id: Key;
                name: boolean | ReactChild | ReactFragment | ReactPortal;
              }) => (
                <ListItem paddingX="20px" key={playlist.id}>
                  <LinkBox>
                    <NextLink
                      href={{
                        pathname: "/playlist/[id]",
                        query: { id: playlist.id },
                      }}
                      passHref
                    >
                      <LinkOverlay>{playlist.name}</LinkOverlay>
                    </NextLink>
                  </LinkBox>
                </ListItem>
              )
            )}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
