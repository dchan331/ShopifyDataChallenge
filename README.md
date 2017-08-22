# ShopifyDataChallenge
Data Engineering challenge for Shopify Developer Intern - Winternship 2018 <br>

run <strong>npm start</strong> to check results

Steve and Barry spent <strong>$ 19.5</strong>

Inner Join 
``` Javascript
[
  {
    "cid": 1,
    "name": "Barry",
    "oid": 1,
    "customer_id": 1,
    "price": 2.5
  },
  {
    "cid": 3,
    "name": "Steve",
    "oid": 2,
    "customer_id": 3,
    "price": 5
  },
  {
    "cid": 3,
    "name": "Steve",
    "oid": 3,
    "customer_id": 3,
    "price": 2
  },
  {
    "cid": 2,
    "name": "Todd",
    "oid": 4,
    "customer_id": 2,
    "price": 2
  },
  {
    "cid": 5,
    "name": "Rodney",
    "oid": 6,
    "customer_id": 5,
    "price": 4
  },
  {
    "cid": 1,
    "name": "Barry",
    "oid": 7,
    "customer_id": 1,
    "price": 10
  }
]
```

The resulting inner join has an array with length of 6

Outer Join 
``` Javascript
[
  {
    "cid": 1,
    "name": "Barry",
    "oid": 1,
    "customer_id": 1,
    "price": 2.5
  },
  {
    "cid": 3,
    "name": "Steve",
    "oid": 2,
    "customer_id": 3,
    "price": 5
  },
  {
    "cid": 3,
    "name": "Steve",
    "found": true,
    "oid": 3,
    "customer_id": 3,
    "price": 2
  },
  {
    "cid": 2,
    "name": "Todd",
    "oid": 4,
    "customer_id": 2,
    "price": 2
  },
  {
    "cid": null,
    "name": null,
    "oid": 5,
    "customer_id": 6,
    "price": 3
  },
  {
    "cid": 5,
    "name": "Rodney",
    "oid": 6,
    "customer_id": 5,
    "price": 4
  },
  {
    "cid": 1,
    "name": "Barry",
    "found": true,
    "oid": 7,
    "customer_id": 1,
    "price": 10
  },
  {
    "cid": 4,
    "name": "Edward",
    "oid": null,
    "customer_id": null,
    "price": null
  }
]
```
The resulting outer join has an array with length of 8
