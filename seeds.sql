USE employeesDB;


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 1, 150);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Mike", "Chan", 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Ashley", "Rodriguez", 3, 250);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Kevin", "Tupik", 4);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Malia", "Brown", 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Sarah", "Lourd", 6, 350 );

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Tom", "Allen", 7);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tammer", "Galal", 8, 150);


INSERT INTO roles (id,title, salary, department_id) 
VALUES (001, "Sales Lead", 10 , 60);

INSERT INTO roles (id,title, salary, department_id) 
VALUES (002, "Salesperson", 80 , 60);

INSERT INTO roles (id,title, salary, department_id) 
VALUES (003, "Lead Engineer", 150 , 10);

INSERT INTO roles (id,title, salary, department_id) 
VALUES (004, "Software Engineer",120 , 10);

INSERT INTO roles (id,title, salary, department_id) 
VALUES (005, "Accountant", 125 , 20);

INSERT INTO roles (id,title, salary, department_id)
 VALUES (006, "Legal Team Lead", 250 , 40);

INSERT INTO roles (id,title, salary, department_id) 
VALUES (007, "Lawyer", 190 , 40);

INSERT INTO roles (id,title, salary, department_id) 
VALUES (001, "Software Engineer", 120 , 10);


INSERT INTO departments(id, department_name) values (10, "Engineering");
INSERT INTO departments(id, department_name) values (20, "Finances");
INSERT INTO departments(id, department_name) values (30, "Human Resources");
INSERT INTO departments(id, department_name) values (40, "Legal");
INSERT INTO departments(id, department_name) values (50, "Marketing");
INSERT INTO departments(id, department_name) values (60, "Sales");









