import React from 'react';
export class Header extends React.Component {

    render() {
        return (
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="#">EE SALES</a>
                    </div>
                    <ul class="nav navbar-nav">
                        <li class="active"><a href="/bakedItems">Baked Items</a></li>
                        <li class="active"><a href="/donations">Donations</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header;