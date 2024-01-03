/**
  @file
  @brief <Your brief here>
  <h4> SAS Macros </h4>
  @li load2.sas
**/
/*ejemplo para leer desde la web*/

%macro put2(path=);

    /*se debe cargar desde la web similar al put1 y realizar las validaciones pertinentes*/
    
    
    /*valido archivo entrante desde la web*/
    %load2(path=&path);
    %mend put2;