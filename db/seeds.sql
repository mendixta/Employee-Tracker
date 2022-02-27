USE employees_db;

INSERT INTO departments (department_name)
VALUES ("Sales"),
       ("Engineering"),
       ("Legal"),
       ("Web Development"),
       ("Film");

INSERT INTO roles (title, salary, department_id) 
VALUES  ("Sales Lead", 90000, 1),
        ("Sales Assistant", 40000, 1),
        ("Aerospace Engineer", 200000, 2),
        ("Civil Engineer", 150000, 2),
        ("Lawyer", 150000, 3),
        ("Entry Web Developer", 60000, 4),
        ("Senior Web Developer", 130000, 4),
        ("Junior Web Developer", 80000, 4),
        ("Director", 100000, 5),
        ("Camera Man", 60000, 5);


INSERT INTO employee_data (first_name, last_name, role_id, manager_id)
VALUES ("Norman", "Osborn", 1, null),
       ("Otto", "Octavius", 2, null),
       ("Peter", "Parker", 5, 4),
       ("Eddie", "Brock", 5, null),
       ("Hughie", "Campbell", 5, 4),
       ("Annie", "January", 1, 7 ),
       ("Wanda", "Maximoff", 1, null ),
       ("Harry", "Osborn", 1, 1),
       ("Gwen", "Stacy", 3, null),
       ("Curtis", "Connors", 2, 2);

