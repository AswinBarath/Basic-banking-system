import Cards from './Cards/Cards';
const Customers = ({ customers, onSelectCustomer, showDetails }) => {
    return (
        <div>
            {
                customers.map((customer, i) => {
                    return (
                        <Cards
                            name={customer.name}
                            email={customer.email}
                            balance={customer.balance}
                            onSelectCustomer={onSelectCustomer}
                            showDetails={showDetails}
                        />
                    );
                })
            }
        </div>
    );
}

export default Customers;