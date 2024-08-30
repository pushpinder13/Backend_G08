*MongoDB
Date-30/08/2024

-CRUD Operations.
-Query Parameters:-
-Commands:-
--> AND
--> OR 
--> NOT
--> NOR

Task1 : find Student who have age =22 or marks ==90.
db.Student.find({
    $or: [
      { age: 22 },
      { marks: 90 }
    ]
  })


Task2 : find Student who dont have age =22 or marks ==90.
  db.Student.find({
    $nor: [
      { age: 22 },
      { marks: 90 }
    ]
  })


  Task3 : find Student who dont have age =22 .
  db.Student.find({
    "age": { $not: { $eq: 22 } }
});

  Task4 : find Student who have age=22 and marks=90.
  db.Student.find({
    $and: [
        { "age": 22 },
        { "marks": 90 }
    ]
});

  //Task5: find element using exists= return data which matches query.
  db.Student.find({
    "age": { $exists: true }
});

 //Task5.1 :  exists using filter
 db.Student.find({
    "marks": { $exists: true, $gte: 90 }
});


 //Task6:find element using type= return data which matches query.
  db.Student.find({
    "marks": { $type: "int" }
});


//Task 2;
-->update command of curd operartions:-

--> update using updateone
db.Student.updateOne(
       { "age": 22 },
       { $set: { "marks": 95 } }
   );
   
   -->update using updateMany
   db.Student.updateMany(
     { "age": 22 },
     {
         $set: {
             "marks": 95,
             "city": "N"
         }
     }
 );
 -->update using replaceone
 db.Student.replaceOne(
     { "name": "Bob White" },
         {
         "name": "Bob",
         "age": 25,
         "marks": 90,
         "city": "San Francisco",
         "grade": "A"
     }
 );
 -->update using findOneAndUpdate
Chitkara> db.Student.findOneAndUpdate(
         { "name": "Bob"  },
         { $set: { "marks": 85 } }
     );

-->delete =>db.Deleted.findOneAndDelete({ "name": "Charlie Brown" });
db.Deleted.deleteMany({ "reason": "Account inactive" });
db.Deleted.deleteOne({ "name": "Bob White" });








