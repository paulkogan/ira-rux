import React, {Component} from 'react';


const EntityPicklistItem = (props) => {
      const entityResult = props.entityResult;
      return (
                <li onClick={() => props.onEntitySelectCB(entityResult)} className="pick-list-item">
                <div>
                      {entityResult.id+".  "}
                      {entityResult.name}

                </div>
                </li>
      )
}


//get list of entities
const EntityPicklist = (props) => {
  const displaylistofentities = props.entityResults.map(  (entityResult) => {
        return (
            <EntityPicklistItem
                onEntitySelectCB = {props.onEntitySelectCB}
                entityResult = {entityResult}
                key = {entityResult.id}
            />
        )
  });



return (
          <div>
              {displaylistofentities}
          </div>
      )
}

export default EntityPicklist;

            //  <li onClick={() => props.onEntitySelectCB(entityResult)} className="list-group-item">
