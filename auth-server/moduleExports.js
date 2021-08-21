module.exports.getCalendarEvents = { 
    return ({
              statusCode: 200,
              headers: {
                "Access-Control-Allow-Origin": "*",
                // "Access-Control-Allow-Credentials": true,
              },
              body: JSON.stringify({ events: results.data.items }), // import from JSON file as Mock Data.
            };
  )