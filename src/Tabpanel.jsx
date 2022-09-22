import "./App.css";
import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Container, Typography } from "@mui/material";
import draw from "./keyword/draw";
import music from "./keyword/music";
import book from "./keyword/book";
import character from "./keyword/character";
import effort from "./keyword/effort";
import fashion from "./keyword/fashion";
import game from "./keyword/game";
import hate from "./keyword/hate";
import internet from "./keyword/internet";
import life from "./keyword/life";
import Link from "@mui/material/Link";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Container
                    sx={{
                        p: 3,
                        backgroundColor: "#fff",
                        borderRadius: "16px",
                        mt: 5,
                        mb: 5,
                    }}
                >
                    {children}
                </Container>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: "100%", backgroundColor: "#f0f0f0", height: "100vh" }}>
            <Box
                sx={{
                    color: "#fff",
                    pt: 5,
                    backgroundColor: "#ffa600",
                }}
            >
                <Typography
                    variant="h3"
                    marginLeft={15}
                    color="#fff"
                    mb={5}
                    fontWeight="bold"
                >
                    わたしを表す101キーワード
                </Typography>

                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        centered
                        textColor="inherit"
                        indicatorColor="secondary"
                    >
                        <Tab label="お絵描き" {...a11yProps(0)} />
                        <Tab label="音楽" {...a11yProps(1)} />
                        <Tab label="動画" {...a11yProps(2)} />
                        <Tab label="ゲーム" {...a11yProps(3)} />
                        <Tab label="ファッション" {...a11yProps(4)} />
                        <Tab label="本" {...a11yProps(5)} />
                        <Tab label="生活" {...a11yProps(6)} />
                        <Tab label="性格" {...a11yProps(7)} />
                        <Tab label="嫌い" {...a11yProps(8)} />
                        <Tab label="頑張っていること" {...a11yProps(9)} />
                    </Tabs>
                </Box>
            </Box>
            <TabPanel value={value} index={0}>
                <ul style={{ columnCount: 2, listStyle: "square" }}>
                    {draw.map((element, i) => (
                        <li key={i}>{element}</li>
                    ))}
                </ul>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <ul style={{ listStyle: "square" }}>
                    {music.map((element, i) => (
                        <li key={i}>{element}</li>
                    ))}
                </ul>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <ul style={{ listStyle: "square" }}>
                    {internet.map((element, i) => (
                        <li key={i}>{element}</li>
                    ))}
                </ul>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <ul style={{ listStyle: "square" }}>
                    {game.map((element, i) => (
                        <li key={i}>{element}</li>
                    ))}
                </ul>
            </TabPanel>
            <TabPanel value={value} index={4}>
                <ul style={{ listStyle: "square" }}>
                    {fashion.map((element, i) => (
                        <li key={i}>{element}</li>
                    ))}
                </ul>
            </TabPanel>
            <TabPanel value={value} index={5}>
                <ul style={{ listStyle: "square" }}>
                    {book.map((element, i) => (
                        <li key={i}>{element}</li>
                    ))}
                </ul>
            </TabPanel>
            <TabPanel value={value} index={6}>
                <ul style={{ listStyle: "square" }}>
                    {life.map((element, i) => (
                        <li key={i}>{element}</li>
                    ))}
                </ul>
            </TabPanel>
            <TabPanel value={value} index={7}>
                <ul style={{ listStyle: "square" }}>
                    {character.map((element, i) => (
                        <li key={i}>{element}</li>
                    ))}
                </ul>
            </TabPanel>
            <TabPanel value={value} index={8}>
                <ul style={{ listStyle: "square" }}>
                    {hate.map((element, i) => (
                        <li key={i}>{element}</li>
                    ))}
                </ul>
            </TabPanel>
            <TabPanel value={value} index={9}>
                <ul style={{ columnCount: 2, listStyle: "square" }}>
                    {effort.map((element, i) => (
                        <li key={i}>{element}</li>
                    ))}
                </ul>
            </TabPanel>
            <Box
                sx={{
                    width: "100%",
                    backgroundColor: "#ffa600",
                    bottom: 0,
                    position: "fixed",
                    color: "#fff",
                    p: 2,
                    textAlign: "center",
                }}
            >
                <Link
                    href="https://github.com/yano0"
                    color="secondary"
                    marginRight={10}
                >
                    GitHub
                </Link>

                <Link
                    href="https://sites.google.com/view/chihiroyano"
                    color="secondary"
                >
                    portfolio
                </Link>
            </Box>
        </Box>
    );
}
