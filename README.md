# 3695 Final - Tristan Priestley - A01089705

Run `npm i` to install the required node modules, `npm start` to start the Apollo Server.

1. **Return all users**
```
query {
  users {
    id
    name
  }
}
```

2. **Return posts by category**
```
{
  postByCategory(category: "sports") {
    id
    topic
    body
    comments
    createdBy
  }
}
```

3. **Return a post by id**
```
{
  postById(id: 2) {
    category
    topic
    body
    comments
    createdBy
  }
}
```

4. **Create a post**
```
mutation {
    createPost(id: 4, topic:"Went surfing", 
      category:"recreation", body:"The waves were great!",
    	createdBy:"Tristan"){
        id
        topic
    		category
        body
        createdBy
    }
}
```

5. **Create a comment**
```
mutation {
    createComment(id: 5, parentId:"3",
      body:"That looks great!",
    	createdBy:"Tristan"){
        id
    		parentId
        body
        createdBy
    }
}
```

6. **Create a response**
```
mutation {
    createResponse(id: 5,
      responses:"That looks great!"){
        id
    		responses
    }
}
```