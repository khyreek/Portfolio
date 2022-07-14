enum NodeEnvironments {
    DEVELOPMENT = "dev",
    PRODUCTION = "prod",
}

enum TwitterCardTypes {
    SUMMARY = "summary",
    SUMMARY_LARGE_IMAGE = "summary_large_image",
    APP = "app",
    PLAYER = "player",
}

enum OGCardTypes {
    // music
    MUSIC_SONG = "music.song",
    MUSIC_ALBUM = "music.album",
    MUSIC_PLAYLIST = "music.playlist",
    MUSIC_RADIO_STATION = "music.radio_station",

    // videos
    VIDEO_MOVIE = "video.movie",
    VIDEO_EPISODE = "video.episode",
    VIDEO_TV_SHOW = "video.tv_show",
    VIDEO_OTHER = "video.other",

    // no verticals
    ARTICLE = "article",
    BOOK = "book",
    PROFILE = "profile",
    WEBSITE = "website",
}

export { NodeEnvironments, TwitterCardTypes, OGCardTypes };
