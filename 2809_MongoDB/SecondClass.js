// 1. Find students with age equal to 22 and marks equal to 90
db.Student.find({
    "age": 22,
    "marks": 90
});

// 2. Find students with marks greater than or equal to 80 and age greater than or equal to 18
db.Student.find({
    "marks": { $gte: 80 },
    "age": { $gte: 18 }
});

// 3. Find students whose grades are "A++"
db.Student.find({
    "grade": "A++"
});

