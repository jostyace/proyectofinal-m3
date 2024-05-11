import { Buttons } from "../Buttons/Buttons";

export const SearchInput = ({
    setQuery,
    query,
    setCityQuery,
}) => {
    const handleSubmit = (event) => {
        event.preventDefault();

        setCityQuery(query);
    };

    return (
        <form onSubmit={handleSubmit} className="w-full">
            <div className="relative flex">
                <div className="absolute justify-center flex items-center h-full w-10 pointer-events-none">
                    <svg
                        className="w-6 h-6 fill-textoSearch stroke-textoSearch"
                        viewBox="0 0 203 201"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeWidth="0.09375"
                            opacity="1.00"
                            d=" M 55.28 35.24 C 66.77 26.71 82.11 23.62 96.02 27.02 C 108.43 29.93 119.49 37.94 126.32 48.67 C 134.48 61.11 136.27 77.37 131.36 91.37 C 129.27 97.38 125.90 102.84 122.00 107.85 C 124.23 109.99 127.34 109.58 130.17 109.50 C 140.24 119.55 150.20 129.73 160.35 139.72 C 162.33 141.76 164.81 143.87 164.88 146.97 C 165.48 151.80 160.74 156.39 155.93 155.64 C 153.25 155.42 151.27 153.37 149.46 151.60 C 139.32 141.32 129.04 131.19 118.88 120.94 C 118.91 118.10 119.34 114.92 117.04 112.79 C 107.99 120.01 96.73 124.89 85.00 124.71 C 69.98 125.18 55.17 117.85 45.87 106.15 C 37.94 96.38 34.00 83.50 35.16 70.96 C 36.30 56.90 43.80 43.46 55.28 35.24 M 78.36 41.46 C 66.90 43.52 56.75 51.66 52.60 62.58 C 47.65 74.85 50.60 89.75 59.90 99.15 C 67.28 106.83 78.37 110.68 88.93 109.22 C 100.68 107.87 111.31 99.78 115.95 88.93 C 119.62 80.67 119.75 70.94 116.42 62.54 C 110.79 47.66 94.00 38.30 78.36 41.46 Z"
                        />
                    </svg>
                </div>
                <div className="flex w-full gap-3">
                    <input
                        type="search"
                        onChange={(e) => setQuery(e.target.value)}
                        id="default-search"
                        className="block pl-10 h-12 w-9/12 outline-none text-sm border border-white text-textoClaro placeholder:text-textoSearch rounded-sm bg-transparent "
                        placeholder="Search location"
                        required
                    />
                    <div className="w-3/12">
                        <Buttons
                            tipo={
                                "rounded-sm px-6 py-2 bg-secundario w-full h-[48px] h-12 min-w-[100px]"
                            }
                            texto="Search"
                            color="secundario"
                            onClick={() => setCityQuery(query)}
                        />
                    </div>
                </div>
            </div>
        </form>
    );
};
