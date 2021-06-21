import React, {Component, Fragment} from 'react';
import {Container, Row, Col, Card, Breadcrumb} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import Axios from 'axios';
import cogoToast from 'cogo-toast';
import ApiURL from '../../api/ApiURL';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

class Purchase extends React.Component{
        constructor(){
        super();
        this.state = {
            purchase : '',
            loaderDiv : '',
            mainDiv : 'd-none',
        }
    }
     componentDidMount(){
        let getSession = sessionStorage.getItem('Purchase');

        if(getSession==null)
        {
            Axios.get(ApiURL.GetSiteInfo)
            .then(response=>{
                if(response.status==200)
                {
                    let Purchase = response.data[0]['purchase'];
                    sessionStorage.setItem('Purchase', Purchase);
                    this.setState({purchase: sessionStorage.getItem('Purchase'), loaderDiv: 'd-none', mainDiv: ''});

                }
            })
            .catch(error=>{
                cogoToast.error('Something Went Wrong!');
            })
        }
        else{
            this.setState({purchase: getSession, loaderDiv: 'd-none', mainDiv: ''});
        }
    }
    render(){
        return (
            <Fragment>
                 <Container className="TopSection">
                    <Row>
                        <Breadcrumb className=" shadow-sm w-100 bg-white mt-3">
                          <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                          <Breadcrumb.Item><Link to="/purchase">Purchase</Link></Breadcrumb.Item>
                        </Breadcrumb>
                    </Row>
                    <Row>
                        <Col className="mt-2" md={12} lg={12} sm={12} xs={12}>
                            <Card className={this.state.mainDiv}>
                                <Card.Body>
                                   {ReactHtmlParser(this.state.purchase)}
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Card>
                        <Card.Body className={this.state.loaderDiv}>
                             <div class="ph-item ">
                              <div class="ph-col-12">
                                <div class="ph-row">
                                    <div class="ph-col-12"></div>
                                    <div class="ph-col-12"></div>
                                    <div class="ph-col-12"></div>
                                    <div class="ph-col-12"></div>
                                    <div class="ph-col-12"></div>
                                    <div class="ph-col-12"></div>
                                    <div class="ph-col-12"></div>
                                    <div class="ph-col-12"></div>
                                    <div class="ph-col-12"></div>
                                    <div class="ph-col-12"></div>
                                    <div class="ph-col-12"></div>
                                    <div class="ph-col-12"></div>
                                    <div class="ph-col-12"></div>
                                </div>
                            </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Container>
            </Fragment>
        )
    }
}
export default Purchase;