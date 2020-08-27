import React,{ Component } from 'react';
import CollectionItem from '../collectionItem/CollectionItem';

class Collection extends Component {
    render() {
        return(
            <div className="row">
                <CollectionItem />
                <CollectionItem />
                <CollectionItem />
                <CollectionItem />
            </div>
        )
    }
}
export default Collection;