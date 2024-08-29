*MongoDB
Date-29/08/2024

-CRUD Operations.
-Commands:-
-->Checking if student exists :-

1.--> db.Student.find({
    "age": 22,
    "marks": 90
});

2.--> db.Student.find({
    "marks": { $gte: 80 },
    "age": { $gte: 18 }
});

3.--> db.Student.find({
    "grade": "A++"
});

