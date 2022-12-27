
const SideNav = () => {
    return (

        <div>

            <header>
                <h2 style={{
                    background: 'black',
                    color: 'white'
                }}>Welcome to EMS-Bank</h2>
            </header>

            <nav class="nav flex-column">
                <a class="nav-link active" aria-current="page" href="#">Amount Transfer</a>
                <a class="nav-link" href="#">Transaction History</a>
                <div class="dropdown">
                    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Transaction
                    </a>

                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Withdraw</a></li>
                        <li><a class="dropdown-item" href="#">Deposit</a></li>
                    </ul>
                </div>
                {/* <a class="nav-link" href="#">Transaction</a> */}
                {/* <a class="nav-link" href="#">Withdraw</a>
                <a class="nav-link" href="#">Deposit</a> */}
            </nav>
        </div>
    )


}

export default SideNav;