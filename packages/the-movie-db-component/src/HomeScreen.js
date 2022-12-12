import React, { useEffect, useState } from 'react';
import Card from '@splunk/react-ui/Card';
import listingAPI from './api/listings';

import { StyledContainer } from './styles/HomeScreenStyles';

import SearchJob from '@splunk/search-job';

function HomeScreen({}) {
    const [movie, setMovies] = useState([]);

    // const mySearchJob = SearchJob.create({
    //     search: 'index="main" sourcetype="movie-db:insights:upcoming" |  table *',
    //     earliest_time: '-60d@d',
    //     latest_time: 'now',
    // });

    // const resultsSubscription = mySearchJob.getResults().subscribe((results) => {
    //     if (movie.length == 0) {
    //         setMovies(results['results']);
    //     }
    // });

    useEffect(() => {
        // GetUpcomingMoviesHandler();
        GetMoviesAsPerSelectedPersonHandler(11);
    }, []);

    const GetUpcomingMoviesHandler = async () => {
        const { data } = await listingAPI.get_upcoming_movies({
            endPoint: 'movie/upcoming?api_key=b436367956858b85497a37284b35b108',
        });
        setMovies(data['results']);

        //console.log(data['results']);
    };

    const GetMoviesAsPerSelectedPersonHandler = async (person_id = 1) => {
        const { data } = await listingAPI.get_upcoming_movies({
            endPoint: `person/${person_id}?api_key=b436367956858b85497a37284b35b108`,
        });

        setMovies([data]);

        //console.log(data['results']);
    };

    const style = { width: 400, height: 500, margin: '0 20px 20px 0' };

    return (
        <StyledContainer>
            {movie.map((m) => (
                <Card style={style} key={m.title}>
                    <Card.Body
                        style={{
                            background: '#d9edf7',
                            textAlign: 'center',
                            //padding: '84px 50px',
                            color: '#3a87ad',
                            borderBottomRightRadius: 10,
                            borderBottomLeftRadius: 10,
                        }}
                    >
                        <img
                            style={{ width: '100%', height: '90%', borderRadius: 10 }}
                            src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${
                                m.poster_path ? m.poster_path : m.profile_path
                            }`}
                        />
                    </Card.Body>
                    <Card.Header
                        title={m.title ? m.title : m.name}
                        subtitle={
                            m.release_date
                                ? `Release date : ${m.release_date} `
                                : `Birthday : ${m.birthday}`
                        }
                    />
                </Card>
            ))}
        </StyledContainer>
    );
}

export default HomeScreen;
