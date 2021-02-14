import product from '../assets/images/product_dummy.svg'
import React from 'react';
import Category from './Category'
import Metrics from './Metrics';
let style = {width: "25rem"}

let prueba = fetch("http://localhost:3001/api/products")
                .then((response) => {
                return response.json();
                })
                .then(function(resultado) {
                
                console.log(resultado)
                
                })

                console.log(prueba);
   
    

	function PageContent(props) {
    return (

        <div class="container-fluid">

            {/*<!-- Page Heading -->*/}
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">App Dashboard</h1>
            </div>

            { /*<!-- Content Row -->*/}
            <div class="row">

                { /*<!-- Amount of Products in DB -->*/}
                <Metrics titulo='Total de Produtos' cifra={props.prueba}/>

                {/*<!-- $$$ of all products in DB -->*/}
                <Metrics titulo='Total de Usuarios' cifra='135'/>

                {/* <div class="col-md-4 mb-4">
                    <div class="card border-left-success shadow h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-xs font-weight-bold text-success text-uppercase mb-1"> Amount in products</div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800">$546.456</div>
                                </div>
                                <div class="col-auto">
                                    <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                { /*<!-- Amount of users in DB -->*/}
                <Metrics titulo='Total de Categorias' cifra='135'/>

                {/* <div class="col-md-4 mb-4">
                    <div class="card border-left-warning shadow h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">Users quantity
                                    </div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800">38</div>
                                </div>
                                <div class="col-auto">
                                    <i class="fas fa-user-check fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>

            {/*<!-- Content Row -->*/}
            <div class="row">
                { /*<!-- Last Product in DB -->*/}
                <div class="col-lg-6 mb-4">
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Last product in Data Dase</h6>
                        </div>
                        <div class="card-body">
                            <div class="text-center">
                                <img class="img-fluid px-3 px-sm-4 mt-3 mb-4" style ={style} src={product} alt="image dummy" />
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?</p>
                            <a target="_blank" rel="nofollow" href="/">View product detail</a>
                        </div>
                    </div>
                </div>

                { /*<!-- Categories in DB -->*/}
                <div class="col-lg-6 mb-4">						
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
                        </div>
                        <div class="card-body">
                            <div class="row">

                                <Category category='Category 01'/>

                                <div class="col-lg-6 mb-4">
                                    <div class="card bg-info text-white shadow">
                                        <div class="card-body">
                                            Category 02
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-4">
                                    <div class="card bg-info text-white shadow">
                                        <div class="card-body">
                                            Category 03
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-4">
                                    <div class="card bg-info text-white shadow">
                                        <div class="card-body">
                                            Category 04
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-4">
                                    <div class="card bg-info text-white shadow">
                                        <div class="card-body">
                                            Category 05
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-4">
                                    <div class="card bg-info text-white shadow">
                                        <div class="card-body">
                                            Category 06
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
    }

    export default PageContent

