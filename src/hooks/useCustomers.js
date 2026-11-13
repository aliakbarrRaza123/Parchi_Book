import { useState } from 'react';
import { dummyCustomers } from '../data/dummyCustomers';

// Used ONLY by CustomersScreen: a custom hook does not share state automatically.
export function useCustomers() {
  const [customers, setCustomers] = useState(dummyCustomers);
  const [search, setSearch] = useState('');

  const query = search.trim().toLowerCase();
  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(query) ||
    customer.shopNo.toLowerCase().includes(query) ||
    customer.phone.includes(query)
  );

  // Total stays the same while searching: it is the total for ALL customers.
  let totalBalance = 0;
  for (const customer of customers) {
    totalBalance += customer.balance;
  }

  function addCustomer(name, shopNo, phone) {
    setCustomers((previous) => {
      let largestId = 0;
      for (const customer of previous) {
        largestId = Math.max(largestId, Number(customer.id));
      }
      const newCustomer = {
        id: String(largestId + 1), name: name.trim(), shopNo: shopNo.trim(),
        phone: phone.trim(), balance: 0,
      };
      return [...previous, newCustomer];
    });
    setSearch(''); // The newly added customer is visible even after a search.
  }

  return { customers, search, setSearch, filteredCustomers, totalBalance, addCustomer };
}
