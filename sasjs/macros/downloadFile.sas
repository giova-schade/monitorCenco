/**
  @file
  @brief <Your brief here>
  <h4> SAS Macros </h4>
**/
%macro donwloadFile(path=); 
    %put ---->&path;
    data _null_; 
    length buffer $32767; 
    %let filepath = &path; /* Ruta del archivo a enviar, sin la extensión */ 
    /* Determinar la extensión del archivo */ 
    %let extension = %upcase(%scan(%qsysfunc(compbl(&filepath)), -1, .));
    infile "&filepath." recfm=n lrecl=32767; 
    file _webout recfm=n; 
    /* Establecer los encabezados del Content-type según la extensión del archivo */ 
    %if &extension = XLSX %then %do; 
    rc = stpsrv_header('Content-type','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'); 
    %end; 
    %else %if &extension = TXT %then %do; 
    rc = stpsrv_header('Content-type','text/plain'); 
    %end; 
    rc = stpsrv_header('Content-disposition', 'attachment; filename=' || scan("&filepath", -1, '/')); 
    do until (feof); 
    input buffer $char32767.; 
    put buffer $char32767.; 
    end; 
    run; 
    %mend donwloadFile; 
    