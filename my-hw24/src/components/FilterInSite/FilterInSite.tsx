import React from "react";

const FilterInSite = () => {

    return (
        <section className="filterInSite">
            <div className="filterInSite_element">
                <div className="filterInSite_element_size">
                    <label>Size</label>
                    <input type="checkbox" />
                    <input type="checkbox" />
                    <input type="checkbox" />
                    <input type="checkbox" />
                    <input type="checkbox" />

                </div>
                <div className="filterInSize_element_color">
                    <label>Color</label>
                    <input type="checkbox" />
                    <input type="checkbox" />
                    <input type="checkbox" />
                    <input type="checkbox" />
                    <input type="checkbox" />
                </div>
            </div>
        </section>
    )
}

export default FilterInSite;