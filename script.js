// Zadatak

var datum = new Date();
	//Deklariramo varijablu datum i pridodamo
	//joj vrijednost današnjeg datuma

var vrijeme = datum.getHours();
	//deklariramo varijablu vrijeme i pridamo
	//joj vrijednost sati - današnjeg dana
	
	vrijeme = 8;
	
	
if (vrijeme >= 19)
{
	alert("Dobra vecer. Vrijeme je za odmor.");
}
else if (vrijeme >=11)
{	
alert("Dobar dan! Spremni smo za nove zadatke.");
}
else
{
	alert(" Dobro jutro!");
}
