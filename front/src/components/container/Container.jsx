import { useCallback, useEffect, useState } from "react";
import Form from "../form/Form.jsx";
import Table from "../table/Table.jsx";
import Index from "../index/Index.jsx";
import "./style.css";
import PageInstall from "../pageinstall/PageInstall.jsx"
import Search from "../search/Search.jsx";
import "./style.css"
import Work from "../../work/work.jsx";
import "./style.css"
import Tarifs from "../tarifs/tarifs.jsx";
import "./style.css"
import About from "../about/about.jsx";
import "./style.css"

export default function Container({ curPath }) {
    const [row, setRow] = useState({});
    const [query, setQuery] = useState("");
    const [collectionName, setCollectionName] = useState(false);
    console.log(curPath);

    const handle = (value) => {
        if (value.data) setRow(value.data[0]);
    };

    const handleSearch = (value) => {
        if (value !== "") setQuery(value);
    };

    const setCollection = useCallback(async () => {
        if (curPath !== "index" && curPath !== "/") setCollectionName(curPath);
    }, [curPath]);

    useEffect(() => {
        setCollection();
    }, [setCollection]);

    return (
        <div className="container">
            {!collectionName && <Index />}
            {curPath === "customers" && <Form nameForm="customers"></Form>}

            {curPath === "customers" && <Table nameTable="customers"></Table>}

            {curPath === 'install' && <PageInstall></PageInstall>}

            {curPath === 'tarifs' && <Tarifs></Tarifs>}
            {curPath === 'work' && <Work></Work>}

            {curPath === 'about' && <About></About>}

            
        </div>
    );
}
