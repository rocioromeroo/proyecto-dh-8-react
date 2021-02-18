import React from 'react';

let productos = fetch("http://localhost:3001/api/products")

  .then((response) => { 
    
    return response.json(); 
  
  })

  .then((resultado) => { 
    
    console.log(resultado.meta.total);
  
  })

function Metrics() {

    return (

    <div class="col-md-4 mb-4">
        <div class="card border-left-primary shadow h-100 py-2">
            <div class="card-body">
                <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                        <div class="text-xs font-weight-bold text-primary text-uppercase mb-1"> Total de Productos </div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800"> {productos} </div>
                    </div>
                    <div class="col-auto">
                        <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )

}

export default Metrics