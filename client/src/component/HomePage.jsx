export default function HomePage() {
    return (
        <div className="main-content">
            <div className="left-container">
                {/* <!-- Your content for the left side --> */}
                <div className="left-component">
                    <p>
                        Here the things you don't need continue their mission of bringing{" "}
                        <span className="highlighted-text">joy</span>
                    </p>
                    <div className="button-container">
                        <button className="search-button">Search</button>
                        <button className="share-button">Share</button>
                    </div>
                </div>

            </div>

            <div className="right-container">
                {/* <!-- Your content for the right side --> */}
                <div className="right-component">
                    <img src="/images/babyThings.jpg" alt="Description" className="right-image" />
                </div>
            </div>
        </div>
    )
}