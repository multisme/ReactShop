import React from "react"
import {useSelector} from "react-redux";

import { RootState } from "app/rootReducer";
import {ShowcaseItemDisplay} from "features/showcase/showcaseDisplay";

interface ShowcaseContainerProps{
}

const ShowcaseContainer = ({}: ShowcaseContainerProps) => {
        const { selected } = useSelector( (state: RootState) => state.showcase) 

                if (selected == null){
                        return (<div> THIS IS A SHOPPING WEBSITE</div>)
                } else {
                        return (
                                        <div>
                                        <ShowcaseItemDisplay item={selected}/>
                                        </div>
                               )
                }
}

export default ShowcaseContainer
