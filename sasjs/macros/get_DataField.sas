/**
  @file
  @brief <Your brief here>
  <h4> SAS Macros </h4>
  @li messagebe.sas
  @li load1.sas
  @li load4.sas
**/
%macro getDataField(name=);
    %put &name;
    libname FCST_STG '/sasshared/fcst_stage/';
    %local file name extencion urlDownload path;
    proc sql noprint ;
     select file , name, extencion, urlDownload, path , funcionload into :file , :name, :extencion, :urlDownload, :path , :funcionload
    from FCST_STG.ConfCargaInput where name = &name;
    quit;
    data _null_;
        funcionload="&funcionload";
        path ="&path";
        call symput('execute', cats(funcionload,'(path=',path,')'));
        run;
        %put &file [&name] &extencion &urlDownload &path --> [&execute];

    %&execute.;

%mend;