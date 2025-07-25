import type { TSpotifyExternalUrls } from "./spotify-common";

export type TSpotifyArtist = {
	id: string;
	name: string;
	type: "artist";
	uri: string;
	href: string;
	external_urls: TSpotifyExternalUrls;
	followers?: {
		total: number;
	};
	genres?: string[];
	images?: import("./spotify-common").TSpotifyImage[];
	popularity?: number;
};

export type TSpotifyAlbum = {
	id: string;
	name: string;
	type: "album";
	uri: string;
	href: string;
	external_urls: TSpotifyExternalUrls;
	artists: TSpotifyArtist[];
	images: import("./spotify-common").TSpotifyImage[];
	release_date: string;
	release_date_precision: "year" | "month" | "day";
	total_tracks: number;
	album_type: "album" | "single" | "compilation";
	available_markets?: string[];
};

export type TSpotifyTrack = {
	id: string;
	name: string;
	type: "track";
	uri: string;
	href: string;
	external_urls: TSpotifyExternalUrls;
	artists: TSpotifyArtist[];
	album: TSpotifyAlbum;
	duration_ms: number;
	explicit: boolean;
	popularity: number;
	preview_url?: string;
	track_number: number;
	disc_number: number;
	is_local: boolean;
	available_markets?: string[];
};

export type TSpotifyAudioFeatures = {
	id: string;
	uri: string;
	track_href: string;
	analysis_url: string;
	duration_ms: number;
	time_signature: number;
	key: number;
	mode: number;
	acousticness: number;
	danceability: number;
	energy: number;
	instrumentalness: number;
	liveness: number;
	loudness: number;
	speechiness: number;
	valence: number;
	tempo: number;
};

export type TSpotifyTimeInterval = {
	start: number;
	duration: number;
	confidence: number;
};

export type TSpotifySection = {
	start: number;
	duration: number;
	confidence: number;
	loudness: number;
	tempo: number;
	tempo_confidence: number;
	key: number;
	key_confidence: number;
	mode: number;
	mode_confidence: number;
	time_signature: number;
	time_signature_confidence: number;
};

export type TSpotifySegment = {
	start: number;
	duration: number;
	confidence: number;
	loudness_start: number;
	loudness_max: number;
	loudness_max_time: number;
	loudness_end: number;
	pitches: number[];
	timbre: number[];
};

export type TSpotifyAudioAnalysis = {
	meta: {
		analyzer_version: string;
		platform: string;
		detailed_status: string;
		status_code: number;
		timestamp: number;
		analysis_time: number;
		input_process: string;
	};
	track: {
		duration: number;
		sample_md5: string;
		offset_seconds: number;
		window_seconds: number;
		analysis_sample_rate: number;
		analysis_channels: number;
		end_of_fade_in: number;
		start_of_fade_out: number;
		loudness: number;
		tempo: number;
		tempo_confidence: number;
		time_signature: number;
		time_signature_confidence: number;
		key: number;
		key_confidence: number;
		mode: number;
		mode_confidence: number;
	};
	bars: TSpotifyTimeInterval[];
	beats: TSpotifyTimeInterval[];
	sections: TSpotifySection[];
	segments: TSpotifySegment[];
	tatums: TSpotifyTimeInterval[];
};
