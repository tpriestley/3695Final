**Tristan Priestley**
**A01089705**
Midterm for 3695 October 2020
BCIT

1.	GraphQL first design can aide the front-end team by only fetching the data that is needed. The front-end team does not need to worry about how the data needs to be fetched, they can simply focus on what data is needed for their clients. It is also an improved developer experience for the front-end team since they can do things like adding new data requirements without the tedious need to create a new REST endpoint.

2.	The ability to pass multiple arguments with a query allows for more compact/streamlined code as you can retrieve all the data you need with a single query. In a REST API, you are only able to pass a single set of arguments (the query parameters and URL segment), meaning you would need several queries to return the needed data. With GraphQL, multiple arguments can be passed in a single query, allowing for a single query/response pair to capture all the needed data.

    The following example query shows that a single request with multiple arguments can be used to return **not only** the *names* of all the *characters*, but the *weapons* and *parties* as well. 
    ```
    query {
      characters {
        name
        weapon
        parties
      }
    }
    ```

3.	GraphQL was initially developed internally by Facebook in 2012 before being released to the public in 2015. In 2018, GraphQL was moved to the GraphQL Foundation, which was hosted by the Linux Foundation. GraphQL wanted to address a common problem with REST APIs and that is over-fetching and under-fetching. In a typical REST API, the user may need several GET requests and those requests may return some unneeded data as well. GraphQL addresses this by allowing clients to receive all the specific data they need, in one request.

4.	The *errors* entry will be present in the JSON response if any errors were encountered. The *errors* entry will contain a *message* key which contains a string description of the error so the developer can understand and correct it. The response will also contain a *locations* key which is an array with *line* and *column* objects to display where each error occured.

5.	Introspection allows the developer to query GraphQL about the schema configuration. For example, one could use `{ __schema { types { name }}}` to return the names of all the types that are available in the schema. It can also be used to return information about specific objects. For example, 
`
{ __type(name: “Barbarian”) { name fields { name type { name kind }}}}
`
would return all the fields that were defined for the Barbarian object.
Introspection is a very useful tool when you are working on an unfamiliar/complex schema or object and would like a quick way to refresh your memory.
