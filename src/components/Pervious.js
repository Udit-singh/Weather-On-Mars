import React from "react";

import {
    PreviousWrapper,
    Toggle,
    PreviousDays,
    PreviousDay,
} from "./Previous.styles";

const Previous = ({
    weather,
    previous,
    setPervious,
    setSelectedSol,
    isMetric,
}) => (
    <PreviousWrapper previous={previous}>
        <Toggle
            htmlFor="weather-toggle"
            onClick={() => setPervious()}onClick={() => setPrevious((prev) => !prev)}
            previous={previous}
            >
                <span>&#8593</span>
                <span className="sr-only">Show Previous Weather</span>
            </Toggle>

            <h2 className="main-title previous-weather__title">Previous 7 days</h2>
            <PreviousDays>
                {weather.map((sol,i) => (
                    <PreviousDay key={sol.sol} previous={previous}>
                        <h3 className="previous-day__sol">
                        <span>{sol.sol}</span>
                        </h3>

                        <p className="previous-day__date">{sol.date}</p>

                        <p className="previous-day__temp">
                            High:
                            <span>{sol.maxTemp}</span>
                            <span>{isMetric ? " C" : " F"}</span>
                        </p>
                        <p className="previous-day__temp">
                            Low:
                            <span>{sol.minTemp}</span>
                            <span>{isMetric ? " C" : " F"}</span>
                        </p>
                        <button
                            className="previous-day__more-info"
                            onClick={() => setSelectedSol(i)}
                        >
                            More Info
                        </button>
                    </PreviousDay>
                ))}
            </PreviousDays>
    </PreviousWrapper>
);

export default Previous;