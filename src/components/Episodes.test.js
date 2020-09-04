import React from 'react';
import Episodes from "./Episodes";
import {render} from "@testing-library/react";

test("Episodes component shows data when rendered with new episodes data", () => {
    //Arrange
    //Before api call
    // const a = render(<Episodes episodes={[]}/>);
    // console.log(a);

    const {queryAllByTestId, getAllByTestId, rerender} = render(<Episodes episodes={[]}/>);
    //make sure there are no episodes when component mounts
    const initialEpisodes = queryAllByTestId(/episode/i);
    //test for empty array
    expect(initialEpisodes).toHaveLength(0);

    //Act: re-render component with mssion data
    //this simulates when user clicjs get data, triggering an api request
    rerender(<Episodes episodes={data} />);
    const episodes = getAllByTestId(/episode/i);

    //Assert: 4 episodes should render
    expect(episodes).toHaveLength(4);

})

const data = 
[{"id":1576469,
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
"_links":{"self":{"href":"http://api.tvmaze.com/episodes/1576469"}}},

{"id":1576470,"url":"http://www.tvmaze.com/episodes/1576470/stranger-things-3x02-chapter-two-the-mall-rats","name":"Chapter Two: The Mall Rats","season":3,"number":2,"airdate":"2019-07-04","airtime":"","airstamp":"2019-07-04T12:00:00+00:00","runtime":50,"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_landscape/204/511261.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/204/511261.jpg"},"summary":"<p>While El and Max go shopping, Nancy and Wheeler follow up on the exploding rats. Billy takes a coworker on a field trip, and Joyce blows off dinner with Jim to meet with Mr. Clarke.</p>","_links":{"self":{"href":"http://api.tvmaze.com/episodes/1576470"}}},

{"id":1576471,"url":"http://www.tvmaze.com/episodes/1576471/stranger-things-3x03-chapter-three-the-case-of-the-missing-lifeguard","name":"Chapter Three: The Case of the Missing Lifeguard","season":3,"number":3,"airdate":"2019-07-04","airtime":"","airstamp":"2019-07-04T12:00:00+00:00","runtime":50,"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_landscape/204/511286.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/204/511286.jpg"},"summary":"<p>El goes astrally projecting and discovers that Billy has done something with Heather. While the girls try to find the missing lifeguard, Will tries to get Mike and Lucas interested in D&amp;D. Dustin and Steve spy on the mall shops, and Robin tries to decipher the Russian message.</p>","_links":{"self":{"href":"http://api.tvmaze.com/episodes/1576471"}}},

{"id":1576472,"url":"http://www.tvmaze.com/episodes/1576472/stranger-things-3x04-chapter-four-the-sauna-test","name":"Chapter Four: The Sauna Test","season":3,"number":4,"airdate":"2019-07-04","airtime":"","airstamp":"2019-07-04T12:00:00+00:00","runtime":53,"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_landscape/204/511312.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/204/511312.jpg"},"summary":"<p>Mike, Lucas, and Will recruit El and Max to help them learn who the Mind Flayer's host is. Robin, Steve, and Dustin recruit someone to sneak into Lynx, and Nancy and Jonathan are fired.</p>","_links":{"self":{"href":"http://api.tvmaze.com/episodes/1576472"}}}
];
