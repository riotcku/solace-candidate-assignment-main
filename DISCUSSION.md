security
- separate env files for dev / stage / production
- rate limiter
- 

performance
- Since most requests are queries and not transactions, if we find many concurrent requests, use postgres Pool instead of Client 
- I wanted to implement versioned migrations, which led me to using Umzug as a migration tool. Since drizzle is not compatible with the sequelizer of Umzug, I created a local database that keeps track of the migrations. This could've been avoided if I rewrote the db to use prisma as its ORM.
- Of course, caching is sorely missed with a setup where we filter using direct queries to the db. I'd use Redis for ease of use with the Node.js back end.