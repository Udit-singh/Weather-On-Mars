export const formatDate = (date) =>
    date.toLocalDateString(undefined, {day: "numeric", month: "long"});

export const formatTemp = (temperature, isMetric) => {
    let returnTemp = temperature;
    if (!isMetric) {
        
        returnTemp = (temperature - 32) * (5 / 9);
    }
    return Math.round(returnTemp);
  };