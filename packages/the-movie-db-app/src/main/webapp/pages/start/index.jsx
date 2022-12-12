import React from 'react';

import layout from '@splunk/react-page';
import TheMovieDbComponent from '@splunk/the-movie-db-component';
import { getUserTheme, getThemeOptions } from '@splunk/splunk-utils/themes';

import { StyledContainer, StyledGreeting } from './StartStyles';

getUserTheme()
    .then((theme) => {
        const splunkTheme = getThemeOptions(theme);
        layout(
            <StyledContainer>
                <StyledGreeting>Coming Soon To Theaters</StyledGreeting>
                {/* <div>Your component will appear below.</div> */}
                <TheMovieDbComponent name="from inside TheMovieDbComponent" />
            </StyledContainer>,
            splunkTheme
        );
    })
    .catch((e) => {
        const errorEl = document.createElement('span');
        errorEl.innerHTML = e;
        document.body.appendChild(errorEl);
    });
