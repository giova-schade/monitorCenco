/**
  @file
  @brief <Your brief here>
  <h4> SAS Macros </h4>
    @li messagebe.sas

**/

libname FCST_STG '/sasshared/fcst_stage/';
%macro getConfig();
    proc sql;
        create table datos as select * from FCST_STG.ConfCargaInput;
    quit;
    %MESSAGEBE(e="",outds=work.status,estado=ok);

%mend getConfig;