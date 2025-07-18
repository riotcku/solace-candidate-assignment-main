security
- separate env files for dev / stage / production
- rate limiter
- 

performance
- Since most requests are queries and not transactions, if we find many concurrent requests, use postgres Pool instead of Client 
- Of course, caching is sorely missed with a setup where we filter using direct queries to the db. I'd use Redis for ease of use with the Node.js back end.

notes