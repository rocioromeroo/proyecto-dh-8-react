import React from 'react';
	function NavItem(props) {

	return (

        
            <a class="nav-link collapsed" href="/">
                <i class="fas fa-fw fa-folder"></i>
                <span>{props.items}</span>
            </a>
        

    )
    }
    
    export default NavItem