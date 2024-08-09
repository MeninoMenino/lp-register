export interface SpotifyAlbumsList {
    albums: {
        items: SpotifyAlbum[]
    }
}

export interface SpotifyAlbum {
    id: string,
    name: string,
    artists: [
        {
            name: string
        }
    ]
    release_date: string
}