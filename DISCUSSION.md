# Chris Ku - Solace Candidate Assignment

Hello Solace, thanks for the fun coding assignment.

Most of my efforts were learning tailwindcss / drizzle ORM. I love tailwindcss- I actually set up a [SMACSS](https://smacss.com/) system from scratch in a previous company, so I picked it up quickly.

I also had to take time making it look and feel good to use. This is of personal importance to me, so I took my time here. There's many things I'd still love to do, but I already went way over 2 hours so I'll write up my thoughts here.

### General

- I need much more tests. E2E test for front end, such as Selenium, React component logic tests, migration tests, endpoint logic test, API tests... so many unwritten tests. I simply ran out of time.
- More comments on utility functions would've been nice.

### Front end

- Glaringly, the table should be either paginated or a infinite-scroll - if my random-seed-generator code was set to 100,000 as the assignment suggested, we cannot simply display an ever-growing table.
  - The method I'd go with is an pagination, using query parameter to request a defined number of advocates from the back end. Assuming the list is returned with latest advocates added, the endpoint would accept a timestamp to return a list of requested number of advocates previous to the timestamp provided. (`/api/advocates?size=100&timestamp=xxxx)
- Search is fully front end, but it should be a back end feature considering the potential number of advocates. Using query parameters, we can add to the request parameters like `specialty`, `city`, etc. If url length becomes a problem (and it will with more complex specific searches), we can hash the parameters to be parsed in the back end.
  - Search bar is a good start, and adding filter buttons/dropdowns for various fields would make it more intuitive.
- I'd like to have added fonts that Solace uses.

### Security & Resiliency

- I'd like to add a rate limiter on the database to mitigate DoS/DDoS and service failure.
- Database replicas - read only databases and main database. Web service to even out requests through them, such as Nginx.

### performance

- Normalizing repeated data, such as city / degree, and connecting them using a foreign key would significantly lower the size of the db as it grows over time.
- Caching is sorely missed, considering users would query the same section of the database on app startup. I'd use Redis for this usecase.
- Indexing commonly searched-for data would be a large performance benefit.
