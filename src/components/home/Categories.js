import React, {Component, Fragment} from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';
import Axios from 'axios';
import ApiURL from '../../api/ApiURL';
import {Link} from 'react-router-dom';

class Categories extends React.Component{
    constructor(){
        super();
        this.state = {
            categories : [],
        }
    }

    componentDidMount(){
        Axios.get(ApiURL.GetCategoryDetails)
        .then(response=>{
            this.setState({categories : response.data});
        })
        .catch(error=>{

        })
    }
 render() {
    let MyList = this.state.categories;
    let MyView = MyList.map((List, i)=>{
        return <Fragment key={i.toString()}>
                    <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={6} xs={6} >
                                <Link to={"/ProductListByCategory/"+List.category} className="link">
                                    <Card className="h-100 w-100 text-center">
                                    <Card.Body>
                                        <img className="w-75 mb-3" src={List.image}/>
                                        <h5 className="category-name">{List.category}</h5>
                                    </Card.Body>
                                </Card>
                                </Link>
                    </Col>
                </Fragment>
    })
    return (
        <Fragment>
            <Container className="text-center pt-3  BetweenTwoSection" fluid={true}>
                <h4 className="section-title">CATEGORIES</h4>
                <h6 className="section-sub-title pb-3">Some Of Our Exclusive Collection, You May Like</h6>
                <Row>
                     {MyView}
                </Row>
            </Container>
        </Fragment>
    );
  }
}

export default Categories;
