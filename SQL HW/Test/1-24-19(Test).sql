-- Stored procedure to get count of all employees
create or replace function new_stored_proce(out ret_val bigint) 
	as $$ 
		begin
			select count(*) into ret_val from employee;
		end;
	$$ language plpgsql;
	
do $$
declare 
out_val bigint; 
begin
	select new_stored_proc() into out_val;
	insert into test_table values ('it worked', out_val);
end;
$$ language plpgsql

select  test_table;
create table test_table (field1 text, outVal int);

-- A stored procedure that updates employee first and last name 
create or replace function change_employee(e_id int, fname varchar, lname varchar) returns void as $$
	begin
		update employee set firstname=fname, lastname=lname where employeeid=e_id;
	end;
	$$ language plpgsql;

select * from employee;

create or replace function get_emps(e_id int) returns refcursor 
as $$
	declare 
	curs refcursor;
	begin
		open curs for select lastname, firstname from employee
		where employeeid < e_id;
		return curs;
	end;
	$$ language plpgsql;
	
do $$
declare 
	curs refcursor;
	emp record;
begin
	select get_emps(3) into curs;
	loop
		fetch curs into emp;
		exit when not found;
		insert into employee (lastname, firstname, employeeid)
		values ( (select lastname from emp), (select firstname from employee), ((select max(employeeid) from employee) + 1) );
	end loop;
end;
$$ language plpgsql;

create sequence employee_id_seq start 9;

drop function insertTrig() cascade;

select nextval('employee_id_seq');

insert into employee(lastname, firstname) values ('smith', 'james' );

select * from employee;

create or replace function insert_into_employee() 
returns trigger as $$
begin
	if(TG_OP = 'INSERT') then
	new.employeeid = (select nextval('employee_id_seq'));
	end if;
	return new;
end;
$$ language plpgsql;

create trigger employee_insert
	before insert on employee
	for each row
	execute procedure insert_into_employee();

