
export const filterData = (data, matcher) => {
    const normalizedMatcher = matcher.toUpperCase()
    const filteredResults = [];

    data.forEach((entry) => {
        const normalizedEntry = entry[0].toUpperCase();
        if (normalizedEntry.includes(normalizedMatcher))
            filteredResults.push(entry)
    })

    return filteredResults;
}

export const getAttendeesByLastName = async (lastName) => {
    const attendees = await fetch('/api/attendees')
        .then(function(response) {
            return response.json()
        }).then(function(data) {
            return(data.data)
        })

    return filterData( attendees, lastName);
}
