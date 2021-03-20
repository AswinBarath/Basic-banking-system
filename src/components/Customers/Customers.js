import Cards from './Cards/Cards';
const Customers = ({ customers, onSelectCustomer }) => {
    return (
        <div>
            {
                customers.map((customer, i) => {
                    return (
                        <Cards
                            id={customers[i].id}
                            name={customers[i].name}
                            email={customers[i].email}
                            balance={customers[i].balance}
                        />
                    );
                })
            }
        </div>
    );
}

export default Customers;