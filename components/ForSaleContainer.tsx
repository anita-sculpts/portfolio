import Header from "./Header";
import SculpturesList from "./SculpturesList";
import SculpturesSeeAll from "./SculpturesSeeAll";

const ForSaleContainer = () => (
    <div className="container thumbnail-container for-sale-container">
        <Header addBottomMargin={true} addTopMargin={true}>
            Available for Purchase
        </Header>
        <SculpturesList forSale={true} />
        <SculpturesSeeAll forSale={true} />
    </div>
);

export default ForSaleContainer;