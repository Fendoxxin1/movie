import { memo, useState } from "react";
import { useMovie } from "./services/useMovie";
import MovieView from "../../shared/components/movie-view/MovieView";
import { Pagination, Select, Skeleton, type PaginationProps } from "antd";
import { useGenre } from "./services/useGenre";
import { useParamsHook } from "../../shared/hooks/useParamsHook";

const Movie = () => {
    const { getParam, setParam, removeParam } = useParamsHook();

    const page = getParam("page") || "1";
    const with_genres = getParam("genre") || "";
    const { getMovies } = useMovie();
    const { getGenres } = useGenre();

    const { data, isLoading } = getMovies({ page, with_genres });
    const { data: genreData } = getGenres();

    const options = genreData?.genres?.map((item: any) => ({
        value: item.id,
        label: item.name,
    }));

    const handlechange = (value: string) => {
        setParam("genre", value);
    };
    const onChange: PaginationProps["onChange"] = (page) => {
        if (page === 1) {
            removeParam("page");
        } else {
            setParam("page", page);
        }
    };
    return (
        <div className="Index">
            <div className="container mx-auto">
                <Select
                    className="w-40"
                    placeholder="select generes"
                    options={options}
                    onChange={handlechange}
                />
            </div>
            {isLoading && (
                <div className="container mx-auto">
                    <Skeleton active />
                </div>
            )}
            <MovieView data={data?.results} />
            <div className="flex justify-center">
                <Pagination
                    current={Number(page)}
                    onChange={onChange}
                    total={data?.total_pages}
                />
            </div>
        </div>
    );
};

export default memo(Movie);
