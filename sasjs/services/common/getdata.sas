/**
  @file getdata.sas
  @brief Get Data service - runs on app startup
  @details  This is always the first service called when the app is opened.

  <h4> SAS Macros </h4>
  

**/

/* this macro converts the JS input to a WORK table - work.areas */
%webout(FETCH);
%global  dtlog;
%let dtlog = %sysfunc(compress(%sysfunc(putn(%sysfunc(date()),yymmdd7.))))_%sysfunc(compress(%sysfunc(tranwrd(%sysfunc(putn(%sysfunc(time()),time.)),:,))));
proc printto log="/sasdata/opt/data/sas_psd/Procesos/logs/getdata&dtlog.log";
run;

proc sql;
create table springs as select *
  from mydb.springs
  where area in (select area from work.areas);

/* these macros open the JSON, send the table back, and close the JSON */
%webout(OPEN)
%webout(OBJ,springs)
%webout(CLOSE)
