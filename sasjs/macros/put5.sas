/**
  @file
  @brief <Your brief here>
  <h4> SAS Macros </h4>
  @li load5.sas
**/
/*ejemplo para leer desde la web*/

%macro put5(path=);

    /*se debe cargar desde la web similar al put1 y realizar las validaciones pertinentes*/
    
    
    /*valido archivo entrante desde la web*/
    %load5(path=&path);
    %mend put5;