import {Button, Grid, TextField} from "@mui/material";
import {useEffect, useState} from "react";

const SearchBox = ({onClickHandler}) => {
    const [searchText, setSearchText] = useState({size: '1024x1024', text: ''});
    const handleSearchTextChange = (event) => {
        setSearchText({...searchText, text: event.target.value});
    }
    const handleSearchClick = () => {
        onClickHandler(searchText);
    }

    useEffect(() => {
        const {ethereum} = window;
        ethereum.on("connect", (accounts) => {
            console.log('entrou aqui oopa', accounts);
        })
    }, []);

    return (
        <div>
            <Grid container spacing={2} borderTop={35} borderColor={"transparent"}>
                <Grid item xs={10}>
                    <TextField id="outlined-basic" label="Enter a phrase" variant="outlined" fullWidth onChange={handleSearchTextChange}/>
                </Grid>
                <Grid item xs={2}>
                    <Button style={{height:'100%'}} variant="outlined" onClick={handleSearchClick} fullWidth>Generate</Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default SearchBox;