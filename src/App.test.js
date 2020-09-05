import React from 'react';
import App from './App';
import {render, fireEvent, waitFor, getAllByTestId} from "@testing-library/react";
import {fetchShow as mockFetchEpisodes} from './api/fetchShow';  
jest.mock("./api/fetchShow");
test("App fetches episode data from API and renders it", async ()=> {
    //Arrange
    mockFetchEpisodes.mockResolvedValueOnce(episodes);
    const {findByText,getByText,getAllByTestId} = render(<App/>);
    //Act
    await findByText(/Fetching data.../i);
    
    //components waits for API and is going to render the data that is returned
    //use the waitFor function to wait for the API call to resolve
    waitFor(() => {
    //Assert
    const button = getByText(/select a season/i);
    fireEvent.click(button);
    fireEvent.click(getByText(/season 1/i))   
    expect(getAllByTestId(/episode/i).toHaveLenght(4));
    })
});

const episodes= {data: 
    {"id":1576469,
    "url":"http://www.tvmaze.com/episodes/1576469/stranger-things-3x01-chapter-one-suzie-do-you-copy",
    "name":"Chapter One: Suzie, Do You Copy?",
    "season":3,
    "number":1,
    "airdate":"2019-07-04",
    "airtime":"",
    "airstamp":"2019-07-04T12:00:00+00:00",
    "runtime":51,
    "image":{"medium":"http://static.tvmaze.com/uploads/images/medium_landscape/204/510098.jpg",
    "original":"http://static.tvmaze.com/uploads/images/original_untouched/204/510098.jpg"},
    "summary":"<p>Things change over the summer: Jonathan, Nancy, Steve, and Billy get jobs; Dustin goes to science camp; El and Mike become an item; Lucas and Max almost become an item. Meanwhile, mysterious power outages plague Hawkins and rats start exploding.</p>",
    "_links":{"self":{"href":"http://api.tvmaze.com/episodes/1576469"}}}};