export interface Movie {
    id: number;
    title: string;
    release_date: string;
    poster_path: string;
    original_language: string;
    popularity: number;
    genre_ids: number[];
    overview: string;
    vote_average: number;
    vote_count: number;
    adult: boolean;
    backdrop_path: string;
    video: boolean;
    original_title: string;

}