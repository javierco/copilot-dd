-- define a select statement to get all students enrolled in a course

select s.first_name, s.last_name, s.email, r.registration_date, r.registration_status
from courses.students s
join courses.registrations r on s.student_id = r.student_id
join courses.registration_items ri on r.registration_id = ri.registration_id
where ri.course_id = 1;

-- write an index to improve the performance of the query
create index idx_course_id on courses.registration_items (course_id);

-- define a table for student attendance to capture attendance by class
create table courses.attendance (
    attendance_id int identity(1,1) primary key,
    registration_id int not null,
    attendance_date date not null,
    attendance_status tinyint not null,
    -- Attendance status: 1 = Present; 2 = Absent; 3 = Late; 4 = Excused
    FOREIGN KEY (registration_id) REFERENCES courses.registrations (registration_id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- define a stored procedure to get course enrollment by location
create procedure courses.get_course_enrollment_by_location
    @location_id int
as
begin
    select c.course_id, c.course_name, count(r.registration_id) as enrollment_count
    from courses.courses c
    join courses.registration_items ri on c.course_id = ri.course_id
    join courses.registrations r on ri.registration_id = r.registration_id
    where c.location_id = @location_id
    group by c.course_id, c.course_name;
end;

CREATE PROCEDURE courses.get_instructor_details_by_location
    @instructor_id INT
AS
BEGIN
    SELECT i.instructor_id, i.instructor_name, l.location_id, l.location_name, c.course_id, c.course_name
    FROM courses.instructors i
    JOIN courses.locations l ON i.location_id = l.location_id
    JOIN courses.courses c ON i.instructor_id = c.instructor_id
    WHERE i.instructor_id = @instructor_id;
END;

select * 
from courses.registration 
where registration_date >= '2023-09-01' and registration_date < '2023-10-01';
