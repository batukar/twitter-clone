import React from "react";
import Container from "./Layout/Container";
import Sidebar from "./Layout/Sidebar";
import Content from "./Layout/Content";
import Widget from "./Layout/Widget";

const App = () => {
    return (
        <Container>
            <Sidebar/>
            <Content/>
            <Widget/>
        </Container>
    );
};

export default App;