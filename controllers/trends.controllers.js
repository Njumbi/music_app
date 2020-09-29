const {
    default: Axios
} = require("axios")

const axios = require('axios')

exports.fetchTrends = async (req, res, next) => {
    try {
        // get artists
        const artists = []
        const artistsData = await axios.get(`http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${process.env.LASTFM_KEY}&format=json&limit=12`)

        for (a of artistsData.data.artists.artist) {
            const imageData = await axios.get(`http://webservice.fanart.tv/v3/music/${a.mbid}?api_key=${process.env.IMAGE_KEY}`)
                .catch(error => {
                    console.log("Error fetching artist")
                })
            if (imageData) {
                a.image = imageData.data.artistthumb[0].url;
            }

            artists.push(a)
        }

        // get albums
        const albumData = await axios.get(`http://ws.audioscrobbler.com//2.0/?method=tag.gettopalbums&tag=disco&api_key=${process.env.LASTFM_KEY}&format=json&limit=12`)

        res.render('trends', {
            path: 'trends',
            artists: artists
        })
    } catch (e) {
        console.log(e)
    }
}

