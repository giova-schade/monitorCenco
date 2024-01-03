/**
  @file
  @brief <Your brief here>
  <h4> SAS Macros </h4>
  @li load1.sas
**/
/*ejemplo para leer desde la web*/

%macro put1(path=);

data datos;
    infile &_WEBIN_FILEREF dlm='|' missover dsd lrecl=32767;
    length
        Item_Id $20
        CATEGORIA1_ID $20
        CATEGORIA1_NIVEL_1 $50
        CATEGORIA1_NIVEL_2 $50
        CATEGORIA1_NIVEL_3 $50
        CATEGORIA1_NIVEL_4 $50
        CATEGORIA1_NIVEL_5 $50;
    input
        Item_Id
        CATEGORIA1_ID
        CATEGORIA1_NIVEL_1
        CATEGORIA1_NIVEL_2
        CATEGORIA1_NIVEL_3
        CATEGORIA1_NIVEL_4
        CATEGORIA1_NIVEL_5;
run;



/*valido archivo entrante desde la web*/
%load1(path=&path);
%mend put1;