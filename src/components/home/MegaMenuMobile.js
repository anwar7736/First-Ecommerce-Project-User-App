import React, {Component, Fragment} from 'react';

class MegaMenuMobile extends Component {


    constructor(props) {
        super();
    }

    MenuItemClick=(event)=>{
        event.target.classList.toggle("active");
        let panel=event.target.nextElementSibling;
             if(panel.style.maxHeight){
                 panel.style.maxHeight=null;
             }
             else{
                 panel.style.maxHeight=panel.scrollHeight+ "px"
             }
    }

    render() {
         let MyList = this.props.data;
        let MyView = MyList.map((List,i)=>{
            return (<Fragment key={i.toString()}>
                         <button onClick={this.MenuItemClick} className="accordion"><img className="accordionMenuIcon" src={List.image}/> {List.category} </button>
                        <div className="panel">
                            <ul>
                               {
                                (List.subcategory).map((Child, i)=>{
                                    return  (<li><a href="#" className="accordionItem">{Child.subcategory_name}</a></li>)
                                })
                               }
                            </ul>
                        </div>
                  </Fragment>);
        });
        return (
            <div className="accordionMenuDivMobile">
                <div className="accordionMenuDivInsideMobile">
                    {MyView}
                </div>
            </div>
        );
    }
}

export default MegaMenuMobile;