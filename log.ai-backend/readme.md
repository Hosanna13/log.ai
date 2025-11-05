# log.ai

A reflection journal with AI-powered connection discovery. Write your thoughts, and let AI find patterns across your past reflections to help you see how your ideas connect and evolve over time. 

## Backend
Using ** MongoDB ** database, since it is a simple application.

### Collections
**Users Collection** 
- **id**: (ObjectId) unique identifier for the user
- **username**: (String) User's unique username 
- **email**: (String) User's email address 
- **passwordHash**: (String) Hashed password for security
- **createdAt**: (Date) timestamp of user creation 
- **updatedAt**: (Date) timestamp of last year update

**Notes Collection**
- **id**: (ObjectId) unique identifier for the user
- **userId**: (ObjectId) reference to the _id of the user, to indicate which user owns the note
- **Title**: (String) the title of the Note 
- **description**: (String) the content of the note
- **createdAt**: (Date) timestamp of the Note creation 
- **updatedAt**: (Date) timestamp of the last Note update 

### Visual Diagram 
+-------------------+      +-------------------+
|     users         |      |       Note        |
+-------------------+      +-------------------+
| _id (ObjectId)    |<-----| _id (ObjectId)    |
| username (String) |      | userId (ObjectId) |
| email (String)    |      | title (String)    |
| passwordHash (Str)|      | description (Str) |
| createdAt (Date)  |      | createdAt (Date)  |
| updatedAt (Date)  |      | updatedAt (Date)  |
+-------------------+      +-------------------+
                           
                           