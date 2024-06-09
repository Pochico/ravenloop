
export const Pagination = ({ onNextPage, onPrevPage, nextPageToken, prevPageToken }: { onNextPage: (nextPageToken: string) => void, onPrevPage: (prevPageToken: string) => void, nextPageToken: string | null, prevPageToken: string | null }) => {
    const handlePrev = () => {
        prevPageToken &&
            onPrevPage(prevPageToken);
    };

    const handleNext = () => {
        nextPageToken &&
            onNextPage(nextPageToken);
    };

    return (
        <div className="pagination-component">
            <button className="pagination-component__prev-button" onClick={handlePrev} disabled={!prevPageToken}>Prev</button>
            <button className="pagination-component__next-button" onClick={handleNext} disabled={!nextPageToken}>Next</button>
        </div>
    );
};
