import './App.css';
import SearchBox from "./components/search-box/search-box.component";
import {useState} from "react";
import {ImageList, ImageListItem} from "@mui/material";
import Header from "./components/header/header.component";

function App() {

    // This is the state of the search box and will soon be fetched from a API
    const images = [
        {
            id: 1,
            url: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=640',
            title: 'Breakfast',
        },
        {
            id: 2,
            url: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=640',
            title: 'Burger',
        },
        {
            id: 3,
            url: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=640',
            title: 'Camera',
        },
        {
            id: 4,
            url: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=640',
            title: 'Coffee',
        }
    ];
    const [imageList, setImageList] = useState(images);
    const onClickHandler = ({text, size}) => {
        const requestOptions = {
            method: 'POST', body: JSON.stringify({
                prompt: text, n: 2, size: size
            }), headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer [YOUR TOKEN GOES HERE]'
            }),
        };

        fetch('http://127.0.0.1:3001/v1/images/generations', requestOptions)
            .then(response => response.json())
            .then(json => {
                setImageList(json.data);
            });
    }
    return <div>
        <Header></Header>
        <SearchBox onClickHandler={onClickHandler}></SearchBox>
        <ImageList xl={{width: 500, height: 450}} cols={3}>
            {imageList.map((item) => (<ImageListItem key={item.url}>
                <img
                    src={item.url}
                    srcSet={item.url}
                    alt={item.url}
                />
            </ImageListItem>))}
        </ImageList>
    </div>;
}


export default App;
