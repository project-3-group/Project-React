import './Overview.css';
function Overview(props) {
    return (<>
        {/* <!--
        Dribbble html make of the following picture https://d13yacurqjgara.cloudfront.net/users/17164/screenshots/1410207/food-widget_1x.png
        as seen here http://dribbble.com/shots/1410207-Food-Widget by Andreea Nicolaescu!
--> */}
        <div class="holder">
            <div class="item place">
                <div class="imageHolder"></div>
                <div class="details">
                    <div class="type"></div>
                    <div class="meta">
                        <p class="title">
                            {props.name}
                        </p>
                        <p class="info">
                            {props.overview}
                        </p>
                    </div>
                    {/* <div class="extra">
                        <p class="rating">9.8/10</p>
                        <div class="ratingBar"><div class="green"></div></div>
                        <p class="info">(320 Ratings)</p>
                    </div> */}
                </div>
            </div>
        </div>

    </>);
}
export default Overview;