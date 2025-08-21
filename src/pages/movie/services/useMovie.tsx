import { useQuery } from "@tanstack/react-query";
import { api } from "../../../shared/api";

export const movieKey = "movieKey";
interface IParam {
    page?: string;
    with_genres?: string;
}
export const useMovie = () => {
    const getMovies = (params?: IParam) =>
        useQuery({
            queryKey: [movieKey, params],
            queryFn: () =>
                api.get("discover/movie", { params }).then((res) => res.data),
        });

    const getMovieById = (id: string) =>
        useQuery({
            queryKey: [movieKey, id],
            queryFn: () => api.get(`movie/${id}`).then((res) => res.data),
        });

    return { getMovies, getMovieById };
};
