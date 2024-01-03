/**
  @file
  @brief tabla con mensaje SalidaWeb
  <h4> SAS Macros </h4>
**/

%macro MESSAGEBE(e=,outds=,estado=);

    data &outds;
        Estado = "&estado";
        array MESSAGE_{7} $1000 _TEMPORARY_ (&e.);
        drop n;

        do n = 1 to 1;
            MENSAJE = MESSAGE_{n};
            output;
        end;
      

        KEEP MENSAJE Estado;
    run;

%mend MESSAGEBE;