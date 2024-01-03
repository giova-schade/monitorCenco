/**
@file
@brief <Your brief here>
<h4> SAS Macros </h4>
**/
%macro load6(path=);

	data datos;
		infile "&path" dlm='|' missover dsd lrecl=32767;
		length Local $10;
		input Local $;
	run;

	/* these macros open the JSON, send the table back, and close the JSON */
	%MESSAGEBE(e="",outds=work.status,estado=ok);
	%webout(OPEN);
	%webout(OBJ,datos);
	%webout(OBJ,status);
	%webout(CLOSE);
%mend;